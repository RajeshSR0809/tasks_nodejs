import app from './express.js'
import mongoose from 'mongoose'

// Connection URL
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/tasks')
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database`)
})
app.listen(8080, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', 8080)
})