import Link from 'next/link'
import styled from 'styled-components'
import React from "react";

const GoBack = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;
`
const GoBackTitle = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: 24px;
  cursor: pointer;
  opacity: .7;
  transition: all .2s ease;
  
  &:hover {
    opacity: 1;
  }
`

const GoBackComponent = () => {
    return <GoBack>
        <Link href='/'>
            <GoBackTitle>
                Go back
            </GoBackTitle>
        </Link>
    </GoBack>
}

export default GoBackComponent
