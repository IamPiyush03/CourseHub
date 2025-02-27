# CourseHub

A React application for showcasing courses, allowing users to browse, search, and enroll in courses, and track their progress through a student dashboard.

## 🚀 Live Demo
Check out the live demo: [CourseHub](https://course-hub.vercel.app/)

## 🎥 Demo Preview  
![CourseHub Demo](assets/demo.gif)

## 📋 Features

### Course Listing Page
- Browse all available courses
- Search courses by name or instructor
- View course details including instructor, likes, and enrollment status

### Course Details Page
- Comprehensive course information
- Expandable syllabus sections
- Course prerequisites
- Enrollment status indicator

### Student Dashboard
- View all enrolled courses
- Track progress with visual progress bars
- Mark courses as completed
- View course due dates

### State Management
- Redux for centralized state management
- Thunk middleware for handling asynchronous actions

## 🛠️ Technologies Used
- React
- Redux & Redux Thunk
- React Router
- Material UI
- JavaScript (ES6+)

## 🏗️ Project Structure
```
src/
├── components/         # Reusable UI components
├── pages/              # Main application pages
├── redux/              # Redux store, actions, and reducers
├── services/           # API and Firebase services
└── App.jsx             # Main application component
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm or yarn

### Installation
Clone the repository:
```bash
git clone https://github.com/iampiyush03/coursehub.git
cd coursehub
```

Install dependencies:
```bash
npm install
# or
yarn install
```

Start the development server:
```bash
npm run dev
# or
yarn dev
```

Open your browser and navigate to [http://localhost:5173](http://localhost:5173)

## 📱 Usage

### Browse Courses
- View all available courses on the home page
- Use the search bar to filter courses by name or instructor

### View Course Details
- Click on any course card to view detailed information
- See the syllabus, prerequisites, and other course information

### Enroll in Courses
- Click the "Enroll" button on any course card
- Receive confirmation of successful enrollment

### Track Progress
- Navigate to the Dashboard to view enrolled courses
- See progress bars for each course
- Mark courses as completed when finished

## 🧪 Implementation Details

### Course Listing
The application fetches course data from a mock API service and displays them in a responsive grid layout. Users can search for courses by name or instructor, with results updating in real-time.

### Course Details
When a user selects a course, the application fetches detailed information about that specific course. The details page presents comprehensive information including the syllabus in an expandable accordion format.

### Student Dashboard
The dashboard displays all courses the user has enrolled in, showing progress bars and due dates. Users can mark courses as completed, which updates the progress to 100%.

### State Management
Redux is used for state management with the following structure:
- Actions for fetching courses, course details, and managing enrollment
- Reducers for handling state updates
- Thunk middleware for asynchronous operations

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

---

Created as part of a React Developer Hiring Assignment.
