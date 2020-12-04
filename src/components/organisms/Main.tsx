import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

export const Main: FC<{ children: ReactNode }> = ({ children }) => {
  return <StyledMain>{children}</StyledMain>
}

const StyledMain = styled.div`
  width: 100%;
  // temporary
  height: 100vh;
  color: ${props => props.theme.text};
  background: ${props => props.theme.bg};
  padding: 50px 0;
`
