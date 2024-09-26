import { Request, Response } from 'express'
import * as fileService from '../services/fileService'

export async function writeWeatherData(
  req: Request,
  res: Response
): Promise<void> {
  const { temperature, humidity } = req.body
  try {
    await fileService.addWeatherData({ temperature, humidity })
    res.status(201).json({ message: 'File successfully created' })
  } catch (error) {
    res.status(500).json({ error: 'Error creating file' })
  }
}
