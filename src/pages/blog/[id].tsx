import React, { FC } from 'react'
import Image from 'next/image'
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
            {blogData.thumbnail && (
              <Image
                src={blogData.thumbnail}
                alt="thumbnail"
                layout="responsive"
                width={15}
                height={9}
                quality={100}
              />
            )}
            <h1>{blogData.title}</h1>
            {blogData.tags && (
              <TagBox>
                {blogData.tags.map((tag: string) => {
                  return <Tag key={tag}>{tag}</Tag>
                })}
              </TagBox>
            )}
            <h4>{blogData.date}</h4>
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
  width: calc(100% - 40px);
  padding: 15px 20px 20px;
  margin-bottom: 30px;
  border-bottom: 1px solid ${props => props.theme.border};
  display: flex;
  flex-direction: column;
  h1 {
    margin: 10px 0;
  }
`

const TagBox = styled.ul`
  float: left;
  margin-bottom: 10px;
`

const Tag = styled.li`
  list-style: none;
  color: ${params => params.theme.highlight};
  background: ${params => params.theme.tagBg};
  border: none;
  border-radius: 3px;
  padding: 5px 10px;
  float: left;
  margin: 0 8px 0 0;
`

const BlogBody = styled.div`
  width: calc(100% - 40px);
  padding: 15px 20px 20px;
  border-bottom: 1px solid ${props => props.theme.border};
  h1 {
    margin-bottom: 30px;
  }
  p {
    color: ${props => props.theme.text};
    font-size: 18px;
    text-align: justify;
    margin-bottom: 30px;
  }
  li {
    margin-left: 20px;
  }
  pre {
    width: calc(100% - 40px);
    background: ${props => props.theme.codeBg};
    padding: 20px;
    overflow-x: scroll;
    margin-bottom: 30px;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    code {
      font-family: Source Code Pro;
      color: ${props => props.theme.codeColor};
    }
  }
`
