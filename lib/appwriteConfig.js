import { Client, Account, ID, Avatars, Databases } from 'react-native-appwrite';
 
 
 export const config =  {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.milkorg.safewaka',
    projectID: '667438870003073d61ce',
    databaseID: '66743d9c0007cb249260',
    userCollectionID: '66743de200052ad977f1',
    roadSignCollectionID: '66743e64000bd8e838de',
    storageID: '66745658001f96717ecd',
 }


const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectID) // Your project ID
    .setPlatform(config.platform); // Your application ID or bundle ID

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client)

// Register a user
export const createUser = async (Name,email,telephone,matricule,password,confirmpassword) => {
    
    try {
        const newAccount = await  account.create(
            ID.unique(),
            Name,
            email,
            telephone,
            matricule,
            password,
            confirmpassword
        )

        if(!newAccount) throw Error;

         const avatarUrl = avatars.getInitials(Name)

         await signIn(email,password);
         const newUser = databases.createDocument(
            config.databaseID,
            config.userCollectionID,
            ID.unique(),{
                Name,
                email,
                telephone,
                matricule,
                password,
                confirmpassword,
                avatar: avatarUrl
            }
           
                 )
                 return newUser
        
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }


}

export async function signIn (email,password){
    try {
        const session = await account.createEmailPasswordSession
        return session
        } catch (error) {
        throw new Error(error)
    }
}