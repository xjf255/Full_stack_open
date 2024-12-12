const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content partCourse={course.parts} />
      <Total partCourse={course.parts} />
    </div>
  )
}

export default App

const Header = ({ course }) => <h1>{course}</h1>
const Part = ({ part, exercises }) => <p>{part} {exercises}</p>
const Total = ({ partCourse }) => <p>Number of exercises {partCourse.reduce((acum, el) => acum + el.exercises, 0)}</p>
const Content = ({ partCourse }) => {
  return (
    <>
      {partCourse.map(el => <Part exercises={el.exercises} key={el.name} part={el.name} />)}
    </>
  )
}
