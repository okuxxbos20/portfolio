import React, { FC } from 'react'
import styled from 'styled-components'

export const Header: FC = () => {
  return (
    <>
      <StyeldHeader>
        <Title>o_ku</Title>
      </StyeldHeader>
    </>
  )
}

const StyeldHeader = styled.header`
  color: ${props => props.theme.secondary};
  background: ${props => props.theme.main};
  width: 100%;
  height: 40px;
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
const Title = styled.p`
  color: #f7f7f7;
  &:hover {
    cursor: pointer;
  }
`
