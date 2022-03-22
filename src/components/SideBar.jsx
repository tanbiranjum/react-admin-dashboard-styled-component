import React from 'react'
import styled from 'styled-components'

import Badge from './Badge'
import { darkThemeColor } from '../utils/theme'

import { RiHomeLine, RiFileCopyLine } from 'react-icons/ri'
import { FaWallet } from 'react-icons/fa'
import { AiOutlinePieChart } from 'react-icons/ai'

import profileImage from '../assets/profile-pic.png'

function SideBar() {
  return (
    <Container>
      <ProfileContainer>
        <Avatar src={profileImage} />
        <Name>Md. Tanbir Anjum</Name>
        <Badge content="pro level" />
      </ProfileContainer>
      <LinksContainer>
        <Links>
          <Link>
            <RiHomeLine />
            <h3>Dashboard</h3>
          </Link>
          <Link>
            <RiFileCopyLine />
            <h3>Projects</h3>
          </Link>
          <Link>
            <FaWallet />
            <h3>Invoices</h3>
          </Link>
          <Link>
            <AiOutlinePieChart />
            <h3>Reports</h3>
          </Link>
          <Link>
            <RiHomeLine />
            <h3>Dashboard</h3>
          </Link>
          <ContactContainer>
            <span>Having troubles?</span>
            <a href="#">Contact us</a>
          </ContactContainer>
        </Links>
      </LinksContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 20%;
  height: 100% !important;
  border-radius: 2rem;
  background-color: #091322;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Avatar = styled.img`
  height: 5rem;
  border-radius: 6rem;
  margin-top: 15%;
`

const Name = styled.h1`
  color: white;
  font-size: 1.3rem;
  font-weight: 400;
  margin: 0.8rem 0 0.5rem 0;
`

const LinksContainer = styled.div`
  background-color: ${darkThemeColor};
  height: 100%;
  width: 100%;
  border-radius: 2rem;
`

const Links = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  height: 40%;
`
const Link = styled.li`
  margin-left: 25%;
  margin-bottom: 1.2rem;
  align-items: center;
  color: white;
  display: flex;
  gap: 1rem;
  cursor: pointer;

  h3 {
    font-weight: 300;
    font-size: 1.2rem;
  }

  svg {
    font-size: 1.1rem;
    margin-top: 3%;
  }
`

const ContactContainer = styled.div`
  width: 60%;
  background-color: #091322;
  color: #c4c4c4;
  margin: auto auto;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  text-align: center;
  font-size: 0.8rem;

  a {
    color: white;
    text-decoration: none;
  }
`

export default SideBar
