import React from 'react'
import styled from 'styled-components'
import { FaRegLightbulb } from 'react-icons/fa'
import guy1 from '../assets/images/guy-1.jpg'
import guy2 from '../assets/images/guy-2.jpg'
import { graphql, useStaticQuery } from 'gatsby'

const Testimonials = () => {
    const data = useStaticQuery(graphql`
    query MyQuery {
        allFile(
          filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {regex: "/(guy)/"}}
        ) {
          edges {
            node {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `)

    console.log(data)


  return (
    <TestimonialContainer>
        <TopLine>
            Testimonials
        </TopLine>
        <Description>
            What Clients are saying
        </Description>
        <ContentWrapper>
            <ColumnOne>
            <Testimonial>
            <FaRegLightbulb css={`color: #3fffa8; font-size: 2rem; margin-bottom: 1rem;`}/>
                <h3>Navid Khan</h3>
               
                <p>{" "}Maheen is my favourite
                    fasfasfasfasfasfas
                    fasfasfasfags
                    sgasgaagag
                    gsdgg Lorem Ipsum whas yp boysfsdfasjfaasafa
                    fasfasfasfasf
                    asfasfasf
                    asfasfasfaf
                    Lorem Ipsum whas yp boysfsdfasjfaasafa
                    fasfasfasfasf
                    asfasfasf
                    asfasfasfaf
                    Lorem Ipsum whas yp boysfsdfasjfaasafa
                    fasfasfasfasf
                    asfasfasf
                    asfasfasfaf
                    Lorem Ipsum whas yp boysfsdfasjfaasafa
                    fasfasfasfasf
                    asfasfasf
                    asfasfasfaf
                    Lorem Ipsum whas yp boysfsdfasjfaasafa
                    fasfasfasfasf
                    asfasfasf
                    asfasfasfaf
                    Lorem Ipsum whas yp boysfsdfasjfaasafa
                    fasfasfasfasf
                    asfasfasf
                    asfasfasfaf

                </p>
            </Testimonial>
            <Testimonial>
                <FaRegLightbulb css={`color: #3fffa8; font-size: 2rem; margin-bottom: 1rem; justify-content: center;`}/>
                
                <h3>Maheen Asim</h3>
                
                <p>{" "}Lorem Ipsum whas yp boysfsdfasjfaasafa
                    fasfasfasfasf
                    asfasfasf
                    asfasfasfaf
                    Lorem Ipsum whas yp boysfsdfasjfaasafa
                    fasfasfasfasf
                    asfasfasf
                    asfasfasfaf
                    Lorem Ipsum whas yp boysfsdfasjfaasafa
                    fasfasfasfasf
                    asfasfasf
                    asfasfasfaf
                    Lorem Ipsum whas yp boysfsdfasjfaasafa
                    fasfasfasfasf
                    asfasfasf
                    asfasfasfaf
                    Lorem Ipsum whas yp boysfsdfasjfaasafa
                    fasfasfasfasf
                    asfasfasf
                    asfasfasfaf
                    Lorem Ipsum whas yp boysfsdfasjfaasafa
                    fasfasfasfasf
                    asfasfasf
                    asfasfasfaf
                </p>
            
            </Testimonial>
            </ColumnOne>
            <ColumnTwo>
                <img src={guy1}/>
              <Breaker>
                <img src={guy2}/>
              </Breaker>
            </ColumnTwo>
        </ContentWrapper>
    </TestimonialContainer>
  )
}

export default Testimonials

const TestimonialContainer = styled.div`
width: 100%; 
background: white; 
color: #000;
padding: 5rem calc((100vw - 1300px)/2); 
height: 100%;
`

const TopLine = styled.p`
color: #077bf1; 
font-size: 2rem;
font-weight: 500; 
padding-left: 2rem; 
margin-bottom: 1rem
;
`

const Description = styled.p`
text-align: start; 
padding-left: 2rem;
margin-bottom: 4rem; 
font-size: clamp(1.5rem, 5vw, 2rem);
font-weight: bold; 
`

const ContentWrapper = styled.div`
display: grid; 
grid-template-columns: 1fr 1fr; 
padding: 0 2rem; 

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr; 
}
`

const ColumnOne = styled.div`
display: grid; 
grid-template-rows: 1fr 1fr;
`

const Testimonial = styled.div`
padding-top: 1rem; 
padding-right: 2rem;

h3 {
    margin-bottom: 1rem; 
    font-size: 1.5rem; 
    font-style: italic;
}

p {
    color: #3b3b3b
}

img {
border-radius: 10px;
height: 300px; 
width: 200px;
justify-content: center;
}
`

const ColumnTwo = styled.div`
display: grid; 
grid-template-columns: 1fr 1fr; 
margin-top: 2rem; 
grid-gap: 10px; 

@media screen and (max-width: 500px) {
    grid-template-columns: 1fr; 
}

img {
border-radius: 10px;
height: 400px; 
width: 300px;
}`

const Breaker = styled.div`
padding-top: 4rem;`


