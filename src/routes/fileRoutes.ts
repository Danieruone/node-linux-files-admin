import { Router } from 'express'
import * as fileController from '../controllers/fileController'

const router = Router()

router.post('/sensor-data', fileController.writeWeatherData)

export default router
