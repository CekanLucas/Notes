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
<div id="stack-container">
  <a href=""><img src="" alt="Logo"></a>
</div>

#  <span class="react">Security</span> <small class="Teal">resources</small>

Self signed security certificate bad idea is for servide side ssl handling

with containerization, ssl handled at proxy laer above app stack

Our apps are deployed on the cloud (<a href="https://medstack.co/">medstack</a>) and they handle ssl with letsencrypt 

<a href="https://www.cloudflare.com/learning/ddos/glossary/web-application-firewall-waf/">WAF and cloudflare</a>

higherlevel load balancer <a href="https://cloud.google.com/load-balancing/docs/ssl">link</a>

<a href="https://cloud.google.com/security/encryption-at-rest/default-encryption">encryption at rest </a>