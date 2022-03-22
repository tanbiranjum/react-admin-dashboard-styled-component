import React from 'react'
import styled from 'styled-components'
import {
  cardShadow,
  darkThemeColor,
  themeColor,
  hoverEffect,
} from '../utils/theme'
import AvatarImage from '../assets/avatarImage4.jpg'
import Badge from './Badge'

// import { FaSlack } from 'react-icons/fa'

function ProjectRecommendation() {
  return (
    <RecommendProject>
      <CardContent>
        <Detail>
          <InfoContainer>
            <Avatar>
              <img src={AvatarImage} alt="" />
            </Avatar>
            <Info>
              <InfoName>Thomas Martin</InfoName>
              <InfoUpdate>Updated 10min ago</InfoUpdate>
            </Info>
          </InfoContainer>
          <Badge content="Design" />
        </Detail>
        <Title>
          Need a designer to form branding essentials for my business
        </Title>
        <ProjectInfo>
          Looking for a talented brand designer to create all the branding
          materials for my new materials for my new startup
        </ProjectInfo>
        <PriceContainer>
          <Price>$8700/month</Price>
          <Badge content="Full Time" clean />
        </PriceContainer>
      </CardContent>
    </RecommendProject>
  )
}

const RecommendProject = styled.div`
  border-radius: 0.9rem;
  height: 145%;
  padding: 0.5rem;
  background-color: white;
  /* width: 27.5vw; */
  box-shadow: ${cardShadow};
  transition: 0ms.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
`
const CardContent = styled.div`
  margin: 0.4rem;
`
const Detail = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const InfoContainer = styled.div`
  display: flex;
  align-items: center;
`
const Avatar = styled.div`
  margin-right: 1rem;
  img {
    height: 3rem;
    border-radius: 5rem;
  }
`
const Info = styled.div``
const InfoName = styled.h3`
  font-size: 1rem;
  font-weight: 500;
`
const InfoUpdate = styled.h5`
  font-size: 0.6rem;
  font-weight: 500;
`
const Title = styled.h4`
  font-size: 0.9rem;
  font-weight: 500;
`
const ProjectInfo = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.7rem;
  color: #3b3b3b;
  margin-bottom: 0.5rem;
`
const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0.5rem;
  padding: 0.5rem;
  border-radius: 1rem;
  background-color: rgba(146, 166, 255, 0.3);
`
const Price = styled.div``

export default ProjectRecommendation
