import React from 'react'
import styled from 'styled-components'
import { IoStatsChart } from 'react-icons/io5'
import { themeColor, hoverEffect } from '../utils/theme'

function Earnings() {
  return (
    <EarningsCard>
      <CardContent>
        <Chart>
          <IoStatsChart />
        </Chart>
        <EarningsText>Earnings</EarningsText>
        <Earning>$10,234</Earning>
        <EarningsIncrease>+ 10% since last month</EarningsIncrease>
      </CardContent>
    </EarningsCard>
  )
}

const EarningsCard = styled.div`
  height: 100%;
  width: 14rem;
  background-color: ${themeColor};
  padding: 1.5rem;
  border-radius: 1rem;
  color: white;
  transition: 0ms.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
`
const CardContent = styled.div`
  margin: 1rem;
`
const Chart = styled.div`
  display: flex;
  justify-content: center;
  svg {
    height: 3rem;
    width: 3rem;
  }
`
const EarningsText = styled.h3`
  text-align: center;
  font-weight: normal;
  padding: 0.4rem 0;
`
const Earning = styled.h2`
  text-align: center;
`
const EarningsIncrease = styled.h5`
  text-align: center;
  font-weight: normal;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  border-radius: 2rem;
`
// const EarningsCard = styled.div``

export default Earnings
