<head><link href="math.css" rel="stylesheet" type="text/css"></head>
<style>
   ol>li{
      color: limeGreen !important;
   }
   code, pre {
      font-family: Cascadia Code;
   }
   header {
      display: flex;
      align-items: center;
   }
   #brilliant{
      margin-left:1em;
      display: inline;
   }
   #logo {
      filter: 
   }
   td .katex {
      color: black;
   }
</style>
<header>
<a title="brilliant.org, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Brilliant_(website)_Logo.svg"><img id="logo" width="200" alt="Brilliant (website) Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Brilliant_%28website%29_Logo.svg/512px-Brilliant_%28website%29_Logo.svg.png"></a>
<h1 class="Cream" id="brilliant">Brilliant</h1>
</header>

# LaTeX
[Documentation](https://en.wikibooks.org/wiki/LaTeX/Mathematics)

      $ ... $  -> inline
      $$ ... $$  -> block display
      $$ ... $$ (1)  -> display with equation number

# CheatSheet

<table class="table is-striped is-hoverable is-narrow">
<tr>
   <th>Zero</th>
   <td>

$a^0=1$
   </td>
   <td>

$\log_a{1} = 0$
   </td>
</tr>
<tr>
   <th>Product</th>
   <td>

$a^m\times a^n=a^{m+n}$
   </td>
   <td>

$\log_a{mn} = \log_a{m} + \log_a{n}$
   </td>
</tr>
<tr>
   <th>Quotient</th>
   <td>

$a^m\div a^n=a^{m-n}$
   </td>
   <td>

$\log_a{m/n} = \log_a{m} - \log_a{n}$
   </td>
</tr>
<tr>
   <th>Power of Product</th>
   <td>

$(ab)^m = a^mb^m$
   </td>
   <td>

$ $
   </td>
</tr>
<tr>
   <th>Power of Quotient</th>
   <td>

$(a/b)^m = a^m/b^m$
   </td>
   <td>

$ $
   </td>
</tr>
<tr>
   <th>Power of Power</th>
   <td>

$(a^m)^n = a^{mn}$
   </td>
   <td>

$\log_am^n = n\log_am$
   </td>
</tr>
<tr>
   <th>Negative Exponent</th>
   <td>
   
$a^{-m}= 1/a^m$  
   </td>
      <td>

$\log_a1/x=-\log_ax$
   </td>
</tr>
<tr>
   <th>Fractional Exponent</th>
   <td>

$a^{m/n}=(\sqrt[n]{a})^m$
   </td>
      <td>

$ $
   </td>
</tr>
<tr>
   <th>Change of Base</th>
   <td>

   </td>
      <td>

$\log_ab = \log_cb/\log_ca$
   </td>
</tr>

</table>

# logarithms

<p class="text-gray-200 font-bold text-xl font-mono space-x-1">What value exponent does <span class="text-purple-600">n</span> need to be raised to in order to get <span class="text-red-500">x</span></p>

<p class="text-gray-500 font-bold text-xl font-mono space-x-1">log<sub class="text-green-500">b</sub> (<span class="text-red-500">x</span>) = <span class="text-purple-600">n</span> <=> <span class="text-green-500">b</span><sup class="text-purple-600">n</sup> = <span class="text-red-500">x</span></p>

<p class="text-gray-500 font-bold text-xl font-mono space-x-1"> <i></i> log<sub class="text-green-500">2</sub> (<span class="text-red-500">8</span>) = <span class="text-purple-600">3</span> <=> <span class="text-green-500">2</span><sup class="text-purple-600">3</sup> = <span class="text-red-500">8</span></p>