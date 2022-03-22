import React from 'react'
import styled from 'styled-components'
import { cardShadow, themeColor, hoverEffect } from '../utils/theme'
import AvatarImage from '../assets/avatarImage5.jpg'
import AvatarImage2 from '../assets/avatarImage6.jpg'

import Badge from './Badge'

function Invoices() {
  return (
    <InvoicesContainer>
      <CardContent>
        <Invoice>
          <Info>
            <Avatar>
              <img src={AvatarImage} alt="" />
            </Avatar>
            <TextContainer>
              <Title>Alexandar Williams</Title>
              <Subtitle>ABC Holdings</Subtitle>
            </TextContainer>
          </Info>
          <Container>
            <Badge content="paid" paid />
            <Price>$ 1,200</Price>
          </Container>
        </Invoice>
        <Invoice>
          <Info>
            <Avatar>
              <img src={AvatarImage2} alt="" />
            </Avatar>
            <TextContainer>
              <Title>Alexandar Williams</Title>
              <Subtitle>ABC Holdings</Subtitle>
            </TextContainer>
          </Info>
          <Container>
            <Badge content="paid" paid />
            <Price>$ 1,200</Price>
          </Container>
        </Invoice>
      </CardContent>
    </InvoicesContainer>
  )
}

const InvoicesContainer = styled.div`
  width: 35rem;
  border-radius: 1rem;
  margin-top: 1rem;
  background-color: white;
  height: 150%;
  padding: .5rem;
  box-shadow: ${cardShadow};
  transition: 0ms.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
`
const CardContent = styled.div``
const Invoice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.4rem;
  padding-top: 0.6rem;
`
const Info = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`
const Avatar = styled.div`
  img {
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 3.5rem;
  }
`

const TextContainer = styled.div`
  margin-right: 1rem;
`

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30%;
  align-items: center;
`

const Title = styled.h4`
font-weight: 600;
  margin-left: 0.5rem;
`

const Subtitle = styled.h5`
  font-weight: 400;
  margin-left: 0.5rem;
`
const Price = styled.div``

export default Invoices
