import {z} from 'zod';

export const messageSchema = z.object({
    content:z
    .string()
    .min(10,{message:'message must be more than 10 words'})
    .max(300,{message:'message must be no more than 300 words'})
})