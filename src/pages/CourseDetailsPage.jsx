import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseDetails } from "../redux/actions/courseActions";
import SyllabusItem from "../components/SyllabusItem";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CircularProgress,
  Chip,
  Box,
} from "@mui/material";

const CourseDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedCourse, loading, error } = useSelector(
    (state) => state.courses
  );

  useEffect(() => {
    dispatch(fetchCourseDetails(id));
  }, [dispatch, id]);

  if (loading)
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );

  if (error) return <Typography color="error">Error: {error}</Typography>;
  if (!selectedCourse) return <Typography>No course found</Typography>;

  return (
    <Card sx={{ maxWidth: 800, mx: "auto", mt: 4, p: 3 }}>
      <Button component={Link} to="/" variant="contained" sx={{ mb: 2 }}>
        ← Back to Courses
      </Button>

      <Typography variant="h4">{selectedCourse.name}</Typography>
      <Typography variant="subtitle1" color="text.secondary">
        Instructor: {selectedCourse.instructor}
      </Typography>

      <Chip
        label={selectedCourse.enrollmentStatus}
        color={
          selectedCourse.enrollmentStatus === "Open"
            ? "success"
            : selectedCourse.enrollmentStatus === "Closed"
            ? "error"
            : "warning"
        }
        sx={{ mt: 1 }}
      />

      <CardContent>
        <Typography variant="h6">Course Description</Typography>
        <Typography>{selectedCourse.description}</Typography>

        <Typography variant="h6" mt={2}>
          Course Details
        </Typography>
        <Typography>
          <strong>Duration:</strong> {selectedCourse.duration}
        </Typography>
        <Typography>
          <strong>Schedule:</strong> {selectedCourse.schedule}
        </Typography>
        <Typography>
          <strong>Location:</strong> {selectedCourse.location}
        </Typography>

        <Typography variant="h6" mt={2}>
          Prerequisites
        </Typography>
        <ul>
          {selectedCourse.prerequisites?.map((prereq, index) => (
            <li key={index}>
              <Typography>{prereq}</Typography>
            </li>
          ))}
        </ul>

        <Typography variant="h6" mt={2}>
          Syllabus
        </Typography>
        {selectedCourse.syllabus?.map((item) => (
          <SyllabusItem
            key={item.week}
            week={item.week}
            topic={item.topic}
            content={item.content}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default CourseDetailsPage;
