<head>
  <link 
      rel="stylesheet" 
      type="text/css" 
      media="all" 
      href="../boilerplate/color.css"/>
  <link 
      rel="stylesheet" 
      type="text/css" 
      media="all" 
      href="../boilerplate/CSS.css"/>
    <link 
      href="https://fonts.googleapis.com/css?family=Fira+Mono:500&display=swap" 
      rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<style> 
    .head {
      font-size: 1.5em;
      font-weight: bolder;
      color: Tomato;
    }
    td:first-child {
        background-color:firebrick;
        text-align:center;
        font-weight: bolder;
    }
    li b {
        color: blueViolet;
        font-size: 1.5em;
    }
    li{
        list-style-type: circle;
    }
</style>
</head>    


 Char. | Description
-|-
" " | <span class="head">Whitespace</span> this is a tab, newline, vertical tab, form feed, carriage return, or space. Bash uses whitespace to determine where words begin and end. The first word is the command name and additional words become arguments to that command.
$ | <span class="head">Expansion</span> introduces various types of expansion: parameter expansion (e.g. $var or ${var}), command substitution (e.g. $(command)), or arithmetic expansion (e.g. $((expression))). More on expansions later.
'' | <span class="head">Single quotes</span> protect the text inside them so that it has a literal meaning. With them, generally any kind of interpretation by Bash is ignored: special characters are passed over and multiple words are prevented from being split.
""|<span class="head">Double quotes</span> protect the text inside them from being split into multiple words or arguments, yet allow substitutions to occur; the meaning of most other special characters is usually prevented.
\ | <span class="head">Escape (backslash)</span> prevents the next character from being interpreted as a special character. This works outside of quoting, inside double quotes, and generally ignored in single quotes.
\# | <span class="head">Comment</span> the # character begins a commentary that extends to the end of the line. Comments are notes of explanation and are not processed by the shell.
= | <span class="head">Assignment</span> assign a value to a variable (e.g. logdir=/var/log/myprog). Whitespace is not allowed on either side of the = character.
[[ ]] | <span class="head">Test</span> an evaluation of a conditional expression to determine whether it is "true" or "false". Tests are used in Bash to compare strings, check the existence of a file, etc. More of this will be covered later.
! |	<span class="head">Negate</span>  used to negate or reverse a test or exit status. For example: ! grep text file; exit $?.
\>,&nbsp;>>,&nbsp;< | <span class="head">Redirection</span> redirect a command's output or input to a file. Redirections will be covered later.
\|	| <span class="head">Pipe</span>send the output from one command to the input of another command. This is a method of chaining commands together. Example: echo "Hello beautiful." | grep -o beautiful.
; | <span class="head">Command separator </span>used to separate multiple commands that are on the same line.
{ } | <span class="head">Inline group</span> commands inside the curly braces are treated as if they were one command. It is convenient to use these when Bash syntax requires only one command and a function doesn't feel warranted.
( ) | <span class="head">Subshell group </span>similar to the above but where commands within are executed in a subshell (a new process). Used much like a sandbox, if a command causes side effects (like changing variables), it will have no effect on the current shell.
(( )) |  <span class="head">Arithmetic expression</span> with an arithmetic expression, characters such as +, -, *, and / are mathematical operators used for calculations. They can be used for variable assignments like (( a = 1 + 4 )) as well as tests like if (( a < b )). More on this later.
$(( )) | <span class="head">Arithmetic expansion</span> Comparable to the above, but the expression is replaced with the result of its arithmetic evaluation. Example: echo "The average is $(( (a+b)/2 ))".
*, ? | <span class="head">Globs</span> "wildcard" characters which match parts of filenames (e.g. ls *.txt).
~ | <span class="head">Home directory </span>the tilde is a representation of a home directory. When alone or followed by a /, it means the current user's home directory; otherwise, a username must be specified (e.g. ls ~/Documents; cp ~john/.bashrc .).
& | <span class="head">Background</span> when used at the end of a command, run the command in the background (do not wait for it to complete). 

## Example Script
```bash
$ echo "I am $LOGNAME" # I am dubi
$ echo 'I am $LOGNAME' # I am $LOGNAME
$ # boo
$ echo An open\ \ \ space # An open   space
$ echo "My computer is $(hostname)" # My computer is dubiusb
$ echo boo > file
$ echo $(( 5 + 5 )) # 10
$ (( 5 > 0 )) && echo "Five is greater than zero." #Five is greater than zero.
```
And here are a few examples of Variables that the shell provides for you:

- <b>BASH_VERSION</b>  Contains a string describing the version of Bash.
- <b>HOSTNAME</b>  Contains the hostname of your computer, I swear. Either short or long form, depending on how your computer is set up.
- <b>PPID</b>  Contains the PID of the parent process of this shell.
- <b>PWD</b>  Contains the current working directory.
- <b>RANDOM</b>  Each time you expand this variable, a (pseudo)random number between 0 and 32767 is generated.
- <b>UID</b>  The ID number of the current user. Not reliable for security/authentication purposes, alas.
- <b>COLUMNS</b>  The number of characters that fit on one line in your terminal. (The width of your terminal in characters.)
- <b>LINES</b>  The number of lines that fit in your terminal. (The height of your terminal in characters.)
- <b>HOME</b>  The current user's home directory.
- <b>PATH</b>  A colon-separated list of paths that will be searched to find a command, if it is not an alias, function, builtin command, or shell keyword, and no pathname is specified.

- <b>PS1</b>: Contains a string that describes the format of your shell prompt.

- <b>TMPDIR</b>: Contains the directory that is used to store temporary files (by the shell). 