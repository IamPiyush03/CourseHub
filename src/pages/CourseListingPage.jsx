import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../redux/actions/courseActions";
import CourseCard from "../components/CourseCard";
import SearchBar from "../components/SearchBar";
import {
  Container,
  Typography,
  CircularProgress,
  Grid,
  Box,
} from "@mui/material";

const CourseListingPage = () => {
  const dispatch = useDispatch();
  const { courses, loading, error } = useSelector((state) => state.courses);
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  useEffect(() => {
    setFilteredCourses(courses);
  }, [courses]);

  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setFilteredCourses(courses);
      return;
    }

    const filtered = courses.filter(
      (course) =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredCourses(filtered);
  };

  if (loading)
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );

  if (error) return <Typography color="error">Error: {error}</Typography>;

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4">Available Courses</Typography>
      <SearchBar onSearch={handleSearch} />

      {filteredCourses.length === 0 ? (
        <Typography>No courses found. Try a different search term.</Typography>
      ) : (
        <Grid container spacing={3} mt={2}>
          {filteredCourses.map((course) => (
            <Grid item xs={12} sm={6} md={4} key={course.id}>
              <CourseCard course={course} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default CourseListingPage;
