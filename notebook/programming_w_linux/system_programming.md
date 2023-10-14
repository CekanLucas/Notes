# System Programming

## Computers - An Overview

Here are how computers are classified 

> **Note**: this are not distinct classification there is a grey area between these computers

`Supercomputers` `Mainframe Computers` `Minicomputers` `Minicomputers`

Class | Typical Specifications | Approximate Speed
-- | -- | --
Microcomputers | 64+ mill main memory cells <br> 4 bill disk storage cells <br> single user | 10+ mill instructions per sec
Minicomputers | 128+ mill main memory cells <br> 10 bill disk storage cells <br> 1 tape drive <br> 128 interactive users | 30+ mill instructions per sec
Mainframe | 1+ bill main memory cells <br> 100 bill disk storage cells <br> multiple tape drive <br> 100s interactive users <br> 4+ cpu or more | 50+ mill instructions per sec
Supercomputer | 1+ bill main memory cells <br> 100 bill disk storage cells <br> 64+ cpu or more | 2+ bill instructions per sec



1. ### Supercomputer

> The **fastest** and the **most expensive** computers, *1,000* times faster than mainframe computers

Designed for the most demanding of computational applications, such as weather forecasting, three-dimensional modeling, and computer animation. All these tasks require an extremely large number of complex calculations and need supercomputer performance

Super-computers usually have hundreds of processors and are used with the very latest and most expensive hardware devices


2. ### Mainframe Computers

Mainframe computers are large, fast systems designed to meet the information processing needs of large organizations. 

They can support several hundred users and execute hundreds of programs simultaneously. They have extensive input/output (I/O) capabilities and support a large amount of primary and secondary storage. Mainframes are used mostly in large business environments, such as banks and hospitals, and in other large institutions, such as universities. They are costly and usually require a trained support staff for operation and maintenance.

```{admonition} I/O Devices
I/O devices are the means by which a computer communicates with the external world (*humans or other computers*) they vary in speed and communication medium.

```

3. ### Minicomputers

Until the late 1960s, all computers were mainframes, and only large organizations could afford them Then minicomputers were developed

Their original function involved performing specialized tasks, and they were used primarily in universities and scientific environments. Minicomputers quickly became popular among small and medium-sized organizations with data processing needs. Some of today’s “minis” rival mainframes in power and capability, and most are general-purpose computers. Like mainframes, minicomputers are capable of providing information processing services for multiple users and can execute many application programs concurrently. However, they are cheaper than mainframes and are easier to install and maintain.

4. ### Minicomputers

Also called *personal computers* or *PCs*, microcomputers are the least costly and most popular computers on the market. They are small enough to fit on top of a desk or in a briefcase. Microcomputers vary widely in cost and power, with some models rivaling the minicomputers and older mainframes. They are capable of running many business applications and can function as stand-alone units or can be hooked up with other computers to extend their capabilities


## Unix Operating System

`early 1960s` many computer work in *batch mode* running a single jobs this was when programs were punch cards waiting gor the output on the line printer\
The UNIX operating system was born in `1969`

In `1973` Ken and Dennis rewrote UNIX in C from assembly

• The UNIX operating system was the brainchild of Ken Thompson and Dennis Ritchie
• Universities and colleges have played an important role in the popularity of
the UNIX operating system

There are two major versions of the UNIX operating system
- AT&T UNIX version V
- Berkeley UNIX
Other UNIX varieties are based on one of these two versions

> About 95 percent of the UNIX operating system is written in C.
>A very small part of UNIX is still written in assembly language; that part is mostly concentrated in the kernel, the part that interacts directly with the hardware

### X Window System
X Window system, also referred to as X or X11, is not a UNIX version.

It is a *graphical user interface* designed to provide the bases for graphical windowing in a way that is portable to most UNIX platforms

It was developed in 1984 and soon became the standard environment for UNIX windowing systems

Because X Window mandates no user interface, many different interfaces exist

The Common Desktop Environment, or CDE, is an attempt to unify the UNIX world on a common user interface. The CDE provides the front panel that is usually located at the bottom of the screen. From this panel, you can invoke applications that come with the Common Desktop Environment. X Window system is based on the client/server model and is used on UNIX and UNIX-like systems, such as Linux

```
   _______________________
  |       shell           |        THE UNIX SYSTEM
  |     ____________    |------|     COMPONENTS
  |     | resident |    | user | 
  |     | modules  |    |------|
  |     |          |      |   
  |     | |------| |      |  
  |_____|_|kernel|_|______|                      
          |      | 
|--------------------------------|
| hardware                       |
|--------------------------------|
```

**Kernel** The UNIX kernel, also called the base operating system, is the layer that man-ages all the hardware-dependent functions. These functions are spread over a number of modules within the UNIX kernel. The kernel layer consists of modules closest to the hardware that are for the most part protected from the application programs. Users have no direct access to it.
1. The utility programs and UNIX commands are not part of the kernel. 
2. A user’s application programs are protected from inadvertent writes by other users.
   
**Resident Modules Layer** The resident modules layer provides service routines that per-form user-requested services. These services include input/output control services, file/disk access services (called the file system), and process creation and termination ser-vices. A system call is used by application programs to access this layer.
Utility Layer The utility layer is the UNIX user interface, commonly referred to as the shell. The shell and each of the other UNIX commands and utilities are separate pro-grams. They are part of the UNIX distribution software but are not considered part of the kernel. There are more than 100 commands and utilities in UNIX that provide various types of services to users and application programs

