---
title: 'Two Forms of Pre-rendering'
date: '2020-01-01'
---

# Heading2

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed felis sed erat scelerisque hendrerit at non tellus. Duis consectetur velit nisi, non imperdiet nunc euismod nec. Maecenas nunc tortor, dictum vel venenatis aliquam, condimentum eu nulla.

In hac habitasse platea dictumst.

Donec commodo dui ac urna maximus, at eleifend tellus ornare. Vivamus sollicitudin fringilla nunc id mattis. Vestibulum erat nunc, dignissim vel vestibulum id, commodo sit amet ante. Integer volutpat ullamcorper augue bibendum hendrerit. Fusce massa nunc, ultricies non sem ac, tincidunt aliquet erat. Cras id scelerisque nibh. Praesent interdum ullamcorper accumsan. Ut sollicitudin tristique tortor nec gravida. Mauris scelerisque gravida tristique. Vivamus et convallis dui. Nulla rhoncus neque a ligula porttitor varius.

```typescript
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
```
