import React from 'react'
import styled from 'styled-components'
import Image from 'next/image';
import banner from '../public/banner.svg'


const Banner = () => {
  return (
    <StyledBanner>
        <div>
          <Image src={banner} />
        </div>
    </StyledBanner>
    
  )
}

export default Banner

const StyledBanner = styled.div`
background-color: rgba(242, 240, 241, 1);
height: 663px;
`;