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
      href="./color_new.css"/>
  <link 
      rel="stylesheet" 
      type="text/css" 
      media="all" 
      href="./CSS.css"/>
  <link 
      href="https://fonts.googleapis.com/css?family=Fira+Mono:500&display=swap" 
      rel="stylesheet">

<style> 
html > body{
  background-color: #000;
}

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
 .ruby {
  color:FireBrick;
  font-weight:bolder;
}
.img{
  position:sticky;
  float: Right;
  top:1px;
  width: 10%
}
.metaprogramming {
  font-weight: bolder;
  color: skyblue;
}
</style>
</head>    

# <span class="Cyan">Meta</span><span class="SteelBlue">Programming</span> in <span class="ruby">RUBY</span>  
## *Written By: <span class="SkyBlue">Lucas Cekan</span>*  
<img class=img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/198px-Ruby_logo.svg.png">

> "Will write code that writes code that writes code for food."
> > Martin Rodgers
 


<i><span class="Khaki">Programming can seem like magic, with programs seeming to be able to do so many things. I personally believe that the art of programming is bassically the process of automating away pretty much everything. Wherever there is data, a programming language can be utilised to munipulate that data and cause magic to happen. </span></i>

A program is just intructions passed into a compiler. So, could you create a program to munipulate a program? Yes, you can! This is bassically what we mean by <span class="metaprogramming">Metaprogramming</span>, when you have a program that munipulates the set of instructions. <span class="Green"><strong>A program that programs a program, very meta indeed.</strong></span>

> Metaprogramming is writing code that writes code. 

So, now we know what metaprogramming is. It might sound like an advanced topic, only relevant in a small set of circumstances. But this isn't true. Case in point: <span class="Violet">**compilers**</span>. Yes compilers take human readable instructions and convert them into binary code, so given a set of instructions a compiler will write binary code. <span class="Orange">So you cant say machines can't program, even a program like a compiler can program. In fact any code generator or compilation depends on metaprogramming, so metaprogramming is in fact *everywhere*.</span>

## Bring Color to this Article
Lets do a quick excercise in metaprogramming

So lets write some <span class="Cyan">CSS</span> using <span class="ruby">Ruby</span>

I have already created the file [metaprogramming.rb](./metaprogramming.rb)

