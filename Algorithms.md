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
</style>
</head>    

# Heading 1
## Notes

`@ media`

* `and` 
* `not`
* 
### Media Variables

<table>
 <thead>
  <tr>
   <th>Name</th>
   <th>Summary</th>
   <th>Notes</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><a href="/en-US/docs/Web/CSS/@media/any-hover" title="The documentation about this has not yet been written; please consider contributing!"><code>any-hover</code></a></td>
   <td>Does any available input mechanism allow the user to hover over elements?</td>
   <td>Added in Media Queries Level 4.</td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/CSS/@media/any-pointer" title="The documentation about this has not yet been written; please consider contributing!"><code>any-pointer</code></a></td>
   <td>Is any available input mechanism a pointing device, and if so, how accurate is it?</td>
   <td>Added in Media Queries Level 4.</td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/CSS/@media/aspect-ratio" title="The documentation about this has not yet been written; please consider contributing!"><code>aspect-ratio</code></a></td>
   <td>Width-to-height aspect ratio of the viewport</td>
   <td></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/CSS/@media/color" title="The documentation about this has not yet been written; please consider contributing!"><code>color</code></a></td>
   <td>Number of bits per color component of the output device, or zero if the device isn't color</td>
   <td></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/CSS/@media/color-gamut" title="The documentation about this has not yet been written; please consider contributing!"><code>color-gamut</code></a></td>
   <td>Approximate range of colors that are supported by the user agent and output device</td>
   <td>Added in Media Queries Level 4.</td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/CSS/@media/color-index" title="The documentation about this has not yet been written; please consider contributing!"><code>color-index</code></a></td>
   <td>Number of entries in the output device's color lookup table, or zero if the device does not use such a table</td>
   <td></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/CSS/@media/device-aspect-ratio" title="The documentation about this has not yet been written; please consider contributing!"><code>device-aspect-ratio</code></a> <span class="icon-only-inline" title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span></td>
   <td>Width-to-height aspect ratio of the output device</td>
   <td>Deprecated in Media Queries Level 4.</td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/CSS/@media/device-height" title="The documentation about this has not yet been written; please consider contributing!"><code>device-height</code></a> <span class="icon-only-inline" title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span></td>
   <td>Height of the rendering surface of the output device</td>
   <td>Deprecated in Media Queries Level 4.</td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/CSS/@media/device-width" title="The documentation about this has not yet been written; please consider contributing!"><code>device-width</code></a> <span class="icon-only-inline" title="This is an obsolete API and is no longer guaranteed to work."><i class="icon-trash"> </i></span></td>
   <td>Width of the rendering surface of the output device</td>
   <td>Deprecated in Media Queries Level 4.</td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/CSS/@media/display-mode" title="The documentation about this has not yet been written; please consider contributing!"><code>display-mode</code></a></td>
   <td>The display mode of the application, as specified in the web app manifest's <a href="/en-US/docs/Web/Manifest#display"><code>display</code></a> member</td>
   <td>Defined in the <a class="external" href="http://w3c.github.io/manifest/#the-display-mode-media-feature" rel="noopener">Web App Manifest spec</a>.</td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/CSS/@media/forced-colors" title="The documentation about this has not yet been written; please consider contributing!"><code>forced-colors</code></a></td>
   <td>Detect whether user agent restricts color pallete</td>
   <td>Added in Media Queries Level 5.</td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/CSS/@media/grid" title="The documentation about this has not yet been written; please consider contributing!"><code>grid</code></a></td>
   <td>Does the device use a grid or bitmap screen?</td>
   <td></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/CSS/@media/height" title="The documentation about this has not yet been written; please consider contributing!"><code>height</code></a></td>
   <td>Height of the viewport</td>
   <td></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/CSS/@media/hover" title="The documentation about this has not yet been written; please consider contributing!"><code>hover</code></a></td>
   <td>Does the primary input mechanism allow the user to hover over elements?</td>
   <td>Added in Media Queries Level 4.</td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/CSS/@media/inverted-colors" title="The documentation about this has not yet been written; please consider contributing!"><code>inverted-colors</code></a></td>
   <td>Is the user agent or underlying OS inverting colors?</td>
   <td>Added in Media Queries Level 5.</td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/CSS/@media/light-level" title="The documentation about this has not yet been written; please consider contributing!"><code>light-level</code></a></td>
   <td>Light level of the environment</td>
   <td>Added in Media Queries Level 5.</td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/CSS/@media/monochrome" title="The documentation about this has not yet been written; please consider contributing!"><code>monochrome</code></a></td>
   <td>Bits per pixel in the output device's monochrome frame buffer, or zero if the device isn't monochrome</td>
   <td></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/CSS/@media/orientation" title="The documentation about this has not yet been written; please consider contributing!"><code>orientation</code></a></td>
   <td>Orientation of the viewport</td>
   <td></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/CSS/@media/overflow-block" title="The documentation about this has not yet been written; please consider contributing!"><code>overflow-block</code></a></td>
   <td>How does the output device handle content that overflows the viewport along the block axis?</td>
   <td>Added in Media Queries Level 4.</td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/CSS/@media/overflow-inline" title="The documentation about this has not yet been written; please consider contributing!"><code>overflow-inline</code></a></td>
   <td>Can content that overflows the viewport along the inline axis be scrolled?</td>
   <td>Added in Media Queries Level 4.</td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/CSS/@media/pointer" title="The documentation about this has not yet been written; please consider contributing!"><code>pointer</code></a></td>
   <td>Is the primary input mechanism a pointing device, and if so, how accurate is it?</td>
   <td>Added in Media Queries Level 4.</td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/CSS/@media/prefers-color-scheme" title="The documentation about this has not yet been written; please consider contributing!"><code>prefers-color-scheme</code></a></td>
   <td>Detect if the user prefers a light or dark color scheme</td>
   <td>Added in Media Queries Level 5.</td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/CSS/@media/prefers-contrast" title="The documentation about this has not yet been written; please consider contributing!"><code>prefers-contrast</code></a></td>
   <td>Detects if the user has requested the system increase or decrease the amount of contrast between adjacent colors</td>
   <td>Added in Media Queries Level 5.</td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/CSS/@media/prefers-reduced-motion" title="The documentation about this has not yet been written; please consider contributing!"><code>prefers-reduced-motion</code></a></td>
   <td>The user prefers less motion on the page</td>
   <td>Added in Media Queries Level 5.</td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/CSS/@media/prefers-reduced-transparency" title="The documentation about this has not yet been written; please consider contributing!"><code>prefers-reduced-transparency</code></a></td>
   <td>The user prefers reduced transparency</td>
   <td>Added in Media Queries Level 5.</td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/CSS/@media/resolution" title="The documentation about this has not yet been written; please consider contributing!"><code>resolution</code></a></td>
   <td>Pixel density of the output device</td>
   <td></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/CSS/@media/scan" title="The documentation about this has not yet been written; please consider contributing!"><code>scan</code></a></td>
   <td>Scanning process of the output device</td>
   <td></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/CSS/@media/scripting" title="The documentation about this has not yet been written; please consider contributing!"><code>scripting</code></a></td>
   <td>Detects whether scripting (i.e. JavaScript) is available</td>
   <td>Added in Media Queries Level 5.</td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/CSS/@media/update-frequency" title="The documentation about this has not yet been written; please consider contributing!"><code>update</code></a></td>
   <td>How frequently the output device can modify the appearance of content</td>
   <td>Added in Media Queries Level 4.</td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/CSS/@media/width" title="The documentation about this has not yet been written; please consider contributing!"><code>width</code></a></td>
   <td>Width of the viewport including width of scrollbar</td>
   <td></td>
  </tr>
 </tbody>
</table>


Dollerum Ipsum 