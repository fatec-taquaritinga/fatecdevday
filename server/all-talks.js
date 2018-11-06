import dotenv from 'dotenv'
import mongoose from 'mongoose'
import Talk from './models/Talk'

const headers = {
  'Access-Control-Allow-Origin' : '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json;charset=utf-8'
}

exports.handler = async () => {
  try {
    await dotenv.config()
    await mongoose.connect(process.env.MONGODB_ENDPOINT, { useNewUrlParser: true })
    console.log(`Connected to database at "${ process.env.MONGODB_ENDPOINT }".`)
    const result = await Talk.find({})
    return { statusCode: 200, headers, body: JSON.stringify(result) }
  } catch (err) {
    console.log(err)
    return { statusCode: 500, body: JSON.stringify(err) }
  }
}
