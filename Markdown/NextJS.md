<head>
 
  <link 
    href="https://fonts.googleapis.com/css?family=Fira+Mono:500&display=swap" 
    rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<style> 
body ::selection {
  /*highlighting*/
  background: transparent;
  text-shadow: 
    1px  0px 1px ,
    0px  1px 1px ,
    -1px  0px 1px ,
    0px -1px 1px ,
    0px  1px black ,
    1px  0px black ,
    -1px  0px black ,
    0px -1px black ;
  text-outline: black;  
}

</style>
</head>    
<div id="stack-container">
  <a href=""><img src="https://cdn.worldvectorlogo.com/logos/next-js.svg" alt="Logo"></a>
</div>

# <small class="Grey">NextJS</small>

## CSS Styling
You can use a library called <a href="https://github.com/vercel/styled-jsx"><b class="Teal">styled-jsx</b></a>. It’s a <b class="Aqua">CSS-in-JS</b> library — it lets you write CSS within a React component, and the CSS styles will be scoped (other components won’t be affected) other similiar libraries are <a href="https://github.com/vercel/next.js/tree/canary/examples/with-styled-components"><b class="Violet">styled-components</b></a> or <a href="https://github.com/vercel/next.js/tree/canary/examples/with-emotion"><b class="Violet">emotion</b></a>
<a href=""><b class="Violet"></b></a>
```jsx
<style jsx>{``}</style>
```
Inside component folder we use <a href="https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css">CSS modules</a> which syntax for file is `component.module.css`

```jsx
import styles from './layout.module.css'

export default function Layout({ children }) {
  return <div className={styles.container}>{children}</div>
}
```
### Global Styles <a href="https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet"><small>Link</small></a>

### Styling Tips 

Use [classnames](https://github.com/JedWatson/classnames) library to toggle class names easily

Out of the box NextJS uses PostCSS

To use NextJS inbuilt support for sass 

    npm install sass 

## <a href="https://nextjs.org/docs/basic-features/pages#pre-rendering">Pre Rendering</a> and <a href="https://nextjs.org/docs/basic-features/data-fetching">Data Fetching</a>
By default NextJS prerenders all html and static assets rather than relying in the client to do it. This results in better performance and SEO 

There are two forms of pre-rendering that NextJS engages in 
  1. <a href="https://nextjs.org/docs/basic-features/pages#static-generation-recommended">Static Generation</a> generates the HTML at <b class="Orange">build time</b> then after the pre rendered HTML is then **reused** on each request
  1. <a href="https://nextjs.org/docs/basic-features/pages#server-side-rendering">Server side Rendering</a> used to generate HTML on ***each request***

### Static Generation with Data using <small>`getStaticProps`</small>

When you export a page component, you can also export an async function called `getStaticProps`. If you do this, then:

- `getStaticProps` runs at build time in production, and…
- Inside the function, you can fetch external data and send it as props to the page.

```jsx
export default function Home(props) { ... }

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = ...

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: ...
  }
}
```
Essentially, `getStaticProps` allows you to tell Next.js: *Hey, this page has some data dependencies — so when you pre-render this page at build time, make sure to resolve them first!*

> **Note**: In development mode, `getStaticProps` runs on each request instead.

### Fetch External API 
```jsx
export async function getSortedPostsData() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  const res = await fetch('..')
  return res.json()
}
```
> **Note**: Next.js polyfillls `fetch()` on both client and server so you dont have to import it

### Query Database
```jsx
import someDatabaseSDK from 'someDatabaseSDK'

const databaseClient = someDatabaseSDK.createClient(...)

export async function getSortedPostsData() {
  // Instead of the file system,
  // fetch post data from a database
  return databaseClient.query('SELECT posts...')
}
```
<span class="BlueViolet">This is possible becuase `getStaticProps` only works on the **server side** It will never run on the client-side. It won’t even be included in the JS bundle for the browser. That means you can write code such as direct database queries without them being sent to browsers. </span>

<img src="https://nextjs.org/static/images/learn/data-fetching/server-side-rendering-with-data.png" alt="">

to use serverside rendering instead of `getStaticProps` you need to `getServerSideProps` instead

```jsx 
export async function getServerSideProps(context) {
  return {
    props: {
      // props for your component
    }
  }
}
```
<img src="https://nextjs.org/static/images/learn/data-fetching/client-side-rendering.png" alt="">

> **Note:** The Next team had created a React hook for data fetching called <a href="https://swr.vercel.app/">SWR</a> handles caching, revalidation, focus tracking, refetching on interval, and more. 

# Dynamic Routes
- How to statically generate pages with dynamicroutes - using getStaticPaths
- How to write getStaticProps to fetch the data for each blog post
- How to render markdown using remark
- How to pretty-print date strings
- How to link to a page with dynamic routes
- Some useful information on dynamic routes

To render Markdown 

    npm i remark remark-html

## Fetch External API or Query Database
```jsx 
export async function getAllPostIds() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  const res = await fetch('..')
  const posts = await res.json()
  return posts.map(post => {
    return {
      params: {
        id: post.id
      }
    }
  })
}
```

Rememeber just like with `getStaticProps` `getStaticPaths` runs on every request however in ***production*** it run at *build time*

Dynamic Routes
Dynamic Routes Details

Here is some essential information you should know about dynamic routes.
Fetch External API or Query Database

Like getStaticProps, getStaticPaths can fetch data from any data source. In our example, getAllPostIds (which is used by getStaticPaths) may fetch from an external API endpoint:

export async function getAllPostIds() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  const res = await fetch('..')
  const posts = await res.json()
  return posts.map(post => {
    return {
      params: {
        id: post.id
      }
    }
  })
}