Outline below: <span class="ruby">metaprogramming.rb</span> 
```rb
"YellowGreen" #9ACD32 

colors =
[data*].map do |color| "\n.#{color.downcase}, .#{color} {" +
    "\n\tcolor: #{color};\n}\n"
end

# create file color.css if not there
# w+ means write and read access to file 
File.open("color_new.css", "w+"){
  |file|  file.puts "#{colors.reduce(:+)}"
}
```
   <cite>*[data](http://w3schools.sinsixx.com/css/css_colornames.asp.htm) copied from W3 schools </cite>

Now run the file with ruby 
      
      $ ruby metaprogramming.rb

Congratulation you just ran a program to create [this](./color_new.css) css file 


If you have <b><span class="Orange">Emmet</span></b> try expanding the abreviations below with the `tab` key. ([documentation here](https://docs.emmet.io/actions/expand-abbreviation/)). 

link to this [md file](./MetaProgramingRuby.md)

span.skyblue

span.blueviolet

### <span class="Red">Below should change colour</span>
<span class="Red">If not [refresh page](./MetaProgramingRuby.md). Or try running the [ruby file]() again. </span>

<span class=aliceblue>AliceBlue</span><span class=antiquewhite>AntiqueWhite</span><span class=aqua>Aqua</span><span class=aquamarine>Aquamarine</span><span class=azure>Azure</span><span class=beige>Beige</span><span class=bisque>Bisque</span><span class=black>Black</span><span class=blanchedalmond>BlanchedAlmond</span><span class=blue>Blue</span><span class=blueviolet>BlueViolet</span><span class=brown>Brown</span><span class=burlywood>BurlyWood</span><span class=cadetblue>CadetBlue</span><span class=chartreuse>Chartreuse</span><span class=chocolate>Chocolate</span><span class=coral>Coral</span><span class=cornflowerblue>CornflowerBlue</span><span class=cornsilk>Cornsilk</span><span class=crimson>Crimson</span><span class=cyan>Cyan</span><span class=darkblue>DarkBlue</span><span class=darkcyan>DarkCyan</span><span class=darkgoldenrod>DarkGoldenRod</span><span class=darkgray>DarkGray</span><span class=darkgrey>DarkGrey</span><span class=darkgreen>DarkGreen</span><span class=darkkhaki>DarkKhaki</span><span class=darkmagenta>DarkMagenta</span><span class=darkolivegreen>DarkOliveGreen</span><span class=darkorange>DarkOrange</span><span class=darkorchid>DarkOrchid</span><span class=darkred>DarkRed</span><span class=darksalmon>DarkSalmon</span><span class=darkseagreen>DarkSeaGreen</span><span class=darkslateblue>DarkSlateBlue</span><span class=darkslategray>DarkSlateGray</span><span class=darkslategrey>DarkSlateGrey</span><span class=darkturquoise>DarkTurquoise</span><span class=darkviolet>DarkViolet</span><span class=deeppink>DeepPink</span><span class=deepskyblue>DeepSkyBlue</span><span class=dimgray>DimGray</span><span class=dimgrey>DimGrey</span><span class=dodgerblue>DodgerBlue</span><span class=firebrick>FireBrick</span><span class=floralwhite>FloralWhite</span><span class=forestgreen>ForestGreen</span><span class=fuchsia>Fuchsia</span><span class=gainsboro>Gainsboro</span><span class=ghostwhite>GhostWhite</span><span class=gold>Gold</span><span class=goldenrod>GoldenRod</span><span class=gray>Gray</span><span class=grey>Grey</span><span class=green>Green</span><span class=greenyellow>GreenYellow</span><span class=honeydew>HoneyDew</span><span class=hotpink>HotPink</span><span class=indianred>IndianRed</span><span class=indigo>Indigo</span><span class=ivory>Ivory</span><span class=khaki>Khaki</span><span class=lavender>Lavender</span><span class=lavenderblush>LavenderBlush</span><span class=lawngreen>LawnGreen</span><span class=lemonchiffon>LemonChiffon</span><span class=lightblue>LightBlue</span><span class=lightcoral>LightCoral</span><span class=lightcyan>LightCyan</span><span class=lightgoldenrodyellow>LightGoldenRodYellow</span><span class=lightgray>LightGray</span><span class=lightgrey>LightGrey</span><span class=lightgreen>LightGreen</span><span class=lightpink>LightPink</span><span class=lightsalmon>LightSalmon</span><span class=lightseagreen>LightSeaGreen</span><span class=lightskyblue>LightSkyBlue</span><span class=lightslategray>LightSlateGray</span><span class=lightslategrey>LightSlateGrey</span><span class=lightsteelblue>LightSteelBlue</span><span class=lightyellow>LightYellow</span><span class=lime>Lime</span><span class=limegreen>LimeGreen</span><span class=linen>Linen</span><span class=magenta>Magenta</span><span class=maroon>Maroon</span><span class=mediumaquamarine>MediumAquaMarine</span><span class=mediumblue>MediumBlue</span><span class=mediumorchid>MediumOrchid</span><span class=mediumpurple>MediumPurple</span><span class=mediumseagreen>MediumSeaGreen</span><span class=mediumslateblue>MediumSlateBlue</span><span class=mediumspringgreen>MediumSpringGreen</span><span class=mediumturquoise>MediumTurquoise</span><span class=mediumvioletred>MediumVioletRed</span><span class=midnightblue>MidnightBlue</span><span class=mintcream>MintCream</span><span class=mistyrose>MistyRose</span><span class=moccasin>Moccasin</span><span class=navajowhite>NavajoWhite</span><span class=navy>Navy</span><span class=oldlace>OldLace</span><span class=olive>Olive</span><span class=olivedrab>OliveDrab</span><span class=orange>Orange</span><span class=orangered>OrangeRed</span><span class=orchid>Orchid</span><span class=palegoldenrod>PaleGoldenRod</span><span class=palegreen>PaleGreen</span><span class=paleturquoise>PaleTurquoise</span><span class=palevioletred>PaleVioletRed</span><span class=papayawhip>PapayaWhip</span><span class=peachpuff>PeachPuff</span><span class=peru>Peru</span><span class=pink>Pink</span><span class=plum>Plum</span><span class=powderblue>PowderBlue</span><span class=purple>Purple</span><span class=rebeccapurple>RebeccaPurple</span><span class=red>Red</span><span class=rosybrown>RosyBrown</span><span class=royalblue>RoyalBlue</span><span class=saddlebrown>SaddleBrown</span><span class=salmon>Salmon</span><span class=sandybrown>SandyBrown</span><span class=seagreen>SeaGreen</span><span class=seashell>SeaShell</span><span class=sienna>Sienna</span><span class=silver>Silver</span><span class=skyblue>SkyBlue</span><span class=slateblue>SlateBlue</span><span class=slategray>SlateGray</span><span class=slategrey>SlateGrey</span><span class=snow>Snow</span><span class=springgreen>SpringGreen</span><span class=steelblue>SteelBlue</span><span class=tan>Tan</span><span class=teal>Teal</span><span class=thistle>Thistle</span><span class=tomato>Tomato</span><span class=turquoise>Turquoise</span><span class=violet>Violet</span><span class=wheat>Wheat</span><span class=white>White</span><span class=whitesmoke>WhiteSmoke</span><span class=yellow>Yellow</span><span class=yellowgreen>YellowGreen</span>



<b><span class="Orange">Emmet</span></b> and this file made with Markdown are both examples of metaprogramming, this md file would be compiled to html and emmet was used to quickly add color to this page. So if you look closely everything you see here is the result of metaprogramming and thats pretty meta. 

# <span class="Cyan">Meta</span><span class="SteelBlue">Programming</span> in <span class="ruby">RUBY</span> 
## Conclusion

This brings us right back to the title of this article. Because Ruby is probably the most metaprogramming of all common languages, there is no barriers in Ruby to take advantage of metaprogramming. 

Just think about how Ruby on Rails works, you use the generator to generate entire project scafffolds and activeRecord is bassically using Ruby to generate a lot of SQL code and queries. 

In fact consider this, in Ruby metaprogramming is so deeply part of the language itself that you find thats its not distinguishable from normal programming, to be a Ruby programmer is to do metaprogramming consistently and routinly. 

### References
<cite>Paolo Perrotta 2010 Metaprogramming Ruby: Program Like the Ruby Pros. </cite>

## Review:  <span class="cyan">PWA vs Native Draft</span> 
link [here](https://lighthouse-students.slack.com/files/USURQ9A0G/F011KJS3ERW/pwa_vs_native_draft.pdf?origin_team=T2G8TE2E5&origin_channel=D011EU1AK28) 

<b><span class="lime">Excellent</span></b> 

<span class="lime">
  Wow! You're references and citations remind me of accademic rigor definely feels like its from a reputable source in a reputable publication
  
  Excellent use of data and reference to outside studies, I like the graph of user Attrition
</span>

<b><span class="yellow">Good</span></b> 

<span class="yellow">
  Good use of visuals
  
  I like how the pdf layout, I like the step by step explanation
  
  Lots of references altough probably overkill for a short article like this
</span>


<b><span class="Tomato">Needs Improvement</span></b>

<span class="tomato">I was not able to grasp the content under the Progressive Web APP heading. I read it multiple times. The lesson could be communicated better.</span>

<span class="white">
  <b>Concluding Remarks</b>
  
  Overall well done it was a enjoyable read. Love the attrition section, and overall how the article is layed out. This reminds me of the articles that I used to read from the Harvard Business Review in my University days.
</span>