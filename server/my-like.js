import ip from 'ip'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import Like from './models/Like'
import Talk from './models/Talk'

dotenv.config()

const headers = {
  'Access-Control-Allow-Origin' : '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json;charset=utf-8'
}

exports.handler = async function () {
  const callback = arguments[2]

  try {
    mongoose.connect(process.env.MONGODB_ENDPOINT, { useNewUrlParser: true })
    console.log(`Connected to database at "${ process.env.MONGODB_ENDPOINT }".`)

    const ipAddress = ip.address()
    const result = await Like.findOne({ ip: ipAddress }).populate(Talk.modelName.toLowerCase())
    return callback(null, {
      statusCode: 200, headers,
      body: JSON.stringify(result)
    })
  } catch (err) {
    return callback(err)
  }
}
