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
  color: #2261a8; !important
}
</style>
</head>    
<div id="stack-container">
  <a href="https://typestrong.org/ts-node/"><img src="https://typestrong.org/ts-node/img/logo-icon.svg" alt="Logo"></a>
</div>

# TS-Node

This is a basically node with typescript attached

```sh
# Execute a script as `node` + `tsc`.
ts-node script.ts

# Starts a TypeScript REPL.
ts-node

# Execute code with TypeScript.
ts-node -e 'console.log("Hello, world!")'

# Execute, and print, code with TypeScript.
ts-node -p -e '"Hello, world!"'

# Pipe scripts to execute with TypeScript.
echo 'console.log("Hello, world!")' | ts-node


```

## Main options

### Transpile Only

**Enables faster TypeScript execution** , by skipping type-checking and other expensive operations. It is useful for development and debugging purposes, especially with large code-bases that can take a long time to compile

```sh
# Equivalent to ts-node --transpileOnly
ts-node-transpile-only script.ts
```

### Current Working Directory

Enables resolving files relative to the current working directory. This is useful when you want to import modules from other files in your project, especially if they are located in different directories

> The `--cwd` or `--project` option is used to specify the directory that contains`tsconfig.json`, which is used to configure the TypeScript compiler. By default, `ts-node` searches for the `tsconfig.json` file starting from the current working directory and going up the directory tree until it finds a `tsconfig.json` file.

```{tip}
If you have multiple tsconfig.json files in your project, you can use the `--project` option to specify the path to the tsconfig.json file you want to use.
```
The --cwdMode option is used to make ts-node use the directory of the script being executed as the working directory, instead of the directory where ts-node was executed. This can be useful if you want to ensure that the tsconfig.json file used to compile the script is located in the same directory as the script.

```sh
# Equivalent to ts-node --cwdMode
ts-node-cwd script.ts
```

### ECMAScript Modules

Enables ESM (ECMAScript Modules) support in ts-node. It allows you to use import/export syntax in your TypeScript files, and use them as native ESM modules in Node.js

The `--esm` option is used to enable ECMAScript module support in ts-node. When this option is enabled, ts-node will compile the TypeScript code using the `--module` flag set to `es2020` and generate **ECMAScript modules** instead of **CommonJS modules**. This can be useful if you are using a tool that requires ECMAScript modules, such as *import statements*

```sh
# Equivalent to ts-node --esm
ts-node-esm script.ts
```

## Node Flags

You can register ts-node <u>without</u> using the CLI: `node -r ts-node/register` and `node --loader ts-node/esm`

Setting `NODE_OPTIONS` will enable `ts-node` within other node tools, child processes, and worker threads. This can be combined with other node flags.

    NODE_OPTIONS="-r ts-node/register --no-warnings" node ./index.ts

Or, if you require native ESM support:

    NODE_OPTIONS="--loader ts-node/esm"

This tells any node processes which receive this environment variable to install `ts-node`'s hooks before executing other code

If you are invoking node directly, you can avoid the environment variable and pass those flags to node

    node --loader ts-node/esm --inspect ./index.ts

```{warning}
`node --loader ts-node/esm` is what works for me
```