<head>
 
  <link 
    href="https://fonts.googleapis.com/css?family=Fira+Mono:500&display=swap" 
    rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<style> 
body ::selection {
  /*highlighting*/
  background: transparent;
  text-shadow: 
    1px  0px 1px ,
    0px  1px 1px ,
    -1px  0px 1px ,
    0px -1px 1px ,
    0px  1px black ,
    1px  0px black ,
    -1px  0px black ,
    0px -1px black ;
  text-outline: black;  
}

</style>
</head>    

# Ellerca <small class="HotPink"> Concierge </small>

<b class="Tan">From Product Description</b>
<span class="Tan">Individuals Individuals will be onboarded by first speaking with a concierge who will determine their insurance coverage, provide them with information about the app and technical set-up, take down basic information and help them with setting up payment. The user will then be set-up with a Navigator (RN, CDE) who will determine the individuals’ ultimate goals and challenges, what provider services they may require and ask more detailed health questions  </span>

<b class="SkyBlue">My notes and interpretation</b>

1. User when they register with the app they immediately are onboarded with concierge
    - Users are redirected to concierge <strong 
    class="LightGreen">these are new users</strong>
    - These users are immediately <b class="BlueViolet">registered</b> at concierge
1. Concierge ultimate role is about setting up the users with payments :dollar: :credit_card:
    - Ellerca uses a subscription model
    - Insurance has to be determined
    - The user will have to get the relevant information *eg debit invoices, insurance coverage etc*
      - <span class="LightBlue">This means there has to be a UI and front facing information panel</span>
      - alternatively these are all emailed
    - The users can't set up payments themselves so they need a Concierge for this role
1. 360 care's ultimate role is to assign a <b class="Orange">Navigator</b> to the user 
    - The Navigator is <u>not</u> the user that logs in to the application
    - They are also <b class="BlueViolet">registered</b> at concierge

> The <b class="Orange">Navigator</b> is the human touch, the customer service for the user and will set them up with assigning external providers <span class="SpringGreen">(family doctors, dieticians etc)</span> and other services, this Navigator is actually a health proffessional so it goes beyond a customer service because this person will also help with the provision of health services and advice



## Questions
1. We have a form to create a doctor, we know that it is the responsibility of the navigator to assign this person to the app user is the responsibility of concierge to create the primary care providor 
1. Does the navigator interface with concierge if so when?
1. What visual elements must the various users see at concierge if any?
1. Is there a better term for the various users, below is the problem
> Concierge user assign app user to a navigator, who can assign a health provider to that user

> the concierge is the user at the concierge who logs into the concierge app 

