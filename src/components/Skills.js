import React from 'react'
import styled from 'styled-components'
import skills1 from '../assets/images/skills-1.jpg'
import skills2 from '../assets/images/skills-2.jpg'
import skills3 from '../assets/images/skills-3.jpg'
import skills4 from '../assets/images/skills-4.jpg'
import Cards from './Cards'

const Skills = () => {
  
  return (
    <CardContainer>
      <Container>
      <Cards background={skills1} date={"Security"} title={"Security Checks"} body={"Hello Ma-hee"}/>
      </Container>
      <Container>
      <Cards background={skills2} date={"SOCS"} title={"SOC Checks"} body={"Hello Ma-hee"}/>
      </Container>
      <Container>
      <Cards background={skills3} date={"Code Review"} title={"Code Checks"} body={"Hello Ma-hee"}/>
      </Container>
    </CardContainer>
  )
}

const Container = styled.div`
margin: 4rem;
`;

const Heading = styled.div`
font-size: clamp(1.2rem, 5vw, 3rem);
text-align: center;
margin-bottom: 5rem; 
color: green;
`;

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; 


  @media screen  and (max-width: 1200px){
  display: flex; 
  flex-direction: column;
  } 
`;

export default Skills