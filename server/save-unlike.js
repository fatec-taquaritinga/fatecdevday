import ip from 'ip'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import Like from './models/Like'
import Talk from './models/Talk'

dotenv.config()

exports.handler = async function () {
  const callback = arguments[2]

  try {
    mongoose.connect(process.env.MONGODB_ENDPOINT, { useNewUrlParser: true })
    console.log(`Connected to database at "${ process.env.MONGODB_ENDPOINT }".`)

    const ipAddress = ip.address()
    const like = await Like.findOne({ ip: ipAddress }).populate('talk')

    if (!like)
      throw Error('User haven\'t liked any talk.')

    await Talk.findByIdAndUpdate(like.talk._id, { $inc: { 'likes': -1 } }).exec()
    await Like.deleteOne({ ip: ipAddress }).exec()
    return callback(null, { statusCode: 200, body: '' })
  } catch (err) {
    return callback(err)
  }
}
