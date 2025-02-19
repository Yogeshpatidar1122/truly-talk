import { trace } from 'console';
import mongoose ,{Schema ,Document} from 'mongoose';

// define messages schema 
export interface Message extends Document{
    content:string,
    createdAt:Date
}

const MessageSchema :Schema<Message>=new Schema({
    content:{
        type: String,
        required:true
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now 
    }
})
    // define user schema 
export interface User extends Document{
    username:string,
    email:string,
    password:string,
    isVerified:Boolean
    verifyCode:string,
    verifyCodeExpiry:Date,
    isAcceptingMessage:Boolean,
    messages:Message[]
}
const UserSchema :Schema<User>=new Schema({
    username:{
        type: String,
        required:[true,'username is required'],
        unique:true
    },
    email:{
        type:String,
        required:[true,'Email address is reuired.'],
        unique:true,
        match:[/.+\@.+\..+/,'enter valid email address'] 
    },
    password:{
        type:String,
        required:[true,'password is required']
    },
    verifyCode:{
        type:String,
        required:[true,'Verify Code is required']
    },
    verifyCodeExpiry:{
        type:Date,
        required:[true,'Verify Code Expiry is required']
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    isAcceptingMessage:{
        type:Boolean,
        default:false
    },
    messages:[MessageSchema]
    
})

const UserModel=(mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User",UserSchema)

export default UserModel;