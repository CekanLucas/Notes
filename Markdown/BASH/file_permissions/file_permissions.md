<head><link href="commands.css" rel="stylesheet" type="text/css"></head>
<img src="../bashLogo.png" width=50% style="margin-left:50%"/>

<i class="Lime">from enki linux app</i>


# File Permissions

<code class="filter hue-rotate-30">ls -l</code> <b class="Orange">See files with file permissions</b>
            
    -rwxrwxr-x 1 dubi dubi   70 Oct 12 21:28 filePermissions.bash
    -rwxrwxr-x 1 dubi dubi  225 Oct 12 21:14 file_permissions.css
    -rwxrwxr-x 1 dubi dubi 1720 Oct 12 21:14 file_permissions.md

<span class="SkyBlue">There are three major <big class="BlueViolet">user groups</big></span>

1) `user` <b class="Red">u</b> <span class="HotPink">read | write | execute</span> rwx

2) `group` <b class="Red">g</b> <span class="HotPink">read  | execute</span> rx

2) `others` <b class="Red">o</b> <span class="HotPink">execute</span> x

<code class="filter hue-rotate-30">chmod a+x <i class="Red">filename</i></code> <b class="Orange">adds execute permissions for all</b>
<code class="filter hue-rotate-30">chmod g-x <i class="Red">filename</i></code> <b class="Orange">drops execute permmissions for group</b>
<code class="filter hue-rotate-30">chmod go+w <i class="Red">filename</i></code> <b class="Orange">adds write permissions for others and group</b>

We can also use digits for `chmod` not just characters
| decimal | binary | description                                               |
| ------- | ------ | --------------------------------------------------------- |
| 0       | 000    | <b class="LightBlue">no permissions</b>                   |
| 1       | 001    | <b class="LightBlue">execute permission</b>               |
| 2       | 010    | <b class="LightBlue">write & execute permission</b>       |
| 3       | 011    | <b class="LightBlue">read permission</b>                  |
| 4       | 100    | <b class="LightBlue">read & execute permission</b>        |
| 5       | 101    | <b class="LightBlue">read & write permission</b>          |
| 6       | 110    | <b class="LightBlue">read & write permission</b>          |
| 7       | 111    | <b class="LightBlue">read, write & execute permission</b> |

so `chmod 700 file`

700 === 111 000 000 === set all permissions for owners

## `touch` to modify create time
``` bash
touch [filename]
touch -d "2 hours ago" [filename]
# modify from created time
touch -d "$(date -r file) - 2 hours" [filename]
```

## `fold` wrap length
Default length is 80 characters

    fold -w11 file
---
## `shred` delete data really securely
---
## `pushd` like `cd` but stores history

    pushd [directory]

```bash
cd ~/dir1
pushd ~/dir2
pushd ~/dir3
# Working directory is now ~/dir3
# Directory stack contains ~/dir2 ~/dir1

pushd /tmp
# Working directory is now /tmp
# Directory stack contains ~/dir3 ~/dir2 ~/dir1

pushd +1
# Working directory is now ~/dir3
# Directory stack contains ~/dir2 ~/dir1 /tmp

popd
# Working directory is now ~/dir2
# Directory stack contains ~/dir1 /tmp
```

The pushd function adds <span class="HotPink">DIRECTORY</span> to the top of the <span class="HotPink">directory stack</span> and makes it the <span class="HotPink">current working directory</span>. popd will pop it off and return to the original directory

Without arguments, it exchanges the top two directories in the stack.

`pushd +NUMBER` rotates the stack counter-clockwise i.e. from bottom to top

`pushd -NUMBER` rotates clockwise i.e. top to bottom.

> you can see directories saved by `pushd` usinf `dirs`

---
## `lynx` terminal based browser

    lynx https://google.com
---

## Rapidly invoke editor to copy and be able to paste into editor
press `ctrl-x e` to rapidly enter long command into editor

---

# Standard Streams 

<span class='text-purple-700'><code class='filter text-purple-700 bg-gradient-to-tr'>stdin</code> Standard Input</span>

<span class='text-blue-700'><code class='filter text-blue-700 bg-gradient-to-tr'>stdout</code> Standard Output</span>

<span class='text-red-700'><code class='filter text-red-500  bg-gradient-to-tr'>stderr</code> Standard Error</span>

In **Unix**, when a program wants to open a file for reading or writing it must obtain a <span class="text-pink-700 font-extrabold">file descriptor</span> from the OS 

The OS keeps track of which <span class="text-pink-700 font-extrabold">file descriptor</span> references which file


#### `|` <sup class="LimeGreen"> Pipe Operator</sup> Glue <span class="FireBrick">stdout</span> from one proccess as <span class="FireBrick">stdin</span> of another
```bash 
ps ax | grep mysql 

# output 
31166 pts/5    S+     0:00 grep mysql
```

<code class="filter mix-blend-color-dodge hue-rotate-180">ps ax</code> writes a list of currently running proccesses to `stdout`

<code class="filter mix-blend-color-dodge -hue-rotate-90">grep mysql</code> on its own reads from `stdin` and writes all input lines containing <span class="HotPink">mysql</span> `stdout`

> <big class="Green">The key thing is that the two commands seperated by **|** dont know of each other the os glues these two proccess together by <span class="Red">piping</span></big>

#### `>` & `<` <sup class="LimeGreen">output redirection</sup> Redirect <span class="FireBrick">stdout</span> from one proccess to a specified file

```bash 
ps ax > ps_output.txt
```

> <big class="Green">The key thing is that ps does not realise it is writing to file it is only writing to `stdout` <span class="Red">piping</span></big>