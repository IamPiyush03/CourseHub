import { updateCourseLikes } from '../redux/actions/courseActions';


export const setupRealTimeUpdates = (dispatch) => {

  setInterval(() => {

    const courseId = String(Math.floor(Math.random() * 6) + 1);
    

    const likesChange = Math.floor(Math.random() * 8) - 2;
    

    const coursesData = require('./api').coursesData;
    const course = coursesData.find(c => c.id === courseId);
    
    if (course) {
      
      const newLikes = Math.max(0, course.likes + likesChange);
      course.likes = newLikes;
      dispatch(updateCourseLikes(courseId, newLikes));
    }
  }, 5000); 
};