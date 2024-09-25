import { Router } from 'express'
import * as fileController from '../controllers/fileController'

const router = Router()

router.post('/files', fileController.createFile)

export default router
