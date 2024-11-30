
import Navbar from './components/Navbar'
import TaskPage from './components/TaskPage';

const App = () => {

  return (
    <>
      <Navbar />
      <div className='mb-20 h-screen bg-slate-300 mt-10'>
        <div className='flex flex-col max-w-6xl mx-auto'>
          <div className='flex flex-col md:flex-row md:justify-between space-x-10 h-20 text-slate-600 mt-10 mb-5'>
            <div className='flex flex-col items-center justify-center mx-auto space-y-6 h-72 rounded-md'>

              <h2 className='text-2xl uppercase m-4 p-3'>Let Report Save Your Timee</h2>
              <p className='text-sm p-5 border-2 border-slate-800'>being pretty sure more exercise, homeworks, language works</p>
            </div>
            <div className='mx-auto  md:max-w-2xl'>

              <img src="dam.jpg" alt="dam image" className='object-cover transition duration-300 ease-in-out rounded-md shadow-lg' />
            </div>
          </div>
          <div className='my-64 bg-slate-200' />
          <h1 className='my-10 text-center uppercase bg-slate-500 p-2 text-slate-300 '>Tasks Diaries</h1>

          <div className='flex flex-row flex-wrap mt-20 p-10 bg-slate-700 '>

            <TaskPage />

          </div>


        </div>
      </div>
    </>
  )
}

export default App