<head>
  <link 
    href="https://fonts.googleapis.com/css?family=Fira+Mono:500&display=swap" 
    rel="stylesheet">
  <link rel="stylesheet" href="../CSS.css">
  <script src="../CSS.js"></script>
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
/* Themes */
h1, h2, h3, h4, h5, h6 {
  color: azure; !important
}
</style>
</head>    
<div id="stack-container">
  <!-- <a href=""><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" alt="Logo"></a> -->
  <a href="https://nx.dev/getting-started/integrated-repo-tutorial">
    <svg role="img" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="azure"><title>Nx</title><path d="m12 14.1-3.1 5-5.2-8.5v8.9H0v-15h3.7l5.2 8.9v-4l3 4.7zm.6-5.7V4.5H8.9v3.9h3.7zm5.6 4.1a2 2 0 0 0-2 1.3 2 2 0 0 1 2.4-.7c.4.2 1 .4 1.3.3a2.1 2.1 0 0 0-1.7-.9zm3.4 1c-.4 0-.8-.2-1.1-.6l-.2-.3a2.1 2.1 0 0 0-.5-.6 2 2 0 0 0-1.2-.3 2.5 2.5 0 0 0-2.3 1.5 2.3 2.3 0 0 1 4 .4.8.8 0 0 0 .9.3c.5 0 .4.4 1.2.5v-.1c0-.4-.3-.5-.8-.7zm2 1.3a.7.7 0 0 0 .4-.6c0-3-2.4-5.5-5.4-5.5a5.4 5.4 0 0 0-4.5 2.4l-1.5-2.4H8.9l3.5 5.4L9 19.5h3.6L14 17l1.6 2.4h3.5l-3.1-5a.7.7 0 0 1 0-.3 2.7 2.7 0 0 1 2.6-2.7c1.5 0 1.7.9 2 1.3.7.8 2 .5 2 1.5a.7.7 0 0 0 1 .6zm.4.2c-.2.3-.6.3-.8.6-.1.3.1.4.1.4s.4.2.6-.3V15z"></path></svg>
  </a>
</div>


# NX - Mono Repos

## Types of Project

Nx monorepos have *two* main types of projects: **package-based** and **integrated**

### Package-based projects:
- These are standalone projects that can be published as a package to a - manager like NPM or Yarn
- They can be built, tested, and deployed independently
- They can be imported into other projects as dependencies
- Examples of package-based projects include libraries, utilities, and frameworks

### Integrated projects: {bdg-primary}`relevant to us`
- These are projects that are not meant to be published as standalone packages
- They are designed to be integrated into other projects within the monorepo
- They can depend on other integrated or package-based projects within monorepo
- Examples of integrated projects include applications, server-side code, build tools

## Getting Started

    npx create-nx-workspace@latest myorg --preset=ts

### Presets

- `--preset` option is used to specify a preset for creating an Nx workspace with a specific set of configurations and plugins
- `--preset=empty` - **default**, which creates an empty workspace with no plugins or configurations

#### Other Presets

`angular` `react` `next` `nest` `web-components` `ts`{bdg-info}`Typescript`

> You can see the latest available presets by running `npx create-nx-workspace --help`

## Generators

    npx nx list
    npx nx generate <generator-name> <project-name>

- `app`: Generates a new application
- `lib`: Generates a new library
- `node`: Generates a new Node.js project [link to doc](https://nx.dev/packages/node)
- `express-app`: Generates a new Express.js application
- `nestjs-app`: Generates a new Nest.js application
- `angular`: Generates a new Angular application
- `react`: Generates a new React application
- `next`: Generates a new Next.js application
- `web-components`: Generates a new web components project