## Fields
<b class="Lime">F: Fill</b> <b class="Orange">P: Prefill</b> <b class="BlueViolet">N: doesnt exist null</b> 
**d: debit r: replenishment w: welcome col:column**
col | field | d | r | w | | notes
-- | -- | - | -- | - | - | -
01|<b class="HotPink">POGroup</b>|<b class="Lime">F</b>|<b class="Lime">F</b>|<b class="Lime">F</b>| <b class="Grey">Sequential Index for Excel per order</b> 
02|<b class="HotPink">Order Type</b>|<b class="Orange">P</b>|<b class="Orange">P</b>|<b class="Orange">P</b>| <b class="Orange">YRD1 for d, rest YFD1</b> 
03|<b class="HotPink">Sales Org</b>|<b class="Orange">P</b>|<b class="Orange">P</b>|<b class="Orange">P</b>| <b class="Orange">4215</b> 
04|<b class="HotPink">Distribution Channel</b>|<b class="Orange">P</b>|<b class="Orange">P</b>|<b class="Orange">P</b>| <b class="Orange">22</b> 
05|<b class="HotPink">Division</b>|<b class="Orange">P</b>|<b class="Orange">P</b>|<b class="Orange">P</b>| <b class="Orange">46</b> 
06|<b class="HotPink">Sales Group</b>|<b class="BlueViolet">N</b>  |<b class="BlueViolet">N</b>  |<b class="BlueViolet">N</b>|<b class="BlueViolet">Doesn't Exist</b> 
07|<b class="HotPink">Sales Office</b>|<b class="BlueViolet">N</b>  |<b class="BlueViolet">N</b>  |<b class="BlueViolet">N</b>|<b class="BlueViolet">Doesn't Exist</b> 
08|<b class="HotPink">Sold-To Customer</b>|<b class="Orange">P</b>|<b class="Orange">P</b>|<b class="Orange">P</b>| <b class="Orange">3690619906</b> 
09|<b class="HotPink">Ship-To Customer</b>|<b class="Orange">P</b>  |<b class="Orange">P</b>  |<b class="Orange">P</b>|<b class="Orange">3690619906</b>
10|<b class="HotPink">Name 1 Ship-To</b>|<b class="Lime">F</b>|<b class="Lime">F</b>|<b class="Lime">F</b>| <b class="Lime">Full Name eg John Doe</b>
11|<b class="HotPink">Name 2 Shi-To</b>|<b class="Lime">F</b>|<b class="Lime">F</b>|<b class="Lime">F</b>| <b class="Lime">? eg c/o Jim Doe</b> 
12|<b class="HotPink">Street Ship-To</b>|<b class="Lime">F</b>|<b class="Lime">F</b>|<b class="Lime">F</b>|<b class="Lime">Full Address eg 170 Edinborough Street</b>
13|<b class="HotPink">Postal Code Ship-To</b>|<b class="Lime">F</b>|<b class="Lime">F</b>|<b class="Lime">F</b>|<b class="Lime">eg J6Z 2X1</b> 
14|<b class="HotPink">City Ship-To</b>|<b class="Lime">F</b>|<b class="Lime">F</b>|<b class="Lime">F</b>|<b class="Lime"> eg Saint-Luc, QC</b> 
15|<b class="HotPink">Name 1 Bill-To</b>|<b class="Lime">F</b>|<b class="BlueViolet">N</b>  |<b class="BlueViolet">N</b>|<b class="Lime">Billing, eg John, Doe</b>
16|<b class="HotPink">Name 2 Bill-To</b>|<b class="Lime">F</b>|<b class="BlueViolet">N</b>  |<b class="BlueViolet">N</b>|<b class="Lime">Billing, eg c/o Jim Doe</b>
17|<b class="HotPink">Street Bill-To</b>|<b class="Lime">F</b>|<b class="BlueViolet">N</b>  |<b class="BlueViolet">N</b>|<b class="Lime">Billing, eg 39 Rockcrest Ave.</b>
18|<b class="HotPink">Postal Code Bill-To</b>|<b class="Lime">F</b>|<b class="BlueViolet">N</b>  |<b class="BlueViolet">N</b>|<b class="Lime">Billing, eg V6W 0A8</b>
19|<b class="HotPink">City Bill-To</b>|<b class="Lime">F</b>|<b class="BlueViolet">N</b>  |<b class="BlueViolet">N</b>|<b class="Lime">Billing, eg Ladysmith, BC </b>
20|<b class="HotPink">Purchase Order Numbe</b>|<b class="Lime">F</b>|<b class="Lime">F</b>  |<b class="Lime">F</b>| <b class="Yellow">10-digit unique transactional ID made from date and pogroup, e.g. 21015T0004</b>
21|<b class="HotPink">Purchase Order Date</b>|<b class="Lime">F</b>  |<b class="Lime">F</b>|<b class="Lime">F</b>| <b class="Lime">eg 1/14/2021 seems format doesn't matter</b> 
22|<b class="HotPink">Purchase Order Type</b>|<b class="Orange">P</b>|<b class="Orange">P</b>|<b class="Orange">P</b>| <b class="Orange">ZEMS</b> 
23|<b class="HotPink">Your Reference</b>|<b class="Lime">F</b>|<b class="Lime">F</b>|<b class="Lime">F</b>| <b class="Yellow">Doesnt matter as long as it is unique we should use 6 digit user_id</b> 
24|<b class="HotPink">Order reason</b>|<b class="Orange">P</b>|<b class="Orange">P</b>|<b class="Orange">P</b>| <b class="Orange">A88</b> 
25|<b class="HotPink">Delivery block</b>|<b class="BlueViolet">N</b>  |<b class="Orange">P</b>|<b class="Orange">P</b>| <b class="Orange">Y</b> 
26|<b class="HotPink">Text Object</b>|<b class="BlueViolet">N</b>  |<b class="BlueViolet">N</b>  |<b class="Orange">P</b>| <b class="Orange">ZD10</b> 
27|<b class="HotPink">Line</b>|<b class="BlueViolet">N</b>  |<b class="BlueViolet">N</b>  |<b class="Orange">P</b>| <b class="Orange">Bundle to order</b> 
28|<b class="HotPink">Text Object</b>|<b class="BlueViolet">N</b>  |<b class="BlueViolet">N</b>  |<b class="BlueViolet">N</b>|<b class="BlueViolet">Doesn't Exist</b>  
29|<b class="HotPink">Line</b>|<b class="BlueViolet">N</b>  |<b class="BlueViolet">N</b>  |<b class="BlueViolet">N</b>|<b class="BlueViolet">Doesn't Exist</b>  
30|<b class="HotPink">Currency</b>|<b class="Orange">P</b>|<b class="BlueViolet">N</b>  |<b class="BlueViolet">N</b>|<b class="Orange">CAD</b> 
31|<b class="HotPink">Terms of Payment</b>|<b class="Orange">P</b>|<b class="BlueViolet">N</b>  |<b class="BlueViolet">N</b>|<b class="Orange">US23</b> 
32|<b class="HotPink">Incoterms</b>|<b class="BlueViolet">N</b>  |<b class="BlueViolet">N</b>  |<b class="BlueViolet">N</b>|<b class="BlueViolet">Doesn't Exist</b> 
33|<b class="HotPink">Incoterms (Part 2)</b>|<b class="BlueViolet">N</b>  |<b class="BlueViolet">N</b>  |<b class="BlueViolet">N</b>|<b class="BlueViolet">Doesn't Exist</b> 
34|<b class="HotPink">Complete delivery</b>|<b class="BlueViolet">N</b>  |<b class="Orange">P</b>|<b class="Orange">P</b>| <b class="Orange">X</b> 
35|<b class="HotPink">Material</b>|<b class="Orange">P</b>|<b class="BlueViolet">N</b>  |<b class="Orange">P</b>| <b class="SpringGreen">Need to fill on separate lines for each order</b> 
36|<b class="HotPink">Order Quantity</b>|<b class="Orange">P</b>|<b class="BlueViolet">N</b>  |<b class="Orange">P</b>| <b class="SpringGreen">Need to fill on separate lines for each order</b> 
37|<b class="HotPink">CondType ZPPA</b>|<b class="Orange">P</b>|<b class="BlueViolet">N</b>  |<b class="BlueViolet">N</b>|<b class="Orange">ZPPA</b> 
38|<b class="HotPink">CondVal ZPPA</b>|<b class="Lime">F</b>|<b class="BlueViolet">N</b>  |<b class="BlueViolet">N</b>|<b class="Lime"> patient co-pay value eg 156.0 for no coverage, 15.6 for 10% copay</b> 
39|<b class="HotPink">Batch</b>|<b class="BlueViolet">N</b>  |<b class="BlueViolet">N</b>  |<b class="BlueViolet">N</b>|<b class="BlueViolet">Doesn't Exist</b> 
40|<b class="HotPink">Plant</b>|<b class="BlueViolet">N</b>  |<b class="BlueViolet">N</b>  |<b class="BlueViolet">N</b>|<b class="BlueViolet">Doesn't Exist</b> 
41|<b class="HotPink">Storage Location</b>|<b class="BlueViolet">N</b>  |<b class="BlueViolet">N</b>  |<b class="BlueViolet">N</b>|<b class="BlueViolet">Doesn't Exist</b> 
42|<b class="HotPink">Usage</b>|<b class="BlueViolet">N</b>  |<b class="BlueViolet">N</b>  |<b class="BlueViolet">N</b>|<b class="BlueViolet">Doesn't Exist</b> 
43|<b class="HotPink">Delivery Priority</b>|<b class="BlueViolet">N</b>  |<b class="BlueViolet">N</b>  |<b class="BlueViolet">N</b>|<b class="BlueViolet">Doesn't Exist</b> 
44|<b class="HotPink">Cost Center</b>|<b class="BlueViolet">N</b>  |<b class="BlueViolet">N</b>  |<b class="BlueViolet">N</b>|<b class="BlueViolet">Doesn't Exist</b> 
45|<b class="HotPink">Region</b>|<b class="BlueViolet">N</b>  |<b class="BlueViolet">N</b>  |<b class="BlueViolet">N</b>|<b class="BlueViolet">Doesn't Exist</b> 
46|<b class="HotPink">Route</b>|<b class="BlueViolet">N</b>  |<b class="BlueViolet">N</b>  |<b class="BlueViolet">N</b>|<b class="BlueViolet">Doesn't Exist</b> 
47|<b class="HotPink">Contract Number</b>|<b class="Orange">P</b>|<b class="Orange">P</b>|<b class="Orange">P</b>| <b class="SpringGreen">ELL000001</b> 