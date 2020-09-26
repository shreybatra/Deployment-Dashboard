import React, { useEffect, useState } from 'react'
import TagCard from './TagCard'
import axios from 'axios'

const TagDeployed = ({ disable, selected }) => {
  const [clientList, setClientList] = useState([])
  useEffect(() => {
    axios.get(process.env.REACT_APP_LIST_CLIENTS).then(response => {
      setClientList(
        response.data.sort((a, b) => (a.client > b.client ? 1 : -1))
      )
    })
  }, [])

  const disabled = disable ? 'disabled' : ''

  const renderedArrayList = clientList.map(({ client, url }) => {
    return (
      <div className='four wide column' key={client}>
        <TagCard client={client} url={url} key={client} selected={selected} />
      </div>
    )
  })

  const renderComponent = () => {
    if (clientList.length > 0) {
      return renderedArrayList
    } else {
      return (
        <div className='sixteen wide column'>
          <div className='ui basic segment' style={{ height: '500px' }}>
            <div className='ui active large inverted dimmer'>
              <div className='ui large loader'></div>
            </div>
          </div>
        </div>
      )
    }
  }

  return (
    <div className={`ui segment basic ${disabled}`}>
      <div className='ui grid'>{renderComponent()}</div>
    </div>
  )
}

export default TagDeployed
