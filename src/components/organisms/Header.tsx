import Link from 'next/link'
import React, { FC, useContext } from 'react'
import styled from 'styled-components'
import { SunIcon, MoonIcon } from '../atoms'
import { lightTheme } from '../../styles'
import { ThemeContext } from '../../pages/_app'

export const Header: FC = () => {
  const { currentTheme, dispatch } = useContext(ThemeContext)

  const switchThemeType = (): void => {
    if (currentTheme === lightTheme) {
      dispatch({ type: 'LIGHT' })
      console.log('yooooo')
    } else {
      dispatch({ type: 'DARK' })
      console.log('hiiiiii')
    }
  }
  return (
    <>
      <StyeldHeader>
        <Link href="/">
          <Title>o_ku</Title>
        </Link>
        <RightSide>
          <ThemeIcon onClick={() => switchThemeType()}>
            {currentTheme === lightTheme ? (
              <SunIcon size="25px" color="#f7ca18" />
            ) : (
              <MoonIcon size="25px" color="#f7ca18" />
            )}
          </ThemeIcon>
        </RightSide>
      </StyeldHeader>
    </>
  )
}

const StyeldHeader = styled.header`
  background: ${props => props.theme.header};
  width: 100%;
  height: 40px;
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
const Title = styled.p`
  color: ${props => props.theme.headerContents};
  &:hover {
    cursor: pointer;
  }
`

const RightSide = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const ThemeIcon = styled.button`
  background: transparent;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    background: ${props => props.theme.headerContents};
  }
  &:focus {
    outline: none;
  }
`
