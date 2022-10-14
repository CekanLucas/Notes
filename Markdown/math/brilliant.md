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




## Quadratic Formula

$$\large ax^2+bx+c$$
$$\large \frac{-b\plusmn\sqrt{b^2-4ac}}{2a}$$


## Combinations and Permutations
Combinations and permutations are similar concepts. A permutation is a list of items where order matters, and a combination is a list of items where order does not matter. 

<blockquote>
  <p>We write <span class="katex"><span class="katex-mathml"><math><semantics><mrow><msub><mrow></mrow><mi>n</mi></msub><msub><mi>C</mi><mi>k</mi></msub></mrow><annotation encoding="application/x-tex">{}_nC_k</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.83333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord"></span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.151392em;"><span style="top:-2.5500000000000003em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathdefault mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord"><span class="mord mathdefault" style="margin-right:0.07153em;">C</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.33610799999999996em;"><span style="top:-2.5500000000000003em;margin-left:-0.07153em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathdefault mtight" style="margin-right:0.03148em;">k</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> to represent the number of ways to form a combination of <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>k</mi></mrow><annotation encoding="application/x-tex"> k</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.69444em;vertical-align:0em;"></span><span class="mord mathdefault" style="margin-right:0.03148em;">k</span></span></span></span> items from <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>n</mi></mrow><annotation encoding="application/x-tex">n </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.43056em;vertical-align:0em;"></span><span class="mord mathdefault">n</span></span></span></span> items.</p>
</blockquote>

<p>If <span class="katex"><span class="katex-mathml"><math><semantics><mrow><msub><mrow></mrow><mi>n</mi></msub><msub><mi>C</mi><mi>k</mi></msub></mrow><annotation encoding="application/x-tex">{}_nC_k</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.83333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord"></span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.151392em;"><span style="top:-2.5500000000000003em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathdefault mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord"><span class="mord mathdefault" style="margin-right:0.07153em;">C</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.33610799999999996em;"><span style="top:-2.5500000000000003em;margin-left:-0.07153em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathdefault mtight" style="margin-right:0.03148em;">k</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> is the number of ways to form a combination of <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>k</mi></mrow><annotation encoding="application/x-tex">k </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.69444em;vertical-align:0em;"></span><span class="mord mathdefault" style="margin-right:0.03148em;">k</span></span></span></span> out of <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>n</mi></mrow><annotation encoding="application/x-tex">n </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.43056em;vertical-align:0em;"></span><span class="mord mathdefault">n</span></span></span></span> items, and <span class="katex"><span class="katex-mathml"><math><semantics><mrow><msub><mrow></mrow><mi>n</mi></msub><msub><mi>P</mi><mi>k</mi></msub></mrow><annotation encoding="application/x-tex">{}_nP_k</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.83333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord"></span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.151392em;"><span style="top:-2.5500000000000003em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathdefault mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord"><span class="mord mathdefault" style="margin-right:0.13889em;">P</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.33610799999999996em;"><span style="top:-2.5500000000000003em;margin-left:-0.13889em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathdefault mtight" style="margin-right:0.03148em;">k</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> is the number of ways to form a permutation of <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>k</mi></mrow><annotation encoding="application/x-tex">k </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.69444em;vertical-align:0em;"></span><span class="mord mathdefault" style="margin-right:0.03148em;">k</span></span></span></span> out of <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>n</mi></mrow><annotation encoding="application/x-tex">n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.43056em;vertical-align:0em;"></span><span class="mord mathdefault">n</span></span></span></span> items, which of the following statements is always true?</p>


## Combinations <a href="https://simple.wikipedia.org/wiki/Combination_(mathematics)">link</a>

Looks at the number of possibilities to pick `k` objects from a set of `n`

$$_nC_k = \frac{!n}{!k!(n-k)}$$

## Permutations <a href="https://simple.wikipedia.org/wiki/Permutation">link</a>

Looks at the number of possibilities to pick `k` objects from a set of `n`

$$_nP_k = \binom{n}{k} = \frac{!n}{!(n-k)}$$

## Floor Functions

$$
⌊25.1⌋=25, ⌊−0.4⌋=−1, ⌊−9.9⌋=−10, ⌊7⌋=7.
$$
