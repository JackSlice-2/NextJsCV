'use client';

import React, { useState } from 'react'
import { styled } from 'styled-components'
import Navbar from '../../../components/Navbar';
import LinkTable from './LinkTable';
import Link from 'next/link';


const data = [
    "ReactJs",
    "CSS",
    "TypeScript",
    "Python",
    "Databases",
    "LinuxOS"
];

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`;

const Container = styled.div`
height: 100vh;
scroll-snap-align: center;
width: 1400px;
display: flex;
justify-content: space-between;
`;

const Left = styled.div`
flex: 2;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
`;
const Title = styled.h1`
font-size: 74px;
`;
const WhatWeDo = styled.div`
display: flex;
align-items: center;
gap: 10px;
`;
const Line = styled.img`
height: 5px;
`;
const Subtitle = styled.h2`
color: pink;
`;
const Desc = styled.p`
font-size: 24px;
color: lightgray;
`;
const Button = styled.button`
background-color: darkblue;
color: white;
font-weight: 500;
width: 150px;
padding: 5px;
border: none;
border-radius: 5px;
cursor: pointer;
`;

const Right = styled.div`
flex: 3;
position: relative;
`;
const Img = styled.img`
width: 1100px;
height: 850px;
object-fit: contain;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
margin: auto;
z-index: 1;
`;


const ImgWaves = styled.img`
  width: 1100px;
  height: 850px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0; /* Corrected the value here */
  right: 0;
  margin: auto;
  z-index: 2;
  animation: zoomEffect 5s infinite;
  
  @keyframes zoomEffect {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;
const List = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
gap: 20px;
`;
const ListItem = styled.li`
font-size: 40px;
font-weight: bold;
cursor: pointer;
color: gray;
-webkit-text-stroke: 1px gray;
position: relative;

    &::after{
        content: "${(props)=> JSON.stringify(props.text)}";
        position: absolute;
        font-size: 60px;
        top: 0;
        left: 0;
        color: darkblue;
        width: 0px;
        overflow: hidden;
        white-space: nowrap;
        -webkit-text-stroke: 1px darkblue;
        }

        &:hover {
            &::after{
                animation: moveText 0.5s linear both;

                @keyframes moveText {
                    to{
                        width: 100%;
                    }
                }
            }
        }
`;

const TableWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: -80px;
  width: 50px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4;
`;

const Hero = () => {
    const [selectedWork, setSelectedWork] = useState(null);

    const setWork = (item) => {
      setSelectedWork(item);
    };
  return (
    <Section>
        <Navbar />
            <Container>
                <Left>
                    <Title>&ldquo;Explore .&rdquo;</Title>
                    <WhatWeDo>
                        <Line src="./img/line.png" />
                        <Subtitle>Documentations</Subtitle>
                    </WhatWeDo>
                    <List>
                {data.map((item) => (
                    <ListItem key={item} text={item} onClick={()=>setWork(item)} >
                        {item}
                    </ListItem>
                ))}
                </List>
                  <Link href="/links/morelinks">
                    <Button>More Links</Button>
                  </Link>    
                </Left>
                <Right>
                    <Img src="./img/hacker2.png"/>
                    <ImgWaves src='./img/waves.png' />
                    <TableWrapper>
                      {selectedWork && <LinkTable selected={selectedWork} />}
                    </TableWrapper>
                    </Right>
            </Container>
    </Section>
  )
}

export default Hero