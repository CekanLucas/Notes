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

# Drag and Drop

[Mozzila Ref](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
[Project - Sliding Coins](./sliding_coins.md)

<style>
.drag-and-drop{
  outline: none;
  text-decoration: none;
  display: inline-block;
  margin-left: 1%;
  margin-bottom: 1em;
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

### Basic Use

To make other HTML elements draggable, three things must be done:

1. Set the `draggable` attribute to `true` on the relevant element
1. Add a listener for the `dragstart` event
1. Set the drag data in the above listener

## Data Transfer

All drag events have a property called `dataTransfer` of type `DataTransfer<object>` which holds the drag data

### Drag Image 

This is ussually `<img>` `<canvas>` *or any other element*
```js
event.dataTransfer.setDragImage(image, xOffset, yOffset);
```
> **Note** if the image is a element it must exist on the DOM [see here](https://www.kryogenix.org/code/browser/custom-drag-image.html)

### Drag Data

```ts
const dt = event.dataTransfer

dt.setData('text/plain', el.outerHTML) // fallback type should always be used
dt.setData('text/html', el.outerHTML) // for html in text format
dt.setData('application/x-moz-node', el) // to drag elements but firefox says security risk
dt.setData('custom-type', el) // works but probably use MIME conventions

dt.getData('data type') // see note

dt.clearData() // clear all data
dt.clearData('data type') // can specify type

dt.types // eg ['coin_type', 'coin_slot']
```

#### Data Transfer Item List 

```ts
const items<DataTransferItemList> = dt.items // Iterable Object

const exampleDTItems<DataTransferItemList> = {
  0: DataTransferItem {kind: 'string', type: 'coin_type'}
  1: DataTransferItem {kind: 'string', type: 'coin_slot'}
  length: 2
}
items.length // => 2

// see note about adding data
items.add(data, type)
items.add('left', 'coin_slot') // example
items.add(file)

items.clear()
items.remove(index: number)

```
> **Note** according to convention it seems only `dragStart` and `drop` events to use `getData()` although the items and their formats can still be enumerated

## Drop Effect

`Drag&DropEvent.dataTransfer.dropEffect`

### Values

This sets the cursor and other visual feedback to users

These are the only values that have a effect
<dl>
  <dt>copy</dt>
  <dd>
    <p>A copy of the source item is made at the new location</p>
  </dd>
  <dt>move</dt>
  <dd>
    <p>An item is moved to a new location</p>
  </dd>
  <dt>link</dt>
  <dd>
    <p>A link is established to the source at the new location</p>
  </dd>
  <dt>none</dt>
  <dd>
    <p>The item may not be dropped</p>
  </dd>
</dl>

## Effect Allowed 
`Drag&DropEvent.dataTransfer.effectAllowed`

Determines the effect permitted

Assigning a value to `effectAllowed` in events other than `dragstart` has no effect

<b class="text-green-400 text-xl">values</b>

`none` `copy` `copyLink` `copyMove` `link` `linkMove` `move` `all` `uninitialized`




## Event types
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