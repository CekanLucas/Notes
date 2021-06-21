<!-- remember no space between ![]_() -->
<!-- ![Vim logo](https://github.com/VSCodeVim/Vim/blob/master/images/design/vscodevim-logo.png?raw=true)  COMMENTED OUT BECAUSE BLOCK ELEMENT-->
<style>
   ol>li{
      color: limeGreen !important;
   }
   code, pre {
      font-family: Cascadia Code;
   }
</style>
<div>
   <a title="User:D0ktorz [GPL (http://www.gnu.org/licenses/gpl.html)], via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Vimlogo.svg"><img height="200" alt="Vimlogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Vimlogo.svg/512px-Vimlogo.svg.png"></a>
   <a title="User:D0ktorz [GPL (http://www.gnu.org/licenses/gpl.html)], via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Vimlogo.svg"><img height="200" alt="Vimlogo" src="https://github.com/VSCodeVim/Vim/blob/master/images/design/vscodevim-logo.png?raw=true"></a>
</div>

## Lesson 1 SUMMARY

1. The cursor is moved using either the arrow keys or the `hjkl` keys.
>     h (left)       j (down)       k (up)       l (right)

2. To start Vim from the shell prompt type:  
>      vim FILENAME <ENTER>

3. To exit Vim type:
   - `<ESC>   :q!   <ENTER>`  to trash all changes
   - `<ESC>   :wq   <ENTER>`  to save the changes.

4. To delete the character at the cursor type:  `x`

5. To insert or append text type:
   - type `i`  inserted text   <ESC>         insert before the cursor
   - type `A`    appended text   <ESC>         append after the line

NOTE: Pressing <ESC> will place you in Normal mode or will cancel
      an unwanted and partially completed command.

 ## Lesson 2 SUMMARY
1. To delete from the cursor up to the next word type:`dw`
2. To delete from the cursor to the end of a line type:`d$`
3. To delete a whole line type:`dd`
4. To repeat a motion prepend it with a number:`2w`
5. The format for a change command is:

         operator   [number]   motion
<dl class="LightGreen">
   <dt class="Aqua"><b>operator</b></dt><dd>is what to do, such as d  for delete</dd>
   <dt class="Aqua"><b>[number]</b></dt><dd>is an optional count to repeat the motion</dd>
   <dt class="Aqua"><b>motion</b></dt><dd>moves over the text to operate on, such as  w (word), $ (to the end of line), etc.</dd>
</dl>

6. To move to the start of the line use a zero:`0`

7. To undo previous actions, type:           `u`  (lowercase u)
   To undo all the changes on a line, type:  `U`  (capital U)
   To undo the undo's, type:                 `CTRL-R`

### Lesson 3 SUMMARY
  1. To put back text that has just been deleted, type`p` .  This puts the
     deleted text AFTER the cursor (if a line was deleted it will go on the
     line below the cursor).

  2. To replace the character under the cursor, type   r   and then the
     character you want to have there.

  3. The change operator allows you to change from the cursor to where the
     motion takes you.  eg. Type  ce  to change from the cursor to the end of
     the word,  c$  to change to the end of a line.

  4. The format for change is:

         c   [number]   motion
Now go on to the next lesson.
 
 ## Lesson 4 SUMMARY
 vim
  1. CTRL-G  displays your location in the file and the file status.
             G  moves to the end of the file.
     number  G  moves to that line number.
            gg  moves to the first line.

  2. Typing  /  followed by a phrase searches FORWARD for the phrase.
     Typing  ?  followed by a phrase searches BACKWARD for the phrase.
     After a search type  n  to find the next occurrence in the same direction     or  N  to search in the opposite direction.
     CTRL-O takes you back to older positions, CTRL-I to newer positions.

  3. Typing  %  while the cursor is on a (,),[,],{, or } goes to its match.

  4. To substitute new for the first old in a line type    :s/old/new     To substitute new for all 'old's on a line type       :s/old/new/g
     To substitute phrases between two line #'s type       :#,#s/old/new/g
     To substitute all occurrences in the file type        :%s/old/new/g     To ask for confirmation each time add 'c'             :%s/old/new/gc
 
 ## Lesson 5 SUMMARY
 vim
  1.  :!command  executes an external command.

      Some useful examples are:
         (Windows)        (Unix)
          :!dir            :!ls            -  shows a directory listing.
          :!del FILENAME   :!rm FILENAME   -  removes file FILENAME.

  2.  :w FILENAME  writes the current Vim file to disk with name FILENAME.
  3.  v  motion  :w FILENAME  saves the Visually selected lines in file
      FILENAME.

  4.  :r FILENAME  retrieves disk file FILENAME and puts it below the
      cursor position.
  5.  :r !dir  reads the output of the dir command and puts it below the
      cursor position.
 
## Lesson 6 SUMMARY
  1. Type  `o`  to open a line BELOW the cursor and start Insert mode.
     Type  `O`  to open a line ABOVE the cursor.

  2. Type  `a`  to insert text AFTER the cursor.
     Type  `A`  to insert text after the end of the line.

  3. 
      - The  `e`  command moves to the end of a word.
      - Use `b` (<b class="Teal">b</b>ack) to jump to the beginning of a word backwards
      - Use `ge` to jump to the end of a word backwards
  4. The  `y`  operator yanks (copies) text,  p  puts (pastes) it.
  5. Typing a capital  R  enters Replace mode until  <ESC>  is pressed.

  6. Typing ":set xxx" sets the option "xxx".  Some options are:
        'ic' 'ignorecase'       ignore upper/lower case when searching
        'is' 'incsearch'        show partial matches for a search phrase        'hls' 'hlsearch'        highlight all matching phrases
     You can either use the long or the short option name.
  7. Prepend "no" to switch an option off:   :set noic
 
 ## Lesson 7 SUMMARY
 
1. Type`:help`or press`<F1>`or`<HELP>`to open a help window
2. Type`:help cmd` to find help on`cmd`
3. Type  `CTRL-W` `CTRL-W`  to jump to another window.

4. Type  :q  to close the help window.
5. Create a vimrc startup script to keep your preferred settings.

6. When typing a  :  command, press CTRL-D to see possible completions.
   Press <TAB> to use one completion.
 

## Find Motions

`f` to move to specified character `F` to move backwords 

`t` `T` is like above but places cursor before searched character

after using above you can use `;` and `,` to repeat the last character search

### Moving Horizontally Extremely

first | last | Moves to ...
- | - | -
`0` | `$` | <b class="Sienna">character of a line</b>
`^`  | `g_` | <b class="Sienna">non-blank character of a line</b>

### Moving Vertically 
`}` jumps entire paragraphs <b class="SteelBlue">downwards</b>

`{` jumps entire paragraphs <b class="SteelBlue">upwards</b>

### Moving with Search Patterns

`/{pattern}` to search <b class="RoyalBlue">forwards</b>

`?{pattern}` to search <b class="RoyalBlue">backwards</b>

> Note: **{pattern}** could also be a regular expression 

`n` & `N` to repeat previous search

Use `*` to search for word under cursor

Use `#` to search for word under cursor backwards

type `gg` to go to top of file 

use `{line}gg` to go to a specific line

use `G` to go the end of the file

type `%` jump to matching `( { [ ] } )`

use `,` to repeat command `;` for background

`.` to repeat last command <span class="LightGreen">good for when you use complex commands repeatedly</span>

## `{operator} {a|i} {text-object}`
<b class="CornflowerBlue">`i`nner and `a`round </b>
<big class="RoyalBlue">Some Text Object Identifiers</big>

`w` <big><big class="HotPink">w</big></big>ord
`s` <big class="HotPink"><big>s</big></big>entence
`p` <Big class="HotPink"><big>p</big></Big>aragraph
`b` `(`<big class="HotPink"><big>B</big></big>lock surrounded by `( )`
`B` `{`<big class="HotPink"><big>B</big></big>lock surrounded by `{ }`
`"` `'` <big class="HotPink"><big>Q</big></big>uoted text
`<`, `>` for a <big class="HotPink"><big>block</big></big> surrounded by `< >`
`[`, `]` for a <big class="HotPink"><big>block</big></big> surrounded by `[ ]`
`t` for <big class="HotPink"><big>t</big></big>ag


<big class="OrangeRed">Some Text Object Identifiers</big>
<span class="Orange">
`x` is equivalent to `dl` and deletes the character under the cursor
`X` is equivalent to `dh` and deletes the character before the cursor
`s` is equivalent to `ch` deletes the character under the cursor and puts you into _insert mode_
`~` to switch case for a single character
</span>


