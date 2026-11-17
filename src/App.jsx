import Header from './components/Header.jsx'
import Section from './components/Section.jsx'
import CourseList from './components/CourseList.jsx'
import Footer from './components/Footer.jsx'
import { courses } from './data/courses.js'

export default function App() {
  const completedCourses = courses.filter((course) => course.completed)

  return (
    <main>
      <Header
        title="Study Hub"
        subtitle="Your courses in one place"
      />

      <Section title="My courses">
        <CourseList courses={courses} />
      </Section>

      <Section title="Completed courses">
        <CourseList courses={completedCourses} />
      </Section>

      <Footer totalCourses={courses.length} />
    </main>
  )
}