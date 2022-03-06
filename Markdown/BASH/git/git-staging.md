<head><link href="git.css" rel="stylesheet" type="text/css"></head>
<img src="./gitLogo.png" width=50% style="margin-left:50%"/>

link to main [git](git.md)
# GIT <big class="text-yellow-500">Staging</big>

## Intent to add `-N`

```zsh
git add -N file.txt
```

Once git knows that you are intending to add a untrack file you can use commands like `git diff` on the file as well as commit with `git commit -a`

## Interactive Staging `-i` `--interactive`
```zsh
git add -i # this will start interactive shell
```
Once git knows that you are intending to add a untrack file you can use commands like `git diff` on the file as well as commit with `git commit -a`

## Partially stage files `-p` `--patch`
### Interactively <i class="text-gray-400">stage</i> patches
```zsh
git add -p # this will start interactive shell
```
Alternatively you can get here by pressing `5` in the _interactive shell_
### Interactively <i class="text-gray-400">unstage</i> patches
```zsh
git reset -p # this will start interactive shell
```
Alternatively you can get here by pressing `5` in the _interactive shell_

## Untrack File without Deleting it `git rm`
If you only want to remove file from the index but not working directory

    git rm --cached myFile

For Directory 

    git rm --cached -r myDirectory

## Remove all untracked files from Git `git clean`
``` zsh 
# Delete unracked files in current directory
git clean -f 
# Remove untracked directories 
git clean -fd 
```

<span class="text-red-200 font-extrabold">You can also clean directory interactively with the `i` flag</span>
<span class="text-green-200 font-extrabold">You can do a  _dry run_ `n` flag display results without deleting anything</span>


## Create a new branch from Stash

```zsh
git stash branch testing
```
this will create a <code class="filter hue-rotate-180">testing</code> branch and checkout the commit you were on when you made the stash, it will then apply the changes and delete the stash if it was successful
