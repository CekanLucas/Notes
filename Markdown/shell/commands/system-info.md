<head><link href="commands.css" rel="stylesheet" type="text/css"></head>
<img src="../bashLogo.png" width=50% style="margin-left:50%"/>

<i class="Lime">from linux commands app</i>


# SYSTEM INFORMATION

## Remote Repository 

<code class="filter hue-rotate-180">uname -a</code> <b class="Orange">Linux System Information</b>
            
    Linux lucas-PC 5.4.0-77-generic #86-Ubuntu SMP Thu Jun 17 02:35:03 UTC 2021 x86_64 x86_64 x86_64 GNU/Linux

<code class="filter hue-rotate-180">uname -r</code> <b class="Orange">Display kernel release information</b>
            
    5.4.0-77-generic

<code class="filter hue-rotate-180">uptime</code> <b class="Orange">shows how long the system has been running + load</b>
            
    12:00:30 up 38 min,  1 user,  load average: 0.61, 0.69, 0.52

<code class="filter hue-rotate-180">hostname</code> <b class="Orange">shows system host name</b>

    lucas-PC

<code class="filter hue-rotate-180">hostname -I</code> <b class="Orange">display the ip addresses of the host</b>

    192.168.1.5 192.168.1.6 

<code class="filter hue-rotate-180">last reboot</code> <b class="Orange">shows system reboot history</b>

    reboot   system boot  5.4.0-77-generic Sat Jul 17 11:22   still running
    reboot   system boot  5.4.0-77-generic Fri Jul 16 08:16   still running

<code class="filter hue-rotate-180">w</code> <b class="Orange">display who is online</b>

    12:08:05 up 46 min,  1 user,  load average: 1.13, 0.98, 0.71
    USER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT
    dubi     tty7     :0               11:22   46:01  53.38s  0.89s cinnamon-session

<code class="filter hue-rotate-180">whoami</code> <b class="Orange">Who you are logged in as</b>