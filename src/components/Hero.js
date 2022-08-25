import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import Video from '../assets/videos/video_flow.mp4'

const Hero = () => {
  return (
    <Container>
        <HeroBackground>
            <VideoBackground src={Video} type="video/mp4" autoPlay loop muted playsInline />
        </HeroBackground>
        <HeroContent>
            <HeroItems>
                <HeroTitle>Lotus Security</HeroTitle>
                <HeroBlurb>For All Your Security Needs</HeroBlurb>
            <ButtonContainer>
                <Button big="true" round="true">Subscribe</Button>
                <Button big="true" round="true" to="https://www.linkedin.com/">LinkedIn</Button>
            </ButtonContainer>
            </HeroItems>
        </HeroContent>
    </Container>
  )
}

export default Hero

const Container = styled.div`
background: black;
display: flex; 
justify-content: center;
align-items: center;
height: 100vh; 
padding: 0 1rem; 
position: relative; 
margin-top: -85px;
color: #fff; 

:before {
content: ""; 
position: absolute; 
top: 0; 
bottom: 0; 
right: 0; 
left: 0; 

z-index: 2; 
background: linear-gradient(
    180deg, rgba(0,0,0,0.2) 0%, 
    rgba(0,0,0,0.6) 100%,
), 
linear-gradient(
    180deg, rgba(0,0,0,0.2) 0%, 
    transparent 100%
)
}
;
`

const HeroBackground = styled.div`
position: absolute; 
top: 0; 
bottom: 0; 
right: 0; 
left: 0; 
height: 100%;
width: 100%; 
overflow: hidden;`

const VideoBackground= styled.video`
width: 100%; 
height: 100%; 
o-object-fit: cover;
object-fit: cover;
`

const HeroContent = styled.div`
z-index: 3;
height: calc(100vh-80px); 
max-height: 100%;  
padding: 0rem calc((100vw - 1300px) / 2);
`

const HeroItems = styled.div`
display: flex; 
flex-direction: column; 
justify-content: center; 
align-items: center; 
text-align: center; 
height: 100vh;
max-height: 100%; 
padding: 0; 
color: #fff; 
line-height: 1.1; 
font-weight: bold; 
;
;
`

const HeroTitle = styled.h1`
font-size: clamp(1.5rem, 5vw, 4rem);
margin-bottom: 1.5rem;
letter-spacing: 4px;
padding: 0 1rem;
`

const HeroBlurb = styled.p`
font-size: clamp(1rem, 3vw, 4rem);
margin-bottom: 2rem; 
`
const ButtonContainer = styled.div`
display: flex; 
flex-direction: row;
font-weight: 500; 

`