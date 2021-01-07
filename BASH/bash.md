
<img src=bashLogo.png>

<style>.one{color:red} exit</style>

#### Simple Commands 
<input type="color" name="" id="">

`date`(gives system date

`cal` creates calendar of current month

`df ` current ammount of free space on disk drive
  - -h flag means human readable

`free ` shows amount of free memory available
   - -h flag means human readable

`exit` exit terminal

`pwd` (print name of current working directory)
* `~ `  is home dir 
* `/ ` is root dir

`cd` (change directory) 
 * `cd ~`_`user_name`_ (change directory to home dir of user ) 
 * `cd -` (change directory to previous pwd ) 

`ls ` (list directory contents) 

Option | Long | Description 
---- | - | -
-a | --all |  list all files including hidden 
-A | --almost --all |  like above but does not list . ..
-d | --directory |  list directories
-F | --classify |  append indicator char eg (/) to dir
-h | --human-readable |  display file size in mb rather than b
-l|  |  display results in long format
-r | --reverse |  display results in reverse order 
-S |  |  sort results by file size 
-t |  |  sort by mdofication time 


`file` (determine file type) 

`less ` (basically starts a pager program to view text files) 
 
Less | Commands
---- | - | -
PAGE UP or b | Scroll back one page 
PAGE DOWN or space | Scroll forward one page 
Up arrow | Scroll up one line 
Down arrow | Scroll down one line 
G | Move to end of file  
1G or g | Move to beggining of file 
/characters | Search forward occurance of characters 
n | Search for next occurance of previous search 
q | Quit Less 


##### remember: absolute file paths vs relative
    
`cp ` _`item1`_` ` _`item2`_` ` (copy to files and directories from_item1_ to _item2_) 

`cp ` _`item1`_` ...` _`directory`_` ` (copy multiple items  into a directory) 

**we can create multiple in one go**

`mv` (Move/rename files and dirs) 

`mkdir` (create directories) 

`rm` (remove files and dir) 


Option | Description 
----  | -
-a  --archive |   with attibutes including ownership and permissions 
-i  --interactive |  before action prompt user for confirmation 
-r --recursive | required with copying directories  
-u --update | only copy files dont exit or are newer than target 
-v --verbose | Displays informative message as action occurs
-f --force | ignore nonexistent files overides --interactive

`ln` (create hard and symbolic links) 

Wildcard  | Meaning
---- | - 
* | matches any characters 
? | matches any single character  
[characters] | matches if member of ***set of characters***
[!characters] | matches if <u>not</u> member of ***set of characters***
[:characters:] | matches if  member of  specified ***<u>class </u>***
[:alnum:] | matches any ***<u>alphanumeric character </u>***
[:alpha:] | matches any ***<u>alphabetic character </u>***
[:digit:] | matches any ***<u>numeral </u>***
[:lower:] | matches any ***<u>lowercase letter </u>***
[:upper:] | matches any ***<u>uppercase letter </u>***
##### using wildcards is known as <span style="color:gold">globbing</span> 

`type` (Indicate how a command name is interpreted)
* executable program 
* cammand built into shell itself 
* shell function 
* aliases 

`which` (display which executable program will be executed )

`help` (get help for shell builtins)

`man` (display command manual page)  <span style="color:indianred">doesn't work </span>

`info` (display  a list of appropriate commands ) <span style="color:indianred">doesn't work </span>

`whatis` (display commands info entry ) <span style="color:indianred">doesn't work </span>

`alias` (create an alias for a program)

```bash
# alias example that I find useful 
alias ls='ls --color=auto'
# to unalias 
unalias ls
# to list current aliases 
alias 
```
`cat` (stream file)

`sort` (sort lines of text)

`uniq` (report or omit repeated lines )

`grep` (print lines matching pattern)

`wc` (print newline, word and byte counts for each file )

`head` (output first part of file)

`tail` (output last part of file)

`tee` (read from standard input and write to standard output and
 files )

## Standard Input, Output, and Error 
standard output => ***stout*** 

standard error => ***sterr***

file1 > file2 <span style="color:gold">redirection of output file1 to file2</span>

file1 >> file2 <span style="color:gold">redirection of output file1 to ***appending*** file2</span>

you can ***pipe*** output of command into less like so 

```bash
$ ls -al | less
```
## `grep` Print Line, Match Pattern

`grep` ***`pattern filename`***
-i (ignore case) -v (print lines that dont **match** pattern)

## Environmental Variables 
`printenv` display all environmental variables
