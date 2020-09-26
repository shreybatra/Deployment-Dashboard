import axios from 'axios'
import React, { useRef } from 'react'

const url = process.env.REACT_APP_LOGIN_URL

export default function Login ({ handleClose }) {
  const userRef = useRef()
  const passRef = useRef()

  const handleSubmit = event => {
    event.preventDefault()
    const username = userRef.current.value
    const password = passRef.current.value
    if (username === '' || password === '') {
      alert('Empty username or password.')
      return
    }
    axios
      .post(url, {
        username: userRef.current.value,
        password: new Buffer(password).toString('base64')
      })
      .then(response => {
        handleClose(true)
      })
      .catch(err => alert('Unauthorized. Wrong username and password.'))
  }

  return (
    <React.Fragment>
      <div className='content'>
        <form className='ui form' onSubmit={event => handleSubmit(event)}>
          <div className='field'>
            <input type='text' ref={userRef} placeholder='Username' />
          </div>
          <div className='field'>
            <input type='password' ref={passRef} placeholder='Password' />
          </div>

          <div
            className='content'
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div
              className='ui buttons'
              style={{
                display: 'flex',
                width: '30%',
                justifyContent: 'center'
              }}
            >
              <button
                className='ui clear button'
                onClick={() => handleClose(false)}
              >
                Cancel
              </button>
              <div className='or'></div>
              <button className='ui primary submit button' type='submit'>
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  )
}
