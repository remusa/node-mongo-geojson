import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import express, { NextFunction, Request, Response } from 'express'
import helmet from 'helmet'
import storesRoutes from './routes/stores'
import connectDB from './config/db'

dotenv.config({
  path: './config/.env.dev',
})

const PORT = process.env.PORT || 8000
const ENV: string = process.env.NODE_ENV || 'development'

connectDB()

const app: express.Application = express()

// Security
app.use(helmet())
app.disable('x-powered-by')
// app.use(cors())

// Middleware
app.use(express.json())
app.use(bodyParser.json())

// Routes
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello, world!')
})

app.use('/api/v1/stores', storesRoutes)

// Server
app.listen(PORT, () => console.log(`⚡️[server]: Server running in ${ENV} mode on port ${PORT}`))
