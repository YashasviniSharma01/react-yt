import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({title,detail})
    setTask(copyTask);

    setTitle('');
    setDetail('');
    
  }
  const deleteNote = (idx) =>{
    const copyTask = [...task];
    copyTask.splice(idx,1);
    setTask(copyTask);
    
  }
  

  

  return (
    <div className='min-h-screen lg:flex bg-black text-white '>
      <form onSubmit={(e)=>{
        submitHandler(e);        
        }} 
        className='flex lg:w-1/2 flex-col gap-5 pb-10 px-5 pt-2'>
        <h1 className=' text-center text-4xl'>Add Notes</h1>

{/**  PEHLA INPUT FOR HEADING  */}
        <input 
          className='
          px-5
          py-1
          w-full
          border-2 
          rounded
          outline-none
          font-medium
          '
          type="text" 
          placeholder='Enter Notes Heading' 
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value);
          }}
        />

{/**  DUSRA INPUT FOR DETAIL  */}
        <textarea 
          type="text"
          placeholder='Write Details'
          className='
          px-5 py-5 h-32 flex items-start flex-row border-2 rounded w-full outline-none font-light'
          value={detail}
          onChange={(e)=>{
            setDetail(e.target.value);
          }}
          />
        <button 
          className='
          bg-white 
          w-full
          text-black 
          px-5 py-5 
          rounded
          active:bg-pink-400'>Add Note
        </button>
      </form>
      <div className='lg:border-l-2 lg:w-1/2 overflow-auto '>
      <h1 className='text-center text-4xl py-2 ' >Your Notes</h1>
      {/**  CARDSSS  */}
        <div className='flex flex-wrap overflow-auto'>
          {task.map((elem, idx) => {
            return (              
              <div
                key={idx}
                className="
                  flex flex-col
                  relative
                  h-52 w-40
                  m-5
                  rounded-4xl
                  bg-white
                  p-4
                  text-black
                "
              >
                <h3 className="text-xl leading-tight font-bold">
                  {elem.title}
                </h3>

                <p className="leading-tight font-medium text-gray-700">
                  {elem.detail}
                </p>

                <button
                  onClick={()=>{
                    deleteNote(idx)
                  }}
                  className="
                    mt-auto
                    w-full
                    rounded-lg
                    bg-red-600
                    py-2
                    text-white
                    cursor-pointer
                    active:scale-95
                    transition
                  "
                >Delete</button>
              </div>
            );
              })}
               
        </div>
      </div>
    </div>
  )
}

export default App