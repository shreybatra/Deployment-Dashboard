import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NavigationBar from './Navigation/NavigationBar'
import Home from './Home/Home'
import Releases from './Releases/Releases'
import Modal from './Modal'
import Login from './Login'

export default function App () {
  const [access, setAccess] = useState(false)

  const rendered = () => {
    if (access) {
      return (
        <div className='ui container' style={{ backgroundColor: 'white' }}>
          <Router>
            <NavigationBar />
            <div>
              <Switch>
                <Route path='/releases'>
                  <Releases />
                </Route>
                {/* <Route path='/alerts'></Route>
                <Route path='/help'></Route> */}
                <Route path='/'>
                  <Home />
                </Route>
              </Switch>
            </div>
          </Router>
        </div>
      )
    } else {
      return (
        <div>
          <Modal header='Strategy Dashboard'>
            <Login handleClose={setAccess} />
          </Modal>
        </div>
      )
    }
  }

  return <div>{rendered()}</div>
}
