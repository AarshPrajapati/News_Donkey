import React from 'react'
import loading from './Loding_Spinner.gif'

const Loading =()=> {
    return (
      <div className='text-center'>
        <img src={loading} alt='Loading'/>
      </div>
    )
}

export default Loading
