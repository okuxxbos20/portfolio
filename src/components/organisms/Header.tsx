import Link from 'next/link'
import React, { FC, useContext } from 'react'
import styled from 'styled-components'
import { SunIcon, MoonIcon } from '../atoms'
import { lightTheme } from '../../styles'
import { ThemeContext } from '../../pages/_app'

export const Header: FC = () => {
  const { currentTheme, dispatch } = useContext(ThemeContext)
  return (
    <>
      <StyeldHeader>
        <Link href="/">
          <Title>o_ku</Title>
        </Link>
        <RightSide>
          <Link href="/blog">
            <RightItem link="/blog" label="blog" />
          </Link>
          {currentTheme === lightTheme ? (
            <ThemeIcon onClick={() => dispatch({ type: 'DARK' })}>
              <SunIcon />
            </ThemeIcon>
          ) : (
            <ThemeIcon onClick={() => dispatch({ type: 'LIGHT' })}>
              <MoonIcon />
            </ThemeIcon>
          )}
        </RightSide>
      </StyeldHeader>
    </>
  )
}

const RightItem: FC<{ link: string; label: string }> = ({ link, label }) => {
  return (
    <Link href={link}>
      <Item>{label}</Item>
    </Link>
  )
}

const StyeldHeader = styled.header`
  background: ${props => props.theme.header};
  width: calc(100% - 20px);
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
  color: ${props => props.theme.headerContents};
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Item = styled.p`
  color: ${props => props.theme.headerContents};
  line-height: 30px;
  transition: 200ms;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
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
    transform: scale(1.1);
  }
  &:focus {
    outline: none;
  }
`