**Virtual Computer** The UNIX operating system allocates an execution environment to each user in the system. This environment, or virtual computer, consists of a terminal for user interface and shared access to the other computer resources such as memory, disk drives, and most importantly, the CPU. UNIX, a multi-user operating system, is implemented as a collection of virtual computers. To the users, it appears that each of them has his or her own private pseudo-computer. The virtual computers are slower than the base computer due to sharing the CPU and other hardware resources with other virtual computers.

**Processes** The UNIX operating system allocates resources to users and programs by way of processes. Each process has a process identification number, and a set of re-sources is associated with that number. Each is executed in a virtual computer environment. What this really means is that a process runs in a virtual computer much as if it had a dedicated single-user CPU

### UNIX Features

- #### Portability
- #### Multi-user Capability
- #### Multi-tasking Capability
  - Run tasks in the background and switch between them 
- #### Hierarchical File System
  - Users can find data and programs with little difficulty 
- #### Device-Independent INput and Output Operations

Input and output operations are device independent because UNIX treats all devices (such as printers, terminals, and disks) as files. With UNIX, you can redirect the output of your commands to any device or file. This redirection process is also possible with input data. You can redirect the input that comes from your terminal to come from a disk instead.

- #### Utilities
  - The unix system includes more than 100 utility programs called *commands*

- #### System Services

The UNIX system provides a number of services that facilitate administration and maintenance of the system. A description of these services is beyond the scope of this text. However, the following are some of these services: 

• System administration service 

• System reconfiguration service 

• File system maintenance service 

• File transfer service (*called UUCP for UNIX to UNIX Copy*)

### Logging Process

When you boot (*bootstrap*) the UNIX system, the resident part of the operating system (*kernel*) is loaded into the main memory

The rest of the operating system programs (*utilities*) remain on the system disk and are brought into memory only when you request that the command be executed

The shell program also is loaded into memory for execution whenever you log in

> Learning about the sequence of events that occur when you log in will help you gain a better understanding of the UNIX system’s internal operation

After UNIX completes the boot procedures, a program called *init* activates a program called *getty* for each terminal port on the system

The getty program displays the login: prompt at the assigned terminal, and then waits for you to type your User ID


## Navigating Command Prompt
`Backspace` `Ctrl-h` cursor moves left erase one character *erase character*
`Ctrl-u` entire command line is removed this character is called the *kill character* 

`Del` `Ctrl-c` *interrupt character* stops the running program in shell

## List of commands

`passwd` Change password or create new password if one is not assigned yet
`date` display date
`cal` display calendar
`help` display basic help topics

### File System

`pwd` print working directory
`cd` change directory
`mkdir` **source** create directory
`ls` list command
`cat` display files
`lp` sends a copy of a file to a printer
`rm` delete files

## Unix File System

**directories** and **subdirectories**

