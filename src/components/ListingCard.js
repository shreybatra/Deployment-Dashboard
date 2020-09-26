import React from 'react'
import ReactMarkdown from 'react-markdown'

const ListingCard = ({ tagObj }) => {
  const regexText = /^(v)\d+\.\d+\.\d+$/i
  const stableText = regexText.test(tagObj.tag) ? (
    <div
      className='ui red left pointing tiny label'
      style={{ marginLeft: '15px' }}
    >
      Production
    </div>
  ) : (
    <div
      className='ui green left pointing tiny label'
      style={{ marginLeft: '15px' }}
    >
      Testing
    </div>
  )
  return (
    <div className='item'>
      <div className='ui tiny image rounded right floated'>
        <img src={tagObj.userAvatar} width='5' alt='img' />
        {tagObj.userName}
      </div>

      <div className='middle aligned content'>
        <div className='header'>Tag - {tagObj.tag}</div>
        {stableText}
        <div className='meta right floated'>
          {new Date(
            parseInt(tagObj.createdOn.$date.$numberLong)
          ).toDateString()}
        </div>
        <div className='description'>
          <ReactMarkdown source={tagObj.message} />
        </div>
      </div>
    </div>
  )
}

export default ListingCard
