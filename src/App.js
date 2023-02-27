import React, {  useState } from "react"
import './App.css';

const App = () => {
  const [zodiac, setzodiac] = useState([]);
  const [time, settime] = useState("today");
  const [sign, setsign] = useState("Aries");
  const color=""


  const getzodiac = async () => {
    const link = "https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=" + sign + "&day=" + time;
    const options = {
      method: 'POST',
      headers: {
        'X-RapidAPI-Key': '0255c803a7mshec88addc3c6a746p144809jsnc0847d7789dc',
        'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com'
      }
    };

    const response = await fetch(link, options);
    const data = await response.json()
    //console.log(data)
     setzodiac(data)
  }


  function start() {
    getzodiac();
  }


  const handleChange = (e) => {
    settime(e.target.value);
  };

  const handleChangesign = (e) => {
    setsign(e.target.value)
  }

  return (
    <div>
      <h1>zodiac signs</h1>
      <h5>time</h5>
      <select value={time} onChange={handleChange}>
        <option value="tomorrow">tomorrow</option>
        <option value="today">today</option>
        <option value="yesterday">yesterday</option>
      </select>

      <h5>signs</h5>
      <select value={sign} onChange={handleChangesign}>
        <option value="Aries">Aries</option>
        <option value="Taurus">Taurus</option>
        <option value="Gemini" >Gemini</option>
        <option value="Leo">Leo</option>
        <option value="Virgo">Virgo</option>
        <option value="Libra">Libra</option>
        <option value="Scorpio">Scorpio</option>
        <option value="Sagittarius">Sagittarius</option>
        <option value="Capricorn">Capricorn</option>
        <option value="Aquarius">Aquarius</option>
        <option value="Pisces">Pisces</option>
      </select>
      <p>{`You selected ${sign} and ${time}` }</p>

      <button onClick={start}>get my sign</button>

      <p>{zodiac.color}</p>
      <p>{zodiac.compatibility}</p>
      <p>{zodiac.current_date}</p>
      <p>{zodiac.date_range}</p>
      <p>{zodiac.description}</p>
      <p>{zodiac.lucky_number}</p>
      <p>{zodiac.lucky_time}</p>
      <p>{zodiac.mood}</p>

    </div>
  )
};
export default App;
