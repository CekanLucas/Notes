<head><link href="git.css" rel="stylesheet" type="text/css"></head>
<img src="./gitLogo.png" width=50% style="margin-left:50%"/>

link to main [git](git.md)
# GIT `log`
`git log` to see version history

unlike `git status` `git log` shows only <b class="Crimson">commited</b> history
```zsh 
git log # shows curent branch commit history
```

## Commands

``` bash
git log -n 4 # shows 4 commits
git log --online # display each commit on just one line
git log --stat # number of lines changed
git log --author="myUserName" # could use regular expressions here
git log --grep="\S+@\S+" # grep through commit messages
git log <since>..<until> # search range, commit ids, branch names, Head etc
```

### Limiting log output by time
`--since/--after` and `--until/--before`
###### example
```bash
git log --since="last month"
```

Many different formats are accepted for example relative date <i class="text-green-200">3 hourse ago</i>, <i class="text-green-500">ISO dates</i> or <i class="text-green-800">YYYY-MM-DD</i>



`$git log` -when you make a commit git makes a commit object

Remember to write a git commit message especially for simple commits 

`$git commit -m "Yay First Commit"`


## `--pretty=`
- `format`
```zsh
git log --pretty=format:"%h - %an : %s"
```
flag | description 
- | -
%h | abbreviated commit hash
%an | author
%s | commit message
%ar | time since commit has been pushed

### other options
- `online` 
- `short` 
- `full` 
- `fuller` 

### Finding Commits
#### by commit message keyword `--grep`
``` zsh
git log --pretty=format:"%h: %s" --grep=README
```

### Show history of a function or line of code
<b class="Crimson">Note</b> : you can specify range if git cant work out the bounds
```zsh
git log -L myFunction:myFile.js
```

### Show output graphically
`--graph` <b class="Crimson">Note</b> : can combine this with `--pretty`