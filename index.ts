// Define an interface to typecheck my Geo: {lat, lon} object shape
interface Geography { [key: string]: string }

const basePath:string = 'api.openweathermap.org/data/2.5/weather?'

async function getWeather(apiKey:string, zip:number, units:string='imperial'):Promise<any> {
  const path:string = `${basePath}zip=${zip}&appid=${apiKey}&units=${units}`
  const res:Response = await fetch(path)
  return await res.json()
}

async function getWeatherByCityName(apiKey:string, city:string, units:string='imperial'):Promise<any> {
  const path:string = `${basePath}q=${city}&appid=${apiKey}&units=${units}`
  const res:Response = await fetch(path)
  return await res.json()
}

async function getWeatherByCityID(apiKey:string, city:string, units:string='imperial'):Promise<any> {
  const path:string = `${basePath}id=${city}&appid=${apiKey}&units=${units}`
  const res:Response = await fetch(path)
  return await res.json()
}

async function getWeatherByGeo(apiKey:string, geo:Geography, units:string='imperial'):Promise<any> {
  const path:string = `${basePath}lat=${geo.lat}&lon=${geo.lon}&appid=${apiKey}&units=${units}`
  const res:Response = await fetch(path)
  return await res.json()
}
