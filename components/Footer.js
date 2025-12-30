import React from 'react'
import Image from 'next/image'
import email_box from '../public/email_add.svg'
import styled from 'styled-components'
import social from '../public/Social.svg'
import company from '../public/Company.svg'
import help from '../public/help.svg'
import faq from '../public/FAQ.svg'
import resources from '../public/resources.svg'
import endline from '../public/endline.svg'
import visa from '../public/visa.svg'
import line from '../public/Line.svg'

const Footer = () => {
  return ( 
    <>
    <StyledFoot>
        <StyledSentence>STAY UPTO DATE ABOUT OUR LATEST OFFERS</StyledSentence>
        <StyledBox><Image src={email_box}/></StyledBox>
    </StyledFoot>

{/* Footer box */}
    <StyledFootBox>
    <Socials>
    <div>
    <FooterHead><h3>SHOP.CO</h3></FooterHead>
    <FooterHead><p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p></FooterHead>
    <Image src={social}/>
    </div>
    </Socials>
    
    <Image src={company}/>
    <Image src={help}/>
    <Image src={faq}/>
    <Image src={resources}/>

    </StyledFootBox>

    <Image src={line}/>

{/* end */}
<End>
        <Image src={endline} />
        <Image src={visa} />
</End>
    </>
  )
}

export default Footer

const StyledFoot = styled.div`
display: flex;
background-color: black;
color: white;
width: 1240px;
height: auto;
border-radius: 20px;
gap: 350px;
`;

const StyledSentence = styled.div`
font: normal 700 25px "Integral CF";
width: 350px;
height: 80px;
margin-left: 50px;
margin-top: 50px;
margin-bottom: 40px;
`;

const StyledBox = styled.section`
display: flex;
margin-right:50px;
margin-top: 20px;
margin-bottom: 20px;
width: 100%;
max-width: 349px;
min-height: 108px;
display: flex;
justify-content: flex-end;
`;

//footer
const StyledFootBox = styled.div`
display: flex;
max-width: 1240px;
min-height: auto;
margin-top: 30px;
margin-bottom: 30px;
margin-left: 20px;
margin-right: 20px;
justify-content: space-between;
`;

const Socials = styled.div`
height: 177px;
width: 248px;
`;

const End = styled.div`
display: flex;
margin-left: 20px;
margin-right: 20px;
margin-top: 30px;
justify-content: space-between;
`;

const FooterHead = styled.div`
margin-bottom: 20px;
`;