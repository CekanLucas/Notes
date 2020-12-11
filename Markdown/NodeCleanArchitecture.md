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
    width: 20vw
}
</style>
</head>    

# Node Clean Architecture

##### Source
<a href="https://medium.com/better-programming/node-clean-architecture-deep-dive-ab68e523554b">article</a>

<img src="https://miro.medium.com/max/700/0*x318bLrEpHGA5GxA.jpg" alt="">

<Large class="Crimson">**Layers**</Large> Each ring represents a isolated layer in the application

<Large class="Crimson">**Dependency**</Large> The dependency direction is from the outside in. Meaning that the entities layer is independent and the frameworks <i class="Grey">layer web, UI, etc.</i> depends on all the other layers

<Large class="Crimson">**Entities**</Large> Contains all business entities that construct our application

<Large class="Crimson">**Use cases**</Large> Each use case represents and orchestrates all logic for a specific business use case <i class="Grey">eg adding new customers to the system</i>. This is where we centralise our logic
      
<Large class="Crimson">**Controllers and Presenters**</Large> Our controllers, presenters, and gateways are intermediate layers. You can think of them as an entry and exit gate to the use cases

<Large class="Crimson">**Frameworks**</Large> his layer has all the specific implementations. The database, the web frameworks, error handling frameworks, etc.

> <i class="Orange">This layer is where all the details go. The web is a detail. The database is a detail. We keep these things on the outside where they can do little harm.
 ~ Robert C. Martin</i>

## Implemented this architecture

### <b class="Yellow">Paths</b> 
#### Entities 
    /src/entities
#### Use cases 
    /src/application/use_cases
#### Controllers
    /src/controller

# Controllers
- Receive the user input
- Validate user input-sanitization
- Convert the user input into a model that the use case expects. <span class="Grey">
Eg, do date formats and string to integer conversion.</span>
- Call the use case and pass it the new model

# Prensenter
Get data application repository to build a `ViewModel`

- Responsibilites include
  - Format strings and dates
  - Add presentation data, like flags
  - Prepare data to be displayed in the UI
Eg, do date formats and string to integer conversion.</span>
- Call the use case and pass it the new model