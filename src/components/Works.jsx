import React from 'react'
import { keyframes, styled } from 'styled-components'

// 
const skills = [
  'JavaScript',
  'TypeScript',
  'Node.js',
  'React',
  'Three.js'
]

const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const moveTextKeyframes = keyframes`
    to {
      width: 100%;
    }
  `;

const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  ::after {
    content: "${props => props.text}"; 
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: ${moveTextKeyframes} 0.5s linear both;
    }
  }
`

const Right = styled.div`
  flex: 1;
`

const Works = () => {
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {skills.map((item) => {
              return (
                <ListItem key={item}>
                  {item}
                </ListItem>
              ) 
            })}
          </List>
        </Left>
        <Right></Right>
      </Container>
    </Section>
  )
}

export default Works