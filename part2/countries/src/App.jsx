import axios from "axios"
import { useEffect, useState } from "react"

function App() {
  const [countrie, setCountrie] = useState('')
  const [data, setData] = useState(null)
  const handleChange = (e) => {
    setCountrie(e.target.value)
  }

  useEffect(() => {
    if (countrie === '') {
      setData([]);
    } else {
      axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${countrie}`)
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }, [countrie]);

  return (
    <>
      find countries
      <input type="text" onChange={handleChange} />
      {data !== null && <>
        <h2>{data?.name?.common}</h2>
        <img src={data?.flags?.png} alt="flag" />
      </>}
    </>
  )
}

export default App
