import React from 'react'
import styled from 'styled-components'

import { themeColor } from '../utils/theme'

function Badge({ content }) {
  return <Div>{content}</Div>
}

const Div = styled.div`
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  font-weight: 500;
  color: white;
  background-color: ${themeColor};
  cursor: pointer;
`

export default Badge
