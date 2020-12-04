import Link from 'next/link'
import React, { FC } from 'react'
import styled from 'styled-components'

export const BlogList: FC<{ id: string; date: string; title: string }> = ({
  id,
  date,
  title
}) => {
  return (
    <Link href={`/blog/${id}`}>
      <StyledBlogList>
        <h4>{title}</h4>
        <p>{date}</p>
      </StyledBlogList>
    </Link>
  )
}

const StyledBlogList = styled.div`
  color: ${props => props.theme.highlight};
  background: ${props => props.theme.header};
  border-bottom: 1px solid ${props => props.theme.border};
  padding: 20px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.highlight};
    opacity: 0.8;
  }
`
