import express from 'express'
import weatherRoutes from './routes/weatherRoutes'

const app = express()

// JSON middleware
app.use(express.json())

// file routes
app.use('/api', weatherRoutes)

export default app
