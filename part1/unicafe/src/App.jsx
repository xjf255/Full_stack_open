import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h2>give feedback</h2>
      <Btn handleClick={() => setGood(prev => prev + 1)} txt={"good"} />
      <Btn handleClick={() => setNeutral(prev => prev + 1)} txt={"Neutral"} />
      <Btn handleClick={() => setBad(prev => prev + 1)} txt={"Bad"} />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </>
  )
}

const Btn = ({ handleClick, txt }) => <button onClick={handleClick}>{txt}</button>

const Statistics = ({ good, neutral, bad }) => {
  let all = good + neutral + bad
  return (
    <>
      <h2>statistics</h2>
      {all !== 0 && <table>
        <tbody>
          <StatisticsLine text={"good"} value={good} />
          <StatisticsLine text={"neutral"} value={neutral} />
          <StatisticsLine text={"bad"} value={bad} />
          <StatisticsLine text={"all"} value={all} />
          <StatisticsLine text={"average"} value={(good - bad) / all} />
          <StatisticsLine text={"positive"} value={`${(good / all) * 100} %`} />
        </tbody>
      </table>}
      {all === 0 && <p>No feedback given</p>}
    </>
  )
}

const StatisticsLine = ({ text, value }) => <tr><td>{text}</td><td>{value}</td></tr>

export default App