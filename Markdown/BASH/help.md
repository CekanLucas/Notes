GNU bash, version 4.4.23(1)-release (i686-pc-msys)
These shell commands are defined internally.  Type `help' to see this list.
Type `help name' to find out more about the function` name'.
Use `info bash' to find out more about the shell in general.
Use `man -k' or` info' to find out more about commands not in this list.

A star (*) next to a name means that the command is disabled.

```bash

 job_spec [&]                                  history [-c] [-d offset] [n] or history -a>
 (( expression ))                              if COMMANDS; then COMMANDS; [ elif COMMAND>
 . filename [arguments]                        jobs [-lnprs] [jobspec ...] or jobs -x com>
 :                                             kill [-s sigspec | -n signum | -sigspec] p>
 [ arg... ]                                    let arg [arg ...]
 [[ expression ]]                              local [option] name[=value] ...
 alias [-p] [name[=value] ... ]                logout [n]
 bg [job_spec ...]                             mapfile [-d delim] [-n count] [-O origin] >
 bind [-lpsvPSVX] [-m keymap] [-f filename] >  popd [-n] [+N | -N]
 break [n]                                     printf [-v var] format [arguments]
 builtin [shell-builtin [arg ...]]             pushd [-n] [+N | -N | dir]
 caller [expr]                                 pwd [-LPW]
 case WORD in [PATTERN [| PATTERN]...) COMMA>  read [-ers] [-a array] [-d delim] [-i text>
 cd [-L|[-P [-e]] [-@]] [dir]                  readarray [-n count] [-O origin] [-s count>
 command [-pVv] command [arg ...]              readonly [-aAf] [name[=value] ...] or read>
 compgen [-abcdefgjksuv] [-o option] [-A act>  return [n]
 complete [-abcdefgjksuv] [-pr] [-DE] [-o op>  select NAME [in WORDS ... ;] do COMMANDS; >
 compopt [-o|+o option] [-DE] [name ...]       set [-abefhkmnptuvxBCHP] [-o option-name] >
 continue [n]                                  shift [n]
 coproc [NAME] command [redirections]          shopt [-pqsu] [-o] [optname ...]
 declare [-aAfFgilnrtux] [-p] [name[=value] >  source filename [arguments]
 dirs [-clpv] [+N] [-N]                        suspend [-f]
 disown [-h] [-ar] [jobspec ... | pid ...]     test [expr]
 echo [-neE] [arg ...]                         time [-p] pipeline
 enable [-a] [-dnps] [-f filename] [name ...>  times
 eval [arg ...]                                trap [-lp] [[arg] signal_spec ...]
 exec [-cl] [-a name] [command [arguments ..>  true
 exit [n]                                      type [-afptP] name [name ...]
 export [-fn] [name[=value] ...] or export ->  typeset [-aAfFgilnrtux] [-p] name[=value] >
 false                                         ulimit [-SHabcdefiklmnpqrstuvxPT] [limit]
 fc [-e ename] [-lnr] [first] [last] or fc ->  umask [-p] [-S] [mode]
 fg [job_spec]                                 unalias [-a] name [name ...]
 for NAME [in WORDS ... ] ; do COMMANDS; don>  unset [-f] [-v] [-n] [name ...]
 for (( exp1; exp2; exp3 )); do COMMANDS; do>  until COMMANDS; do COMMANDS; done
 function name { COMMANDS ; } or name () { C>  variables - Names and meanings of some she>
 getopts optstring name [arg]                  wait [-n] [id ...]
 hash [-lr] [-p pathname] [-dt] [name ...]     while COMMANDS; do COMMANDS; done
 help [-dms] [pattern ...]                     { COMMANDS ; }
