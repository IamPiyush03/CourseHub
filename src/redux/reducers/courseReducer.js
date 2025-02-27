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
} from '../actions/actionTypes';

const initialState = {
  courses: [],
  enrolledCourses: [],
  selectedCourse: null,
  loading: false,
  error: null
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
      
    case FETCH_COURSES_SUCCESS:
      console.log("Reducer received courses:", action.payload); // Debug log
      return {
        ...state,
        loading: false,
        courses: action.payload
      };
      
    case FETCH_COURSES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
      
    case FETCH_COURSE_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
      
    case FETCH_COURSE_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedCourse: action.payload
      };
      
    case FETCH_COURSE_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
      
    case ENROLL_IN_COURSE: {
      const courseId = action.payload;
      const courseToEnroll = state.courses.find(course => course.id === courseId);
      
      // Check if already enrolled
      if (state.enrolledCourses.some(course => course.id === courseId)) {
        return state;
      }
      
      // Add to enrolled courses with progress tracking
      const enrolledCourse = {
        ...courseToEnroll,
        progress: 0,
        dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString() 
      };
      
      return {
        ...state,
        enrolledCourses: [...state.enrolledCourses, enrolledCourse]
      };
    }
      
    case MARK_COURSE_AS_COMPLETED: {
      const courseId = action.payload;
      
      return {
        ...state,
        enrolledCourses: state.enrolledCourses.map(course => 
          course.id === courseId
            ? { ...course, progress: 100 }
            : course
        )
      };
    }
      
    case UPDATE_COURSE_LIKES: {
      const { courseId, likes } = action.payload;
      
      return {
        ...state,
        courses: state.courses.map(course => 
          course.id === courseId
            ? { ...course, likes }
            : course
        ),
        enrolledCourses: state.enrolledCourses.map(course => 
          course.id === courseId
            ? { ...course, likes }
            : course
        ),

        selectedCourse: state.selectedCourse && state.selectedCourse.id === courseId
          ? { ...state.selectedCourse, likes }
          : state.selectedCourse
      };
    }
      
    default:
      return state;
  }
};

export default courseReducer;