import { credetialModel } from "../config/dataSource";
import ICredentialDto from "../Dtos/ICredetialDto";
import ICredential from "../interfaces/ICredentials";
import Credential from "../entities/Credential";



export const createCredential = async (credentialDTO: ICredentialDto) => {
    const newCredential: Credential = await credetialModel.create (credentialDTO)
       await credetialModel.save(newCredential)
       return newCredential
    }
       
    
    export const validateCredential = async(credentialDTO: ICredentialDto) => {
        const{username, password} = credentialDTO
        const foundCredential: Credential | undefined = await credetialModel.findOneBy({username: username})
    
    if(!foundCredential){
        throw Error("credeciales incorrectas")
    }else if(foundCredential && foundCredential.username !== username){
        throw Error("usuario incorrecto")
    }else if(foundCredential && foundCredential.password !== password){
        throw Error("password incorreto")
    }
    else {
        return foundCredential
    }
    }

