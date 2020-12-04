import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

export const Container: FC<{ children: ReactNode }> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}

const StyledContainer = styled.div`
  background: ${props => props.theme.bg};
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`
