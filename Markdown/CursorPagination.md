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

# Cursor based Pagination
#### Resources 
<a href="https://medium.com/swlh/how-to-implement-cursor-pagination-like-a-pro-513140b65f32#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg0NjJhNzFkYTRmNmQ2MTFmYzBmZWNmMGZjNGJhOWMzN2Q2NWU2Y2QiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2MTU1OTU3NTQsImF1ZCI6IjIxNjI5NjAzNTgzNC1rMWs2cWUwNjBzMnRwMmEyamFtNGxqZGNtczAwc3R0Zy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjEwMjU0ODYxNzc2MjcxNDU2MTUwNiIsImVtYWlsIjoiY2VrYW5sdWNhc0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXpwIjoiMjE2Mjk2MDM1ODM0LWsxazZxZTA2MHMydHAyYTJqYW00bGpkY21zMDBzdHRnLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwibmFtZSI6Ikx1Y2FzIENla2FuIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BT2gxNEdoNlNoVUtxR2JXZmNINUFfOGVtWkxpNnJhQzhuQkVRLUNZVlZjcWdRPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6Ikx1Y2FzIiwiZmFtaWx5X25hbWUiOiJDZWthbiIsImlhdCI6MTYxNTU5NjA1NCwiZXhwIjoxNjE1NTk5NjU0LCJqdGkiOiJhYmViOGE0YjMyZDExMzFmMTc2NDI2MWRkZTY2YzZlZmRkOGRmZDQ1In0.G1VoNwvKEJdb7ZXUvJs_7F01-Feacpwc1Wh9PnSjTUYcK1av7VuTnVdXKgwwyLqdoAqx0dejTCGe82dRlpd8qmh4fuOwUH28G3AuC9sCDAz26o3DMMJGG9x2cxrJ-iA_8bQO-ud_GEQtDTG2WddF0aCOIDyHy2t38vzstRXoZJVSLzyuMZaPHJqY-twCjX2sdiwW6E1DgllTQyJk_IANKQtugTowuhk13Cx4ey37HacYoCwbQ2bKVNheDqhU1eWd2MdZVM-HaNFqvouRWTEcAr4viM9g4tDYPpRzzlZWDkAgVuaOQjzPwDCLxf5kLjy8hDv6VCiZhtpJMahhynbDVw">medium article</a>
<a href="https://slack.engineering/evolving-api-pagination-at-slack/#:~:text=Cursor%2Dbased%20pagination%20works%20by,results%20after%20the%20given%20pointer.&text=There%20is%20no%20concept%20of,jump%20to%20a%20specific%20page">how slack implements cursors</a>
<a href="https://www.sitepoint.com/paginating-real-time-data-cursor-based-pagination/">detailed overview of cursors</a>

We need <span class="BlueViolet">**unique, sequential columns** *eg timestamps* </span> data need to be sorted by this column

> If offset pagination is an array, then cursor pagination is a lnked list. 

<b class="Yellow">Imagine we have a table pagination is about limiting the data so we don't have to deal with the entire set</b> <span class="GoldenRod">so split into multiple pages and you can scroll through pages</span>


<div class="columns">
<div class="FireBrick column">

  Last Name | First Name
  -- | --
  Cekan | Lucas
  Bagshot     | Bathilda
  Black       | Sirius
  Brown       | Lavender
  Chang       | Cho
  Creevey     | Colin
  Crouch      | Bartemius
  Delacour    | Fleur
  Diggle      | Dedalus
  Diggory     | Cedric
  Dumbledore  | Aberforth
  Dumbledore  | Albus
  Dursley     | Dudley
  Dursley     | Petunia
  Dursley     | Vernon
  Filch       | Argus
  Finnigan    | Seamus
  Fletcher    | Mundungus
</div>
<div class="SpringGreen column">

  Page 1 | ~
  -- | --
  Cekan | Lucas
  Bagshot     | Bathilda
  Black       | Sirius
  Brown       | Lavender
  Chang       | Cho
  

  Page 2 | ~
  -- | --
  Creevey     | Colin
  Crouch      | Bartemius
  Delacour    | Fleur
  Diggle      | Dedalus
  Diggory     | Cedric

  Page 3 | ~
  -- | --
  Dumbledore  | Aberforth
  Dumbledore  | Albus
  Dursley     | Dudley
  Dursley     | Petunia
  Dursley     | Vernon
  
</div>
</div>

``` json
{
    “cursor”: {
        “previous_page”: null, // no previous page available
        “next_page”: "next___Creevey"
    }
}{
    “cursor”: {
        “previous_page”: "prev___Crouch" ,
        “next_page”: "next___Dumbledore"
    }
}
```

#### Definitions 
<b class="RoyalBlue" title="we need to have at least one column with unique sequential values to implement cursor based pagination">Cursors</b> This can be similar to Twitter’s `max_id` parameter or Facebook’s `after` parameter
<b class="RoyalBlue" title=" we need the count parameter as with offset based pagination for filtering a limited number of results, before or after the cursor.">Count</b>
<b class="RoyalBlue" title=" This is needed in case we are providing the pagination through an API. Users need to know whether the next page is available and how to get the next data set">Next</b>
<b class="RoyalBlue" title=" This is needed in case we are providing the pagination through an API. Users need to know whether the previous page is available and how to get the next data set">Previous</b>
