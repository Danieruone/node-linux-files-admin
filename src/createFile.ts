import { createFile } from './services/fileService'

async function main() {
  try {
    await createFile('myFile.txt', 'This is the content of the file')
    console.log('File successfully created')
  } catch (error) {
    console.error('There was an error creating the file:', error)
  }
}

main()
