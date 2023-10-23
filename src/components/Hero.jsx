import React from 'react'
import { styled } from 'styled-components'
import Navbar from './Navbar'

const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`
const Title = styled.h1`
  font-size: 60px;
  margin: 0;
`

const WhtaWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Line = styled.img`
  height: 5px;
`

const SubTitle = styled.h2`
  color: #da4ea2;
`

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  width: 100px;
  font-weight: 500;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`

const Right = styled.div`
  flex: 3;
  /* position: relative; */
`

// const Img = styled.img`
//   width: 800px;
//   height: 600px;
//   object-fit: contain;
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   margin: auto;
//   animation: animate 2s infinite ease alternative;

//   @keyframes animate {
//     to {
//       transform: translateY(20px)
//     }  
// }
// `

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>BellDev-code Portfolio</Title>
          <WhtaWeDo>
            <Line src="./img/line.png" />
            <SubTitle>Web Front-end Developer</SubTitle>
          </WhtaWeDo>
          <Desc>Description</Desc>
          <Button>Lean More</Button>
        </Left>
        <Right>
          {/* 3D Model */}
          
        </Right>
      </Container>
    </Section>
  )
}

export default Hero