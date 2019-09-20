import React from 'react';

const Stuff = (props) => {

  const getObj = props.objects.filter(obj => !obj.pack)

  const displayObj = () => {
    return getObj.map(obj => {
      return (
        <div key={obj.name}>
          {obj.name}
          <button onClick={() => props.onClick(obj.name)}>Pack</button>
        </div>
      )
    })
  }

  return (
    <>
      <h3>Items to Pack</h3>
      <div>{displayObj()}</div>
    </>
  )
}

export default Stuff
