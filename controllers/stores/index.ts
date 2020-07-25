import { Request, Response, NextFunction } from 'express'
import Store from '../../models/Store'

// @desc Get all stores
// @route GET /api/v1/stores
// @access Public
const getStores = () => async (req: Request, res: Response, next: NextFunction) => {
  try {
    const stores = await Store.find()

    return res.status(200).json({
      success: true,
      count: stores.length,
      data: stores,
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({
      error: 'Server error',
    })
  }
}



export { getStores, postStore  }
