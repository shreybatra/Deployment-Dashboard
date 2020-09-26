import React, { useRef } from 'react'
import axios from 'axios'

const url = process.env.REACT_APP_ADD_CLIENT

const AddClient = ({ handleClose }) => {
  const clientRef = useRef()
  const urlRef = useRef()

  const handleSubmit = () => {
    axios
      .post(url, {
        client: clientRef.current.value,
        url: urlRef.current.value
      })
      .then(response => {
        handleClose(false)
      })
      .catch(err => console.log(err))
  }

  return (
    <React.Fragment>
      <div className='content'>
        <div className='ui form'>
          <div className='field'>
            <input
              type='text'
              ref={clientRef}
              placeholder='Name of Client and Environment'
            />
          </div>
          <div className='field'>
            <input type='text' ref={urlRef} placeholder='Client"s Base URL' />
          </div>
        </div>
      </div>
      <div
        className='content'
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <div
          className='ui buttons'
          style={{ display: 'flex', width: '30%', justifyContent: 'center' }}
        >
          <button className='ui button' onClick={() => handleClose(false)}>
            Cancel
          </button>
          <div className='or'></div>
          <button className='ui primary button' onClick={() => handleSubmit()}>
            Save
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AddClient
