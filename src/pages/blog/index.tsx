import React, { FC } from 'react'
import { BlogList } from '../../components/molecules'
import { Header, Main, Container } from '../../components/organisms'
import { getSortedPostsData } from '../../lib/blog'

const BlogIndex: FC<{ allPostsData }> = ({ allPostsData }) => {
  console.log(allPostsData)
  return (
    <>
      <Header />
      <Main>
        <Container>
          {allPostsData.map(({ id, date, title }) => (
            <BlogList id={id} date={date} title={title} />
          ))}
        </Container>
      </Main>
    </>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default BlogIndex