Development v.s. Production

    In development (npm run dev or yarn dev), getStaticPaths runs on every request.
    In production, getStaticPaths runs at build time.

### Fallback

Recall that we returned `fallback: false` from getStaticPaths. What does this mean?

If <a href="https://nextjs.org/docs/basic-features/data-fetching#fallback-false">fallback is false</a>, then any paths not returned by getStaticPaths will result in a <b class="Grey">404 page</b>

<span class="SkyBlue">If fallback is true, then the behavior of getStaticProps changes:</span>

- The paths returned from getStaticPaths will be rendered to HTML at build time.
- The paths that have not been generated at build time will not result in a 404 page. Instead, Next.js will serve a “fallback” version of the page on the first request to such a path.
- In the background, Next.js will statically generate the requested path. Subsequent requests to the same path will serve the generated page, just like other pages pre-rendered at build time.

If fallback is blocking, then new paths will be server-side rendered with getStaticProps, and cached for future requests so it only happens once per path.

## Catch-all Routes
Use the spread operator `...` to extend and catch all paths for certain route

<span class="Orange">`pages/posts/[...id].js` matches `/posts/a`, but also `/posts/a/b`, `/posts/a/b/c` and so on. If you do this, in `getStaticPaths`, you must return an array as the value of the id key like so:</span>

```jsx
return [
  {
    params: {
      // statically generates /posts/a/b/c
      id: ['a', 'b', 'c']
    }
  }
  // ...
]
```
## <a href="https://nextjs.org/docs/api-reference/next/router">Router</a>
If you want to access the Next.js router, you can do so by importing the `useRouter` hook from next/router

## 404 page
```jsx
// pages/404.js
export default function Custom404() {
  return <h1>404 - Page Not Found</h1>
}
```
<a href="https://nextjs.org/docs/advanced-features/custom-error-page">Learn more</a>

## More Examples
<large><b class="FireBrickRed">
  <a href="https://github.com/vercel/next.js/tree/canary/examples/blog-starter">Blog Starter using markdown files</a>
  <a href="https://github.com/vercel/next.js/tree/canary/examples/cms-wordpress">Wordpress example</a>
  <a href="https://github.com/vercel/next.js/tree/canary/examples/cms-datocms">DatoCMS example</a>
  <a href="https://github.com/vercel/next.js/tree/canary/examples/cms-takeshape">TakeShape example</a>
  <a href="https://github.com/vercel/next.js/tree/canary/examples/cms-sanity">Sanity example</a>
</b></large>

# API Routes
- How to create an API Route
- Some useful information on <a href="https://nextjs.org/docs/api-routes/introduction">API Routes</a>

## Creating API Routes
```jsx
// req = HTTP incoming message
// res = HTTP server response 
export default function handler(req, res) {
  // ...
}
```
### A good use case: Handling Form Input
A good use case for API Routes is handling form input. For example, you can create a form on your page and have it send a `POST` request to your API Route. You can then write code to directly save it to your database. The API Route code will not be part of your client bundle, so you can safely write server-side code.
```jsx
export default function handler(req, res) {
  const email = req.body.email
  // then save email to your database, etc
}
```

## Getting CML Arguments
use `process.argv` to access command line arguments as a array
