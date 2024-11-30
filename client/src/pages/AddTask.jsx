import React, { useState } from 'react'
import { useTaskAPI } from '../API/task.api';
import { toast } from 'react-hot-toast';
import Navbar from '../components/Navbar';

const AddTask = () => {
    const [name , setName] = useState("");
    const [description, setDescription] = useState("");
    const [checked, setChecked]= useState(false);

    const createTask = useTaskAPI((state) => state.createTask);
    const handleSubmit= async (e)=> {
        e.preventDefault();

        if(!description || !name ){
            toast.error("Name or Description field empty")
        }
        await createTask({name, description, checked})
        setName("");
        setDescription("");
        setChecked(false)
    }
    return (
        <>
        <Navbar/>
        <div className='max-h-screen max-w-[900px] mt-20 mx-auto'>
            
            <div className='flex flex-row items-center justify-center bg-sky-900'>
                <div className='flex flex-col space-x-3 p-10 items-center rounded-full'>
                <h2 className='p-2 mb-10 text-left underline tracking-widest'>YENİ GÖREV EKLE</h2>
                    <form onSubmit={handleSubmit} className=''>
                        <div className='flex flex-col mb-5'>
                            <label className='text-center mb-2' >Konu Başlığı</label>
                            <input 
                                type="text"
                                className='bg-sky-300 mt-2'
                                id='name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                             />
                        </div>
                        <div className='flex flex-col mb-5'>
                            <label className='text-center mb-2'>Açıklama</label>
                            <textarea 
                                type="text"
                                className='w-80 h-48 text-sm mt-2 bg-sky-300'
                                id='description'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                             />
                        </div>
                        <div className='mb-10'>
                            <label className='text-center mb-2' htmlFor="name">Yapıldı</label>
                            <input 
                                type="checkbox"
                                id='checked'
                                checked={checked}
                                onChange={(e) => setChecked(e.target.checked)}
                                className='ml-10 '
                             />
                        </div>

                        <button type='submit' className='rounded-lg bg-slate-300 py-1 px-4 '>Yeni Task Ekle</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default AddTask