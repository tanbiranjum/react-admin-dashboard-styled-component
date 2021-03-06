import React from 'react'
import styled from 'styled-components'
import Earnings from './Earnings'
import Info from './Info'
import Invoices from './Invoices'
import JoinSlack from './JoinSlack'
import NavBar from './NavBar'
import ProjectRecommendation from './ProjectRecommendation'
import Projects from './Projects'

function MainContent() {
  return (
    <Container>
      <NavBar />
      <SubContainer>
        <SectionOne>
          <ColumnOne1>
            <Earnings />
            <Info />
          </ColumnOne1>
          <ColumnTwo1>
            <TitleText>Your Projects</TitleText>
            <Projects />
          </ColumnTwo1>
        </SectionOne>
        <SectionTwo>
          <ColumnOne2>
            <InvoiceContainer>
              <TitleText>Recent Invoices</TitleText>
              <Invoices />
            </InvoiceContainer>
            <JoinSlack />
          </ColumnOne2>
          <ColumnTwo2>
            <TitleText>Recommended Project</TitleText>
            <ProjectRecommendation />
          </ColumnTwo2>
        </SectionTwo>
      </SubContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 80%;
  background: linear-gradient(to bottom right, white 0% right, #e6e4ff 70%);
  border-bottom-right-radius: 2rem;
  border-top-right-radius: 2rem;
  margin: 1rem 8rem 1rem 4rem;
`
const SubContainer = styled.div`
  margin: 0.5rem 0;
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`
const TitleText = styled.h3`
  height: 20%;
`
const SectionOne = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40%;
  gap: 1rem;
  width: 100%;
`
const SectionTwo = styled.div`
  display: flex;
  gap: 2rem;
  height: 26vh;
`
const ColumnOne1 = styled.div`
  display: flex;
  gap: 1.5rem;
`
const ColumnOne2 = styled.div``

const InvoiceContainer = styled.div`
  height: 60%;
`

const ColumnTwo1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 115%;
  width: 100%;
`
const ColumnTwo2 = styled.div``
// const Container = styled.div``
// const Container = styled.div``

export default MainContent
