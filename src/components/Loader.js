import React from 'react'
import styled from 'styled-components'

import image from '../images/loading.gif'

const Loader = () => {
  return (
    <Image src={image}/>
  )
}

const Image = styled.img`
    width: 500px;
`

export default Loader