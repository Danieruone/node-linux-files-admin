import express from 'express'
import weatherRoutes from './routes/weatherRoutes'

const app = express()

// config to serve static files
app.use(express.static('public'))

// JSON middleware
app.use(express.json())

// file routes
app.use('/api', weatherRoutes)

export default app
