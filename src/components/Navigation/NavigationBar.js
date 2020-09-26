import React, { useState } from 'react'
import NavigationComponent from './NavigationComponent'

const NavigationBar = () => {
  const [activeComponent, setActiveComponent] = useState(
    window.location.pathname
  )

  return (
    <div className='ui secondary pointing massive menu'>
      <NavigationComponent
        url='/'
        name='Home'
        active={activeComponent}
        onClickChange={setActiveComponent}
      />
      <NavigationComponent
        url='/releases'
        name='Releases'
        active={activeComponent}
        onClickChange={setActiveComponent}
      />
      {/* <NavigationComponent
        url='/alerts'
        name='Alerts'
        active={activeComponent}
        onClickChange={setActiveComponent}
      />
      <NavigationComponent
        url='/help'
        name='Help'
        active={activeComponent}
        onClickChange={setActiveComponent}
      /> */}
    </div>
  )
}

export default NavigationBar
