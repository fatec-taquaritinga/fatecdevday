import dotenv from 'dotenv'
import mongoose from 'mongoose'
import Like from './models/Like'

dotenv.config()

const headers = {
  'Access-Control-Allow-Origin' : '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json;charset=utf-8'
}

let connection
exports.handler = async () => {
  const context = arguments[1]
  context.callbackWaitsForEmptyEventLoop = false

  try {
    if (!connection) {
      connection = await mongoose.connect(process.env.MONGODB_ENDPOINT, {
        useNewUrlParser: true,
        bufferCommands: false,
        bufferMaxEntries: 0
      })
      console.log(`Connected to database at "${ process.env.MONGODB_ENDPOINT }".`)
    }

    const result = await Like.find({})
    return { statusCode: 200, headers, body: JSON.stringify(result) }
  } catch (err) {
    console.log(err)
    return { statusCode: 500, body: JSON.stringify(err) }
  }
}
