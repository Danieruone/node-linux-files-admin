import express from 'express'
import fileRoutes from './routes/weatherRoutes'

const app = express()

// JSON middleware
app.use(express.json())

// file routes
app.use('/api', fileRoutes)

export default app
