import { useSelector } from "react-redux";
import EnrolledCourseCard from "../components/EnrolledCourseCard";
import { Container, Typography, Paper, Grid, Box } from "@mui/material";

const StudentDashboard = () => {
  const { enrolledCourses } = useSelector((state) => state.courses);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" mb={3}>
        My Enrolled Courses
      </Typography>

      {enrolledCourses.length === 0 ? (
        <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
          <Typography>
            You are not enrolled in any courses yet. Browse the course catalog
            to enroll.
          </Typography>
        </Paper>
      ) : (
        <Grid container spacing={3}>
          {enrolledCourses.map((course) => (
            <Grid item xs={12} sm={6} md={4} key={course.id}>
              <EnrolledCourseCard course={course} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default StudentDashboard;
