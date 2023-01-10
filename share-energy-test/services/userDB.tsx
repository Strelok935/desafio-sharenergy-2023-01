import databaseConnection from "../database/dbConnection";
import User from '../model/user'

export const listUsers = async () => {
    await databaseConnection()
    const users = await User.find()
    return users
}

export const createUser = async (user:any) => {
    await databaseConnection()
    const createdUser = await User.create(user)
    return createdUser
}

export const deleteUser = async (id:any) => {
    await databaseConnection()
    await User.findByIdAndDelete(id)
}

export const updateUser = async (id:any, newBody:any) => {
    await databaseConnection()
    await User.findByIdAndUpdate(id, newBody)
}