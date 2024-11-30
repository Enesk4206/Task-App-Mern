import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='w-full bg-slate-300 fixed left-0 top-0 '>
            <div className='flex flex-row items-center justify-between p-2 m-1'>
                <div className='flex flex-row items-center justify-between space-x-10 ml-4'>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/add-task"}>Add New Task</Link>
                </div>
                <div className='flex flex-row items-center justify-between space-x-6 mr-5'>
                    <h2 className=''>FAQ</h2>
                    <h2>Feedback</h2>
                    <h2>Login</h2> 
                </div>
            </div>
        </div>
    )
}

export default Navbar