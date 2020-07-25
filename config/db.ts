import mongoose, { Mongoose } from 'mongoose'
import dotenv from 'dotenv'

dotenv.config({
  path: './config/.env.dev',
})

const DB_URL: string = process.env.DB_URL || ''

const connectDB = async () => {
  try {
    const conn: Mongoose = await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })

    console.log(`Database connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(`Error: ${error}`)
    // Exit app with failure
    process.exit(1)
  }
}

export default connectDB
