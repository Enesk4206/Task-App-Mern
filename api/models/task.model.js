import mongoose from "mongoose";
import { boolean } from "webidl-conversions";

const taskSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    checked:{
        type:Boolean,
        default:[false , "please make sure be boolean"],
    },
}, {timestamps: true});


const Task = mongoose.model("Task", taskSchema);

export default Task;