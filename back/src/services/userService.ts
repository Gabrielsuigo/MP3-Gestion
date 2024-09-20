import IUserDto from "../Dtos/IUserDto";
import { createCredential } from "./credentialServices";
import User from "../entities/User";
import { userModel } from "../config/dataSource";
import Credential from "../entities/Credential";


export const getAllUsersService = async(): Promise<User[]> => {
    const allUsers:  User[] = await userModel.find()
    return allUsers
}

export const getUserByIdService =  async (id: number) => {
    const foundUser: User | undefined = await userModel.findOne({where: {id}, relations: ["appointments"] })
    if(!foundUser) throw Error("Usuario no encontrado");
        return foundUser;
}

export const createUserService = async (createUserDto: IUserDto) => {
    const newUser: User = await userModel.create(createUserDto)
    await userModel.save(newUser)

    const newCredential: Credential = await createCredential({
        username: createUserDto.username,
        password: createUserDto.password
    })

    newUser.credential = newCredential;
    userModel.save(newUser)
    return newUser    
}

    
export const findUserByCredentialId = async (credentialID: number) => {
    const userFound = await userModel.findOneBy({credential: {id: credentialID}})
    return userFound
}


