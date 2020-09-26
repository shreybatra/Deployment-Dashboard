import React from 'react'
import { Link } from 'react-router-dom'

const NavigationComponent = ({ url, name, active = false, onClickChange }) => {
  const activeTab = active === url ? 'active' : ''
  return (
    <div className={`${activeTab} item`} onClick={() => onClickChange(url)}>
      <Link to={url}>{name}</Link>
    </div>
  )
}

export default NavigationComponent
