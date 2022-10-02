<head>
  <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.2/css/bulma.min.css"> -->

  <link 
      rel="stylesheet" 
      type="text/css" 
      media="all" 
      href="../boilerplate/color"/>
  <link 
      rel="stylesheet" 
      type="text/css" 
      media="all" 
      href="../boilerplate/CSS.css"/>
  <link 
      href="https://fonts.googleapis.com/css?family=Fira+Mono:500&display=swap" 
      rel="stylesheet">
  <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>


  <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" integrity="sha256-gvEnj2axkqIj4wbYhPjbWV7zttgpzBVEgHub9AAZQD4=" crossorigin="anonymous" /> -->
<style>
.container{
  background-color:rgba(255,255,255,10%);
  text-align: center;
  border-radius: 5px;
  padding:1em;
}

.clearfix-container {
  background-color:rgba(255,255,255,40%);
  padding: 1em;
  border-radius: 5px;
}

.clearfix::after {
  content: "";
  clear:both;
  display:table;
}

.asideL{
  width:40%;
  display:inline;
  margin-left: 1em;
  float:left;
  height:3em;
  background-color: rgba(150,0,0,100%)
}
.asideR{
  width:40%;
  display:inline;
  margin-right: 1em;
  float:right;
  height:5em;
  background-color: rgba(0,100,100,100%)
}
</style>
</head>    


# ClearFix Hack
When you use float elements (my favorite) they don't expand the div parent container

```css
.clearfix::after {
  content: "";
  clear:both;
  display:table;
}

```
<div class=container>

  <div id=clearfix-container class="clearfix-container clearfix" style="clear:none;">
    <div class=asideL></div>
    <div class=asideR></div>
  </div>
  
  <button id="toggle-clearfix" class="button is-info is-outlined is-rounded is-fullwidth">Toggle ClearFix</button>
</div>

<script>
  $("#toggle-clearfix").click( () => $("#clearfix-container").toggleClass('clearfix'))
</script>

### Input

*emmet:* input:password

#### Interesting Attributes

`minlength` 

`pattern` used to set regular expression 

#### example

<input type="password" name="" id="" minlength="8" pattern="[a-z0-5]{8,}">