<head>
  <link 
    href="https://fonts.googleapis.com/css?family=Fira+Mono:500&display=swap" 
    rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
</head>    

<div id="stack-container">
<a href="https://make.wordpress.org/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Wordpress-Logo.svg/800px-Wordpress-Logo.svg.png" alt="Node JS Logo"></a>
</div>

# Wordpress Development

<span class="SteelBlue">Why we still need Wordpress Developers <a href="https://barn2.co.uk/why-wordpress-developers-are-the-future-of-web-design/">link</a></span>
 
<span class="SteelBlue">Wordpress Youtube channel WPCasts <a href="https://www.youtube.com/channel/UC8eV_x9GaQhcoL4rexOJpXg">link</a></span>

<span class="SteelBlue">VScode and Wordpress together <a href="https://deliciousbrains.com/vs-code-wordpress/">link</a></span>

<span class="SteelBlue">Wordpress admin dashboard guide <a href="https://alienwp.com/wordpress-admin-dashboard-guide/">link</a></span>

#### Three Main Content Types of Wordpress 
1. Posts <small>primary content type due to blogging past of wordpress</small>
2. Pages <small>think of the links under a navigation bar or list</small>
3. Media Elements <small>stand alone items think images, audio, video etc</small>

Can this be shared on social media <span class="Green">if yes then it is a</span><b class="Lime"> post</b> <span class="Crimson">if no then it is a </span><b class="HotPink">page</b>

Drafts of pages

Posts are organised into **Categories**
Posts can also be organised by utilizing **tags**
Featured images are considered metadata and dont have to be displayed. <b class="FireBrick">Featured images will display differently according to theme</b>

The <b class="Yellow">More block</b> is equavalent to the read more button that is used in articles

### Types of Blocks

<span class="RebeccaPurple">There are three ways you can munipulate blocks through the <b class="Violet">toolbar</b>, through the <b class="Violet">block settings</b> and directly through <b class="Violet">block properties</b></span>

##### Image Block
`/gallery` creates gallery in editor
##### Group Block
higlight multiple block to wrap multiple blocks visually

# Wordpress Workflows 

## Building a Child Theme

one plugin per on task

a **child theme** is what overides certain elements of a parent theme

you could use <b class="Red">Local by Flywheel</b> which is a local developement environment designed for wordpress

<b class="Teal">Directory location remember to log in as _root_</b>

   r/var/www/html/wordpress 

template filesdetermine the html structure
function files are written in php 

``` php
<?php
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );
function my_theme_enqueue_styles() {
    wp_enqueue_style( 'child-style', get_stylesheet_uri(),
        array( 'parenthandle' ), 
        wp_get_theme()->get('Version') // this only works if you have Version in the style header
    );
}
> 
```

## Web Analytics 


- How many have visited
- Their geographic location
- How they got to your site
- The keywords they used
- The pages and posts they liked and disliked
- The way they navigated your pages
- How they got to the places you most want them to visit, such as your sales, contact, or enrollment forms
- How much time they spent on the site
- Their arrival and departure pages
- The proportion of new to repeat visitors

