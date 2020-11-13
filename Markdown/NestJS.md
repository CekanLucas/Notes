<head>
 
  <link 
    href="https://fonts.googleapis.com/css?family=Fira+Mono:500&display=swap" 
    rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<style> 
  #stack-container {
    position: fixed;
    height: 5em;
    display: flex;
    flex-direction: column-reverse;
    bottom:5vh;
    right: 5vw;
    text-align: center;
}
</style>
</head>    

<div id="stack-container">
<p class="red">
  <b><a href="./AngularStack.md">Back</a></b>  
</p>
<img alt="NestJS Logo" src="https://docs.nestjs.com//assets/logo-small.svg">
</div>


# Nest.js 
> <big><b class="Crimson">Scalable Node.js server side applications put another way it is a type of web application server </b></big>

### Objectives 
- NestJS Modules 
- NestJS Controllers 
- NestJS Services and Providers
- Controller-to-Service Communication
- Validation using NestJS Pipes

To add a server folder to existing angular application

    ng add @nestjs/ng-universal

#### Definitions

The <span class="Crimson">front end</span> makes a <b class="Purple">request</b> to the <span class="Khaki">web server</span> the <span class="Khaki">web server</span> takes the <b class="Purple">request</b> and then gives a <b class="BlueViolet">response</b> back to the <span class="Crimson">front end</span>

A controllers job is to get a request and send back a response. The controllers have access to the data stored in the database.

```ts
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // the @ below is termed as a "Decorator"
  @Get()
  // in TypeScript you need to define the return type of methods
  getHello(): string {
    // here we define the response
    // return this.appService.getHello();
    return "Test"
  }
}
```
If we were to add another route we can scaffold with 
      
      nest generate controller red

###  WildCard Route 

To specify variables within routes inline wih rest architecture we use **wildcards** using the humble colon

> wildcards are key to looking for specific entries in databases
```ts 
@Get('pokedex/:generation:pokemon:move')
```

## [Observables](https://rxjs.dev/guide/observable)


## Modules 
``` bash
# CLI to create module 
nest g module [module_name ]
```
> <b>Each Application has at least one module <i class="Crimson">The Root Module</i> the starting point of the application in question</b>

Modules are supposed to be a way to organise code by a set of capabilities or features **ie per feature**

Modules are <b class="Fuchsia">Singletons</b> they can be imported by multiple other modules

A module is defined using a `@Module` <span class="Sienna" title="A decorator provides metadata that can be used to organise application structure">decorator <small>Hover Over for Definition</small></span>

#### @Module Decorator Poperties
- **providers** Array of providers to be available within the module via dependency injection
- **controllers** Array of controllers to be instantiated within the module
- **exports** Array of providers to export to other modules
- **imports** List of modules required by this module, modules in this list can be available to this module by dependency injection

## Controllers 

<big><b class="BlueViolet">Handle incoming <span class="Violet">requests</span> and return <span class="Violet">responses</span> to the client</b></big>

<span class="BlueViolet">Contain <span class="Violet">handlers</span> which hangle <span class="Violet">endpoints</span> and <span class="Violet">request methods </span><i class="Pink">ie GET, POST etc</i></span>

<span class="BlueViolet">Can use <span class="Violet">dependency injection</span> to consume providers within the same module</span>

```ts
// Controllers are defined by the Controller Decorator
// we define the path that the controller is responsible
@Controller('/pokedex')
export class PokedexController {
  //...
  /* --- HANDLLERS --- */
  // Methods of controller class
  @Get, @Post, @Delete

  @Get() // all get requests to /pokedex handled by this method
  getAllPokemon() {
    // do stuff
    return ...;
  }

  @Post() // all post requests to /pokedex handled by this method 
  createPokedex() {
    // do stuff
    return ...;
  }
}
```
### Proccess diagram for Request/Response Cycle
--> **Request routed to Controller, handler is called with argumnets** 
NestJS wil parse the relevant request data and it will be available in the handler

--> **Handler handles the request** 
Perform the operations such as communication with a service eg retrieving an item from the database

--> **Handler handles the request** 
Perform the operations such as communication with a service eg retrieving an item from the database

--> **Handler returns reponse value** 
Response can be any type even an exception and Nest wil wrap te returned value as an HTTP response and return it to the client

<style>
.controllers-container {
  display: flex;
  justify-content: space-between;
}
.controllers-container > div {
  background-color:blueviolet;
  border-radius: 5px;
  text-align: center;
  padding: 1em;
  margin: 0.5em 0;
}
.controllers-container > div > div {
  background-color:purple;
  border-radius: 5px;
  text-align: left;
  margin: 0.5em 0.1em;
  padding: 0.5em;
}
</style>

<div class="controllers-container">
  <div>
    <strong>AuthController</strong><br>/auth
  <div>
    <strong>signin()</Strong><br>POST&nbsp;/auth/signin
  </div>
  <div>
    <Strong>signout()</Strong><br>POST&nbsp;/auth/signout
  </div>
  </div>
  <div>
    <strong>TasksController</strong><br>/tasks
    <div>
      <Strong>getAllTasks()</Strong><br>GET /tasks
    </div>
    <div>
      <Strong>getTasksById()</Strong><br>GET /tasks/:id
    </div>
    <div>
      <Strong>createTask()</Strong><br>POST /tasks
    </div>
    <div>
      <Strong>deleteteTask()</Strong><br>DELETE /tasks/:id
    </div>
    <div>
      <Strong>updateTaskStatus()</Strong><br>PATCH /tasks/:id
    </div>
  </div>
 <div>
  <strong>UsersController</strong><br>/users
    <div>
      <Strong>getUsers()</Strong><br>GET /users/:id
    </div>
    <div>
      <Strong>createUser()</Strong><br>POST /users
    </div>
    <div>
      <Strong>deleteUser()</Strong><br>DELETE&nbsp;/users/:id
    </div>
</div>
</div>

if you run 

    nest g controller pokedex

it will generate a controller <u>for</u> the <i>pokedex module</i> nest will look automatically for the relevant module

# Providers 
> can be injected into contructors if decorated as an `@injectable`, via <strong class="FireBrick">dependency injection</strong>

Can be a plain value, a class, sync/async factory etc. 

providers must be provided to a module for them to be usable

# Service 

Defined as providers <big class="Crimson">Not all providers are services</big>

Common concept within software development  not just in this case

Its a singleton when wrapped with a `@INjectable()` this means the same instance will be shared across the application acting as a single source of truth

**Services are the main source of business logic** eg a service will be called from the controller to validate data, create an item in the database and return a response

To generate service with cli **Note nest will find the appropriate module**

    nest g service pokedex