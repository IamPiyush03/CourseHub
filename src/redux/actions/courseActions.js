import {
  FETCH_COURSES_REQUEST,
  FETCH_COURSES_SUCCESS,
  FETCH_COURSES_FAILURE,
  FETCH_COURSE_DETAILS_REQUEST,
  FETCH_COURSE_DETAILS_SUCCESS,
  FETCH_COURSE_DETAILS_FAILURE,
  ENROLL_IN_COURSE,
  MARK_COURSE_AS_COMPLETED,
  UPDATE_COURSE_LIKES
} from './actionTypes';
import { fetchCoursesAPI, fetchCourseDetailsAPI } from '../../services/api';
import { setupRealTimeUpdates } from '../../services/firebase';

// Action to fetch all courses
export const fetchCourses = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_COURSES_REQUEST });
    
    try {
      const courses = await fetchCoursesAPI();
      console.log("Fetched courses:", courses); // Debug log
      
      dispatch({ 
        type: FETCH_COURSES_SUCCESS, 
        payload: courses 
      });
      
      setupRealTimeUpdates(dispatch);
      
    } catch (error) {
      console.error("Error fetching courses:", error); // Debug log
      
      dispatch({ 
        type: FETCH_COURSES_FAILURE, 
        payload: error.message 
      });
    }
  };
};

// Action to fetch details of a specific course
export const fetchCourseDetails = (courseId) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_COURSE_DETAILS_REQUEST });
    
    try {
      const courseDetails = await fetchCourseDetailsAPI(courseId);
      dispatch({ 
        type: FETCH_COURSE_DETAILS_SUCCESS, 
        payload: courseDetails 
      });
      
    } catch (error) {
      dispatch({ 
        type: FETCH_COURSE_DETAILS_FAILURE, 
        payload: error.message 
      });
    }
  };
};

// Action to enroll in a course
export const enrollInCourse = (courseId) => {
  return {
    type: ENROLL_IN_COURSE,
    payload: courseId
  };
};

// Action to mark a course as completed
export const markCourseAsCompleted = (courseId) => {
  return {
    type: MARK_COURSE_AS_COMPLETED,
    payload: courseId
  };
};

// Action to update course likes (triggered by real-time updates)
export const updateCourseLikes = (courseId, likes) => {
  return {
    type: UPDATE_COURSE_LIKES,
    payload: { courseId, likes }
  };
};