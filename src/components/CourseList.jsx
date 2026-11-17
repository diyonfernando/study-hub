import CourseCard from './CourseCard.jsx'

export default function CourseList({ courses }) {
  return (
    <div className="grid">
      {courses.map((course) => (
        <CourseCard
          key={course.code}
          code={course.code}
          title={course.title}
          credits={course.credits}
          level={course.level}
          completed={course.completed}
          instructor={course.instructor}
        />
      ))}
    </div>
  )
}