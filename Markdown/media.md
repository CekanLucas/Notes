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

#  Media HTMl Elements

## audio

`controls` display controls

`loop` automatically stars song as looping

<audio src="media_audio.mp3" controls loop>audio not supported</audio>

> **Note:** 
> there is also the `autoplay` but most browsers disabled it for being annoying

### Muliple Sources

Note for multiple sources order determines in which order to try files

<audio  controls>
  <source src="media_audio.mp3" type="audio/mpeg">
  <source src="media_audio.ogg" type="audio/ogg">
</audio>

## video

<video controls width="480px" height="300px">
  <source src="video.mp4" type="audio/mp4">
  <source src="media_video.ogg" type="video/ogg">
  Video is not supported by browser
</video>

### Embedded Youtube Video 

<iframe width="1243" height="699" src="https://www.youtube.com/embed/o8kT5c_4PAc" title="SoloLearn: The Largest Community of Mobile Code Learners" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>