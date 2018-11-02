import mongoose from 'mongoose'

export default mongoose.model('Talk', new mongoose.Schema({
  title: String,
  speaker: String,
  likes: Number
}))
