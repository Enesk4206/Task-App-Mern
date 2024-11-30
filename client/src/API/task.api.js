import { axiosInnit } from "./axios";
import { toast } from "react-hot-toast";
import {create} from "zustand";


export const useTaskAPI = create((set) => ({
    tasks:[],

    createTask : async (taskData) =>{
        try {
            const res = await axiosInnit.post("/task/create",taskData);
           
            console.log(res.data)
            toast.success("Task added succesfully!!")
            set((state)=>({
                tasks:[...state.tasks, res.data]
            }))
        } catch (error) {
            toast.error("Error it is doesnt work!!!")
        }
    }, showAllTasks : async () =>{
        try {
            const res = await axiosInnit.get("/task/my-tasks");
            
            set({tasks: res.data.tasks});
        } catch (error) {
            toast.error("Error it is doesnt work!!!")
        }
    }

}))