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

## Drag and Drop

[Mozzila Ref](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)

<style>
.drag-and-drop{
  outline: none;
  text-decoration: none;
  display: inline-block;
  margin-left: 1%;
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
  width: 31%;
  color: white;
  background: green;
}
</style>


<!-- Toodo: drop zone -->

<div class="drag-and-drop" id="drag" draggable="true">Drag Me</div>

### Event types

<dl>
<dt id="drag"><a href="/en-US/docs/Web/API/HTMLElement/drag_event" title="drag"><code>drag</code></a></dt>
<dd>
  <p>This event is fired when an element or text selection is being dragged</p>
</dd>
<dt id="dragend"><a href="/en-US/docs/Web/API/HTMLElement/dragend_event" title="dragend"><code>dragend</code></a></dt>
<dd>
  <p>This event is fired when a drag operation is being ended (by releasing a mouse button or hitting the escape key)</p>
</dd>
<dt id="dragenter"><a href="/en-US/docs/Web/API/HTMLElement/dragenter_event" title="dragenter"><code>dragenter</code></a></dt>
<dd>
  <p>This event is fired when a dragged element or text selection enters a valid drop target</p>
</dd>
<dt id="dragleave"><a href="/en-US/docs/Web/API/HTMLElement/dragleave_event" title="dragleave"><code>dragleave</code></a></dt>
<dd>
  <p>This event is fired when a dragged element or text selection leaves a valid drop target</p>
</dd>
<dt id="dragover"><a href="/en-US/docs/Web/API/HTMLElement/dragover_event" title="dragover"><code>dragover</code></a></dt>
<dd>
  <p>This event is fired continuously when an element or text selection is being dragged and the mouse pointer is over a valid drop target (every 50 ms WHEN mouse is not moving ELSE much faster between 5 ms (slow movement) and 1ms (fast movement) approximately This firing pattern is different than <a href="/en-US/docs/Web/API/Element/mouseover_event" title="mouseover"><code>mouseover</code></a> )</p>
</dd>
<dt id="dragstart"><a href="/en-US/docs/Web/API/HTMLElement/dragstart_event" title="dragstart"><code>dragstart</code></a></dt>
<dd>
  <p>This event is fired when the user starts dragging an element or text selection</p>
</dd>
<dt id="drop"><a href="/en-US/docs/Web/API/HTMLElement/drop_event" title="drop"><code>drop</code></a></dt>
<dd>
  <p>This event is fired when an element or text selection is dropped on a valid drop target</p>
</dd>
</dl>


<script>
const el = document.getElementById('drag');
el.addEventListener('drag', () => {
  el.style = 'background:red';
  console.log('Drag event fired');
})
el.addEventListener('dragend', () => {
  el.style = 'background:green';
  console.log('Drag event fired');
})
</script>