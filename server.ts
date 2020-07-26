import cors from 'cors'
import dotenv from 'dotenv'
import express, { Request, Response } from 'express'
import helmet from 'helmet'
import path from 'path'
import connectDB from './config/db'
import storesRoutes from './routes/stores'

dotenv.config({
  path: './config/.env.dev',
})

const PORT = process.env.PORT || 8000
const ENV: string = process.env.NODE_ENV || 'development'

// Database
connectDB()

// App
const app: express.Application = express()

// Security
app.use(helmet())
app.disable('x-powered-by')
app.use(cors())

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Static folder
const PUBLIC = path.join(__dirname, 'public/')
app.use(express.static(PUBLIC))

// Routes
app.get('/', (req: Request, res: Response) => res.sendFile(PUBLIC + 'index.html'))
app.get('/add', (req: Request, res: Response) => res.sendFile(PUBLIC + 'add.html'))

// API routes
app.use('/api/v1/stores', storesRoutes)

// Server
app.listen(PORT, () => console.log(`⚡️[server]: Server running in ${ENV} mode on port ${PORT}`))
