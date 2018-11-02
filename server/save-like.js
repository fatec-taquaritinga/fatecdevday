import ip from 'ip'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import Like from './models/Like'
import Talk from './models/Talk'

dotenv.config()

exports.handler = async function () {
  const event = arguments[0]
  const callback = arguments[2]

  try {
    if (!event.queryStringParameters || !event.queryStringParameters.id)
      throw Error('A talk id must be specified.')

    mongoose.connect(process.env.MONGODB_ENDPOINT, { useNewUrlParser: true })

    const ipAddress = ip.address()
    const like = await Like.findOne({ ip: ipAddress })

    if (like)
      throw Error('User already liked a talk.')

    await Like.create([ { ip: ipAddress, talk: event.queryStringParameters.id } ])
    await Talk.findByIdAndUpdate(event.queryStringParameters.id, { $inc: { 'likes': 1 } }).exec()
    return callback(null, { statusCode: 200, body: '' })
  } catch (err) {
    return callback(err)
  }
}
