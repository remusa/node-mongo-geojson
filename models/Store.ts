import mongoose, { Schema, Model, Document } from 'mongoose'

interface IStore extends Document {
  storeId: string
  address: string
  location: {
    type: string
    coordinates: number
    formattedAddress: string
  }
  createdAt: Date
}

const StoreSchema: Schema = new mongoose.Schema({
  storeId: {
    type: String,
    required: [true, 'Please add a storeID'],
    unique: true,
    trim: true,
    maxlength: [10, 'Store ID must be less than 10 characters'],
  },
  address: {
    type: String,
    required: [true, 'Please add an address'],
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      // required: [true, ''],
    },
    coordinates: {
      type: [Number],
      // required: [true, ''],
      index: '2dsphere',
    },
    formattedAddress: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const Store: Model<IStore> = mongoose.model('Store', StoreSchema)

export default Store
