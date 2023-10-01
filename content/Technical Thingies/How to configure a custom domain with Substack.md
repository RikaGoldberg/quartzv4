#technical_thingies 
#### How to configure a custom domain (and subdomain) with Substack

I found it easy to configure a custom domain with Substack, but a subdomain was not as intuitive. The key is to use the subdomain right off the bat in the custom domain configuration. 

**Step 1** Dashboard --> Settings --> Scroll down to "Domain" 

![[Pasted image 20230928093940.png]]

*Notice how the custom domain is the subdomain! (www.newsletter) *

**Step 2** Click on "View Configuration"

![[Pasted image 20230928094106.png]]
*Notice how Substack tells you what settings to use when creating a CNAME record*

*Also note this regarding Cloudflare*

![[Pasted image 20230928094308.png]]
**Step 3** If you use Cloudflare, the next step is to configure the correct settings, as instructed by Substack

![[Pasted image 20230928094509.png]]

My registrar for rikagoldberg.xyz is Hostinger. I use Cloudflare to host (1) Quartz (this website) and (2) Substack (my newsletter).

Because my domain points to two websites, I need to use a subdomain. 

