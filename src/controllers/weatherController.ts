import { Request, Response } from 'express'
import * as weatherService from '../services/weatherService'

export async function writeWeatherData(
  req: Request,
  res: Response
): Promise<void> {
  const { temperature, humidity } = req.body
  try {
    await weatherService.addWeatherData({ temperature, humidity })
    res.status(201).json({ message: 'File successfully created' })
  } catch (error) {
    res.status(500).json({ error: 'Error creating file' })
  }
}
