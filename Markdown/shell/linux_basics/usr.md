# Linux Basics

## `/usr` Directory Tree

<span class="text-yellow-600">Contains non essential programs and  scripts</span>

| Directory Name | Usage |
| - | - |
| **/usr/include** | Header files used to compile application
| **/usr/lib** | libraries for programs in <span class="font-mono font-bold text-yellow-100">/usr/bin</span> and <span class="font-mono font-bold text-yellow-100">usr/sbin</span>
| **/usr/lib64** | 64 bit libraries for 64-bit programs in <span class="font-mono font-bold text-yellow-100">/usr/bin</span> and <span class="font-mono font-bold text-yellow-100">usr/sbin</span>
| **/usr/sbin** | non-essential system binaries, such as system daimons
| **/usr/share** | shared data used by applications, generally architecture- independent
| **/usr/src** |source code, usually for the Linux kernel
| **/usr/local** | data and programs specific to the local machine; subdirectories include: *bin, sbin, lib, share, include etc* 
| **/usr/bin** | This is the primary directory for executable commands on the system