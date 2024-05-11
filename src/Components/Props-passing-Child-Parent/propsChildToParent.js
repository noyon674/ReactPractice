import React from 'react'

export default function PropsChildToParent(props) {
  const data = 'I am from child';
  props.onGetData(data)
  return (
    <div>
    </div>
  )
}