<div class="mxgraph" style="max-width:100%;border:1px solid transparent;" data-mxgraph="{&quot;highlight&quot;:&quot;#0000ff&quot;,&quot;nav&quot;:true,&quot;resize&quot;:true,&quot;toolbar&quot;:&quot;zoom layers tags lightbox&quot;,&quot;edit&quot;:&quot;_blank&quot;,&quot;xml&quot;:&quot;&lt;mxfile&gt;&lt;diagram id=\&quot;xSJ3DrkAcIuYlXHAuLax\&quot; name=\&quot;Page-1\&quot;&gt;&lt;mxGraphModel dx=\&quot;726\&quot; dy=\&quot;1287\&quot; grid=\&quot;1\&quot; gridSize=\&quot;10\&quot; guides=\&quot;1\&quot; tooltips=\&quot;1\&quot; connect=\&quot;1\&quot; arrows=\&quot;1\&quot; fold=\&quot;1\&quot; page=\&quot;1\&quot; pageScale=\&quot;1\&quot; pageWidth=\&quot;1169\&quot; pageHeight=\&quot;827\&quot; math=\&quot;0\&quot; shadow=\&quot;0\&quot;&gt;&lt;root&gt;&lt;mxCell id=\&quot;0\&quot;/&gt;&lt;mxCell id=\&quot;1\&quot; parent=\&quot;0\&quot;/&gt;&lt;mxCell id=\&quot;7\&quot; value=\&quot;\&quot; style=\&quot;endArrow=classic;html=1;hachureGap=4;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=16;exitX=0;exitY=0;exitDx=80;exitDy=20;exitPerimeter=0;shadow=1;strokeWidth=5;\&quot; parent=\&quot;1\&quot; source=\&quot;3\&quot; edge=\&quot;1\&quot;&gt;&lt;mxGeometry width=\&quot;50\&quot; height=\&quot;50\&quot; relative=\&quot;1\&quot; as=\&quot;geometry\&quot;&gt;&lt;mxPoint x=\&quot;410\&quot; y=\&quot;370\&quot; as=\&quot;sourcePoint\&quot;/&gt;&lt;mxPoint x=\&quot;460\&quot; y=\&quot;370\&quot; as=\&quot;targetPoint\&quot;/&gt;&lt;/mxGeometry&gt;&lt;/mxCell&gt;&lt;mxCell id=\&quot;24\&quot; value=\&quot;&amp;lt;font data-font-src=&amp;quot;https://fonts.googleapis.com/css?family=Architects+Daughter&amp;quot; face=&amp;quot;Architects Daughter&amp;quot;&amp;gt;return lookup (&amp;lt;/font&amp;gt;&amp;lt;font data-font-src=&amp;quot;https://fonts.googleapis.com/css?family=Architects+Daughter&amp;quot;&amp;gt;lexeme&amp;lt;/font&amp;gt;&amp;lt;font data-font-src=&amp;quot;https://fonts.googleapis.com/css?family=Architects+Daughter&amp;quot; face=&amp;quot;Architects Daughter&amp;quot;&amp;gt;)&amp;lt;/font&amp;gt;\&quot; style=\&quot;edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];fontSize=20;fontFamily=Lucida Console;fontColor=default;\&quot; parent=\&quot;7\&quot; vertex=\&quot;1\&quot; connectable=\&quot;0\&quot;&gt;&lt;mxGeometry x=\&quot;0.4593\&quot; y=\&quot;1\&quot; relative=\&quot;1\&quot; as=\&quot;geometry\&quot;&gt;&lt;mxPoint x=\&quot;127\&quot; as=\&quot;offset\&quot;/&gt;&lt;/mxGeometry&gt;&lt;/mxCell&gt;&lt;mxCell id=\&quot;10\&quot; value=\&quot;\&quot; style=\&quot;endArrow=classic;html=1;hachureGap=4;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=16;exitX=0;exitY=0;exitDx=80;exitDy=20;exitPerimeter=0;shadow=1;strokeWidth=5;\&quot; parent=\&quot;1\&quot; edge=\&quot;1\&quot;&gt;&lt;mxGeometry width=\&quot;50\&quot; height=\&quot;50\&quot; relative=\&quot;1\&quot; as=\&quot;geometry\&quot;&gt;&lt;mxPoint x=\&quot;410\&quot; y=\&quot;504.5\&quot; as=\&quot;sourcePoint\&quot;/&gt;&lt;mxPoint x=\&quot;460\&quot; y=\&quot;505\&quot; as=\&quot;targetPoint\&quot;/&gt;&lt;/mxGeometry&gt;&lt;/mxCell&gt;&lt;mxCell id=\&quot;2\&quot; value=\&quot;Start\&quot; style=\&quot;shadow=1;align=center;html=1;strokeWidth=8;shape=mxgraph.rtl.abstract.entity;container=1;collapsible=0;kind=combinational;drawPins=0;left=3;right=2;bottom=0;top=0;hachureGap=4;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=20;rotation=0;fillColor=#647687;strokeColor=#bfbaba;textDirection=ltr;fontColor=#ffffff;perimeterSpacing=0;\&quot; parent=\&quot;1\&quot; vertex=\&quot;1\&quot;&gt;&lt;mxGeometry x=\&quot;40\&quot; y=\&quot;350\&quot; width=\&quot;80\&quot; height=\&quot;50\&quot; as=\&quot;geometry\&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=\&quot;3\&quot; value=\&quot;id\&quot; style=\&quot;shadow=1;align=center;html=1;strokeWidth=8;shape=mxgraph.rtl.abstract.entity;container=1;collapsible=0;kind=combinational;drawPins=0;left=3;right=2;bottom=0;top=0;hachureGap=4;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=20;rotation=0;fillColor=#647687;strokeColor=#bfbaba;textDirection=ltr;fontColor=#ffffff;perimeterSpacing=0;\&quot; parent=\&quot;1\&quot; vertex=\&quot;1\&quot;&gt;&lt;mxGeometry x=\&quot;330\&quot; y=\&quot;350\&quot; width=\&quot;80\&quot; height=\&quot;50\&quot; as=\&quot;geometry\&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=\&quot;4\&quot; value=\&quot;int\&quot; style=\&quot;shadow=1;align=center;html=1;strokeWidth=8;shape=mxgraph.rtl.abstract.entity;container=1;collapsible=0;kind=combinational;drawPins=0;left=3;right=2;bottom=0;top=0;hachureGap=4;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=20;rotation=0;fillColor=#647687;strokeColor=#bfbaba;textDirection=ltr;fontColor=#ffffff;perimeterSpacing=0;\&quot; parent=\&quot;1\&quot; vertex=\&quot;1\&quot;&gt;&lt;mxGeometry x=\&quot;330\&quot; y=\&quot;480\&quot; width=\&quot;80\&quot; height=\&quot;50\&quot; as=\&quot;geometry\&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=\&quot;5\&quot; value=\&quot;unkown\&quot; style=\&quot;shadow=1;align=center;html=1;strokeWidth=8;shape=mxgraph.rtl.abstract.entity;container=1;collapsible=0;kind=combinational;drawPins=0;left=3;right=2;bottom=0;top=0;hachureGap=4;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=20;rotation=0;fillColor=#647687;strokeColor=#bfbaba;textDirection=ltr;fontColor=#ffffff;perimeterSpacing=0;\&quot; parent=\&quot;1\&quot; vertex=\&quot;1\&quot;&gt;&lt;mxGeometry x=\&quot;320\&quot; y=\&quot;650\&quot; width=\&quot;80\&quot; height=\&quot;50\&quot; as=\&quot;geometry\&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=\&quot;6\&quot; value=\&quot;&amp;lt;p style=&amp;quot;line-height: 200%;&amp;quot;&amp;gt;Letter&amp;lt;br&amp;gt;&amp;lt;font face=&amp;quot;Lucida Console&amp;quot;&amp;gt;addChar; getChar&amp;lt;/font&amp;gt;&amp;lt;/p&amp;gt;\&quot; style=\&quot;endArrow=classic;html=1;hachureGap=4;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=16;exitX=0;exitY=0;exitDx=79;exitDy=20;exitPerimeter=0;entryX=0;entryY=0;entryDx=0;entryDy=20;entryPerimeter=0;shadow=1;strokeWidth=5;labelBackgroundColor=none;spacingTop=0;spacing=0;\&quot; parent=\&quot;1\&quot; source=\&quot;2\&quot; target=\&quot;3\&quot; edge=\&quot;1\&quot;&gt;&lt;mxGeometry width=\&quot;50\&quot; height=\&quot;50\&quot; relative=\&quot;1\&quot; as=\&quot;geometry\&quot;&gt;&lt;mxPoint x=\&quot;160\&quot; y=\&quot;340\&quot; as=\&quot;sourcePoint\&quot;/&gt;&lt;mxPoint x=\&quot;210\&quot; y=\&quot;290\&quot; as=\&quot;targetPoint\&quot;/&gt;&lt;/mxGeometry&gt;&lt;/mxCell&gt;&lt;mxCell id=\&quot;8\&quot; value=\&quot;\&quot; style=\&quot;endArrow=classic;html=1;hachureGap=4;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=16;exitX=0;exitY=0;exitDx=72;exitDy=40;exitPerimeter=0;entryX=0;entryY=0;entryDx=8;entryDy=10;entryPerimeter=0;shadow=1;strokeWidth=5;edgeStyle=orthogonalEdgeStyle;curved=1;\&quot; parent=\&quot;1\&quot; source=\&quot;2\&quot; target=\&quot;4\&quot; edge=\&quot;1\&quot;&gt;&lt;mxGeometry width=\&quot;50\&quot; height=\&quot;50\&quot; relative=\&quot;1\&quot; as=\&quot;geometry\&quot;&gt;&lt;mxPoint x=\&quot;119\&quot; y=\&quot;504.5\&quot; as=\&quot;sourcePoint\&quot;/&gt;&lt;mxPoint x=\&quot;330\&quot; y=\&quot;504.5\&quot; as=\&quot;targetPoint\&quot;/&gt;&lt;Array as=\&quot;points\&quot;&gt;&lt;mxPoint x=\&quot;112\&quot; y=\&quot;450\&quot;/&gt;&lt;mxPoint x=\&quot;338\&quot; y=\&quot;450\&quot;/&gt;&lt;/Array&gt;&lt;/mxGeometry&gt;&lt;/mxCell&gt;&lt;mxCell id=\&quot;13\&quot; value=\&quot;&amp;lt;p style=&amp;quot;line-height: 200%;&amp;quot;&amp;gt;&amp;lt;font face=&amp;quot;Architects Daughter&amp;quot;&amp;gt;&amp;lt;span style=&amp;quot;font-size: 16px;&amp;quot;&amp;gt;Digit&amp;lt;/span&amp;gt;&amp;lt;/font&amp;gt;&amp;lt;br style=&amp;quot;font-family: &amp;amp;quot;Architects Daughter&amp;amp;quot;; font-size: 16px;&amp;quot;&amp;gt;&amp;lt;font style=&amp;quot;font-size: 16px;&amp;quot; face=&amp;quot;Lucida Console&amp;quot;&amp;gt;addChar; getChar&amp;lt;/font&amp;gt;&amp;lt;/p&amp;gt;\&quot; style=\&quot;edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];fontSize=20;fontFamily=Lucida Console;labelBackgroundColor=none;fontColor=default;\&quot; parent=\&quot;8\&quot; vertex=\&quot;1\&quot; connectable=\&quot;0\&quot;&gt;&lt;mxGeometry x=\&quot;0.1406\&quot; y=\&quot;2\&quot; relative=\&quot;1\&quot; as=\&quot;geometry\&quot;&gt;&lt;mxPoint as=\&quot;offset\&quot;/&gt;&lt;/mxGeometry&gt;&lt;/mxCell&gt;&lt;mxCell id=\&quot;9\&quot; value=\&quot;\&quot; style=\&quot;endArrow=classic;html=1;hachureGap=4;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=16;exitX=0.409;exitY=1.086;exitDx=0;exitDy=0;exitPerimeter=0;entryX=0;entryY=0;entryDx=8;entryDy=10;entryPerimeter=0;shadow=1;strokeWidth=5;edgeStyle=orthogonalEdgeStyle;curved=1;\&quot; parent=\&quot;1\&quot; source=\&quot;2\&quot; target=\&quot;5\&quot; edge=\&quot;1\&quot;&gt;&lt;mxGeometry width=\&quot;50\&quot; height=\&quot;50\&quot; relative=\&quot;1\&quot; as=\&quot;geometry\&quot;&gt;&lt;mxPoint x=\&quot;80\&quot; y=\&quot;500\&quot; as=\&quot;sourcePoint\&quot;/&gt;&lt;mxPoint x=\&quot;306\&quot; y=\&quot;600\&quot; as=\&quot;targetPoint\&quot;/&gt;&lt;Array as=\&quot;points\&quot;&gt;&lt;mxPoint x=\&quot;80\&quot; y=\&quot;404\&quot;/&gt;&lt;/Array&gt;&lt;/mxGeometry&gt;&lt;/mxCell&gt;&lt;mxCell id=\&quot;12\&quot; value=\&quot;Done\&quot; style=\&quot;shadow=1;align=center;html=1;strokeWidth=8;shape=mxgraph.rtl.abstract.entity;container=1;collapsible=0;kind=combinational;drawPins=0;left=3;right=2;bottom=0;top=0;hachureGap=4;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=20;rotation=0;fillColor=#647687;strokeColor=#bfbaba;textDirection=ltr;fontColor=#ffffff;perimeterSpacing=0;\&quot; parent=\&quot;1\&quot; vertex=\&quot;1\&quot;&gt;&lt;mxGeometry x=\&quot;570\&quot; y=\&quot;650\&quot; width=\&quot;80\&quot; height=\&quot;50\&quot; as=\&quot;geometry\&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=\&quot;11\&quot; value=\&quot;\&quot; style=\&quot;endArrow=classic;html=1;hachureGap=4;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=16;exitX=0;exitY=0;exitDx=80;exitDy=20;exitPerimeter=0;shadow=1;strokeWidth=5;entryX=0;entryY=0;entryDx=0;entryDy=20;entryPerimeter=0;\&quot; parent=\&quot;1\&quot; target=\&quot;12\&quot; edge=\&quot;1\&quot;&gt;&lt;mxGeometry width=\&quot;50\&quot; height=\&quot;50\&quot; relative=\&quot;1\&quot; as=\&quot;geometry\&quot;&gt;&lt;mxPoint x=\&quot;400\&quot; y=\&quot;674.5\&quot; as=\&quot;sourcePoint\&quot;/&gt;&lt;mxPoint x=\&quot;500\&quot; y=\&quot;675\&quot; as=\&quot;targetPoint\&quot;/&gt;&lt;/mxGeometry&gt;&lt;/mxCell&gt;&lt;mxCell id=\&quot;27\&quot; value=\&quot;&amp;lt;span style=&amp;quot;color: rgba(0, 0, 0, 0); font-family: monospace; font-size: 0px; text-align: start; background-color: rgb(42, 37, 47);&amp;quot;&amp;gt;%3CmxGraphModel%3E%3Croot%3E%3CmxCell%20id%3D%220%22%2F%3E%3CmxCell%20id%3D%221%22%20parent%3D%220%22%2F%3E%3CmxCell%20id%3D%222%22%20value%3D%22%26lt%3Bp%20style%3D%26quot%3Bline-height%3A%20200%25%3B%26quot%3B%26gt%3B%26lt%3Bfont%20face%3D%26quot%3BArchitects%20Daughter%26quot%3B%26gt%3B%26lt%3Bspan%20style%3D%26quot%3Bfont-size%3A%2016px%3B%26quot%3B%26gt%3BDigit%26lt%3B%2Fspan%26gt%3B%26lt%3B%2Ffont%26gt%3B%26lt%3Bbr%20style%3D%26quot%3Bfont-family%3A%20%26amp%3Bquot%3BArchitects%20Daughter%26amp%3Bquot%3B%3B%20font-size%3A%2016px%3B%26quot%3B%26gt%3B%26lt%3Bfont%20style%3D%26quot%3Bfont-size%3A%2016px%3B%26quot%3B%20face%3D%26quot%3BLucida%20Console%26quot%3B%26gt%3BaddChar%3B%20getChar%26lt%3B%2Ffont%26gt%3B%26lt%3B%2Fp%26gt%3B%22%20style%3D%22edgeLabel%3Bhtml%3D1%3Balign%3Dcenter%3BverticalAlign%3Dmiddle%3Bresizable%3D0%3Bpoints%3D%5B%5D%3BfontSize%3D20%3BfontFamily%3DLucida%20Console%3BlabelBackgroundColor%3Dnone%3BfontColor%3Ddefault%3B%22%20vertex%3D%221%22%20connectable%3D%220%22%20parent%3D%221%22%3E%3CmxGeometry%20x%3D%22238%22%20y%3D%22448%22%20as%3D%22geometry%22%2F%3E%3C%2FmxCell%3E%3C%2Froot%3E%3C%2FmxGraphModel%3E&amp;lt;/span&amp;gt;&amp;lt;span style=&amp;quot;color: rgba(0, 0, 0, 0); font-family: monospace; font-size: 0px; text-align: start; background-color: rgb(42, 37, 47);&amp;quot;&amp;gt;%3CmxGraphModel%3E%3Croot%3E%3CmxCell%20id%3D%220%22%2F%3E%3CmxCell%20id%3D%221%22%20parent%3D%220%22%2F%3E%3CmxCell%20id%3D%222%22%20value%3D%22%26lt%3Bp%20style%3D%26quot%3Bline-height%3A%20200%25%3B%26quot%3B%26gt%3B%26lt%3Bfont%20face%3D%26quot%3BArchitects%20Daughter%26quot%3B%26gt%3B%26lt%3Bspan%20style%3D%26quot%3Bfont-size%3A%2016px%3B%26quot%3B%26gt%3BDigit%26lt%3B%2Fspan%26gt%3B%26lt%3B%2Ffont%26gt%3B%26lt%3Bbr%20style%3D%26quot%3Bfont-family%3A%20%26amp%3Bquot%3BArchitects%20Daughter%26amp%3Bquot%3B%3B%20font-size%3A%2016px%3B%26quot%3B%26gt%3B%26lt%3Bfont%20style%3D%26quot%3Bfont-size%3A%2016px%3B%26quot%3B%20face%3D%26quot%3BLucida%20Console%26quot%3B%26gt%3BaddChar%3B%20getChar%26lt%3B%2Ffont%26gt%3B%26lt%3B%2Fp%26gt%3B%22%20style%3D%22edgeLabel%3Bhtml%3D1%3Balign%3Dcenter%3BverticalAlign%3Dmiddle%3Bresizable%3D0%3Bpoints%3D%5B%5D%3BfontSize%3D20%3BfontFamily%3DLucida%20Console%3BlabelBackgroundColor%3Dnone%3BfontColor%3Ddefault%3B%22%20vertex%3D%221%22%20connectable%3D%220%22%20parent%3D%221%22%3E%3CmxGeometry%20x%3D%22238%22%20y%3D%22448%22%20as%3D%22geometry%22%2F%3E%3C%2FmxCell%3E%3C%2Froot%3E%3C%2FmxGraphModel%3&amp;lt;/span&amp;gt;\&quot; style=\&quot;edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];fontSize=20;fontFamily=Lucida Console;fontColor=default;\&quot; parent=\&quot;11\&quot; vertex=\&quot;1\&quot; connectable=\&quot;0\&quot;&gt;&lt;mxGeometry x=\&quot;-0.2207\&quot; y=\&quot;-1\&quot; relative=\&quot;1\&quot; as=\&quot;geometry\&quot;&gt;&lt;mxPoint as=\&quot;offset\&quot;/&gt;&lt;/mxGeometry&gt;&lt;/mxCell&gt;&lt;mxCell id=\&quot;28\&quot; value=\&quot;&amp;lt;span style=&amp;quot;color: rgba(0, 0, 0, 0); font-family: monospace; font-size: 0px; text-align: start; background-color: rgb(42, 37, 47);&amp;quot;&amp;gt;%3CmxGraphModel%3E%3Croot%3E%3CmxCell%20id%3D%220%22%2F%3E%3CmxCell%20id%3D%221%22%20parent%3D%220%22%2F%3E%3CmxCell%20id%3D%222%22%20value%3D%22%26lt%3Bp%20style%3D%26quot%3Bline-height%3A%20200%25%3B%26quot%3B%26gt%3B%26lt%3Bfont%20face%3D%26quot%3BArchitects%20Daughter%26quot%3B%26gt%3B%26lt%3Bspan%20style%3D%26quot%3Bfont-size%3A%2016px%3B%26quot%3B%26gt%3BDigit%26lt%3B%2Fspan%26gt%3B%26lt%3B%2Ffont%26gt%3B%26lt%3Bbr%20style%3D%26quot%3Bfont-family%3A%20%26amp%3Bquot%3BArchitects%20Daughter%26amp%3Bquot%3B%3B%20font-size%3A%2016px%3B%26quot%3B%26gt%3B%26lt%3Bfont%20style%3D%26quot%3Bfont-size%3A%2016px%3B%26quot%3B%20face%3D%26quot%3BLucida%20Console%26quot%3B%26gt%3BaddChar%3B%20getChar%26lt%3B%2Ffont%26gt%3B%26lt%3B%2Fp%26gt%3B%22%20style%3D%22edgeLabel%3Bhtml%3D1%3Balign%3Dcenter%3BverticalAlign%3Dmiddle%3Bresizable%3D0%3Bpoints%3D%5B%5D%3BfontSize%3D20%3BfontFamily%3DLucida%20Console%3BlabelBackgroundColor%3Dnone%3BfontColor%3Ddefault%3B%22%20vertex%3D%221%22%20connectable%3D%220%22%20parent%3D%221%22%3E%3CmxGeometry%20x%3D%22238%22%20y%3D%22448%22%20as%3D%22geometry%22%2F%3E%3C%2FmxCell%3E%3C%2Froot%3E%3C%2FmxGraphModel%3E&amp;lt;/span&amp;gt;\&quot; style=\&quot;edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];fontSize=20;fontFamily=Lucida Console;fontColor=default;\&quot; parent=\&quot;11\&quot; vertex=\&quot;1\&quot; connectable=\&quot;0\&quot;&gt;&lt;mxGeometry x=\&quot;-0.2807\&quot; y=\&quot;3\&quot; relative=\&quot;1\&quot; as=\&quot;geometry\&quot;&gt;&lt;mxPoint as=\&quot;offset\&quot;/&gt;&lt;/mxGeometry&gt;&lt;/mxCell&gt;&lt;mxCell id=\&quot;29\&quot; value=\&quot;&amp;lt;p style=&amp;quot;line-height: 200%;&amp;quot;&amp;gt;&amp;lt;span style=&amp;quot;font-size: 16px;&amp;quot;&amp;gt;&amp;lt;font face=&amp;quot;Architects Daughter&amp;quot;&amp;gt;t &amp;amp;lt;-- lookup (&amp;lt;/font&amp;gt;nextChar&amp;lt;font face=&amp;quot;Architects Daughter&amp;quot;&amp;gt;)&amp;lt;/font&amp;gt;&amp;lt;/span&amp;gt;&amp;lt;br style=&amp;quot;font-family: &amp;amp;quot;Architects Daughter&amp;amp;quot;; font-size: 16px;&amp;quot;&amp;gt;&amp;lt;font style=&amp;quot;font-size: 16px;&amp;quot; face=&amp;quot;Lucida Console&amp;quot;&amp;gt;getChar&amp;lt;/font&amp;gt;&amp;lt;/p&amp;gt;\&quot; style=\&quot;edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];fontSize=20;fontFamily=Lucida Console;fontColor=default;labelBackgroundColor=none;\&quot; parent=\&quot;11\&quot; vertex=\&quot;1\&quot; connectable=\&quot;0\&quot;&gt;&lt;mxGeometry x=\&quot;-0.294\&quot; y=\&quot;2\&quot; relative=\&quot;1\&quot; as=\&quot;geometry\&quot;&gt;&lt;mxPoint x=\&quot;20\&quot; as=\&quot;offset\&quot;/&gt;&lt;/mxGeometry&gt;&lt;/mxCell&gt;&lt;mxCell id=\&quot;14\&quot; value=\&quot;\&quot; style=\&quot;endArrow=classic;html=1;hachureGap=4;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=16;exitX=0.888;exitY=0.078;exitDx=0;exitDy=0;exitPerimeter=0;shadow=1;strokeWidth=5;edgeStyle=orthogonalEdgeStyle;entryX=0.33;entryY=-0.023;entryDx=0;entryDy=0;entryPerimeter=0;curved=1;\&quot; parent=\&quot;1\&quot; source=\&quot;3\&quot; target=\&quot;3\&quot; edge=\&quot;1\&quot;&gt;&lt;mxGeometry width=\&quot;50\&quot; height=\&quot;50\&quot; relative=\&quot;1\&quot; as=\&quot;geometry\&quot;&gt;&lt;mxPoint x=\&quot;320\&quot; y=\&quot;210\&quot; as=\&quot;sourcePoint\&quot;/&gt;&lt;mxPoint x=\&quot;260\&quot; y=\&quot;270\&quot; as=\&quot;targetPoint\&quot;/&gt;&lt;Array as=\&quot;points\&quot;&gt;&lt;mxPoint x=\&quot;450\&quot; y=\&quot;354\&quot;/&gt;&lt;mxPoint x=\&quot;450\&quot; y=\&quot;260\&quot;/&gt;&lt;mxPoint x=\&quot;310\&quot; y=\&quot;260\&quot;/&gt;&lt;mxPoint x=\&quot;310\&quot; y=\&quot;349\&quot;/&gt;&lt;/Array&gt;&lt;/mxGeometry&gt;&lt;/mxCell&gt;&lt;mxCell id=\&quot;20\&quot; value=\&quot;&amp;lt;p style=&amp;quot;line-height: 200%;&amp;quot;&amp;gt;&amp;lt;font style=&amp;quot;&amp;quot; face=&amp;quot;Architects Daughter&amp;quot;&amp;gt;&amp;lt;span style=&amp;quot;font-size: 16px;&amp;quot;&amp;gt;Letter | Digit&amp;lt;/span&amp;gt;&amp;lt;/font&amp;gt;&amp;lt;/p&amp;gt;&amp;lt;p style=&amp;quot;line-height: 200%;&amp;quot;&amp;gt;&amp;lt;font style=&amp;quot;font-size: 16px;&amp;quot; face=&amp;quot;Lucida Console&amp;quot;&amp;gt;addChar; getChar&amp;lt;/font&amp;gt;&amp;lt;/p&amp;gt;\&quot; style=\&quot;edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];fontSize=20;fontFamily=Lucida Console;fontColor=default;labelBackgroundColor=none;\&quot; parent=\&quot;14\&quot; vertex=\&quot;1\&quot; connectable=\&quot;0\&quot;&gt;&lt;mxGeometry x=\&quot;0.4835\&quot; y=\&quot;15\&quot; relative=\&quot;1\&quot; as=\&quot;geometry\&quot;&gt;&lt;mxPoint x=\&quot;55\&quot; y=\&quot;-17\&quot; as=\&quot;offset\&quot;/&gt;&lt;/mxGeometry&gt;&lt;/mxCell&gt;&lt;mxCell id=\&quot;22\&quot; value=\&quot;\&quot; style=\&quot;endArrow=classic;html=1;hachureGap=4;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=16;exitX=0;exitY=0;exitDx=72;exitDy=40;exitPerimeter=0;shadow=1;strokeWidth=5;edgeStyle=orthogonalEdgeStyle;curved=1;entryX=0.024;entryY=0.79;entryDx=0;entryDy=0;entryPerimeter=0;\&quot; parent=\&quot;1\&quot; source=\&quot;4\&quot; target=\&quot;4\&quot; edge=\&quot;1\&quot;&gt;&lt;mxGeometry width=\&quot;50\&quot; height=\&quot;50\&quot; relative=\&quot;1\&quot; as=\&quot;geometry\&quot;&gt;&lt;mxPoint x=\&quot;401.03999999999996\&quot; y=\&quot;520\&quot; as=\&quot;sourcePoint\&quot;/&gt;&lt;mxPoint x=\&quot;350\&quot; y=\&quot;525\&quot; as=\&quot;targetPoint\&quot;/&gt;&lt;Array as=\&quot;points\&quot;&gt;&lt;mxPoint x=\&quot;430\&quot; y=\&quot;520\&quot;/&gt;&lt;mxPoint x=\&quot;430\&quot; y=\&quot;600\&quot;/&gt;&lt;mxPoint x=\&quot;300\&quot; y=\&quot;600\&quot;/&gt;&lt;mxPoint x=\&quot;300\&quot; y=\&quot;550\&quot;/&gt;&lt;mxPoint x=\&quot;332\&quot; y=\&quot;550\&quot;/&gt;&lt;/Array&gt;&lt;/mxGeometry&gt;&lt;/mxCell&gt;&lt;mxCell id=\&quot;23\&quot; value=\&quot;&amp;lt;p style=&amp;quot;line-height: 200%;&amp;quot;&amp;gt;&amp;lt;font style=&amp;quot;&amp;quot; face=&amp;quot;Architects Daughter&amp;quot;&amp;gt;&amp;lt;span style=&amp;quot;font-size: 16px;&amp;quot;&amp;gt;Digit&amp;lt;/span&amp;gt;&amp;lt;/font&amp;gt;&amp;lt;br style=&amp;quot;font-family: &amp;amp;quot;Architects Daughter&amp;amp;quot;; font-size: 16px;&amp;quot;&amp;gt;&amp;lt;font style=&amp;quot;font-size: 16px;&amp;quot; face=&amp;quot;Lucida Console&amp;quot;&amp;gt;addChar; getChar&amp;lt;/font&amp;gt;&amp;lt;/p&amp;gt;\&quot; style=\&quot;edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];fontSize=20;fontFamily=Lucida Console;fontColor=default;labelBackgroundColor=none;\&quot; parent=\&quot;22\&quot; vertex=\&quot;1\&quot; connectable=\&quot;0\&quot;&gt;&lt;mxGeometry x=\&quot;0.4835\&quot; y=\&quot;15\&quot; relative=\&quot;1\&quot; as=\&quot;geometry\&quot;&gt;&lt;mxPoint x=\&quot;75\&quot; y=\&quot;12\&quot; as=\&quot;offset\&quot;/&gt;&lt;/mxGeometry&gt;&lt;/mxCell&gt;&lt;mxCell id=\&quot;25\&quot; value=\&quot;&amp;lt;font data-font-src=&amp;quot;https://fonts.googleapis.com/css?family=Architects+Daughter&amp;quot; face=&amp;quot;Architects Daughter&amp;quot;&amp;gt;return &amp;lt;/font&amp;gt;&amp;lt;font data-font-src=&amp;quot;https://fonts.googleapis.com/css?family=Architects+Daughter&amp;quot;&amp;gt;Int_Lit&amp;lt;/font&amp;gt;\&quot; style=\&quot;edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];fontSize=20;fontFamily=Lucida Console;fontColor=default;\&quot; parent=\&quot;1\&quot; vertex=\&quot;1\&quot; connectable=\&quot;0\&quot;&gt;&lt;mxGeometry x=\&quot;530\&quot; y=\&quot;505\&quot; as=\&quot;geometry\&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=\&quot;30\&quot; value=\&quot;\&quot; style=\&quot;endArrow=classic;html=1;shadow=1;labelBackgroundColor=none;sketch=0;hachureGap=4;jiggle=2;curveFitting=1;strokeWidth=5;fontFamily=Lucida Console;fontSize=16;fontColor=default;exitX=0.516;exitY=-0.033;exitDx=0;exitDy=0;exitPerimeter=0;rounded=0;\&quot; parent=\&quot;1\&quot; source=\&quot;12\&quot; edge=\&quot;1\&quot;&gt;&lt;mxGeometry width=\&quot;50\&quot; height=\&quot;50\&quot; relative=\&quot;1\&quot; as=\&quot;geometry\&quot;&gt;&lt;mxPoint x=\&quot;620\&quot; y=\&quot;610\&quot; as=\&quot;sourcePoint\&quot;/&gt;&lt;mxPoint x=\&quot;720\&quot; y=\&quot;580\&quot; as=\&quot;targetPoint\&quot;/&gt;&lt;Array as=\&quot;points\&quot;&gt;&lt;mxPoint x=\&quot;610\&quot; y=\&quot;580\&quot;/&gt;&lt;/Array&gt;&lt;/mxGeometry&gt;&lt;/mxCell&gt;&lt;mxCell id=\&quot;31\&quot; value=\&quot;&amp;lt;br&amp;gt;&amp;lt;br&amp;gt;return t\&quot; style=\&quot;edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];fontSize=20;fontFamily=Lucida Console;fontColor=default;labelBackgroundColor=none;\&quot; parent=\&quot;30\&quot; vertex=\&quot;1\&quot; connectable=\&quot;0\&quot;&gt;&lt;mxGeometry x=\&quot;0.2708\&quot; y=\&quot;2\&quot; relative=\&quot;1\&quot; as=\&quot;geometry\&quot;&gt;&lt;mxPoint as=\&quot;offset\&quot;/&gt;&lt;/mxGeometry&gt;&lt;/mxCell&gt;&lt;/root&gt;&lt;/mxGraphModel&gt;&lt;/diagram&gt;&lt;/mxfile&gt;&quot;}"></div>
<script type="text/javascript" src="https://viewer.diagrams.net/js/viewer-static.min.js"></script>