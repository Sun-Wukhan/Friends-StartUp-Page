import React from "react"
import styled from "styled-components"
import email1 from "../assets/images/email-1.jpg"
import email2 from "../assets/images/email-2.jpg"
import { Button } from "./Button"

const Email = () => {
  return (
    <Container>
      <EmailContent>
        <h1>Dont Hesitate, contact us</h1>
        <p>Feel Free to message us</p>
        <form action="#">
          <FormWrap>
            <label htmlFor="email">
              <input type="email" placeholder="Enter your email" id="email" />
            </label>
            <Button as="button"
            type="submit"
            primary="true"
            round="true"
            >Message Us</Button>
          </FormWrap>
        </form>
      </EmailContent>
    </Container>
  )
}

export default Email

const Container = styled.div`
background: linear-gradient(
            180deg, 
            rgba(0, 0, 0, 0.5) 0%, 
            rgba(0, 0, 0, 0.5) 35%,
            rgba(0, 0, 0, 0.5) 100%
        ),
         url(${email2}) no-repeat center;
background-size: cover;
height: 450px;
width: 100%; 
padding: 5rem calc((100vw - 1300px) /2); 
color: #fff; 
display: flex; 
justify-content: center;
align-items: center;
`

const EmailContent = styled.div`
display: flex; 
flex-direction: column; 
align-items: center; 

h1 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: clamp(1rem, 5vw, 3rem);
    padding: 0 1rem;
}

p {
    text-align: center;
    font-size: clamp(1rem, 5vw, 3rem);
    padding: 0 1rem;
}

form {
    z-index: 10;
}`

const FormWrap = styled.div`

input {
    margin-top: 2rem;
    padding: 1rem 1.5rem; 
    outline: none; 
    width: 350px; 
    height: 50px; 
    border-radius: 50px;
    border: none; 
    margin-right: 1rem;
}

@media screen and (max-width: 768px) {
    display: flex; 
    flex-direction: column;
    padding: 0 1rem; 

    input {
        margin-bottom: 1rem;
        width: 100%;
        margin-right: 1rem;
    }
}
`
