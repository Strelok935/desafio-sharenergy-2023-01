import mongoose from 'mongoose'

const URI:any = process.env.CONNECTION_DB

declare global {
    var mongoose: any;
  }

const databaseConnection = async () => {
    if(!global.mongoose){
        mongoose.set('strictQuery', false)
        global.mongoose = await mongoose.connect(URI)
    }
}

export default databaseConnection