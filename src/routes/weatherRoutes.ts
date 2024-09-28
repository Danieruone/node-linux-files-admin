import { Router } from 'express'
import * as weatherController from '../controllers/weatherController'

const router = Router()

router.post('/sensor-data', weatherController.writeWeatherData)

export default router
