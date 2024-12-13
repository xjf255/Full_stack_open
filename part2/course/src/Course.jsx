export const Course = ({ course }) => {

  const totalValue = course.parts.reduce((accum, currentValue) => accum + currentValue.exercises, 0)
  
  return (
    <>
      <Header text={course.name} />
      <Content info={course.parts} />
      <strong>
        total of {totalValue} exercises
      </strong>
    </>
  )
}

const Header = ({ text }) => <h2>{text}</h2>

const Content = ({ info }) => {
  return (
    <>
      {info.map(el => (
        <Part name={el.name} exercise={el.exercises} key={el.id} />
      ))}
    </>
  )
}

const Part = ({ name, exercise }) => <p>{name} {exercise}</p>