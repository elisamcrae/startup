# startup
CS260

Setup of CS260 startup project

Edit #2 in Github
HaHaGit and VSC!

From this assignment I learned how to better navigate VSCode and GitHub and how they can sync together. I still do not feel completely comfortable with it, but I now understand where the push, pull, and commit buttons are, and I am learning how to read the error messages in VSCode. This was very helpful to me.

ELEVATOR PITCH:
Have you ever searched for hours for that recipe you used that one time? Or have you bugged an in-law to send you that mouth-watering recipe they made last Sunday? This is your solution! This website allows you to easily upload and share recipes with family and friends. You can quickly see recipes you have posted, as well as recipes from family/friends. Bon appetit!

KEY FEATURES:

*Secure log in over HTTPS

*Ability to upload recipes

*Access to recipes from family and friends

*Access to previously uploaded recipes

*Ability to input a description with a recipe

![PXL_20230112_013341491](https://user-images.githubusercontent.com/63275372/211954848-db69a756-1861-4300-b805-e7ba85010c45.jpg)

http://3.131.225.207/

http://elisa260.click

https://elisa260.click/

$ ssh -i "C:\Users\Elisa's Laptop\Downloads\260webserverelisa.pem" ubuntu@3.131.225.207

Simon Project Notes: I learned the format of html and how the text will automatically indent after opening a bracket (<main>) and will de-indent when you close it (</main>). I also discovered how easy it is to add hyperlinks to a website. The commits were good for me to keep track of where I was in the project and why I made certain changes.

CSS: remember that any defined element can be treated as its own entity!

CSS rescaling: I am most familiar with CSS Flexbox, but there is also grid and responsive design. These are for rescaling a website to fit certain dimensions (like portrait vs landscape on a phone).

For using CSS, remember to add the styleguide link on the HTML document! Look up styles you aren't familiar with, and use my simon as reference. I've learned that CSS is not that hard, but there are so many options it is near impossible to keep track of them all. But google is a friend and will help me know what color codes are for what colors and how to get the design I want.

From making my startup project with HTML and CSS, I learned a lot more about how they function both separately and together. I learned how to change specific elements in CSS and how to make a form. I also solidified how to link pages together. It was super tricky to get my recipe images to line up side by side but I figured it out, thanks to columns and rows.

With the Simon JS, I learned that it is important to make sure you call the JS functions in the HTML file. I also learned the hard to way to make sure that the audio files (or any other called files) are named what you think they are.

MIDTERM:

You CAN use this to load CSS fonts from google: @import url('https://fonts.googleapis.com/css?family=Quicksand');

flex-direction: column-reverse; will make the columns start at the bottom and go up (ex. "world", "hello") just put the words in separate divs

CSS padding: puts space around the content of selected elements

This adds 1 to y: const f = y => ++y; console.log(f(3))
Other arrow functions: Reduce - takes an array and reduces it to one value
Maps - takes an array and puts it in an array of equal size with each value mapped to something else

DIV: division element

Pals butter mannonaise - (content), padding, border, margin - order of CSS box model from inside out

let b = a.filter(v => v.match(/A|f/i)); regex that matches A and f (but case insensitive)

document.querySelector('p').addEventListener('mouseover', console.log): adds a mouseover event listener to a p element

HTML tag for unordered list: ul
ordered list: ol
list: li

Valid JS functions: const f = (x) => {}
function f(x) {}
const f = function(x) {}

To include JS in HTML:
<script>1+1</script>
<script src='main.js' />
<div onclick='1+1' />

JS objects look like this: { n:1 }

DOM textContent properties sets the child text for an element

TO create an HTML hyperlink: <a href='https://c.com'>x</a>

div.header { color: blue; } when class=header will turn the text blue

{"x":3} valid JSON; single quotes and undefineds are not

chmod +x deploy.sh makes a script executable

c260.cs.byu.edu is a DNS subdomain (Domain Name System)
To point to another DNS record, use CNAME

COMMANDS ON THE COMMAND LINE:
echo - Output the parameters of the command
cd - Change directory
mkdir - Make directory
rmdir - Remove directory
rm - Remove file(s)
mv - Move file(s)
cp - Copy files
ls - List files
curl - Command line client URL browser
grep - Regular expression search
find - Find files
top - View running processes with CPU and memory usage
df - View disk statistics
cat - Output the contents of a file
less - Interactively output the contents of a file
wc - Count the words in a file
ps - View the currently running processes
kill - Kill a currently running process
sudo - Execute a command as a super user (admin)
ssh - Create a secure shell on a remote computer
scp - Securely copy files to a remote computer
history - Show the history of commands
ping - Check if a website is up
tracert - Trace the connections to a website
dig - Show the DNS information for a domain
man - Look up a command in the manual
*You can also chain the input and output of commands using special characters*
| - Take the output from the command on the left and pipe, or pass, it to the command on the right
> - Redirect output to a file. Overwrites the file if it exists
>> - Redirect output to a file. Appends if the file exists
CTRL-R - Use type ahead to find previous commands
CTRL-C - Kill the currently running command

THE INTERNET:
The internet globally connects independent networks and computing devices. In a simplistic way, you can think of the internet as a massive redundant collection of wires that connect up all the computers in the world. A lot of those wires are wireless (wiFi, satellite, or cell), and not all of computers in the world are connected, but generally that is what the internet is. The deeper your mental model of the internet is, the more effectively you will be able to create web applications.

Internet connections

Making connections
When one device wants to talk to another it must have an IP address. For example, 128.187.16.184 is BYU's address. Usually, human users prefer a symbolic name over an IP address. The symbolic name is called a domain name. Domain names are converted to IP address by doing a lookup in the Domain Name System (DNS). You can look up the IP address for any domain name using the dig console utility.

➜  dig byu.edu

byu.edu.		5755	IN	A	128.187.16.184
Internet requests

Once you have the IP address, you connect to the device it represents by first asking for a connection route to the device. A connection route consists of many hops across the network until the destination is dynamically discovered and the connection established. With the connection the transport and application layers start exchanging data.

Traceroute
You can determine the hops in a connection using the traceroute console utility. In the following example, we trace the route between a home computer and BYU. In the result you see the first address 192.168.1.1. This is the address of the network router the home computer is connected to. From there it goes through a couple devices that do not identify themselves and then hits the Google Fiber gateway. Google Fiber is the internet service provider, or ISP, for the requesting device. Then we jump through a few more unidentified devices before finally arriving at BYU (128.187.16.184).

➜  traceroute byu.edu

traceroute to byu.edu (128.187.16.184), 64 hops max, 52 byte packets
 1  192.168.1.1 (192.168.1.1)  10.942 ms  4.055 ms  4.694 ms
 2  * * *
 3  * * *
 4  192-119-18-212.mci.googlefiber.net (192.119.18.212)  5.369 ms  5.576 ms  6.456 ms
 5  216.21.171.197 (216.21.171.197)  6.283 ms  6.767 ms  5.532 ms
 6  * * *
 7  * * *
 8  * * *
 9  byu.com (128.187.16.184)  7.544 ms !X *  40.231 ms !X
If I run traceroute again I might see a slightly different route since every connection through the internet is dynamically calculated. The ability to discover a route makes the internet resilient when network devices fail or disappear from the network.

Network internals
The actual sending of data across the internet uses the TCP/IP model. This is a layered architecture that covers everything from the physical wires to the data that a web application sends. At the top of the TCP/IP protocol is the application layer. It represents user functionality, such as the web (HTTP), mail (SMTP), files (FTP), remote shell (SSH), and chat (IRC). Underneath that is the transport layer which breaks the application layer's information into small chunks and sends the data. The actual connection is made using the internet layer. This finds the device you want to talk to and keeps the connection alive. Finally, at the bottom of the model is the link layer which deals with the physical connections and hardware.

TCP/IP layers
Layer	Example	Purpose
Application	HTTPS	Functionality like web browsing
Transport	TCP	Moving connection information packets
Internet	IP	Establishing connections
Link	Fiber, hardware	Physical connections

WEB SERVERS:
A web server is a computing device that is hosting a web service that knows how to accept incoming internet connections and speak the HTTP application protocol.

Monolithic web servers
In the early days of web programming, you would buy a massive, complex, expensive, software program that spoke HTTP and installed on a hardware server. The package of server and software was considered the web server because the web service software was the only thing running on the server.

When Berners-Lee wrote his first web server it only served up static HTML files. This soon advanced so that they allowed dynamic functionality, including the ability to generate all the HTML on demand in response to a users interaction. That facilitated what we now know as modern web applications.

Combining web and application services
Today, most modern programming languages include libraries that provide the ability to make connections and serve up HTTP. For example, here is a simple Go language program that is a fully functioning web service. Later on in the course we will show how this is done with JavaScript.

package main

import (
	"net/http"
)

func main() {
	// Serve up files found in the public_html directory
	fs := http.FileServer(http.Dir("./public_html"))
	http.Handle("/", fs)

	// Listen for HTTP requests
	http.ListenAndServe(":3000", nil)
}
Being able to easily create web services makes it easy to completely drop the monolithic web server concept and just build web services right into your web application. With our simple go example we can add a function that responds with the current time, when the /api/time resource is requested.

package main

import (
	"fmt"
	"io"
	"net/http"
	"time"
)

func getTime(w http.ResponseWriter, r *http.Request) {
	io.WriteString(w, time.Now().String())
}

func main() {
	// Serve up files found in the public_html directory
	fs := http.FileServer(http.Dir("./public_html"))
	http.Handle("/", fs)

	// Dynamically provide data
	http.HandleFunc("/api/time", getTime)

	// Listen for HTTP requests
	fmt.Println(http.ListenAndServe(":3000", nil))
}
We can run that web service code, and use the console application Curl to make an HTTP request and see the time response.

➜  curl localhost:3000/api/time

2022-12-03 09:50:37.391983 -0700
Web service gateways
Since it is so easy to build web services it is common to find multiple web services running on the same computing device. The trick is exposing the multiple services in a way that a connection can be made to each of them. Every network device allows for separate network connections by referring to a unique port number. Each service on the device starts up on a different port. In the example above, the go web service was using port 80. So you could just have a user access each service by referring to the port it was launched on. However, this makes it difficult for the user of the services to remember what port matches to which service. To resolve this we introduce a service gateway, or sometimes called a reverse proxy, that is itself a simple web service that listens on the common HTTP port 443. The gateway then looks at the request and maps it to the other services running on a different ports.

Gateway

Our web server will use the application Caddy as the gateway to our services. The details of how Caddy works will be given later.

Microservices
Web services that provide a single functional purpose are referred to as microservices. By partitioning functionality into small logical chucks, you can develop and manage them independently from other functionality in a larger system. They can also handle large fluctuations in user demand by simply running more and more stateless copies of the microservice from multiple virtual servers hosted in a dynamic cloud environment. For example, one microservice for generating your genealogical family tree might be able to handle 1,000 users concurrently. So in order to support 1 million users, you just deploy 1,000 instances of the service running on scalable virtual hardware.

Serverless
The idea of microservices naturally evolved into the world of serverless functionality where the server is conceptually removed from the architecture and you just write a function that speaks HTTP. That function is loaded through an gateway that maps a web request to the function. The gateway automatically scales the hardware needed to host the serverless function based on demand. This reduces what the web application developer needs to think about down to a single independent function.

DOMAIN NAMES:
A domain name is simply a text string that follows a specific naming convention and is listed in a special database called the domain name registry.

Domain names are broken up into a root domain, with one or more possible subdomain prefixes. The root domain is represented by a secondary level domain and a top level domain. The top level domain (TLD) represent things like com, edu, or click. So a root domain would look something like byu.edu, google.com, or cs260.click. The possible list of TLDs is controlled by ICANN, one of the governing boards of the internet.

Domain name parts

The owner of a root domain can create any number of subdomains off the root domain. Each subdomain may resolve to a different IP address. So the owner of cs260.click can have subdomains for travel (travel.cs260.click), finance (finance.cs260.click), or a blog (blog.cs260.click).

You can get information about a domain name from the domain name registry using the whois console utility.

Once a domain name is in the registry it can be listed with a domain name system (DNS) server and associated with an IP address. Of course you must also lease the IP address before you can use it to uniquely identify a device on the internet, but that is a topic for another time. Every DNS server in the world references a few special DNS servers that are considered the authoritative name servers for associating a domain name with an IP address.

The DNS database records that facilitate the mapping of domain names to IP addresses come in several flavors. The main ones we are concerned with are the address (A) and the canonical name (CNAME) records. An A record is a straight mapping from a domain name to IP address. A CNAME record maps one domain name to another domain name. This acts as a domain name alias. You would use a CNAME to do things like map byu.com to the same IP address as byu.edu so that either one could be used.

When you enter a domain name into a browser, the browser first checks to see if it has the name already in its cache of names. If it does not, it contacts a DNS server and gets the IP address. The DNS server also keeps a cache of names. If the domain name is not in the cache, it will request the name from an authoritative name server. If the authority does not know the name then you get an unknown domain name error. If the process does resolve, then the browser makes the HTTP connection to the associated IP address.

As you can see, there is a lot of levels of name caching. This is done for performance reasons, but it also can be frustrating when you are trying to update the information associated with your domain name. This is where the time to live (TTL) setting for a domain record comes into play. You can set this to be something short like 5 minutes or as long as several days. The different caching layers should then honor the TTL and clear their cache after the requested period has passed.

CADDY:
Caddy is a web service that listens for incoming HTTP requests. Caddy then either serves up the requested static files or routes the request to another web service. This ability to route requests is called a gateway, or reverse proxy, and allows you to expose multiple web services (i.e. your project services) as a single external web service (i.e. Caddy).

For this course, we use Caddy for the following reasons.

Caddy handles all of the creation and rotation of web certificates. This allows us to easily support HTTPS.
Caddy serves up all of your static HTML, CSS, and JavaScript files. All of your early application work will be hosted as static files.
Caddy acts as a gateway for subdomain requests to your Simon and start up application services. For example, when a request is made to simon.yourdomain Caddy will proxy the request to the Simon application running with node.js as an internal web service.
