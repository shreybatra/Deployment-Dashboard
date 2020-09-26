import './TagCard.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const TagCard = ({ client, url, selected }) => {
  const [clientResponse, setClientResponse] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = () => {
      setLoading(true)
      axios
        .get(url + selected.parser.base)
        .then(response => {
          setClientResponse({
            version: response.data[selected.parser.version],
            clonedOn: response.data[selected.parser.clonedOn]
          })
          setLoading(false)
        })
        .catch(error => {
          setClientResponse({
            version: 'Service unreachable',
            clonedOn: 'Service unreachable',
            error: true
          })
          setLoading(false)
        })
    }
    fetchData()
  }, [url, selected])

  const RenderedInformation = () => {
    if (loading) {
      return (
        <div className='ui' style={{ height: '100px' }}>
          <div className='ui active inverted dimmer'>
            <div className='ui text loader'>Loading...</div>
          </div>
        </div>
      )
    } else {
      return (
        <div className='ui' style={{ height: '100px' }}>
          <br />
          <div className='meta'>Tag</div>
          <div className='description'>{clientResponse.version}</div>
          <div className='meta'>Deployed On</div>
          <div className='description'>
            {clientResponse.error
              ? clientResponse.clonedOn
              : new Date(clientResponse.clonedOn).toDateString()}
          </div>
        </div>
      )
    }
  }

  const cardColor = clientResponse.error ? 'red' : 'green'

  return (
    <div className={`ui card fluid ${cardColor}`}>
      <div className='content'>
        <i className={`right floated circle icon ${cardColor}`}></i>
        <div className='header'>{client}</div>

        {RenderedInformation()}
      </div>
    </div>
  )
}

export default TagCard
