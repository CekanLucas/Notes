<head>
  <link 
      rel="stylesheet" 
      type="text/css" 
      media="all" 
      href="./color.css"/>
  <link 
      rel="stylesheet" 
      type="text/css" 
      media="all" 
      href="./CSS.css"/>
  <link 
      href="https://fonts.googleapis.com/css?family=Fira+Mono:500&display=swap" 
      rel="stylesheet">

<style> 

html>body, p {
  font-family: ubuntu;
  font-size: 1.1em;
  text-shadow:none;
}
h2>code, p>code, li>code, div>code {
    background-color: #09A;
    border-radius: 7px;
    box-shadow: 
      1px 1px 1px #000,
      -1px -1px 1px #FFF,
      -1px 1px 2px #000,
      1px -1px 2px #000;
    color: #00f;
    margin: 5px;
    padding: 2px;
    font-family: 'Fira Mono', monospace;
    text-shadow:none;
    font-size:0.8em
}
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
.react {
  color:skyblue;
  font-weight:bolder;
}
</style>
</head>    

# <span class="react">React</span> <small>Updated</small>


``` js
import React from "react";

function Tweet() {
  return React.createElement(
    "article",
    {
      className: "tweet"
    },
    React.createElement(
      "header",
      {
        className: "tweet__header"
      },
      React.createElement("img", {
        className: "tweet__header-avatar",
        src: "https://api.adorable.io/avatars/64/react@adorable.png",
        alt: "Avatar"
      }),
      React.createElement(
        "h2",
        {
          className: "tweet__header-name"
        },
        "React"
      )
    ),
    React.createElement(
      "main",
      {
        className: "tweet__content"
      },
      React.createElement(
        "p",
        null,
        "A JavaScript library for building user interfaces"
      )
    ),
    React.createElement(
      "footer",
      {
        className: "tweet__footer"
      },
      "May 29th, 2013"
    )
  );
}

```

>This is why we have to import <span class="react">React</span> from 'react' even when we don't see a reference to <span class="react">React</span> anywhere in the file. When the JSX is converted to JavaScript the dependency on <span class="react">React</span> is revealed.

[Back](./ReactNew.md)