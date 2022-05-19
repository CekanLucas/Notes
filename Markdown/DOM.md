<link rel=stylesheet href="./css.css" >
<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<script src="../JSprograms/DOM.ts"></script>

[Go to Excercise](Ducket/DOM.md)

# <span class="Yellow">DOM munipulation</span><br><span class="Aqua">John Duckett Book</span>

The terms <span class="font-bold text-red-200">elements</span> and <span class="font-bold text-green-200">element nodes</span> are used interchangeably but when people say the DOM is working with an element, it is actually working with a node that <i class='Yellow'>represents</i> that element 

## Access Elements 

### Select Individual Element Node
```ts
Document.getElementById(elementId: string): HTMLElement

// by CSS selector
ParentNode.querySelector<Element>(selectors: string): Element
```
### Select Multiple Elements <i class="SpringGreen">NODELIST</i>
```ts
Document.getElementsByClassName(classNames: string): HTMLCollectionOf<Element>

Document.getElementsByTagName(TagName: string): HTMLCollectionOf<Element>

// by CSS selector
ParentNode.querySelectorAll<Element>(selectors: string): NodeListOf<Element>
```

> **Note:** A <i class="SpringGreen">NODELIST</i> is <i class="LightGrey">not</i> a array but instead is a <b class="SpringGreen">collection</b> so it has a `length` property and array like ordered index numbers

> **Note:** You can use the index number just like array <b class="RoyalBlue">[index : number]</b> the less prefered way is by using `.item(index: number)` method

#### <b class="Tomato">Live</b> vs <b class="SpringGreen">Static</b> Nodelists 
<b class="Tomato">Live NodeList</b> : when script updates the nodes they are reflected in the collection the methods beginning with *getElementBy** return <b class="Tomato">live nodelists</b> also typically faster

<b class="SpringGreen">Static NodeList</b> : script updates not reflected in the nodes methods beginning with *querySelector** return <b class="SpringGreen">static nodelists</b>

### Traversing Between Element Nodes

`parentNode` `previousSibling / nextSibling` `firstChild / last Child`

## Working with Elements 

:::mermaid 
graph TB; 
       di{Element<hr>&lt; li &gt;  }-->os(text<hr><code>nodeValue</code><br><br>Properties to access text content<br><code>innerHTML</code><br><code>textContent</code><br><br> node munipulation<br><code>createElement</code><br><code>createTextNode</code><br><code>appendChild / removeChild</code>)

       di-->a[attribute<hr><code>nodeValue</code><br><br><code>className / id</code> <br><code>hasAttribute</code> <br><code>getAttribute</code> <br><code>setAttribute</code> <br><code>removeAttribute</code>]
:::




