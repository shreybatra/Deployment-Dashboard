import './Home.css'
import React, { useState } from 'react'
import TagsDeployed from './TagDeployed'
import Modal from '../Modal'
import AddClient from './AddClient'
import Dropdown from '../Dropdown'

const options = [
  {
    label: 'Service Name',
    value: 'service-name',
    parser: {
      base: '/service-endpoint/_version',
      version: 'tag', // Key in response containing version info.
      clonedOn: 'deployedOn' // Key in response containing epoch (ms) when service was deployed.
    }
  }
]

const Home = () => {
  const [modal, setModal] = useState(false)
  const [selected, setSelected] = useState(options[0])

  const renderModal = () => {
    if (modal) {
      return (
        <div>
          <Modal showIcon={false} header='Add a new client'>
            <AddClient handleClose={setModal} />
          </Modal>
        </div>
      )
    } else {
      return
    }
  }

  return (
    <div className='ui segment basic'>
      <div>
        <div className='project-dropdown'>
          <Dropdown
            options={options}
            selected={selected}
            onSelectedChange={setSelected}
          />
        </div>
        <h1 className='ui huge header centered'>Client Deployments</h1>

        <div
          className='ui button add-client primary'
          onClick={() => {
            setModal(true)
          }}
        >
          Add Client
        </div>
      </div>

      <br />
      <div>{renderModal()}</div>
      <TagsDeployed disable={modal} selected={selected} />
    </div>
  )
}

export default Home
