import React from 'react'
import Card from './Card'

const Chart = () => {
  return (
    <Card
    // width="27em"
    height="21em"
    // backgroundColor="rgba(0, 120, 142, 1)"
     background=  'linear-gradient(to right, #00BAD4, #007C91)'
     alignItems="normal"
     marginTop="1em"
    >
        <div className='flex-center'>
            Graph
        </div>
    </Card>
  )
}

export default Chart