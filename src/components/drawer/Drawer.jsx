import React from 'react'
import AddButton from './AddButton'
import Form from './form'
import Image from './Image'

const Drawer = () => {
  return (
    <div>
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Add Student</label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-2/4 min-h-full bg-white text-base-content ">
            {/* Sidebar content here */}
            <div>
              <AddButton />
            </div>
            

            <div className= "mt-4">
            <div style={{margin:'0rem'}}>
              <Form />
            </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Drawer
