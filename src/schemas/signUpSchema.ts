import {z} from 'zod';

export const usernameValidation = z.
    string()
    .min(5,'atleast 5 character must needed.')
    .max(20,'not more than 20 words')
    .regex(/^[a-zA-Z0-9\s]*$/,'username does not contain  special character')


export const signUpSchema=z.object({
    username:usernameValidation,
    email:z.string().email({message:'invalid email address.'}),
    password:z.string().min(6,{message:"passwrod must be 6 characters"})
})

