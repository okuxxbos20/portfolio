import React, { FC } from 'react'
import { Header, Main, Container } from '../../components/organisms'
import { getAllPostIds, getPostData } from '../../lib/blog'
import styled from 'styled-components'

const Blog: FC<{ blogData }> = ({ blogData }) => {
  console.log(blogData)
  return (
    <>
      <Header />
      <Main>
        <Container>
          <BlogHeader>
            <h1>{blogData.title}</h1>
            <p>{blogData.id}</p>
            <p>{blogData.date}</p>
          </BlogHeader>
          <BlogBody>
            <div dangerouslySetInnerHTML={{ __html: blogData.contentHtml }} />
          </BlogBody>
        </Container>
      </Main>
    </>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const blogData = await getPostData(params.id)
  return {
    props: {
      blogData
    }
  }
}

export default Blog

const BlogHeader = styled.div`
  /* background: #ddd; */
  width: calc(100% - 60px);
  padding: 15px 30px 20px;
  border-bottom: 1px solid ${props => props.theme.border};
`

const BlogBody = styled.div`
  /* background: #ddd; */
  width: calc(100% - 60px);
  padding: 15px 30px 20px;
  border-bottom: 1px solid ${props => props.theme.border};
`
