import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://danielgsantos:Dani49505485@cluster0.lnq79.mongodb.net/alura-node')

let db = mongoose.connection

export default db