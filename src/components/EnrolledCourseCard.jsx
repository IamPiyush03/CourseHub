import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { markCourseAsCompleted } from '../redux/actions/courseActions';
import { Card, CardContent, Typography, Button, LinearProgress, Box } from '@mui/material';

const EnrolledCourseCard = ({ course }) => {
  const dispatch = useDispatch();

  const handleMarkCompleted = () => {
    dispatch(markCourseAsCompleted(course.id));
  };

  return (
    <Card sx={{ maxWidth: 400, borderRadius: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          <Link to={`/course/${course.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            {course.name}
          </Link>
        </Typography>
        <Typography variant="body2" color="textSecondary">Instructor: {course.instructor}</Typography>
        <Typography variant="body2" color="textSecondary">Due: {course.dueDate}</Typography>
        <Box mt={2}>
          <Typography variant="body2">Progress: {course.progress}%</Typography>
          <LinearProgress variant="determinate" value={course.progress} sx={{ height: 8, borderRadius: 5 }} />
        </Box>
        <Box mt={2} display="flex" justifyContent="flex-end">
          <Button
            variant="contained"
            color="success"
            onClick={handleMarkCompleted}
            disabled={course.progress === 100}
          >
            {course.progress === 100 ? 'Completed' : 'Mark as Completed'}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default EnrolledCourseCard;
