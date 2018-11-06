import ip from 'ip'
import dotenv from 'dotenv'

dotenv.config()

exports.handler = async () => {
  try {
    const ipAddress = ip.address()
    return { statusCode: 200, body: ipAddress }
  } catch (err) {
    console.log(err)
    return { statusCode: 500, body: JSON.stringify(err) }
  }
}
