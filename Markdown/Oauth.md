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
  <a href=""><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Oauth_logo.svg/598px-Oauth_logo.svg.png" alt="Logo"></a>
</div>

# OAuth

<small class="Yellow">Below the before times</small>
<img src="./assets/images/beforeOauth.png" alt="yelp fail">

## Terminology 
<b class="RoyalBlue">Resource Owner</b> The everyday user 
<b class="RoyalBlue">Client</b> the application or service
<b class="RoyalBlue">Authentication Server </b> Google Facebook etc
<b class="RoyalBlue">Authorization Grant</b> When authorization is successful
<b class="RoyalBlue">Redirect URI</b> Becuase you authenticate somewhere else you need to redirect alot
<b class="RoyalBlue">Access Token</b> the key
<b class="RoyalBlue">Resource Server</b> the resource you need authorization for
<b class="RoyalBlue">flow</b> the methodology or workflow

<img src="./assets/images/theAccessToken.png" alt="the access token">
<img src="./assets/images/getRouteAuthLink.png" alt="the app builds a link">
<img src="./assets/images/backChannelResponse.png" alt="the app builds a link">
<img src="./assets/images/serverResponsewAccessToken.png" alt="the app builds a link">

### Types of Token
<b class="HotPink">Reference Tokens</b> just a random string that references a record in a database
<b class="HotPink">Self Encoded Tokens</b> case in point <b class="SpringGreen" title="JSON web tokens">JWT</b> which are encoded JSON

### Summary 
<img src="https://i2.wp.com/blogs.innovationm.com/wp-content/uploads/2019/07/blog-open1.png?resize=768%2C427">