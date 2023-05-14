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

## A computer 

Consists of the following

Memory
: Memory is to store data and program instructions for CPU to execute
- A memory unit is an ordered sequence of bytes, each holds eight bits
- A program and its data must be brought to memory before they can be executed 
- A memory byte is never empty, but its initial content may be meaningless to your program
- The current content of a memory byte is lost whenever new information is placed in it.

Storage Devices
: Disk, CD, tape etc
- we use this because memory is wiped on power off

CPU **C**entral **P**rocessing **U**nit
: The central brain of the computer
- retrieves instructions from memory and executes them
- unit of measurement of clock speed is the *herts(Hz)* 
  - 1 hertz equaling 1 pulse per second

Communication Devices
: Modem and NIC
  Regular modem 
  : uses a phone line and can transfer data in a speed up to 56,000 bps (bits per second)
  
  DSL (digital subscriber line) 
  :also uses a phone line and can transfer data in a speed 20 times faster than a regular modem 
  
  cable modem
  : uses the TV cable line maintained by the cable company. A cable modem is as fast as a DSL. 
  
  Network interface card (NIC) 
  : is a device to connect a computer to a **local area network (LAN)**. The LAN is commonly used in business, universities, and government organizations. A high-speed NIC, called 1000BaseT, can transfer data at 1000 mbps (million bits per second).

Input Devices
: Keyboard, Mouse

Output Devices
: Monitor, Printer

  Monitor
  : The monitor displays information (text and graphics). The resolution and dot pitch determine the quality of the display
    
    Resolution
    : The screen resolution specifies the number of pixels in horizontal and vertical dimensions of the display device. Pixels (short for “picture elements”) are tiny dots that form an image on the screen. A common resolution for a 17-inch screen, for example, is 1,024 pixels wide and 768 pixels high. The resolution can be set manually. The higher the resolution, the sharper and clearer the image is
    
    Dot Pitch
    : The dot pitch is the amount of space between pixels, measured in millimeters. The smaller the dot pitch, the sharper the display.

Programs
: Computer programs, known as software, are instructions to the computer
-You tell a computer what to do through programs. Without programs, a computer is an empty machine. Computers do not understand human languages, so you need to use computer languages to communicate with them 
- Programs are written using programming languages

### RAM

**Random Access Memory** on power off memory is wiped

## Computer Programming Languages

Machine Language
: This is bare metal instruction in bits `00010101010101`

Assembly Language 
: Much more user friendly than machine language but close to the metal specify reading and writing in memory locations `ADDF3 R1, R2, R3`

High-Level Language
: This is your Java, C etc written in english like language
- This is what **source code** is written in

Interpreting Source Code
: An interpreter reads one statement from the source code, translates it to the machine code or virtual machine code, and then executes it right away, as shown in the following figure. Note that a statement from the source code may be translated into several machine instructions

Compiling Source Code
: A compiler translates the entire source code into a machine-code file, and the machine-code file is then executed

### Operating System

The operating system (OS) is a program that manages and controls a computer’s activities. The popular operating systems for general-purpose computers are Microsoft Windows, Mac OS, and Linux. Application programs, such as a Web browser or a word processor, cannot run unless an operating system is installed and running on the computer

### Java 

#### Java is Simple
#### Java is Object-Orientated
#### Java is Distributed
#### Java is Interpreted
You need an interpreter to run Java programs. The programs are compiled into the Java Virtual Machine code called bytecode. The bytecode is machine-independent and can run on any machine that has a Java interpreter, which is part of the Java Virtual Machine (JVM)

#### Java is Robust
Java compilers can detect many problems that would first show up at execution time in other languages. 

Java has eliminated certain types of error-prone programming constructs found in other languages. 

Java has a runtime exception-handling feature to provide programming support for robustness
#### Java is Secure
Java implements several security mechanisms to protect your system against harm caused by stray programs.
#### Java is Architecture-Neutral
Write once, run anywhere

With a Java Virtual Machine (JVM), you can write one program that will run on any platform.
#### Java is Portable
Because Java is architecture neutral, Java programs are portable. They can be run on any platform without being recompiled
#### Java is Performance
Java’s performance Because Java is architecture neutral, Java programs are portable. They can be run on any platform without being recompiled
#### Java is Multi-Threated
Multithread programming is smoothly integrated in Java, whereas in other languages you have to call procedures specific to the operating system to enable multithreading
#### Java is Dynamic
Java was designed to adapt to an evolving environment. New code can be loaded on the fly without recompilation. There is no need for developers to create, and for users to install, major new software versions. New features can be incorporated transparently as needed. 

`javac file` To compile java files

### Programming Errors

Syntax Errors
: Detected by the compiler

Runtime Errors
: Causes the program to abort

Logic Errors
: Produces incorrect result
