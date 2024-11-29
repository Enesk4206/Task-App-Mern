import Task from "../models/task.model.js"
export const getAllTask = async (req, res)=>{
    try {
        const tasks = await Task.find({});
        if(!tasks){
            return res.json("Here is no more tasks!");
        }
        res.status(200).json({
            tasks,
            succes:true,
        })
    } catch (error) {
        console.log("Error", error.message);
        res.status(500).json({
            message:"Internal server error"
        })
    }
}
export const createNewTask = async(req, res)=>{
    const {name, description, checked} = req.body;
    if(!name || !description){
        res.status(404).json({
            message:"All fields required",
        })
    }
    const task = await Task.create({
        name,
        description,
        checked
    });

    res.status(201).json({
        task,
    })
}
export const deleteTask = (req, res)=>{

}