import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { enrollInCourse } from "../redux/actions/courseActions";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const CourseCard = ({ course }) => {
  const dispatch = useDispatch();
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleEnroll = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(enrollInCourse(course.id));
    setIsEnrolled(true); // Change button to "Enrolled"
    setOpenSnackbar(true); // Show success message
  };

  return (
    <>
      <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3 }}>
        <Link
          to={`/course/${course.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <CardMedia
            component="img"
            height="180"
            image={course.thumbnail}
            alt={course.name}
          />
          <CardContent>
            <Typography variant="h6" fontWeight="bold">
              {course.name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Instructor: {course.instructor}
            </Typography>
            <Box display="flex" alignItems="center" justifyContent="space-between" mt={1}>
              <Box display="flex" alignItems="center">
                <FavoriteIcon color="error" sx={{ mr: 0.5 }} />
                <Typography variant="body2">{course.likes}</Typography>
              </Box>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: isEnrolled ? "green" : "primary.main",
                  "&:hover": { backgroundColor: isEnrolled ? "green" : "primary.dark" },
                }}
                disabled={isEnrolled} // Prevent multiple enrollments
                onClick={handleEnroll}
              >
                {isEnrolled ? "Enrolled" : "Enroll"}
              </Button>
            </Box>
          </CardContent>
        </Link>
      </Card>

      {/* Snackbar for success message */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2500}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Successfully enrolled in {course.name}!
        </Alert>
      </Snackbar>
    </>
  );
};

export default CourseCard;
