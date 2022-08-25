import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <Container>
      <LinksWrapper>
      <Description>
      <h1>Our Clients</h1>
      <p>Edit this with clients</p>
      </Description>
      <LinkItems>
      <LinkTitle>Title of Footer 1</LinkTitle>
      <FooterLinkTo to="/">Websites1</FooterLinkTo>
      <FooterLinkTo to="/">Websites2</FooterLinkTo>
      <FooterLinkTo to="/">Websites3</FooterLinkTo>
      </LinkItems>
    </LinksWrapper>
    <LinksWrapper>
      <Description>
      <h1>Our Clients</h1>
      <p>Edit this with clients</p>
      </Description>
      <LinkItems>
      <LinkTitle>Title of Footer 1</LinkTitle>
      <FooterLinkTo to="/">Websites1</FooterLinkTo>
      <FooterLinkTo to="/">Websites2</FooterLinkTo>
      <FooterLinkTo to="/">Websites3</FooterLinkTo>
      </LinkItems>
    </LinksWrapper><LinksWrapper>
      <Description>
      <h1>Our Clients</h1>
      <p>Edit this with clients</p>
      </Description>
      <LinkItems>
      <LinkTitle>Title of Footer 1</LinkTitle>
      <FooterLinkTo to="/">Websites1</FooterLinkTo>
      <FooterLinkTo to="/">Websites2</FooterLinkTo>
      <FooterLinkTo to="/">Websites3</FooterLinkTo>
      </LinkItems>
    </LinksWrapper>
    <LinksWrapper>
      <Description>
      <h1>Our Clients</h1>
      <p>Edit this with clients</p>
      </Description>
      <LinkItems>
      <LinkTitle>Title of Footer 1</LinkTitle>
      <FooterLinkTo to="/">Websites1</FooterLinkTo>
      <FooterLinkTo to="/">Websites2</FooterLinkTo>
      <FooterLinkTo to="/">Websites3</FooterLinkTo>
      </LinkItems>
    </LinksWrapper>
    </Container>
  )
}

export default Footer

const Container = styled.div`
padding: 5rem calc((100vw - 1300px) /2);
display: grid; 
grid-template-columns: repeat(2, 1fr);
color: #000;
background: #fafafb;
`

const LinksWrapper = styled.div`
display: grid; 
grid-template-columns: repeat(2, 1fr);

@media screen and (max-width: 820px) {
    grid-template-columns: 1fr; 
}
`

const Description = styled.div`
padding: 0 2rem;

h2 {
    margin-bottom: 3rem;
    color: #f26a2e;
}

@media screen and (max-width: 400px) {
    padding: 1rem;
}
`

const LinkItems = styled.div`
display: flex; 
flex-direction: column;
align-items: flex-start;
padding: 1rem 2rem; 

@media screen and (max-width: 400px) {
    padding: 1rem;
}
`

const LinkTitle = styled.h2`
font-size: 14px; 
margin-bottom: 16px;
`

const FooterLinkTo = styled(Link)`
text-decoration: none; 
margin-bottom: 0.5rem;
font-size: 14px; 
color: #3d3d4e;

&:hover {
    color: #f26a2e;
    transition: 0.3s ease-out;
}
`

const FooterLinkWrapper = styled.div`
display: grid; 
grid-template-columns: repeat(2, 1fr);

@media screen and (max-width: 820px) {
    grid-template-columns: 1fr; 
}
`
