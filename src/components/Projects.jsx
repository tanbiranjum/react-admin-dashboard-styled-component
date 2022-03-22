import React from 'react'
import styled from 'styled-components'
import { cardShadow, themeColor, hoverEffect } from '../utils/theme'

import AvatarImage from '../assets/avatarImage2.jpg'
import AvatarImage2 from '../assets/avatarImage3.jpg'

function Projects() {
  return (
    <YourProjects>
      <Project>
        <Avatar>
          <img src={AvatarImage} alt="" />
        </Avatar>
        <Detail>
          <Title>Logo Design for company</Title>
          <Subtitle>One day remaining</Subtitle>
        </Detail>
      </Project>
      <Project>
        <Avatar>
          <img src={AvatarImage2} alt="" />
        </Avatar>
        <Detail>
          <Title>Personal branding projects</Title>
          <Subtitle>5 days remaining</Subtitle>
        </Detail>
      </Project>
      <AllProjects>See all your projects</AllProjects>
    </YourProjects>
  )
}

const YourProjects = styled.div`
  height: 70%;
  background-color: white;
  margin: 0;
  padding: 1.5rem 1rem;
  border-radius: 1rem;
  box-shadow: ${cardShadow};
  transition: 0ms.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
`

const Project = styled.div`
  display: flex;
  align-items: center;
  /* margin-bottom: 0.2rem; */
`
const Avatar = styled.div`
  img {
    height: 4rem;
    width: 4rem;
    border-radius: 4rem;
  }
`
const Detail = styled.div`
  margin-left: 1rem;
`
const Title = styled.h3`
  font-size: 1rem;
  font-weight: 500;
`
const Subtitle = styled.h5`
  font-weight: 300;
`
const AllProjects = styled.h5`
  text-align: end;
  color: ${themeColor};
`

export default Projects
