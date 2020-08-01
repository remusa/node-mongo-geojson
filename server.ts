import cors from 'cors'
import dotenv from 'dotenv'
import express, { Request, Response } from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import path from 'path'
import connectDB from './config/db'
import storesRoutes from './routes/stores'

dotenv.config({
  path: './config/.env.dev',
})

const PORT = process.env.PORT || 8000
const ENV: string = process.env.NODE_ENV || 'development'
const CORS_WHITELIST = (process.env.CORS_WHITELIST && process.env.CORS_WHITELIST.split(',')) || []

// Database
connectDB()

// Express
const app: express.Application = express()

// Security
app.use(helmet())
app.disable('x-powered-by')
app.use(
  cors({
    origin: CORS_WHITELIST,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    // allowedHeaders: ''
    // credentials: ''
    // maxAge: ''
    preflightContinue: false,
    optionsSuccessStatus: 204,
  }),
)

// Static folder
const PUBLIC: string = path.join(__dirname, 'public/')
app.use(express.static(PUBLIC))

// Logging
app.use(morgan('dev'))

// Parsing
app.use(express.json()) // body-parser
app.use(express.urlencoded({ extended: true }))

// Routes
const publicFile = (file: string): string => path.join(PUBLIC, file)

app.get('/', (req: Request, res: Response) => res.sendFile(publicFile('index.html')))
app.get('/add', (req: Request, res: Response) => res.sendFile(publicFile('add.html')))

// API routes
app.use('/api/v1/stores', storesRoutes)

// Server
app.listen(PORT, () => console.log(`⚡️[server]: Server running in ${ENV} mode on port ${PORT}`))
