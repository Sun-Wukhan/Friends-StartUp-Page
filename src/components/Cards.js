import React from 'react'
import styled from 'styled-components';
import Tilt from "react-parallax-tilt";


const Cards = ({background, date, title, body}) => {
  return (
    <Tilt>
      <CardWrapper>
        <CardImage background={background} />
        <CardTextWrapper>
          <CardTextDate>{date}</CardTextDate>
          <CardTextTitle>{title}</CardTextTitle>
          <CardTextBody>
            {body}
          </CardTextBody>
        </CardTextWrapper>
        <CardStatWrapper>
          {/* <CardStats>
            <div>
              1<sup>m</sup>
            </div>
            <div>read</div>
          </CardStats> */}
          <CardStats>
            <LinkText href="#">website</LinkText>
          </CardStats>
          <CardStats>
            <LinkText href="#">github</LinkText>
          </CardStats>
        </CardStatWrapper>
      </CardWrapper>
    </Tilt>
  )
}

export default Cards

const CardWrapper = styled.div`
  margin-top: 2rem;
  display: grid;
  width: 100%; 
  grid-template-columns: 300px;
  grid-template-rows: 210px 210px 80px;
  grid-template-areas: "image" "text" "stats";
  border-radius: 18px;
  text-align: center;
  border: solid 1px black; 

  @media screen  and (max-width: 1000px){
  margin-top: 3rem;
  } 
`;

const CardImage = styled.div`
  grid-area: image;
  background-image: url(${({ background }) => background});
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const CardTextWrapper = styled.div`
  grid-area: text;
  margin: 25px;
`;

const CardTextDate = styled.span`
  color: rgb(0, 0, 0, 0.9);
  font-size: 13px;
`;

const CardTextTitle = styled.h2`
  margin-top: 0px;
  font-size: 2rem;
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.2;
  margin: 0px;
  background: linear-gradient(
    110.78deg,
    rgb(0, 0, 0, 0.9) -1.13%,
    rgb(0, 0, 0, 0.9) -1.13%,
    rgb(0, 0, 0, 0.9) -1.13%,
    rgb(0, 0, 0, 0.9) -1.13%,
    rgb(0, 0, 0, 0.9) -1.13%
    
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const CardTextBody = styled.p`
  color: grey;
  font-size: 15px;
  font-weight: 300;
`;

const CardStatWrapper = styled.div`
  grid-area: stats;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;

  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: #9dc5c3;
  background-image: linear-gradient(315deg, #9dc5c3 0%, #5e5c5c 74%);
`;

const CardStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  padding: 10px;
`;

const LinkText = styled.a`
  color: #fff;
  text-decoration: none;
`;
