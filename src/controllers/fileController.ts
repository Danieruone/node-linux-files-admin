import { Request, Response } from 'express'
import * as fileService from '../services/fileService'

// Create file
export async function createFile(req: Request, res: Response): Promise<void> {
  const { name, content } = req.body
  try {
    await fileService.createFile(name, content)
    res.status(201).json({ message: 'File successfully created' })
  } catch (error) {
    res.status(500).json({ error: 'Error creating file' })
  }
}
