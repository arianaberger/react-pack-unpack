import React from 'react';

const ObjectsComponent = (props) => {

  const displayObj = () => {
    console.log(props.objects())
    return props.objects.map(obj => {
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
      <div>{displayObj()}</div>
    </>
  )
}

export default ObjectsComponent
