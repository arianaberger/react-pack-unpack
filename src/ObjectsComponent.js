import React from 'react';

const ObjectsComponent = (props) => {

  const getObj = props.objects.filter(obj => obj.pack)

  const displayObj = () => {
    return getObj.map(obj => {
      return (
        <div key={obj.name}>
          {obj.name}
          <button onClick={() => props.onClick(obj.name)}>Unpack</button>
        </div>
      )
    })
  }

  return (
    <>
      <h3>Your Packed Items</h3>
      <div>{displayObj()}</div>
    </>
  )
}

export default ObjectsComponent
