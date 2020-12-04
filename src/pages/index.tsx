import React, { FC } from 'react'
import { Header, Main, Container, Footer } from '../components/organisms'

const Index: FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Container>
          <p>this is index</p>
        </Container>
      </Main>
      <Footer />
    </>
  )
}

export default Index
