export default function CourseCard({
  code,
  title,
  credits,
  level,
  completed,
  instructor,
}) {
  return (
    <article className="card">
      <span className="code">{code}</span>

      <h3>{title}</h3>

      <p className="meta">{credits} credits</p>

      <p>
        <span className={`badge level-${level.toLowerCase()}`}>
          {level}
        </span>
      </p>

      <p className="meta">Instructor: {instructor}</p>

      <span className={completed ? 'badge done' : 'badge todo'}>
        {completed ? 'Completed' : 'In progress'}
      </span>
    </article>
  )
}