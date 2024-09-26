import { appendFile } from 'fs'
import { join } from 'path'

export async function addWeatherData({
  temperature,
  humidity
}: {
  temperature: string
  humidity: string
}): Promise<void> {
  const route = join(__dirname, '../../files', '/weatherData.txt')
  const content =
    `Temperature: ${temperature} °C, Humidity: ${humidity} %. Current date and time: ${new Date()}` +
    '\n'
  await appendFile(route, content, (err) => {
    if (err) {
      console.log(err)
    }
  })
}
