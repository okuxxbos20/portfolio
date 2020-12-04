// import Link from 'next/link'
import React, { FC, useContext } from 'react'
import styled from 'styled-components'
import { GithubIcon, TwitterIcon } from '../atoms'
import { ThemeContext } from '../../pages/_app'

export const Footer: FC = () => {
  const theme = useContext(ThemeContext).currentTheme
  return (
    <>
      <StyledFooter>
        <FooterContainer>
          <FooterIconBox>
            <GithubIcon color={theme.headerContents} />
            <TwitterIcon color={theme.headerContents} />
          </FooterIconBox>
        </FooterContainer>
      </StyledFooter>
    </>
  )
}

const StyledFooter = styled.div`
  background: ${props => props.theme.bg};
  width: 100%;
  padding: 40px 0;
`

const FooterContainer = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 20px;
  margin: 0 auto;
  border-top: 1px solid ${props => props.theme.border};
`

const FooterIconBox = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

// const FooterItem: FC<{ child: React.Node }> = ({ child }) => {
//   return <FooterIcon>{child}</FooterIcon>
// }
