import mongoose from 'mongoose'

export default mongoose.model('Like', new mongoose.Schema({
  ip: String,
  talk: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Talk'
  }
}))
