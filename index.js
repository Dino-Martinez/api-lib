const basePath = 'api.openweathermap.org/data/2.5/weather?'

async function getWeather(apiKey, zip, units='imperial') {
  const path = `${basePath}zip=${zip}&appid=${apiKey}&units=${units}`
  const res = await fetch(path)
  return await res.json()
}

async function getWeatherByCityName(apiKey, city, units='imperial') {
  const path = `${basePath}q=${city}&appid=${apiKey}&units=${units}`
  const res = await fetch(path)
  return await res.json()
}

async function getWeatherByCityID(apiKey, city, units='imperial') {
  const path = `${basePath}id=${city}&appid=${apiKey}&units=${units}`
  const res = await fetch(path)
  return await res.json()
}

async function getWeatherByGeo(apiKey, geo, units='imperial') {
  const path = `${basePath}lat=${geo.lat}&lon=${geo.lon}&appid=${apiKey}&units=${units}`
  const res = await fetch(path)
  return await res.json()
}
