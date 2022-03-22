import React from 'react'
import styled from 'styled-components'
import { cardShadow, themeColor, hoverEffect } from '../utils/theme'
import Badge from './Badge'

function Info() {
  return (
    <InfoCard>
      <Card>
        <CardContent>
          <Row>
            <Digit>98</Digit>
            <InfoContainer>
              <Title>Rank</Title>
              <Subtitle>In top 20%</Subtitle>
            </InfoContainer>
          </Row>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Row>
            <Digit>32</Digit>
            <InfoContainer>
              <Title>Projects</Title>
              <Subtitle>8 this month</Subtitle>
            </InfoContainer>
          </Row>
          <Row justify>
            <Badge content="mobile app" glow />
            <Badge content="branding" glow />
          </Row>
        </CardContent>
      </Card>
    </InfoCard>
  )
}

const InfoCard = styled.div`
  height: 100%;
  width: 14rem;
  background-color: white;
  border-radius: 1rem;
  padding: 1.5rem;
  color: white;
  box-shadow: ${cardShadow};
  transition: 0ms.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
`
const Card = styled.div`
  background-color: rgba(183, 194, 243, 0.3);
  border-radius: 1rem;
  margin-bottom: 0.5rem;
  /* display: flex; */
`
const CardContent = styled.div`
  padding: 0.2rem 0.7rem 1rem 0.3rem;
`
const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.4rem;

  ${({ justify }) =>
    justify &&
    `
  justify-content: space-around;
  width: 90%;
  `}
`
const Digit = styled.div`
  background-color: ${themeColor};
  padding: 0.6rem 0.8rem;
  font-size: 1.2rem;
  border-radius: 1rem;
`
const InfoContainer = styled.div`
  margin-left: 0.7rem;
`
const Title = styled.h3`
  color: black;
`
const Subtitle = styled.h5`
  color: #333333;
  font-weight: normal;
`

export default Info
