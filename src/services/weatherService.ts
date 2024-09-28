import { writeFile, readFile } from 'fs'
import { join } from 'path'

export async function addWeatherData({
  temperature,
  humidity
}: {
  temperature: string
  humidity: string
}): Promise<void> {
  const route = join(__dirname, '../../files', '/weatherData.txt')
  const content = `{"temperature": ${temperature}, "humidity": ${humidity}}`

  await writeFile(route, content, (err) => {
    if (err) {
      console.log(err)
    }
  })
}

export async function getWeatherData(): Promise<string | undefined> {
  const route = join(__dirname, '../../files', '/weatherData.txt')

  return new Promise((resolve, reject) => {
    readFile(route, 'utf8', (err, data) => {
      if (err) {
        console.log(err)
        reject(err)
      }
      const jsonData = JSON.parse(data)
      resolve(jsonData)
    })
  })
}
