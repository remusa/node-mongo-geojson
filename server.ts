import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import express, { NextFunction, Request, Response } from 'express'
import helmet from 'helmet'
import storesRoutes from './routes/stores'

dotenv.config({
  path: './config/config.env',
})

const PORT = process.env.PORT || 8000
const ENV = process.env.NODE_ENV || 'development'
const DB_URL = process.env.DATABASE_URL

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
