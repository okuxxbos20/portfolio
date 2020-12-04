import React, { FC } from 'react'
import styled from 'styled-components'

export const Main: FC<{ children: any }> = ({ children }) => {
  return <StyledMain>{children}</StyledMain>
}

const StyledMain = styled.div`
  width: 100%;
  // temporary
  height: 100vh;
  color: ${props => props.theme.text};
  background: ${props => props.theme.bg};
`
