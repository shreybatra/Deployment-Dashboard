import React from 'react'

const Modal = ({ showIcon, children, header }) => {
  const renderIcon = () => {
    if (showIcon) {
      return <i className='times large icon hidden'></i>
    }
    return
  }
  return (
    <div
      className='ui centered'
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <div className='ui modal tiny active'>
        {renderIcon()}
        <div className='ui center aligned header centered'>{header}</div>
        {children}
      </div>
    </div>
  )
}

export default Modal
