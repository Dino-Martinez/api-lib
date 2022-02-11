function getWeather(apiKey, zip) {
  const units = 'imperial'
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
  return fetch(path)
    .then(res => res.json())
    .catch(err => console.log(err.message))
}
