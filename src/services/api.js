// Mock API service for course data

// Sample course data
const coursesData = [
  {
    id: '1',
    name: 'Introduction to React',
    instructor: 'John Doe',
    description: 'Learn the fundamentals of React, including components, state, props, and hooks. This course is designed for beginners who want to start building modern web applications.',
    enrollmentStatus: 'Open',
    thumbnail: 'https://via.placeholder.com/300x180?text=React+Course',
    duration: '8 weeks',
    schedule: 'Tuesdays and Thursdays, 7:00 PM - 9:00 PM',
    location: 'Online',
    prerequisites: ['Basic HTML', 'Basic CSS', 'JavaScript fundamentals'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to React and JSX',
        content: 'Overview of React, Virtual DOM, Setting up a React project, JSX syntax and expressions.'
      },
      {
        week: 2,
        topic: 'Components and Props',
        content: 'Functional and class components, component composition, passing and using props.'
      },
      {
        week: 3,
        topic: 'State and Lifecycle',
        content: 'Understanding component state, setState, component lifecycle methods.'
      },
      {
        week: 4,
        topic: 'Handling Events and Forms',
        content: 'Event handling in React, controlled components, form submission.'
      },
      {
        week: 5,
        topic: 'Hooks',
        content: 'useState, useEffect, custom hooks, rules of hooks.'
      },
      {
        week: 6,
        topic: 'Routing with React Router',
        content: 'Setting up routes, navigation, route parameters, nested routes.'
      },
      {
        week: 7,
        topic: 'State Management with Redux',
        content: 'Redux principles, actions, reducers, store, connecting React with Redux.'
      },
      {
        week: 8,
        topic: 'Final Project',
        content: 'Building a complete React application using all the concepts learned.'
      }
    ],
    likes: 156
  },
  {
    id: '2',
    name: 'Advanced JavaScript',
    instructor: 'Jane Smith',
    description: 'Deep dive into advanced JavaScript concepts including closures, prototypes, async programming, and modern ES6+ features.',
    enrollmentStatus: 'Closed',
    thumbnail: 'https://via.placeholder.com/300x180?text=JavaScript+Course',
    duration: '6 weeks',
    schedule: 'Mondays and Wednesdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['Solid understanding of JavaScript basics', 'Experience with web development'],
    syllabus: [
      {
        week: 1,
        topic: 'JavaScript Fundamentals Review',
        content: 'Variables, data types, operators, control structures, functions.'
      },
      {
        week: 2,
        topic: 'Closures and Scope',
        content: 'Lexical scope, closures, practical applications of closures.'
      },
      {
        week: 3,
        topic: 'Prototypes and Inheritance',
        content: 'Prototype chain, inheritance patterns, ES6 classes.'
      },
      {
        week: 4,
        topic: 'Asynchronous JavaScript',
        content: 'Callbacks, promises, async/await, error handling.'
      },
      {
        week: 5,
        topic: 'Modern JavaScript Features',
        content: 'Arrow functions, destructuring, spread/rest operators, modules.'
      },
      {
        week: 6,
        topic: 'Advanced Patterns',
        content: 'Design patterns in JavaScript, functional programming concepts.'
      }
    ],
    likes: 98
  },
  {
    id: '3',
    name: 'Full Stack Web Development',
    instructor: 'Michael Johnson',
    description: 'Comprehensive course covering both frontend and backend development. Learn to build complete web applications from scratch.',
    enrollmentStatus: 'In Progress',
    thumbnail: 'https://via.placeholder.com/300x180?text=Full+Stack+Course',
    duration: '12 weeks',
    schedule: 'Saturdays, 10:00 AM - 2:00 PM',
    location: 'Hybrid (Online and In-person)',
    prerequisites: ['HTML/CSS', 'JavaScript basics', 'Command line fundamentals'],
    syllabus: [
      {
        week: 1,
        topic: 'Web Development Overview',
        content: 'Internet fundamentals, client-server model, web technologies overview.'
      },
      {
        week: 2,
        topic: 'Frontend Basics',
        content: 'HTML5 semantics, CSS3 features, responsive design principles.'
      },
      {
        week: 3,
        topic: 'JavaScript for the Browser',
        content: 'DOM manipulation, event handling, AJAX and fetch API.'
      },
      {
        week: 4,
        topic: 'Frontend Frameworks',
        content: 'Introduction to React, components, state management.'
      },
      {
        week: 5,
        topic: 'Backend Fundamentals',
        content: 'Server concepts, Node.js basics, Express framework.'
      },
      {
        week: 6,
        topic: 'RESTful API Development',
        content: 'REST principles, designing and implementing APIs, middleware.'
      },
      {
        week: 7,
        topic: 'Databases',
        content: 'SQL vs NoSQL, MongoDB, database design principles.'
      },
      {
        week: 8,
        topic: 'Authentication and Authorization',
        content: 'User authentication strategies, JWT, session management.'
      },
      {
        week: 9,
        topic: 'Deployment and DevOps',
        content: 'Hosting options, CI/CD pipelines, containerization basics.'
      },
      {
        week: 10,
        topic: 'Testing and Debugging',
        content: 'Unit testing, integration testing, debugging techniques.'
      },
      {
        week: 11,
        topic: 'Performance Optimization',
        content: 'Frontend and backend optimization strategies, caching.'
      },
      {
        week: 12,
        topic: 'Final Project',
        content: 'Building and deploying a full stack application.'
      }
    ],
    likes: 215
  },
  {
    id: '4',
    name: 'UI/UX Design Fundamentals',
    instructor: 'Sarah Williams',
    description: 'Learn the principles of user interface and user experience design. Create intuitive and visually appealing designs for web and mobile applications.',
    enrollmentStatus: 'Open',
    thumbnail: 'https://via.placeholder.com/300x180?text=UI/UX+Course',
    duration: '8 weeks',
    schedule: 'Fridays, 5:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['Basic design knowledge (helpful but not required)', 'No coding experience needed'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to UI/UX',
        content: 'Differences between UI and UX, design thinking process, user-centered design.'
      },
      {
        week: 2,
        topic: 'User Research',
        content: 'Research methods, user personas, empathy mapping, user journeys.'
      },
      {
        week: 3,
        topic: 'Information Architecture',
        content: 'Site mapping, content organization, navigation patterns.'
      },
      {
        week: 4,
        topic: 'Wireframing and Prototyping',
        content: 'Low and high-fidelity wireframes, interactive prototypes, tools overview.'
      },
      {
        week: 5,
        topic: 'Visual Design Principles',
        content: 'Color theory, typography, layout, visual hierarchy, responsive design.'
      },
      {
        week: 6,
        topic: 'Design Systems',
        content: 'Component libraries, style guides, design tokens, maintaining consistency.'
      },
      {
        week: 7,
        topic: 'Usability Testing',
        content: 'Testing methodologies, analyzing results, iterating designs.'
      },
      {
        week: 8,
        topic: 'Portfolio Project',
        content: 'Creating a complete UI/UX case study for your portfolio.'
      }
    ],
    likes: 178
  },
  {
    id: '5',
    name: 'Data Structures and Algorithms',
    instructor: 'Robert Chen',
    description: 'Master the fundamental data structures and algorithms essential for software development and technical interviews.',
    enrollmentStatus: 'Open',
    thumbnail: 'https://via.placeholder.com/300x180?text=DSA+Course',
    duration: '10 weeks',
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['Basic programming knowledge in any language', 'Understanding of variables, loops, and functions'],
    syllabus: [
      {
        week: 1,
        topic: 'Algorithm Analysis',
        content: 'Big O notation, time and space complexity, analyzing algorithms.'
      },
      {
        week: 2,
        topic: 'Arrays and Strings',
        content: 'Array operations, string manipulation, common problems and solutions.'
      },
      {
        week: 3,
        topic: 'Linked Lists',
        content: 'Singly and doubly linked lists, operations, implementation.'
      },
      {
        week: 4,
        topic: 'Stacks and Queues',
        content: 'Stack and queue operations, implementations, applications.'
      },
      {
        week: 5,
        topic: 'Trees and Graphs',
        content: 'Binary trees, BSTs, heaps, graph representations, traversals.'
      },
      {
        week: 6,
        topic: 'Searching and Sorting',
        content: 'Binary search, merge sort, quick sort, heap sort, counting sort.'
      },
      {
        week: 7,
        topic: 'Hash Tables',
        content: 'Hash functions, collision resolution, applications.'
      },
      {
        week: 8,
        topic: 'Dynamic Programming',
        content: 'Memoization, tabulation, common DP problems.'
      },
      {
        week: 9,
        topic: 'Greedy Algorithms',
        content: 'Greedy approach, activity selection, Huffman coding.'
      },
      {
        week: 10,
        topic: 'Advanced Topics',
        content: 'Trie, Union-Find, segment trees, interview strategies.'
      }
    ],
    likes: 132
  },
  {
    id: '6',
    name: 'Mobile App Development with React Native',
    instructor: 'Emily Zhang',
    description: 'Build cross-platform mobile applications using React Native. Learn to create native-like experiences for iOS and Android from a single codebase.',
    enrollmentStatus: 'Open',
    thumbnail: 'https://via.placeholder.com/300x180?text=React+Native+Course',
    duration: '9 weeks',
    schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
    location: 'Online',
    prerequisites: ['JavaScript fundamentals', 'React basics', 'ES6 features'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to React Native',
        content: 'Setting up the development environment, React Native vs React, project structure.'
      },
      {
        week: 2,
        topic: 'Core Components',
        content: 'View, Text, Image, ScrollView, FlatList, TextInput components.'
      },
      {
        week: 3,
        topic: 'Styling and Layout',
        content: 'Flexbox in React Native, StyleSheet API, responsive design.'
      },
      {
        week: 4,
        topic: 'Navigation',
        content: 'React Navigation, stack navigator, tab navigator, drawer navigator.'
      },
      {
        week: 5,
        topic: 'State Management',
        content: 'Context API, Redux, AsyncStorage for persistent data.'
      },
      {
        week: 6,
        topic: 'Native Modules',
        content: 'Camera, geolocation, push notifications, device APIs.'
      },
      {
        week: 7,
        topic: 'Networking',
        content: 'Fetch API, Axios, handling API requests, offline support.'
      },
      {
        week: 8,
        topic: 'Animations and Gestures',
        content: 'Animated API, gesture responder system, interactive components.'
      },
      {
        week: 9,
        topic: 'Deployment',
        content: 'Building for production, app store submission, CI/CD for mobile.'
      }
    ],
    likes: 145
  }
];

// Simulate API call to fetch all courses
export const fetchCoursesAPI = () => {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      resolve(coursesData);
    }, 500);
  });
};

// Simulate API call to fetch a specific course by ID
export const fetchCourseDetailsAPI = (courseId) => {
  return new Promise((resolve, reject) => {
    // Simulate network delay
    setTimeout(() => {
      const course = coursesData.find(course => course.id === courseId);
      
      if (course) {
        resolve(course);
      } else {
        reject(new Error('Course not found'));
      }
    }, 500);
  });
};