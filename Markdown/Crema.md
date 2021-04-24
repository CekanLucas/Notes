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
  <a href=""><img src="" alt="Logo"></a>
</div>

## Folder Structure

<b class="RoyalBlue">Public</b> <span class="BlueViolet">public assets (eg images) and code used for rendering of Application on the browser.</span>

<b class="RoyalBlue">@crema</b> <span class="BlueViolet"></span>
 - <b class="RoyalBlue">core</b> <span class="BlueViolet">general and common components used for template</span>
 - <b class="RoyalBlue">services</b><span class="BlueViolet"> database and authentication service providers settings and other data and files related to fake APIs</span> 
 - <b class="RoyalBlue">utility</b> <span class="BlueViolet">all the important files related to the template</span> 

 <b class="RoyalBlue">modules</b> <span class="BlueViolet">All the code related to dashboard, apps and other pages lies in this folder</span>

<b class="RoyalBlue">shared</b> <span class="BlueViolet"> older contains the helping files. It contains language files, constants that are used in Redux and style related files. </span>

<b class="RoyalBlue">redux</b> <span class="BlueViolet">  folder contains the global state management related files. This folder is divided into three subfolders viz. actions, reducers, and store </span>