# Computer Science

## Computer What is it

### Memory

<table>
  <caption>Memory stores data and program instructions in unique memory address locations</caption>
  <tr>
    <th>Memory Address</th>
    <th>Memory Content</th>
    <th></th>
  </tr>
    <tr>
    <td>...</td>
    <td>...</td>
    <td></td>
  </tr>
  <tr>
    <td>2000</td>
    <td>01110010</td>
    <td>Encoding for character <code>C</code></td>
  </tr>
  <tr>
    <td>2001</td>
    <td>01100101</td>
    <td>Encoding for character <code>r</code></td>
  </tr>  <tr>
    <td>2002</td>
    <td>01110111</td>
    <td>Encoding for character <code>e</code></td>
  </tr>  <tr>
    <td>2003</td>
    <td>01000011</td>
    <td>Encoding for character <code>w</code></td>
  </tr>  <tr>
    <td>2004</td>
    <td>00000011</td>
    <td>Decimal number <code>3</code></td>
  </tr>
    </tr>
    <tr>
    <td>...</td>
    <td>...</td>
    <td></td>
  </tr>
</table>

### RAM

**Random Access Memory** on power off memory is wiped

## Computer Programming Languages

Machine Language
: This is bare metal instruction in bits 

Assembly Language 
: Much more user friendly than machine language but close to the metal specify reading and writing in memory locations

.. mermaid::

   sequenceDiagram
      participant Alice
      participant Bob
      Alice->John: Hello John, how are you?
      loop Healthcheck
          John->John: Fight against hypochondria
      end
      Note right of John: Rational thoughts <br/>prevail...
      John-->Alice: Great!
      John->Bob: How about you?
      Bob-->John: Jolly good!

```{mermaid}
    sequenceDiagram
      participant Alice
      participant Bob
      Alice->John: Hello John, how are you?
```