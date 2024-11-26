import React from 'react'

const Mailbox = () => {
  return (
    <div className="flex justify-center mb-2">
        <div className='flex items-center justify-center flex-col bg-gray-200 w-screen mx-2 mt-4 rounded-md'>

        <input className='mt-2 w-60 p-2 rounded-md' type="text" placeholder='Your Name' />
        <br />
        
        <input className='mt-2 w-60 p-2 rounded-md' type="email"  placeholder='Email'/>
        <br />
        <textarea className='mt-2 w-60 p-2 rounded-md' name="text" cols={20} rows={5} placeholder='Your massage' id="">
            
        </textarea>
        <button className="bg-orange-400 text-white my-4 px-4 py-2 rounded-lg font-semibold hover:bg-orange-300 shadow-2xl">Contact Me</button>
    </div>
    </div>
  )
}


export default Mailbox