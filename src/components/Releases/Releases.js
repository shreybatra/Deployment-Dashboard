import React, { useEffect, useState } from 'react'
import ListingCard from '../ListingCard'
import axios from 'axios'

const Releases = () => {
  const [tagList, setTagList] = useState([])

  useEffect(() => {
    axios.get(process.env.REACT_APP_GET_RELEASES).then(response => {
      setTagList(response.data)
    })
  }, [])

  const renderedData = () => {
    return tagList.map((tagObj, index) => {
      return <ListingCard tagObj={tagObj} key={index} />
    })
  }
  return (
    <div className='ui segment basic'>
      <div className='ui divided items'>{renderedData()}</div>
    </div>
  )
}

export default Releases
