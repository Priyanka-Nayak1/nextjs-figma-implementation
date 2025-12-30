import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import versace from '../public/versace.svg'
import zara from '../public/zara.svg'
import gucci from '../public/gucci.svg'
import prada from '../public/prada.svg'
import calvin from '../public/calvin klein.svg'

const Brands = () => {
  return (
    <StyledBrand>
        <Image src={versace} height={30} weight={80}/>
        <Image src={zara} height={30} weight={80}/>
        <Image src={gucci} height={30} weight={80}/>
        <Image src={prada} height={30} weight={80}/>
        <Image src={calvin} height={30} weight={80}/>
    </StyledBrand>
    
  )
}

export default Brands

const StyledBrand = styled.div`
display: flex;
background-color: black;
color: white;
height: 70px;
margin-bottom: 10px;
align-items: center;
justify-content: space-evenly;
`;

