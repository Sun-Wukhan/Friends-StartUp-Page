import React from "react"
import styled from "styled-components"
import {GiEarthAmerica} from 'react-icons/gi'
import {MdAirplanemodeActive, MdTimer} from 'react-icons/md'
import {FaMoneyCheck} from 'react-icons/fa'

const StatsData = [
    {
        icon: (<GiEarthAmerica/>),
        title: "Over 100 Clients", 
        desc: "Get the best Security Professionals"
    },
    {
        icon: (<MdAirplanemodeActive/>),
        title: "Prod like audits", 
        desc: "I want them to audit me again"
    },
    {
        icon: (<MdTimer/>),
        title: "Industry Leading Professionals", 
        desc: "They Handled my business as efficiently as possible"
    },
    {
        icon: (<FaMoneyCheck/>),
        title: "Secure Price Plans", 
        desc: "Affordable $ocs"
    },
]

const Stats = () => {
  return (
    <Container>
      <Heading>Why Choose us</Heading>
      <Wrapper>
        {StatsData.map((item, index) => {
            return <StatsBox key={index}>
                <Icon>{item.icon}</Icon>
                <Title>{item.title}</Title>
                <Description>{item.desc}</Description>


            </StatsBox>
        })}

      </Wrapper>
    </Container>
  )
}

export default Stats

const Container = styled.div`
width: 100%; 
background: #ffff; 
color: #000; 
display: flex; 
flex-direction: column;
justify-content: center; 
padding: 4rem calc((100vh - 1300px) /2);
`

const Heading = styled.h1`
text-align: start; 
font-size: clamp(1.5rem, 5vw, 2rem);
margin-bottom: 3rem;
padding: 0 2rem;
;
`

const Wrapper = styled.div`
display: grid; 
grid-template-columns: repeat(4, 1fr);
grid-gap: 10px; 

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
}

@media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
}

`

const StatsBox = styled.div`
height: 100%; 
width: 100%; 
padding: 2rem; 
transition: 0.3s; 
`
const Icon = styled.div`
font-size: 3rem; 
margin-bottom: 1rem; 
`
const Title = styled.div`
font-size: clamp(1rem, 2.5vw, 1.5rem);
margin-bottom: 0.5rem;

`
const Description = styled.p`
font-size: 1rem;`


