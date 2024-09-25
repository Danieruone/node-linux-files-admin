import { writeFile } from 'fs'
import { join } from 'path'

/**
 * Creates a file in the file system
 * @param name - The name of the file to create, including extension
 * @param content - The content that the file will have
 * @returns Promise<void> - A promise that resolves when the file is created
 */
export async function createFile(name: string, content: string): Promise<void> {
  const path = join(__dirname, '../../files', name) // Creates the file in the 'files' folder

  return new Promise((resolve, reject) => {
    writeFile(path, content, 'utf8', (err) => {
      if (err) {
        console.error('Error creating the file:', err)
        reject(err) // Rejects the promise if an error occurs
      } else {
        console.log(`File ${name} created successfully at ${path}.`)
        resolve() // Resolves the promise if the file is created successfully
      }
    })
  })
}
