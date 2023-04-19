# startup
CS260

Setup of CS260 startup project

Edit #2 in Github
HaHaGit and VSC!

From this assignment I learned how to better navigate VSCode and GitHub and how they can sync together. I still do not feel completely comfortable with it, but I now understand where the push, pull, and commit buttons are, and I am learning how to read the error messages in VSCode. This was very helpful to me.

## ELEVATOR PITCH:
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

## MIDTERM:

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
script>1+1</script
script src='main.js'

JS objects look like this: { n:1 };

DOM textContent properties sets the child text for an element

TO create an HTML hyperlink: <a href='https://c.com'>x</a>

div.header { color: blue; } when class=header will turn the text blue

{"x":3} valid JSON; single quotes and undefineds are not

chmod +x deploy.sh makes a script executable

c260.cs.byu.edu is a DNS subdomain (Domain Name System)
To point to another DNS record, use CNAME//

COMMANDS ON THE COMMAND LINE: echo - Output the parameters of the command cd - Change directory mkdir - Make directory rmdir - Remove directory rm - Remove file(s) mv - Move file(s) cp - Copy files ls - List files curl - Command line client URL browser grep - Regular expression search find - Find files top - View running processes with CPU and memory usage df - View disk statistics cat - Output the contents of a file less - Interactively output the contents of a file wc - Count the words in a file ps - View the currently running processes kill - Kill a currently running process sudo - Execute a command as a super user (admin) ssh - Create a secure shell on a remote computer scp - Securely copy files to a remote computer history - Show the history of commands ping - Check if a website is up tracert - Trace the connections to a website dig - Show the DNS information for a domain man - Look up a command in the manual You can also chain the input and output of commands using special characters | - Take the output from the command on the left and pipe, or pass, it to the command on the right

Redirect output to a file. Overwrites the file if it exists
Redirect output to a file. Appends if the file exists CTRL-R - Use type ahead to find previous commands CTRL-C - Kill the currently running command
THE INTERNET: The internet globally connects independent networks and computing devices. In a simplistic way, you can think of the internet as a massive redundant collection of wires that connect up all the computers in the world. A lot of those wires are wireless (wiFi, satellite, or cell), and not all of computers in the world are connected, but generally that is what the internet is. The deeper your mental model of the internet is, the more effectively you will be able to create web applications.

Internet connections

Making connections When one device wants to talk to another it must have an IP address. For example, 128.187.16.184 is BYU's address. Usually, human users prefer a symbolic name over an IP address. The symbolic name is called a domain name. Domain names are converted to IP address by doing a lookup in the Domain Name System (DNS). You can look up the IP address for any domain name using the dig console utility.

➜ dig byu.edu

byu.edu. 5755 IN A 128.187.16.184 Internet requests

Once you have the IP address, you connect to the device it represents by first asking for a connection route to the device. A connection route consists of many hops across the network until the destination is dynamically discovered and the connection established. With the connection the transport and application layers start exchanging data.

Traceroute You can determine the hops in a connection using the traceroute console utility. In the following example, we trace the route between a home computer and BYU. In the result you see the first address 192.168.1.1. This is the address of the network router the home computer is connected to. From there it goes through a couple devices that do not identify themselves and then hits the Google Fiber gateway. Google Fiber is the internet service provider, or ISP, for the requesting device. Then we jump through a few more unidentified devices before finally arriving at BYU (128.187.16.184).

➜ traceroute byu.edu

traceroute to byu.edu (128.187.16.184), 64 hops max, 52 byte packets 1 192.168.1.1 (192.168.1.1) 10.942 ms 4.055 ms 4.694 ms 2 * * * 3 * * * 4 192-119-18-212.mci.googlefiber.net (192.119.18.212) 5.369 ms 5.576 ms 6.456 ms 5 216.21.171.197 (216.21.171.197) 6.283 ms 6.767 ms 5.532 ms 6 * * * 7 * * * 8 * * * 9 byu.com (128.187.16.184) 7.544 ms !X * 40.231 ms !X If I run traceroute again I might see a slightly different route since every connection through the internet is dynamically calculated. The ability to discover a route makes the internet resilient when network devices fail or disappear from the network.

Network internals The actual sending of data across the internet uses the TCP/IP model. This is a layered architecture that covers everything from the physical wires to the data that a web application sends. At the top of the TCP/IP protocol is the application layer. It represents user functionality, such as the web (HTTP), mail (SMTP), files (FTP), remote shell (SSH), and chat (IRC). Underneath that is the transport layer which breaks the application layer's information into small chunks and sends the data. The actual connection is made using the internet layer. This finds the device you want to talk to and keeps the connection alive. Finally, at the bottom of the model is the link layer which deals with the physical connections and hardware.

TCP/IP layers Layer Example Purpose Application HTTPS Functionality like web browsing Transport TCP Moving connection information packets Internet IP Establishing connections Link Fiber, hardware Physical connections

WEB SERVERS: A web server is a computing device that is hosting a web service that knows how to accept incoming internet connections and speak the HTTP application protocol.

Monolithic web servers In the early days of web programming, you would buy a massive, complex, expensive, software program that spoke HTTP and installed on a hardware server. The package of server and software was considered the web server because the web service software was the only thing running on the server.

When Berners-Lee wrote his first web server it only served up static HTML files. This soon advanced so that they allowed dynamic functionality, including the ability to generate all the HTML on demand in response to a users interaction. That facilitated what we now know as modern web applications.

Combining web and application services Today, most modern programming languages include libraries that provide the ability to make connections and serve up HTTP. For example, here is a simple Go language program that is a fully functioning web service. Later on in the course we will show how this is done with JavaScript.

package main

import ( "net/http" )

func main() { // Serve up files found in the public_html directory fs := http.FileServer(http.Dir("./public_html")) http.Handle("/", fs)

// Listen for HTTP requests
http.ListenAndServe(":3000", nil)
} Being able to easily create web services makes it easy to completely drop the monolithic web server concept and just build web services right into your web application. With our simple go example we can add a function that responds with the current time, when the /api/time resource is requested.

package main

import ( "fmt" "io" "net/http" "time" )

func getTime(w http.ResponseWriter, r *http.Request) { io.WriteString(w, time.Now().String()) }

func main() { // Serve up files found in the public_html directory fs := http.FileServer(http.Dir("./public_html")) http.Handle("/", fs)

// Dynamically provide data
http.HandleFunc("/api/time", getTime)

// Listen for HTTP requests
fmt.Println(http.ListenAndServe(":3000", nil))
} We can run that web service code, and use the console application Curl to make an HTTP request and see the time response.

➜ curl localhost:3000/api/time

2022-12-03 09:50:37.391983 -0700 Web service gateways Since it is so easy to build web services it is common to find multiple web services running on the same computing device. The trick is exposing the multiple services in a way that a connection can be made to each of them. Every network device allows for separate network connections by referring to a unique port number. Each service on the device starts up on a different port. In the example above, the go web service was using port 80. So you could just have a user access each service by referring to the port it was launched on. However, this makes it difficult for the user of the services to remember what port matches to which service. To resolve this we introduce a service gateway, or sometimes called a reverse proxy, that is itself a simple web service that listens on the common HTTP port 443. The gateway then looks at the request and maps it to the other services running on a different ports.

Gateway

Our web server will use the application Caddy as the gateway to our services. The details of how Caddy works will be given later.

Microservices Web services that provide a single functional purpose are referred to as microservices. By partitioning functionality into small logical chucks, you can develop and manage them independently from other functionality in a larger system. They can also handle large fluctuations in user demand by simply running more and more stateless copies of the microservice from multiple virtual servers hosted in a dynamic cloud environment. For example, one microservice for generating your genealogical family tree might be able to handle 1,000 users concurrently. So in order to support 1 million users, you just deploy 1,000 instances of the service running on scalable virtual hardware.

Serverless The idea of microservices naturally evolved into the world of serverless functionality where the server is conceptually removed from the architecture and you just write a function that speaks HTTP. That function is loaded through an gateway that maps a web request to the function. The gateway automatically scales the hardware needed to host the serverless function based on demand. This reduces what the web application developer needs to think about down to a single independent function.

DOMAIN NAMES: A domain name is simply a text string that follows a specific naming convention and is listed in a special database called the domain name registry.

Domain names are broken up into a root domain, with one or more possible subdomain prefixes. The root domain is represented by a secondary level domain and a top level domain. The top level domain (TLD) represent things like com, edu, or click. So a root domain would look something like byu.edu, google.com, or cs260.click. The possible list of TLDs is controlled by ICANN, one of the governing boards of the internet.

Domain name parts

The owner of a root domain can create any number of subdomains off the root domain. Each subdomain may resolve to a different IP address. So the owner of cs260.click can have subdomains for travel (travel.cs260.click), finance (finance.cs260.click), or a blog (blog.cs260.click).

You can get information about a domain name from the domain name registry using the whois console utility.

Once a domain name is in the registry it can be listed with a domain name system (DNS) server and associated with an IP address. Of course you must also lease the IP address before you can use it to uniquely identify a device on the internet, but that is a topic for another time. Every DNS server in the world references a few special DNS servers that are considered the authoritative name servers for associating a domain name with an IP address.

The DNS database records that facilitate the mapping of domain names to IP addresses come in several flavors. The main ones we are concerned with are the address (A) and the canonical name (CNAME) records. An A record is a straight mapping from a domain name to IP address. A CNAME record maps one domain name to another domain name. This acts as a domain name alias. You would use a CNAME to do things like map byu.com to the same IP address as byu.edu so that either one could be used.

When you enter a domain name into a browser, the browser first checks to see if it has the name already in its cache of names. If it does not, it contacts a DNS server and gets the IP address. The DNS server also keeps a cache of names. If the domain name is not in the cache, it will request the name from an authoritative name server. If the authority does not know the name then you get an unknown domain name error. If the process does resolve, then the browser makes the HTTP connection to the associated IP address.

As you can see, there is a lot of levels of name caching. This is done for performance reasons, but it also can be frustrating when you are trying to update the information associated with your domain name. This is where the time to live (TTL) setting for a domain record comes into play. You can set this to be something short like 5 minutes or as long as several days. The different caching layers should then honor the TTL and clear their cache after the requested period has passed.

CADDY: Caddy is a web service that listens for incoming HTTP requests. Caddy then either serves up the requested static files or routes the request to another web service. This ability to route requests is called a gateway, or reverse proxy, and allows you to expose multiple web services (i.e. your project services) as a single external web service (i.e. Caddy).

For this course, we use Caddy for the following reasons.

Caddy handles all of the creation and rotation of web certificates. This allows us to easily support HTTPS. Caddy serves up all of your static HTML, CSS, and JavaScript files. All of your early application work will be hosted as static files. Caddy acts as a gateway for subdomain requests to your Simon and start up application services. For example, when a request is made to simon.yourdomain Caddy will proxy the request to the Simon application running with node.js as an internal web service.

HyperText Markup Language (HTML) provides the foundational content structure that all web applications build on. HTML was originally designed to be a publishing format for web documents, or pages. From that original definition web programmers have morphed the web page concept into a web application where a page now represents either a single page application (SPA) or a large group of hyperlinked pages that form a multi-page application (MPA). By itself HTML is amazing, but to create a full web application we will need other technologies to style (CSS) our pages and make them interactive (JavaScript). For now, we will focus on creating the content structure with HTML.

Here is an example of a simple HTML document.

Hello world The first thing you noticed is that this looks like a simple text document. That is because text is valid HTML. In order to provide structure to our text we need to introduce the concept of elements and their associated tag representation.

Elements and tags HTML elements are represented with enclosing tags that may enclose other elements or text. For example, the paragraph element, and its associated tag (p), designate that the text is a structural paragraph of text. When we talk about tags we are referring to a delimited textual name that we use to designate the start and end of an HTML element as it appears in an HTML document. Tags are delimited with the less than (<) and greater than (>) symbols. A closing tag will also have a forward slash (/) before its name.

Hello world

We can continue adding structure to the page with additional elements. Each of these elements may contain other elements that provide the structure of our web page. The html element represents the top level page structure. The head element contains metadata about the page and the page title. The body element represents the content structure. The main element represents the main content structure, as opposed to things like headers, footers, asides, and navigation content. These additional elements result in the following HTML page. <title>My First Page</title>
Hello world

However, when we render the HTML in a browser it would look exactly the same as our original simple text example. The reason for that is that HTML is almost completely about structure. The visual appearance of the web page won't really change until we start styling the page with CSS.
HTML Hello world

Attributes Every HTML element may have attributes. Attributes describe the specific details of the element. For example, the id attribute gives a unique ID to the element so that you can distinguish it from other elements. The class attribute is another common element attribute that designates the element as being classified into a named group of elements. Attributes are written inside the element tag with a name followed by an optional value. You can use either single quotes (') or double quotes (") to delimit attribute values.

Hello world

Hyperlinks One of the core features that made the web so successful was the ability to create hyperlinks that take you from one page to another another with a simple click. A hyperlink in HTML is represented with an anchor (a) element that has an attribute containing the address of the hyperlink reference (href). A hyperlink to BYU's home page looks like this:
Go to the Y Complete example HTML defines a header () that tells the browser the type and version of the document. You should always include this at the top of the HTML file. We can now add the header, some attributes, and more content to our document for a full example.

Hello world
HTML welcomes you to the amazing world of web programming.

What will this mean to you?

Learn more here.

Intro HTML Example
Notice that the rendered document has almost no styling. That is because the entire purpose of HTML is to provide content and structure. The layout of the content is left almost entirely up to Cascading Stylesheets (CSS). When styling was introduced with CSS, all of the HTML elements that defined style such as font, strike, and plaintext were deprecated.

Common elements Modern HTML contains over 100 different elements. Here is a short list of HTML elements that you will commonly see.

element meaning html The page container head Header information title Title of the page meta Metadata for the page such as character set or viewport settings script JavaScript reference. Either a external reference, or inline include External content reference body The entire content body of the page header Header of the main content footer Footer of the main content nav Navigational inputs main Main content of the page section A section of the main content aside Aside content from the main content div A block division of content span An inline span of content h<1-9> Text heading. From h1, the highest level, down to h9, the lowest level p A paragraph of text b Bring attention table Table tr Table row th Table header td Table data ol,ul Ordered or unordered list li List item a Anchor the text to a hyperlink img Graphical image reference dialog Interactive component such as a confirmation form A collection of user input input User input field audio Audio content video Video content svg Scalable vector graphic content iframe Inline frame of another HTML page Comments You can include comments in your HTML files by starting the comment with . Any text withing a comment block will be completely ignored when the browser renders it.

Special characters HTML uses several reserved characters for defining its file format. If you want to use those characters in your content then you need to escape them using the entity syntax. For example, to display a less than symbol (<) you would instead use the less than entity (<). You can also use the entity syntax to represent any unicode character.

Character Entity & & < <

> " " ' ' 😀 😀 HTML Versions Understanding when different HTML features were introduced helps you know what has been around for a long time and probably supported by all browsers, and what is new and may not work everywhere. HTML is pretty stable, but it is still good to check a website like MDN or canIUse to make sure.

Year Version Features 1990 HTML1 format tags 1995 HTML2 tables, internationalization 1997 HTML3 MathML, CSS, frame tags 1999 HTML4 external CSS 2014 HTML5 email, password, media, and semantic tags index.html By default a web server will display the HTML file named index.html when a web browser, such as Google Chrome, makes a request without asking for a specific HTML file. For example, when you ask for https://google.com in your web browser you will actually get back the HTML for the file https://google.com/index.html. For this reason, it is very common to name the main HTML file for your web application index.html.

Rendering HTML You can save any HTML file to your computer's disk and then open the file using your browser. You can also open the HTML file in VS Code and use the Live Server extension to display the HTML. Another way to easily play with HTML is to use a sandbox like CodePen. However, when you use CodePen it is not necessary to supply the HTML DocType header or the root html element since CodePen already assumes you are providing HTML. Here is our example HTML document rendered in CodePen.

CodePen HTML introduction

The two major purposes of HTML is to provide structure and content to your web application. Some of the common HTML structural elements include body, header, footer, main, section aside, p, table, ol/ul, div, and span. We demonstrate the use of each element with the following HTML document. It starts with the top level content body. The body has three children, a header, main, and footer. Each of the body children then contains other structural content.

The header contains a paragraph with a span, and a navigation containing multiple divisions of sub-content.

The main contains multiple sections that contain either an unordered list (ul) or a table. Main also contains an aside for content that does not fit the content flow of the sections.

The footer has a content division with a single span.

Body

Header - Span

Navigation
Div
Div
Section

List
List
List
Section

Table	Table	Table
table	table	table
Aside

Footer - Span
If we rendered this HTML, and added just a bit of styling, so we can see how they related to each other, we would see the following.
HTML structure

Properly representing the page structure using the elements is important not only so it makes logical sense to a programmer, but also so that automated tools like search indexing crawlers and accessibility screen readers can correctly interpret the document.

Block and inline There is a distinction between structure elements that are block vs inline. A block element is meant to be a distinct block in the flow of the content structure. An inline element is meant to be inline with the content flow of a block element. In other words, inline elements do not disrupt the flow of a block element's content. For example, the block element div (division) could have an inline element b in order to bring attention to a portion of its sub-text. Likewise a p (paragraph) element could have a span to mark the paragraph's sub-text as a person's name.

He said don't cross the beams.
Authors such as ee cummings often used unconventional structure.

From the very early days of HTML it contained elements for accepting the input of user data. These elements include the following:

Element Meaning Example form Input container and submission

fieldset Labeled input grouping ... input Multiple types of user input select Selection dropdown 1 optgroup Grouped selection dropdown 1 option Selection option option2 textarea Multiline text input <textarea></textarea> label Individual input label Range: output Output of input 0 meter Display value with a known range Form element The main purpose of the form element is to submit the values of the inputs it contains. Before JavaScript was introduced the form container element was essential because it was the only way for the browser to send the input data to a web server as part of a request to process the input and generate a new web page displaying the result of the input. With JavaScript we have much more control over input data and what is done with it. For example, in a single page application the JavaScript will dynamically rebuild the HTML elements to reflect the results of the user interaction. With this ability the data may not even be sent to the server. This greatly reduces the necessity of the form element, but it is often still used simply as a container. Just remember that you are not required to have a form element to use input elements.
Here is an example of a simple form that submits the value of a textarea element.

TextArea: <textarea id="ta" name="ta-id"> Some text </textarea> Submit Pressing the submit button sends the following data to the web server. The browser generates the data by combining the textarea's name attribute with the current value of the textarea.
ta-id=Some+text Input element The input element represents many different input types. You set the type of input with the type attribute. There are several different types to choose from. This includes different flavors of textual, numeric, date, and color inputs.

Type Meaning text Single line textual value password Obscured password email Email address tel Telephone number url URL address number Numerical value checkbox Inclusive selection radio Exclusive selection range Range limited number date Year, month, day datetime-local Date and time month Year, month week Week of year color Color file Local file submit button to trigger form submission In order to create an input you specify the desired type attribute along with any other attribute associated with that specific input. Here is an example of a checked radio button and its associated label.

Check me Most input elements share some common attributes. These include the following.

Attribute Meaning name The name of the input. This is submitted as the name of the input if used in a form disabled Disables the ability for the user to interact with the input value The initial value of the input required Signifies that a value is required in order to be valid The following shows what the inputs look like when rendered. Don't worry about how clunky they look right out of the box. We will fix that when we start styling things with CSS.

HTML Input

Validating input Several of the input elements have validation built into them. This means that they will not accept a value that is not for example, a number, a URL, outside of a range, or an email address. You can also specify the required attribute on an input element to mark it as requiring a value before it can be submitted. The pattern attribute exists on text, search, url, tel, email, and password inputs. When present, the pattern attribute provides a regular expression that must match for the input to be considered as valid.

You should also have validation built into your JavaScript that checks input data to ensures everything is valid before it is submitted. All of the input elements support functions for determining their validation state. Additionally, there are CSS style selectors for visualizing the validity of the input. In order to have a good user experience, it is critical that you provide sufficient user feedback early in the input process. A good design will give feedback as, or before, the user begins to input. A poor design will keep the user guessing as to why the data is not being accepted, or even if it was accepted.

The HTML elements that represent media include img, audio, video, svg, and canvas. The img, audio, and video elements are all simple references to an external file, but svg and canvas both contain the code for render a visual image that can even be animated.

External MEDIA: The media tags that reference external media all take a URL as an attribute. The path represented by the URL can either be a relative path or full path. A full path includes the protocol, domain name, and path to the file.

https://images.pexels.com/photos/164170/pexels-photo-164170.jpeg A relative path references a file that is served from the same location as the HTML page rendering the element. You want to make the path is as relative as possible so that you can move your code around without having to actually adjust all of the external page references. For example, if your HTML page is located in a directory with a subdirectory named images that contains a file named photo.jpg you would use a relative path as follows.

images/photo.jpg Image To include an image in your content you use the img element and specify the src attribute with the URL to the source image. In order to support accessibility, you should also include an alt attribute that describes the image. A full img element would look like the following.

mountain landscape mountain landscape

Audio To include an audio file in your content you use the audio element and specify the src attribute with the URL to the source image. You can include the controls attribute if you want the user to be able to control the audio playback. If you do not display the controls then there is no visual representation of the audio in the rendered page. The autoplay attribute starts the audio playing as soon as the audio file is loaded, and the loop attribute keeps it playing over and over.

⚠ Note that automatically playing audio is strongly discouraged unless you provide a way for the user to opt-in to that behavior.

Html Audio

Video To include a video in your content you use the video element and specify the src attribute with the URL to the source video. Like the audio element you can include the controls or autoplay attributes

⚠ Note that you may need to include the crossorigin="anonymous" attribute if you are requesting files from a different domain than the one serving your content.

HTML video
Internal media The internal media elements svg and canvas allow you to actually create images directly within your HTML.

Scalable Vector Graphics (SVG) SVG is an extremely powerful and widely supported way to render graphics inline in your HTML. An example SVG graphic that draws a black border and a red circle looks like this:

<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" stroke="red" fill="red" style="border: 1px solid #000000"

SVG demo
When combined with JavaScript and CSS you can produce some amazing visualizations. Checkout this CodePen for an example.

Consult the MDN documentation if you are interested in learning more about SVG.

Canvas The canvas element was introduced to HTML in order to facilitate 2D drawing and animation. The HTML for the canvas element is fairly simple, but actually drawing on the canvas requires JavaScript support. Here again, is our simple red dot example.

<canvas id="canvasDemo" width="300" height="200" style="border: 1px solid #000000"

<script> const ctx = document.getElementById('canvasDemo').getContext('2d'); ctx.beginPath(); ctx.arc(150, 100, 50, 0, 2 * Math.PI); ctx.fillStyle = 'red'; ctx.strokeStyle = 'red'; ctx.fill(); ctx.stroke(); </script>
CSS: Cascading Style Sheets (CSS) converts the structure and content of HTML into a vibrant, responsive, experience. The initial objective of CSS was to simply style the HTML based upon the desires of the user, developer, and browser. In modern web applications CSS styling focuses more on helping the developer create complex renderings of dynamic content that is responsive to the actions of the user and the device the application is rendered on. With CSS a web programmer can animate the page, deploy custom fonts, respond to user actions, and dynamically alter the entire layout of the page based on the size of a device and its orientation.

Functionally, CSS is primarily concerned with defining rulesets, or simply a rules. A rule is comprised of a selector that selects the elements to apply the rule to, and one or more declarations that represent the property to style with the given property value.

CSS definitions

For example, consider the following rule.

p { font-family: sans-serif; font-size: 2em; color: navy; text-shadow: 3px 3px 1px #cccccc; } The selector p selects all paragraph elements in the HTML document. The four specified declarations then: 1) change the font to use a san-serif font, 2) increase the font size to be twice as big as the default font, 3) change the text color to be navy, and 4) create a gray shadow for the text. The result looks like this.

CSS simple rule

Associating CSS with HTML There are three ways that you can associate CSS with HTML. The first way is to use the style attribute of an HTML element and explicitly assign one or more declarations.

CSS

The next way to associate CSS is to use the HTML style element to define CSS rules within the HTML document. The style element should appear in the head element of the document so that the rules apply to all elements of the document. <style> p { color: green; } </style>
CSS

The final way to associate CSS is to use the HTML link element to create a hyperlink reference to an external file containing CSS rules. The link element must appear in the head element of the document. styles.css
p { color: green; } All of the above examples are equivalent, but using the link element usually is the preferred way to define CSS.

Cascading styles Because elements inherit the rules applied to their parents you often end up with the same declaration property applied to a single element multiple times. For example, we might set color property for all body elements to be red, and then paragraph elements to be green, and then span elements to be blue, and finally use a style element on a specific span to be black.

CSS

body { color: red; } p { color: green; } span { color: blue; } In this case, the rules cascade down from the highest nodes in the DOM tree to the lowest level. Any declaration property defined at a lower level will override the higher declaration. You can see this happening if you use the browser's debugger. In Chrome right click on the element and select inspect. You can then click on each element in the debugger and see what the value of the color property is. For the case defined above you will see that each of the higher level declarations is crossed out until you get to the style explicitly defined on the element.
CSS cascade

The box model CSS defines everything as boxes. When you apply styles, you are applying them to a region of the display that is a rectangular box. Within an element's box there are several internal boxes. The innermost box holds the element's content. This is where things like the text or image of an element is displayed. Next comes the padding. The padding will inherit things like the background color. After padding is the border, which has properties like color, thickness and line style. The final box is the margin. The margin is considered external to the actual styling of the box and therefore only represents whitespace. It is important to understand each of these boxes so that you can achieve the desired visual result by applying the proper CSS declaration.

CSS box model

By default, the width and height of an element is defined by the width and height of the content box. You can change the box-sizing CSS property from the default value of content-box to border-box in order to redefine the width and height to also include the padding and the border. This often makes it easier to style elements when their visual size matches their actual size.

CSS Versions As with HTML, CSS has evolved significantly over the years. The following version table gives you an idea of when certain features were added and therefore how stable the support for them are.

Year Version Features 1996 CSS1 selectors, font, color, background, alignment, margin, border, padding 1998 CSS2 positioning, z-index, bidirectional text, shadows 2011 CSS2.1 removed incompatible features 1999-2021 CSS3 enhancements for media, box, background, borders, color, template, multi-column, selectors Beginning with CSS3 the specification was divided into modules so that they could be implemented at different levels of maturity. Whether these modules will culminate in a CSS4 specification has not yet been decided.

SELECTORS: The first step in understanding CSS is mastering how to select the elements that a CSS rule applies to. The CSS rule selector can take many forms. In order to explain the most common selectors we need some demonstration HTML. Let's image a simple document describing the departments in a university. In our case we have a physics and a chemistry department. The information provided is very sparse, but the structure provided by the HTML is enough to work with.

Departments
welcome message

Physics
Introduction

Text

Summary

Chemistry
Introduction

Text

Summary

By default every browser defines a base set of styles that it applies to all HTML. This varies slightly from browser to browser, but for the most part our document would render like this using the base browser styles.
CSS selectors base

We would like to style our document so that it looks like this when we are done.

CSS selectors final

Element type selector To start things off, we want to make all elements in the document use a sans-serif font. We can do this by using an element name selector. By selecting the body element we will cascade our declaration down to all the children of the body, which is the whole document.

body { font-family: sans-serif; } Note that we could also use the wildcard element name selector (*) to select all elements, but for our needs the body element will work just fine.

We can also use element name selectors to give a bottom border to the top level heading (h1), as well as modify the section elements to pop out with a gray background and some white space in the padding and margins.

h1 { border-bottom: thin black solid; }

section { background: #eeeeee; padding: 0.25em; margin-bottom: 0.5em; } Combinators Next we want to change the color of the second level headings (h2), but we only want to do that within the sections for each department. To make that happen we can provide a descendant combinator that is defined with a space delimited list of values where each item in the list is a descendant of the previous item. So our selector would be all h2 elements that are descendants of section elements.

section h2 { color: #004400; } There are other types of combinators that you can use. These include the following.

Combinator Meaning Example Description Descendant A list of descendants body section Any section that is a descendant of a body Child A list of direct children section > p Any p that is a direct child of a section General sibling A list of siblings p ~ div Any p that has a div sibling Adjacent sibling A list of adjacent sibling p + div Any p that has an adjacent div sibling We can use the general sibling combinator to increase the whitespace padding on the left of paragraphs that are siblings of a level two heading.

h2 ~ p { padding-left: 0.5em; } Class selector The next selector we will use is the class selector. Remember that any element can have zero or more classification applied to it. For example, our document has a class of introduction applied to the first paragraph, and a class of summary applied to the final paragraph of each section. If we want to bold the summary paragraphs we would supply the class name summary prefixed with a period (.summary).

.summary { font-weight: bold; } You can also combine the element name and class selectors to select all paragraphs with a class of summary.

p.summary { font-weight: bold; } ID selector ID selectors reference the ID of an element. All IDs should be unique within an HTML document and so this select targets a specific element. To use the ID selector you prefix the ID with the hash symbol (#). We would like to showcase our physics department by putting a thin purple border along the left side of the physics section.

#physics { border-left: solid 1em purple; } Attribute selector Attribute selectors allow you to select elements based upon their attributes. You use an attribute selector to select any element with a given attribute (a[href]). You can also specify a required value for an attribute (a[href="./fish.png"]) in order for the selector to match. Attribute selectors also support wildcards such as the ability to select attribute values containing specific text (`p[href*="https://"]).

p[class='summary'] { color: red; } For a full description of attribute selections refer to MDN.

Pseudo selector CSS also defines a significant list of pseudo selectors which select based on positional relationships, mouse interactions, hyperlink visitation states, and attributes. We will give just one example. Suppose we what our purple highlight bar to appear only when the mouse hovers over the text. To accomplish this we can change our ID selector to select whenever a section is hovered over.

section:hover { border-left: solid 1em purple; } You can find out more about pseudo selectors on MDN.

DECLARATIONS: CSS rule declarations specify a property and value to assign when the rule selector matches one or more elements. There are legions of possible properties defined for modifying the style of an HTML document. For our purposes we will discuss just a few of the more commonly used ones so that you can get a feel for wide variety of functionality they represent.

Property Value Example Discussion background-color color red Fill the background color border color width style #fad solid medium Sets the border using shorthand where any or all of the values may be provided border-radius unit 50% The size of the border radius box-shadow x-offset y-offset blu-radius color 2px 2px 2px gray Creates a shadow columns number 3 Number of textual columns column-rule color width style solid thin black Sets the border used between columns using border shorthand color color rgb(128, 0, 0) Sets the text color cursor type grab Sets the cursor to display when hovering over the element display type none Defines how to display the element and its children filter filter-function grayscale(30%) Applies a visual filter float direction right Places the element to the left or right in the flow flex Flex layout. Used for responsive design font family size style Arial 1.2em bold Defines the text font using shorthand grid Grid layout. Used for responsive design height unit .25em Sets the height of the box margin unit 5px 5px 0 0 Sets the margin spacing max-[width/height] unit 20% Restricts the width or height to no more than the unit min-[width/height] unit 10vh Restricts the width or height to no less than the unit opacity number .9 Sets how opaque the element is overflow [visible/hidden/scroll/auto] scroll Defines what happens when the content does not fix in its box position [static/relative/absolute/sticky] absolute Defines how the element is positioned in the document padding unit 1em 2em Sets the padding spacing left unit 10rem The horizontal value of a positioned element text-align [start/end/center/justify] end Defines how the text is aligned in the element top unit 50px The vertical value of a positioned element transform transform-function rotate(0.5turn) Applies a transformation to the element width unit 25vmin Sets the width of the box z-index number 100 Controls the positioning of the element on the z axis Units 📖 Suggested reading: MDN Values and units

You can use a variety of units when defining the size of a CSS property. For example, a the width of an element can be defined using absolute units such as the number of pixels (px) or inches (in). You can also use relative units such as a percentage of the parent element (50%), a percentage of a minimum viewport dimension (25vmin), or a multiplier of the size of the letter m (1.5rem) as defined by the root element.

p { width: 25%; height: 30vh; } Here is a list of the most commonly used units. All of the units are prefixed with a number when used as a property value.

Unit Description px The number of pixels pt The number of points (1/72 of an inch) in The number of inches cm The number of centimeters % A percentage of the parent element em A multiplier of the width of the letter m in the parent's font rem A multiplier of the width of the letter m in the root's font ex A multiplier of the height of the element's font vw A percentage of the viewport's width vh A percentage of the viewport's height vmin A percentage of the viewport's smaller dimension vmax A percentage of the viewport's larger dimension Color 📖 Suggested reading: MDN Applying color

CSS defines multiple ways to describe color, ranging from representations familiar to programmers and ones familiar to layout designers and artists.

Method Example Description keyword red A set of predefined colors (e.g. white, cornflowerblue, darkslateblue) RGB hex #00FFAA22 or #0FA2 Red, green, and blue as a hexadecimal number, with an optional alpha opacity RGB function rbg(50%, 255, 128, 0.5) Red, green, and blue as a percentage or number between 0 and 255, with an optional alpha opacity percentage HSL hsl(180, 30%, 90%, 0.5) Hue, saturation, and light, with an optional opacity percentage. Hue is the position on the 365 degree color wheel (red is 0 and 255). Saturation is how gray the color is, and light is how bright the color is.

FONTS: Choosing appropriate fonts is a key web application design characteristic. A beautiful modern font will make your application enjoyable to use. Picking a hard to read font, an overused font, or using too many fonts will turn users away.

The CSS font-family property defines what fonts should be used. The property value represents an ordered list of fonts. The first font in the list that is available will be used. This ability to select from a list of fonts is important because different operating systems have different default fonts and your first choice may not be available.

Font families There are four major families of fonts: Serif, san-serif, fixed, and symbol. A serif is a small stroke attached to the ends of a character's major strokes. Serif fonts have the extra strokes, san-serif fonts do not. Fixed fonts characters all are the same size. This is useful for lining up text when doing things like coding or display tabular data. Symbol fonts represent non-language characters such as arrows or emojis.

Importing fonts In addition to referencing standard fonts found on the user's computer you can specify a font that you provide with your application. That way your application is guaranteed to always look the same. In order to have the browser load a font you use the @font-face rule and provide the font name and source location.

@font-face { font-family: 'Quicksand'; src: url('https://cs260.click/fonts/quicksand.woff2'); }

p { font-family: Quicksand; } If you do not want to host font files on your server, then you can load them from a font provider. For example, Google provides a large selection of open source fonts that you can use without paying any royalties. The easiest way to use Google fonts is to use a CSS import statement to reference the Google Font Service. This will automatically generate the CSS for importing the font.

@import url('https://fonts.googleapis.com/css2?family=Rubik Microbe&display=swap');

p { font-family: 'Rubik Microbe'; }

ANIMATION: Using CSS to animate your components is an easy way to make your application feel alive and interactive. You create CSS animations using the animation properties and defining keyframes for what the element should look like a different times in the animation. Let's walk through an example.

We have a paragraph of centered text and we want it to zoom in until its size is 20% of the view height.

p { text-align: center; font-size: 20vh; } To make this happen we specify that we are animating the selected elements by adding the animation-name property with a value of demo. This name refers to the name of the keyframes that we will specify in a minute. The keyframes tell what CSS properites should be applied at different key points in the animation sequence. We also add an animation-duration property in order to specify that the animation should last for three seconds.

p { text-align: center; font-size: 20vh;

animation-name: demo; animation-duration: 3s; } Now we are ready to create the keyframes. We don't have to define what happens at every millisecond of the animation. Instead we only need to define the key points and CSS will generate a smooth transition to move from one keyframe to another. In our case we simply want to start with text that is invisible and have it zoom into the full final size. We can do this with two frames that are designated with the keywords from and to.

@keyframes demo { from { font-size: 0vh; }

to { font-size: 20vh; } } That's every thing we need to do. However, let's made one more addition. It would look better if towards the end, the paragraph bounce out a little bigger than its final size. We can accommodate that by adding another key frame that happens 95 percent through the animation.

@keyframes demo { from { font-size: 0vh; }

95% { font-size: 21vh; }

to { font-size: 20vh; } } CSS animation

You can see this animation working with this CodePen.

Animation is not just for pushing buttons or making text float around. Here is an example of animating a watch using only HTML and CSS.

Watch animation

CodePen has a lot of CSS animation examples that you can experiment with. Here is a simple one with floating clouds that I found interesting. If you find an interesting one share it with us on Discord.

RESPONSIVE DESIGN:

Modern web applications are expected to run well on a large variety of computing devices. This includes everything from desktops, to mobile phones, to shopping kiosks, to car dashboards. This ability to reconfigure the interface so the application accommodates and takes advantage of the screen's size and orientation is called responsive design.
Much of HTML and CSS is already fluid due to the fact that it responds to the browser window being resized. For example a paragraph element will resize when the browser window is resized. However, the following features can completely change the layout of the application based on the device's size and orientation.

Display 📖 Deeper dive reading: MDN Display

The CSS display property allows you to change how an HTML element is displayed by the browser. The common options for the display property include the following.

Value Meaning none Don't display this element. The element still exists, but the browser will not render it. block Display this element with a width that fills its parent element. A p or div element has block display by default. inline Display this element with a width that is only as big as its content. A b or span element has inline display by default. flex Display this element's children in a flexible orientation. grid Display this element's children in a grid orientation. We can demonstrate the different CSS display property values with the following HTML that contains a bunch of div elements. By default div elements have a display property value of block.

None
Block
Inline1
Inline2
FlexA
FlexB
FlexC
FlexD
GridA
GridB
GridC
GridD
With the default of block this HTML would render like this.
CSS default div display

If we modify the display property associated with each element with the following CSS, then we get a totally different rendering.

.none { display: none; }

.block { display: block; }

.inline { display: inline; }

.flex { display: flex; flex-direction: row; }

.grid { display: grid; grid-template-columns: 1fr 1fr; } CSS display

You can experiment with different display property values with this CodePen.

Viewport meta tag When smart mobile devices started gaining popularity they began to be used to view websites. However, the websites were optimized for desktop displays and not little tiny mobile screens. To solve this mobile browsers automatically started scaling the website so that it looked better on a small screen. Unfortunately, as web applications started being responsive to the screen size, the mobile browser's scaling got in the way. The solution is to include a meta tag in the head element of all your HTML pages. This tells the browser to not scale the page.

Float The float css property moves an element to the left or right of its container element and allows inline elements to wrap around it. For example, if we had an aside element followed by a large paragraph of text, we could create the following CSS rule in order to cause the text to wrap around the aside.
aside { float: right; padding: 3em; margin: 0.5em; border: black solid thin; } CSS float

When the browser resizes, the text will flow around the floating element. You can use this CodePen to experiment with float. Try changing the descriptor value to none or left and see what happens.

Media queries One of the main CSS features for creating responsive applications is the @media selector. This selector dynamically detects the size and orientation of the device and applies CSS rules to represent the structure of the HTML in a way that accommodates the change.

We can use the @media selector to tell us which side of the screen (technically the viewport) is the longest. A media query takes one or more predicates separated by boolean operators. In our case we simply want to know if the screen is oriented in portrait mode (short side on top) or not. If it is then we transform all of our div elements by rotating them 270 degrees.

@media (orientation: portrait) { div { transform: rotate(270deg); } } We can demonstrate the result of applying the media selector by using the browser's debugger and switching into phone and responsive mode. You can also use this CodePen and play with it yourself by simply resizing the browser's window.

CSS Media orientation

You can also use media queries to make entire pieces of your application disappear, or move to a different location. For example, if we had an aside that was helpful when the screen is wide, but took up too much room when the screen got narrow, we could use the following media query to make it disappear.

@media (orientation: portrait) { aside { display: none; } }

CSS GRID:

The grid display layout is useful when you want to display a group of child elements in a responsive grid. We start with a container element that has a bunch of child elements.

We turn this into a responsive grid by including a CSS display property with the value of grid on the container element. This tells the browser that all of the children of this element are to be displayed in a grid flow. The next property, grid-template-columns, specifies the layout of the grid columns. In this example we say that we want to repeatedly define each column to auto-fill the parent element's width with children that are resized to a minimum of 300 pixels and a maximum of one equal fractional unit (1fr) of the grid width. A fractional unit is dynamically computed by splitting up the parent element's width into equal parts for each of the children.
We finish off the grid configuration by saying that we want all rows to be exactly 300 pixels high with the grid-auto-rows property and the use the grid-gap property to say that we want at least a 1 em gap between our grid items.

.container { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); grid-auto-rows: 300px; grid-gap: 1em; }

CSS FLEX:

The flex display layout is useful when you want to partition your application into areas that responsively move around as the window resizes or the orientation changes. In order to demonstrate the power of flex we will build an application that has a header, footer, and a main content area that is split into two sections, with controls of the left and content on the right.

So we can visualize our design by quickly sketching it out.

CSS App mock

Next we build our structural HTML to match our design.

CSS flex & media query
Controls
Content
Footer
Now we can use Flexbox to make it all come alive. We make the body element into a responsive flexbox by including the CSS display property with the value of flex. This tells the browser that all of the children of this element are to be displayed in a flex flow. We want our top level flexbox children to be column oriented and so we add the flex-direction property with a value of column. We then add some simple other declarations to zero out the margin and fill the entire viewport with our application frame.
body { display: flex; flex-direction: column; margin: 0; height: 100vh; } To get the division of space for the flexbox children correct we add the following flex properties to each of the children.

header - flex: 0 80px - Zero means it will not grow and 80px means it has a starting basis height of 80 pixels. This creates a fixed size box. footer - flex: 0 30px - Like the header it will not grow and has a height of 30 pixels. main - flex: 1 - One means it will get one fractional unit of growth, and since it is the only child with a non-zero growth value, it will get all the remaining space. Main also gets some additional properties because with want it to also be a flexbox container for the controls and content area. So we set its display to be flex and specify the flex-direction to be row so that the children are oriented side by side. header { flex: 0 80px; background: hsl(223, 57%, 38%); }

footer { flex: 0 30px; background: hsl(180, 10%, 10%); }

main { flex: 1; display: flex; flex-direction: row; } Now we just need to add CSS to the control and content areas represented by the two child section elements. We want the controls to have 25% of the space and the content to have the remaining. So we set the flex property value to 1 and 3 respectively. That means that the controls get one unit of space and the content gets three units of space. No matter how we resize things this ratio will responsively remain.

section:nth-child(1) { flex: 1; background-color: hsl(180, 10%, 80%); } section:nth-child(2) { flex: 3; background-color: white; } Media Query That completes our original design, but we also want to handle small screen sizes. To do this, we add some media queries that drop the header and footer if the viewport gets too short, and orients the main sections as rows if it gets too narrow.

To support the narrow screen (portrait mode), we include a media query that detects when we are in portrait orientation and sets the flex-direction of the main element to be column instead of row. This causes the children to be stacked on top of each other instead of side by side.

To handle making our header and footer disappear when the screen is to short to display them, we use a media query that triggers when our viewport height has a maximum value of 700 pixels. When that is true we change the display property for both the header and the footer to none so that they will be hidden. When that happens the main element becomes the only child and since it has a flex value of 1, it takes over everything.

@media (orientation: portrait) { main { flex-direction: column; } }

@media (max-height: 700px) { header { display: none; } footer { display: none; } }

CSS FRAMEWORKS:

CSS frameworks provide functions and components that commonly appear in web applications. As web developers built more and more web applications they began to use the same patterns over and over. They combined these patterns into a shared package of code and contributed it to the world as open source repositories. This helped not only decrease the time to develop an application, but created a common user experience for the web in general.

Today, there are lots of different open source CSS frameworks available to choose from. Many of them contain the same types of functionality, but they all bring something a little different to the table.

css frameworks

Source: StateOfCSS CSS framework poll
Tailwind A new rising contender in the CSS framework space is Tailwind CSS and its associated component library Tailwind UI. In the 2022 StateOfCSS poll, Tailwind gained an impressive 46% general usage ranking with a retention rating of 78%, all within the last four years.

Tailwind takes a different approach than traditional CSS frameworks. Instead of using large, rich, CSS rulesets to compartmentalize styling and functionality, it uses smaller definitions that are applied specifically to individual HTML elements. This moves much of the CSS representation out of the CSS file and directly into the HTML.


“Tailwind CSS”

Bootstrap 🔑 Required reading: Getting started with Bootstrap
The reigning champion for CSS frameworks is Bootstrap. Bootstrap has been supported by an active and vibrant community for over a decade and contains many lessons learned from real world applications. The major downside of Bootstrap is its own success. Because it is so popular, Bootstrap defines the de facto look and feel of websites. This is great for user experience continuity, but it makes it difficult for a website to grab the attention of new users.

Getting bootstrap You can integrate Bootstrap into your web applications simply by referencing the Bootstrap CSS files from their content delivery network (CDN). You then add the HTML link elements to your head element like this.

... If you are going to use Bootstrap components that require JavaScript (carousel, buttons, and more), you will also need to include Bootstrap's JavaScript module. You add this by putting the following at the end of your HTML body element. ... <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous" ></script> Later on, when we introduce the idea of bundling your application, you will want to use the Node Package Manager (NPM) to download Bootstrap and include it in your source code so that you don't have to rely on someone else's server to provide you with a vital piece of your application. To include Bootstrap in your application using NPM you would run the following from your console.
npm install bootstrap@5.2.3 ⚠ Note that those links are version specific (version 5 in this case). You will want to get the latest version links when you begin building your application.

Using bootstrap Once you have Bootstrap linked in your HTML files you can begin using the components it provides. Let's start with a simple button. When we use the Bootstrap btn CSS class, the button gets a nice looking rounded appearance. The Bootstrap btn-primary CSS class shades the button with the current primary color for the application, which by default is blue. The following demonstrates the difference between a Bootstrap style button and a plain vanilla button. Functionally they both work exactly the same. The Bootstrap button is just a lot easier on the eyes.

// Bootstrap styled button Bootstrap

// Default browser styled button Plain CSS Bootstrap button

This CodePen demonstrates the use of all the major Bootstrap components. Notice the rich diversity of functionality it provides and that it is fully responsive to changes in the viewport size. The image below only captures a few of the components.

Bootstrap components

CSS DESIGN:

Properly considering the user experience (UX) of your application will make all the difference in your success. Focusing first on technology, cost, or revenue tends to lead to an unsatisfying user experience. Instead you want to consider why someone is using your application, how they want to interact, how visually appealing it is, and how easy it is to get something done.
Design as a story It is often useful to think of user experience as a story. Consider the background plot, the user entering the stage, interacting with other actors, and getting the audience to applaud. At first this may sound a bit strange, but applications are not used in a vacuum. There is always a reason someone is using your application. If you can clearly define that background plot, then the experience will better match the user's expectation. Likewise, if you know what results in a satisfied audience, then you build the application experience around delivering that result.

Consider the tourism application for the city of Philadelphia. They know a user visits the site because they want to have an experience in Philadelphia. The application immediately provides a time relevant proposal for that experience. All the navigation options for having a successful experience (events, food, deals, and trip planning) are immediately accessible. Just looking at the initial imagery conveys the excitement of engaging in the application.

Design story

Source: visitphilly

Simplicity Google broke all the rules for web application design when they released their homepage in 1998.

Simplicity

Source: Google.com 2022

Previous to that, it was common for app designers to pile everything they could into the initial view of the application. This includes multiple advertisements, navigation options, lots of hyperlinks, and color choices. Here is an example from a competitor around the same time period.

Simplicity

Source: Lycos.com 1999

The key point of this example, is that simplicity attracts user's attention and engages them in the application experience. Building off of Google's positive reaction, other major applications immediately followed their example. Here is the initial experience when visiting facebook's application for the first time. Notice that it simply states the purpose of the application and invites the user to create an account.

Simplicity

Source: facebook.com

Simplicity doesn't requires a blank page. Simplicity can also be visually stimulating with beautiful imagery and simple navigation options.

Simplicity

Source: Nomadic Tribe

You can also include significant amounts of content. You just need to keep things focused on a single purpose. For example, creating an account, viewing images, or beginning your travel experience. Below is the Pinterest application landing page. Even though the viewport is cluttered with images, they are all working towards the same purpose of demonstrating the value of the application.

Simplicity

Consistency There is a tension that exists with web applications between being consistent with how other applications work and being unique so that your experience stands out. What you want to avoid is being so different that a user has to think hard in order to use your application. This is usually avoided by using the standard conventions that a user expects to find on a web application. The following image describes the standard layout and navigation controls of an application.

Holy grail

What a standard layout is defined to be will migrate over time as new trends in application fashion seek to make things look fresh. However, if you follow current trends, your users are more likely to engage in your application.

One easy way to build an application that uses current design trends is to use a web framework that provides standard layouts, colors, and iconography. Here is an example of a template application built using a web framework with just a few minutes of work.

Frameworks

Navigation A user should never get lost while using your application. To help orient your user you want to carefully design the flow of the application and provide the proper navigational controls.

Navigation Controls Description App controls User settings, payment, and help controls Device controls Device specific controls such as back, next, and home Breadcrumb A path of the user's walk through the application Common actions Direct links to locations based on the current view Application map The first step in building your application should be to design an application map that has all the views that you will present to the user. This helps clarify the functional pieces of the application and their relationship to each other. For example, if you were building a music player you might start with a landing page that displays some marketing information and allows the user to create an account or login. If the user is already logged in, then they start with a dashboard that shows recent or suggested songs. From there they can either search the music catalog, navigate to a collection of songs based on a playlist, album, or artist, or go to an individual song.

Application map

If your application map starts looking like a governmental bureaucracy then you probably want to reconsider the interrelation of functionality. A convoluted application map is a strong indicator that the user experience with be likewise convoluted.

Device controls With a concise application map in place, you can design navigational controls that allow the user to successfully use the application. To begin with, you want to make sure the navigational controls provided by the device are completely supported. When your application is hosted in a browser the previous and next buttons should take the user through the stack of visited views. If your application is hosted on a mobile device then the conventions of that device should work properly. For example, on an Android device swiping left and right should navigate the application views backward or forwards.

Breadcrumb You always want to indicate where the user is, where they came from, and where they can go. You can do this with a breadcrumb control that lists the path the user took to get to where they are.

Dashboard > Beatles > Abbey Road > Come Together

A breadcrumb quickly orients the user and also allows them to jump up the navigational path.

Common actions You also want to anticipate where a user would commonly want to go based upon the view that they are in. For example, if they are playing a song by one artist, it is common that they will want to view related artists. Therefore you want to provide a navigational link that will take them to a search view with a prepopulated query for related artists.

Commonly accessed views should always be accessible from a standard location. For example, the user settings should always be on the top right, and the breadcrumb should always be on the top left. (Those locations get switched if using a Right-To-Left language.)

You want to partition a large application into functional areas and place links for each area in the navigation bar at the top of the application. For example, if we added the ability to create music to our music application, you would want links that switched between listening to and creating music.

Colors One of the first things you should consider as you design your application is the color scheme that you will employ. This usually involves picking a a primary, secondary, and focus color.

Source: paletton.com

There are lots of tools out there that help you create a color scheme. These will let you chose monochromatic, adjacent, or triadic color schemes. You can then spin and adjust a color wheel until you get what you are looking for. With your scheme selected you can export the colors directly to CSS rulesets.

Some free tools you should explore include Paletton and Adobe.

Source: paletton.com

With your core colors selected, you can use different shades of the colors to reduce the starkness of the limited number of colors without turning your application into a rainbow.

Just make sure you stick with your color scheme and even consider it when selecting font colors and images.

Typography A great font will make your application easy on your user's eyes and increase their attention span. Since fonts have been around since the Gutenberg Press, there is some serious history to them. The following shows the different attributes of a font.

Typography anatomy

Source: material.io

You can classify fonts into the following groups.

Font Class Example Meaning San Serif Font san serif Only major strokes Serif Font serif Minor strokes off the major strokes Monospace Font monospace All letters have the same size Handwriting Font handwriting Cursive strokes Source: material.io

When picking fonts you usually want to restrict the number of fonts to three or less. You also want to use them consistently. For example, it is common to use a San Serif font for buttons, navigation links, and body text. Serif fonts are used for paragraph headings. Monospaced fonts are for coding examples or text than need alignment.

If you are looking for royalty free fonts that you can use in your application, you should checkout Google's open collection of fonts.

Google fonts

Iconography Because users will recognize standard icons, you can decrease the learning curve for your application if you use standard web icons to identify common functionality. For example, most users will immediately identify the following three icons as the menu, sharing, and close actions.

Icon example

Icons not only exploit user recognition, but they also save limited display space, and provide a visually pleasing alternative to text. The important thing is that you pick a set that includes standard icons and that you use them for their intended purpose. Icons become an anti-pattern when they are used to represent something that is contrary to their common usage.

Icon Google

Source: material.io

There are lots of standard icon packages that you can choose from. This includes packages such as Font Awesome, Bootstrap Icons, Material Icons, Flat Color Icons, and Ant Design Icons

Text You want to be consistent in the size of the text that you use as well as the number of characters displayed on a line. Commonly there are five different catagories of text sizes used by an application. These include the following.

Purpose Size Page title 96 px Titles 48-20 px Text 16 px Secondary text 14 px Input 16 px These sizes are just suggestions but they serve as a good place to start. If you are using an application framework then they will have default text sizes defined. The important thing is that you are consistent with the sizing. Titles should not be one size for a particular view and a different size on another one. Inconsistency confuses the user and makes the application feel haphazardly designed.

Limiting line length Limiting the number of characters displayed on a line makes it easier to read paragraphs of text. The browser will automatically wrap text based on the viewport width, but having a line spread across a 4K monitor that is hundreds of characters long will make your application look clunky and drive the user crazy as they try and find the start of the next line in a long paragraph.

Instead you want to specify a maximum width for your paragraphs. Usually a width of 60 to 80 characters is optimal. You can set this with the max-width property set to something like 35em. The em unit is the approximately the width of the m character in the font and so about half of an 'm' is about the average character width.

The following shows the visual and cognitive impact of different line lengths.

Line length

Internationalization Designing a global international application requires careful consideration from the beginning. Attempting to internationalize a complex, mature application after it has a domestic presence is very difficult.

One of the most important aspects to consider is the translation of textual content and the ability of the user to select their desired language.

Unicode

Successful translation also requires the text to be rendered properly. For example, several languages are read from right to left. Therefore the content, and the application itself, must be displayed in that orientation.

Right to left

Likewise the format for displaying dates, times, numbers, and currency varies greatly between nationalities. This includes country specific currency symbols (¥, $, €, or ฿), the order of date fields (MM/DD/YY or DD/MM/YY), and numerical separators (1,000.50 or 1.000,50).

Iconography can also be a concern. An owl in the United States represents wisdom, but in some Asian countries it symbolizes stupidity. Icons that carry religious representations can be even more disruptive.

Proper international design requires thought across the full technology stack. If data is not properly passed, stored, and rendered at every level of the stack it will fail to properly work globally. For example, dates and times should always be stored in a format that properly represents time zones (e.g. ISO 8601) and rendered based upon the user's location. That way when users do things like global calendering or traveling between countries their data is not corrupted.

Space Introducing space around your application content helps to create focus and lessing the effort a user has to exert in order to interpret the presented information.

Whitespace

Consider the following example, where whitespace is used to create focus on the brand, imagery, and call to action.

Whitespace Prototypr

Source: Prototypr.org

Here is another example where whitespace brings the user's attention to specific text that teases the user and leads them down to the explanatory text, followed by actions the user can take to learn more.

Whitespace Sofa

Source: MadeBySofa.com

Consider the same content with all of the whitespace removed. This is of course extreme, but it demonstrates the power that whitespace has.

Whitespace Sofa

Interaction Making your application interactive is a powerful way to engage the user and increase retention. Interaction can be as simple as gathering and displaying the user's name or avatar, or as complex as letting the user completely drive the application based on the choices they make.

Here is an example of purchasing a car where the user can interactively see what their car will look like based upon their desires.

BMW build a car

Source: bmw.com

Interaction makes the application come alive and invests the user in the result of their efforts.

Images It is often said that a picture can save a thousand words. Including images in your application can convey deeper understanding, make it more visually appealing, and draw a user into the application. The following example, helps the user know exactly what a product looks like and what it might look like when they use it. The contrast of colors in the image helps the product to pop and further suggest its value.

Value image

Source: Burberry.com

Avoid using images that are only used as space fillers. Display space is too limited to waste on an image that doesn't add significant value. For example, the following image dominates the display of a technical article about CORS. However, it was only chosen because it matched the color scheme of the application and the title contains the work talk in it, but two people talking trough a tin can has nothing to do with CORS. Now the user has to scroll past the distracting image to get to the content. Instead, either omit the image, or include one that serves to clarify the purpose of CORS. That way your images are visually appealing, and provides information that furthers the story you are trying to tell.

No value image

Source: medium.com

Animation Animation can help make your application come alive, but it also helps confirm choices, demonstrate progress, and focus attention.

Animation icon

However, too much animation can physically make your users sick. Here is an example

Animation too much

Source: fireart.studio

Decision fatigue You need to consider the impact of the choices that you present to a user. Hick's Law states that the time necessary to make a decision increases logarithmically with the number of choices presented. That doesn't mean that you should not provide options to the user, but that you should limit the number of choices given at any point in time.

For example, the process of building a pizza involves many steps. First you must pick the location you want to order from, then the pizza size, cheese, meats, and veggies. Finally you need to provide payment. Each of those choices require a lot of input from the user, and so limiting the number of choices displayed at one time will help reduce decision fatigue and you will have better odds of them completing the ordering process.

Decision pizza making

Source: Papa Johns

Device aware Modern devices allow a web application to interact in many sophisticated ways. This includes abilities such as installing to the devices desktop, determining the devices geographical location, displaying notifications, detecting the acceleration of the device, using the camera, and accessing the user's contacts. The more seamless the application is integrated with the device the more intuitive and useful the application will be.

The following shows an application suggesting that the user add the application to the device's home screen. This makes it so a user can access the application without having to navigate to the application's URL.

Add to home

Device size and orientation Properly reorienting and altering the functionality of the application interface based upon the size and orientation of the display is especially important on mobile devices. The following shows an application that provides a course on how to tie knots. The default view for the course shows the video on the left and an interactive transcript on the right.

Replace

When the device is rotated the application automatically orients itself and moves the interactive transcript below the video in order to maximize the available space. The user can also display the table of contents on the left or the peer chat on the right. Because the device's display is large enough to show the content, even in portrait orientation, the table of contents or chat panes can also occupy a portion of the display. This allows the instructional content to still be visible while the functionality of the other panes are utilized.

Slide in

On a smaller device, such as a mobile phone, the table of contents or chat panes completely replace the content. The user can then click on the X icon to return to the instructional content. That ability to restrict the focus to a single functional purpose, maximizes the use of the limited space without losing the context of the content the user is viewing.

Rotate

THe following website demonstrates what happens when an application fails to properly adapt to the orientation of the device. When viewed in portrait mode the application only uses a small portion of the display to show a health warning, but when rotated, the warning completely occupies the display. This creates a confusing experience where the original context of the application is obscured, and leaves the user wondering what should be done next.

Orientation

Performance 📖 Suggesting reading:

Google site performance MDN Performance Application performance is an important aspect of your design that often gets overlooked until it is too late. Your application can be visually stunning, have intuitive navigation, and amazing interactivity, but if it takes minutes to load or react the a user's actions, it will completely fail. Many studies have analyzed the relationship between performance and user retention. One study showed that as load times increase from one second to five seconds it causes 90% of the users to bounce, or leave, the application.

Bounce rates

Source: thinkwithgoogle.com

You need to set performance goals for your application and consistently monitor how your application is doing. Generally you want your application to load in under a second. However, with modern single page web applications it can take several seconds to do the initial load. You can mitigate the appearance of a slow application by giving the impression of progress, by partially loading some content or displaying a loading animation.

The Chrome debugging tools provide a lot of help for diagnosing your application performance. The network tab will show you the size of your application files and the amount of time it takes to transfer them.

Performance

You can use the Chrome debugging Lighthouse tool to run an analysis of your application. This will give you an average performance rating based upon the initial load time, longest content paint, and time before the user can interact with the page.

Performance

Short circuit Sometimes factors such as network latency will impact the performance of your application or make it partially unavailable. You want to consider how you can create a meaningful experience for your users even when you cannot provide full functionality. For example, your application might relay on a third party service for processing payment before they can access the application. Rather than deny the user access when the payment service is down, you could collect the payment information and attempt to process it later. In the meantime the user is allowed to continue working. If later, the payment processing fails, then you handle the problem just as if their credit card was cancelled after accepting payment.

This ability to provide an alternative path, is sometimes called short circuit or fallback functionality. This removes barriers from your application that otherwise would turn away customers, and they are usually are not difficult to implement. You just need to consider each functional piece of your application and provide an alternative if that functionality is not available.

Accessibility 📖 Suggesting reading: MDN Accessibility

Your application needs to appeal to a diverse population of users. This means that you need to design for users with different accessibility needs, including users with visual, physical, and audible impairments.

You can help users with visual impairments by considering color blindness when selecting your color scheme, providing high contrast themes, and supporting screen readers. Video and audio transcripts, along with visual animation helps users that need audio assistance. Providing keyboard shortcuts and making sure input elements are accessible in the proper order will help users with different physical abilities.

Ability Application features Visual High contrast themes, color selection, screen readers Audio Closed captions, textual alternatives, visual animation Physical Keyboard navigation, element ordering Many of the accessibility tools that users employ require that your HTML is well structured and has attributes that support WAI-ARIA standards. Make sure you understand the proper use of elements and aria when you design a production application.

Legal Like it or not, applications must consider applicable regulation and the possibility of legal action. For example, by violating GDPR Amazon was fined $887 million in 2021 for violating the privacy of its customers. In another case Domino's Pizza was found to be violating the American's with Disabilities Act (ADA) because a blind man could not order a pizza by using a screen reader.

Central to the core of many legal codes is the concept of Personally Identifiable Information (PII). While the strict interpretation of what PII is differs by industry, it generally relates to any data that can be directly ascribed to an identifiably individual.

Every industry and local has different legal constraints. You should be aware of the major legislation that impacts your application. Here are some laws that impact applications within the jurisdiction of the United States of America.

HIPA The Health Insurance Portability and Accountability Act (HIPAA) stipulates the management of medical records. It includes provisions that give control to the individual with regard to access and sharing of records. Specifically it restricts how relatives, courts, and insurance companies may obtain medical records.

FERPA The Family Educational Rights and Privacy Act (FERPA) defines how student data can be stored, shared, and accessed. FERPA defines the concept of an education record and then specifies who can view and contribute to that record.

ADA The Americans with Disabilities Act (ADA) seeks to prohibit discrimination against individuals with diverse accessibility needs. The act was originally intended to cover physical environments, but recent case law has extended the interpretation of the law to cover electronic access.

GDPR The General Data Protection Regulation (GDPR) impacts all applications that are used by members of the European Union. The main purpose of GDPR is intended to protect the privacy of users. Among other things, GDPR requires applications to get approval from the user before their data can be stored or shared. It also requires the application to provide the ability to delete all of the users data and to be able to transfer their data to competing applications.

Walls There are many types of walls that hinder a user's experience with an application. Some walls are caused by poor design or business decisions, and others are a result of unavoidable external pressures such as governmental regulation or security concerns.

If you can learn to recognize user experience walls then there is a good change that you can remove them or decrease their negative impact.

Complexity As applications mature it is common for them to grow in complexity as more and more features are introduced.

A primary cause of complexity is that software vendors uncritically adopt almost any feature that users want.

— Niklaus Wirth

The following image is from GitHub. An important action that a developer needs to do is create a Personal Access Token in order to work with repositories. However, GitHub has buried the UI for creating the token somewhere in their setting (account, user, and repository) pages. Assuming you are able to find the right setting page, you are then confronted with dozens of setting categories. After clicking through all of these options a user will wonder why such an important activity is buried so deeply in the application.

complexity wall

Payment Some walls, such as receiving payment, are unavoidable for the success of the application. However, consideration should be made to move the wall to the point where it is required. Before a user hits a payment wall they should have the opportunity to see the value of what they are purchasing. Even better, is if the user is able to invest significant effort and content to the application before payment is required. For example, the application may allow the user to create a limited number of documents before they have to enter payment information.

Payment wall

Source: sitepoint.com

Once payment is required, the process for entering payment information needs to be as effortless as possible. The best option is to have them not enter information at all, and instead use an associated credential like Apple Pay or Google Wallet to authorize payment based on the already authenticated user. Beyond that, a single text box that accepts, and authorizes, a credit card number is better than dozens of text boxes that must be completed before payment is made. You also want to remember payment information so that you don't need to repeatedly as the user for input. This enables you to provide your application as a subscription service, or to execute single click purchases for future payments.

Application Failure Application failure is a reality that any good application design needs to address. An application that has a reputation of repeatedly presenting the user with a failure wall will have a hard time retaining users. The most basic solution to handling a failure is to present a message to the user apologizing for what went wrong. The user will be slightly less annoyed if you can explain what went wrong, provide a possible remedy, or explain the expected duration of the failure.

Application failure wall

Alternative solutions for handling failure include providing fallback functionality, automatically notifying the user when the failure has been resolved, or providing a status page where the user can go to see what is being done about the problem.

Proactive solutions include designing an application that has multiple redundant regional deployments that automatically failover when one region experiences problems, or designing the application so that it can run offline with cached data.

Security Security walls occur when you have to interact with the user in order to authenticate them. The security walls you present should be proportional to the value of the resource you are trying to secure. Banking application should have strong security walls that provide actual protection for the user's data. An application that gives away free kitten videos should have a minimal security wall if any.

You need to consider both the frequency and complexity of your security wall. If the user feels that the security wall is too onerous for the value that the application is providing, they will find another solution. Likewise if the user feels that there is not enough security then they will not trust you with their data.

Here is an example of an application for learning how to code. They need a user's email so that they can store course progress, but they don't even ask for a password because the email address is enough to uniquely identify the user. Authentication occurs when the user provides the security code that is emailed to the address that they provided. From then on the application remembers the email address. If the user accesses the application on a different device then the user just needs to do another once-per-device authentication.

Registration wall

Source: freecodecamp.com

This a much lower wall than an application that requires you to log in repeatedly every 30 minutes.

Login wall

A CAPTCHA is a common way to verify that a user is a human. While this may be necessary for the success of your application, it is an example of a wall that provides no value to the user and will always lessen the application experience. This is especially true for a difficult CAPTCHA such as typing in unreadable text, or entering the number of mosquitos displayed in a jungle picture.

Captcha wall

Legal Legal walls usually only protect the application vendor and provide little or no value to the user. GDPR inspired cookie notifications are one example of this.

Cookie acceptance wall

Another common example of a legal wall is an application that requires the acceptance of terms and conditions before you can use the application. You want to minimize the impact of legal walls as much as possible since they lessen the user's experience and encourages the user to question why a legal consent is required in the first place

JAVASCRIPT:

Officially known as ECMAScript, JavaScript is a weakly typed language based upon concepts found in C, Java, and Scheme. It is by far the most used programming language in the world. It runs on every web browser, is commonly used as a web server language, and for creating serverless functions. In this instruction we will cover the basic parts of the language necessary to create a reasonable website. There are many features of the language that will not be discussed and you should take time to dig into the corners of the language as time allows. The more effectively you understand JavaScript, the better web programmer you will be.

Typically JavaScript is executed using an interpreter at runtime instead of compiling it into a machine specific binary at build time. This has the advantage of making JavaScript very portable, but also allows for many errors, such as using an undefined variable. These types of errors commonly only get discovered when the program crashes during execution.

JavaScript Versions The following table describes the version history of JavaScript. You don't need to worry too much about versions right now, but this is important to be aware of since browser compatibility is always an issue when developing a web application. When considering the use of a JavaScript feature you should consult websites like MDN or CanIUse to see how well the feature is supported.

Year Version Features 1997 ES1 types, functions 1999 ES3 regex, exceptions, switch 2009 ES5 json, array iteration 2015 ES6 let/const, default params, classes, template literals, destructuring, generators, promises, modules, internationalization 2016 ES2016 array.includes 2017 ES2017 async/await 2018 ES2018 rest/spread, promise.finally 2019 ES2019 string.trim 2020 ES2020 ?? operator Getting started Let's start with a basic example. The following JavaScript will concatenate three strings together and then throw away the result. Not very useful, but JavaScript doesn't complain much.

'Hello' + ' ' + 'world'; Only slightly more complex is to call a function with the result of our concatenated string. In this case we call the JavaScript runtime's built in function console.log to output the string to the debugger console.

console.log('Hello' + ' ' + 'world'); // OUTPUT: Hello world You can also write your own functions.

function join(a, b) { return a + ' ' + b; }

console.log(join('Hello', 'world')); // OUTPUT: Hello world Comments You can comment your JavaScript with either line or block comments.

// Line comment

/* Block comment */ Code delimiters While not technically required in most cases, it is considered good form to end JavaScript statements with a semicolon (;). Code blocks, and their resulting scope, are defined with curly braces ({ }).

Playgrounds Before we go any further we need a way for you to write and run JavaScript yourself. There are two easy ways to do this.

Use an online sandbox like CodePen. With CodePen you can write whatever JavaScript you would like and immediately see the results. Make sure you display the CodePen's Console window if your JavaScript is using the console.log function.

Browser Debugger

Use your browser's debugger. For example, if you open Chrome and press F12 the debugger will display. Select the Console menu option. This will display a JavaScript interpreter where you can write and execute your code.

Browser Debugger

JS CONSOLE:

The JavaScript console object provides interaction with the JavaScript runtime's debugger console. This usage of console should not be confused with your operating system's console (AKA terminal or command line). The console object provides functionality for outputting the value of text and objects, running timers, and counting iterations. These are useful debugging tools when you can actually execute your code in an interactive debugger (such as VS Code).

Log The basic usage of the console object is to output a log message.

console.log('hello'); // OUTPUT: hello You can create formatted messages in the log parameter.

console.log('hello %s', 'world'); // OUTPUT: hello world You can even specify CSS declarations in order to style the log output.

console.log('%c JavaScript Demo', 'font-size:1.5em; color:green;'); // OUTPUT: JavaScript Demo //in large green text Timers If you are trying to see how long a piece of code is running you can wrap it with time and timeEnd calls and it will output the duration between the time and timeEnd calls.

console.time('demo time'); // ... some code that takes a long time. console.timeEnd('demo time'); // OUTPUT: demo time: 9762.74 ms Count To see how many times a block of code is called you can use the count function.

console.count('a'); // OUTPUT: a: 1 console.count('a'); // OUTPUT: a: 2 console.count('b'); // OUTPUT: b: 1

ADD JS TO HTML:

You can insert JavaScript into HTML either by directly including it in the HTML within the content of a <script> element, or using by the src attribute of the script element to reference an external JavaScript file.

index.js

function sayHello() { console.log('hello'); } index.html

<script src="javascript.js"></script> Say Hello Say Goodbye <script> function sayGoodbye() { alert('Goodbye'); } </script> Notice that we call the sayHello and sayGoodbye JavaScript functions from the HTML in the onclick attribute of the button element. Special attributes like onclick automatically create event listeners for different DOM events that call the code contained in the attribute's value. The code specified by the attribute value can be a simple call to a function or any JavaScript code.
press me

JS TYPES:

Variables are declared using either the let or const keyword. let allows you to change the value of the variable while const will cause an error if you attempt to change it.

let x = 1;

const y = 2; ⚠ Originally JavaScript used the keyword var to define variables. This has been deprecated because they cause hard to detect errors in code related to the scope of the variable. You should avoid var and always declare your variables either with let or const.

Type JavaScript defines several primitives types.

Type Meaning Null The type of a variable that has not been assigned a value. Undefined The type of a variable that has not been defined. Boolean true or false. Number A 64 bit signed number. BigInt A number of arbitrary magnitude. String A textual sequence of characters. Symbol A unique value. Of these types Boolean, Number, and String are the types commonly thought of when creating variables. However, variables may commonly refer to the Null or Undefined primitive. Because JavaScript does not enforce the declaration of a variable before you use it, it is entirely possible for a variable to have the type of undefined.

In addition to the above primitives, JavaScript defines several object types. Some of the more commonly used objects include the following.

Type Use Example Object A collection of properties represented by name value pairs. Values can be of any type. {a:3, b:'fish'} Function An object that has the ability to be called. function a() {} Date Calendar dates and times. new Date('1995-12-17') Array An ordered sequence of any type. [3, 'fish'] Map A collection of key value pairs that support efficient lookups. new Map() JSON A lightweight data-interchange format used to share information across programs. {"a":3, "b":"fish"} Common operators When dealing with a number variable, JavaScript supports standard mathematical operators like + (add), - (subtract), * (multiply), / (divide), and === (equality). For string variables, JavaScript support + (concatenation) and === (equality).

Type conversions JavaScript is a weakly typed language. That means that a variable always has a type, but the variable can change type when it is assigned a new value, or that types can be automatically converted based upon the context that they are used in. Sometime the results of automatic conversions can be unexpected from programmers who are use to strongly typed languages. Consider the following examples.

2 + '3'; // OUTPUT: '23' 2 * '3'; // OUTPUT: 6 [2] + [3]; // OUTPUT: '23' true + null; // OUTPUT: 1 true + undefined; // OUTPUT: NaN Getting unexpected results is especially common when dealing with the equality operator.

1 == '1'; // OUTPUT: true null == undefined; // OUTPUT: true '' == false; // OUTPUT: true ⚠ The unexpected results happen in JavaScript because it uses complex rules for defining equality that depend upon the conversion of a type to a boolean value. You will sometimes hear this referred to as falsy and truthy evaluations. To remove this confusion, JavaScript introduced the strict equality (===) and inequality (!==) operators. The strict operators skip the type conversion when computing equality. This results in the following.

1 === '1'; // OUTPUT: false null === undefined; // OUTPUT: false '' === false; // OUTPUT: false Because strict equality is considered more intuitive, it is almost always preferred and should be used in your code.

Here is a fun example of JavaScript's type conversion. Execute the following in the browser's debugger console.

('b' + 'a' + +'a' + 'a').toLowerCase(); Conditionals JavaScript supports many common programming language conditional constructs. This includes if, else, and if else. Here are some examples.

if (a === 1) { //... } else if (b === 2) { //... } else { //... } You can also use the ternary operator. This provides a compact if else representation.

a === 1 ? console.log(1) : console.log('not 1'); You can use boolean operations in the expression to create complex predicates. Common boolean operators include && (and), || (or), and ! (not).

if (true && (!false || true)) { //... } Loops JavaScript support many common programming language looping constructs. This includes for, for in, for of, while, do while, and switch. Here are some examples.

for Note the introduction of the common post increment operation (i++) for adding one to a number.

for (let i = 0; i < 2; i++) { console.log(i); } // OUTPUT: 0 1 do while let i = 0; do { console.log(i); i++; } while (i < 2); // OUTPUT: 0 1 while let i = 0; while (i < 2) { console.log(i); i++; } // OUTPUT: 0 1 for in The for in statement iterates over an object's property names.

const obj = { a: 1, b: 'fish' }; for (const name in obj) { console.log(name); } // OUTPUT: a // OUTPUT: b For arrays the object's name is the array index.

const arr = ['a', 'b']; for (const name in arr) { console.log(name); } // OUTPUT: 0 // OUTPUT: 1 for of The for of statement iterates over an iterable's (Array, Map, Set, ...) property values.

const arr = ['a', 'b']; for (const val of arr) { console.log(val); } // OUTPUT: 'a' // OUTPUT: 'b' Break and continue All of the looping constructs demonstrated above allow for either a break or continue statement to abort or advance the loop.

let i = 0; while (true) { console.log(i); if (i === 0) { i++; continue; } else { break; } } // OUTPUT: 0 1

JS STRINGS:

Strings are a primitive type in JavaScript. A string variable is specified by surround a sequence of characters with single quotes ('), double quotes ("), or backticks (`). The meaning of single or double quotes are equivalent, but the backtick defines a string literal that may contain JavaScript that is evaluated in place and concatenated into the string. A string literal replacement specifier is declared with a dollar sign followed by a curly brace pair. Anything inside the curly braces is evaluated as JavaScript. You can also use backticks to create multiline strings without having to explicitly escape the newline characters using \n.

'quoted text'; // " also works

const l = 'literal'; console.log(string ${l + (1 + 1)} text); // OUTPUT: string literal2 text Unicode support JavaScript supports Unicode by defining a string as a 16-bit unsigned integer that represents UTF-16 strings. Unicode support allows JavaScript to represent most languages spoken on the planet. This includes those that are read from right to left.

حجر

أقول لهذا الحجر: أنا أنت. فيقول: لستَ مرناً الى هذا الحدّ. أقول: قلبي مثلك؟ فيقول:

However, there are several important steps you must take in order to make your web application fully internationalized. This includes handling of currency, time, dates, iconography, units of measure, keyboard layouts, and respecting local customs. Read this article on the W3C website to learn more about internationalization.

String functions The string object has several interesting functions associated with it. Here are some of the commonly used ones.

Function Meaning length The number of characters in the string indexOf The starting index of a given substring split Split the string into an array on the given delimiter string startsWith True if the string has a given prefix endsWith True if the string has a given suffix toLowerCase Converts all characters to lowercase const s = 'Example:조선글';

console.log(s.length); // OUTPUT: 11 console.log(s.indexOf('조선글')); // OUTPUT: 8 console.log(s.split(':')); // OUTPUT: ['Example', '조선글'] console.log(s.startsWith('Ex')); // OUTPUT: true console.log(s.endsWith('조선글')); // OUTPUT: true console.log(s.toLowerCase()); // OUTPUT: example:조선글

JS FUNCTIONS:

     In JavaScript functions are first class objects. That means that they can be assigned a name, passed as a parameter, returned as a result, and referenced from an object or array just like any other variable.
The basic syntax of a function begins with the function keyword followed by zero or more parameters and a body that may contain zero or more return statements. The return statement my return a single value. Note that there are no type declarations, as the type is always inferred by the assignment of the value to the parameter.

function hello(who) { return 'hello ' + who; }

console.log(hello('world')); // OUTPUT: hello world A function without a return value usually exists to produce some side effect like modifying a parameter or interacting with an external program. In the following example the side effect of the function is to output text to the debugger console.

function hello(who) { who.count++; console.log('hello ' + who.name); }

hello({ name: 'world', count: 0 }); // OUTPUT: hello world Function parameters When a function is called, the caller may choose what parameters to provide. If a parameter is not provided then the value of the parameter is undefined when the function executes.

In addition to explicitly passing the value of a parameter to a function, the function can define a default value. This is done by assigning a value to the parameter in the function declaration.

function labeler(value, title = 'title') { console.log(${title}=${value}); }

labeler(); // OUTPUT: title=undefined

labeler('fish'); // OUTPUT: title=fish

labeler('fish', 'animal'); // OUTPUT: animal=fish Anonymous functions Functions in JavaScript are commonly assigned to a variable so that they can be passed as a parameter to some other function or stored as an object property. To easily support this common use you can define a function anonymously and assign it to a variable.

// Function that takes a function as a parameter function doMath(operation, a, b) { return operation(a, b); }

// Anonymous function assigned to a variable const add = function (a, b) { return a + b; };

console.log(doMath(add, 5, 3)); // OUTPUT: 8

// Anonymous function assigned to a parameter console.log( doMath( function (a, b) { return a - b; }, 5, 3 ) ); // OUTPUT: 2 Creating, passing, and returning functions Here are examples of assigning functions to variables, as well as using functions as parameters and return values.

// Anonymous declaration of the function that is later assigned to a variable const add = function (a, b) { return a + b; };

// Function that logs as a side effect of its execution function labeler(label, value) { console.log(label + '=' + value); }

// Function that takes a function as a parameter and then executes the function as a side effect function addAndLabel(labeler, label, adder, a, b) { labeler(label, adder(a, b)); }

// Passing a function to a function addAndLabel(labeler, 'a+b', add, 1, 3); // OUTPUT: a+b=4

// Function that returns a function function labelMaker(label) { return function (value) { console.log(label + '=' + value); }; }

// Assign a function from the return value of the function const nameLabeler = labelMaker('name');

// Calling the returned function nameLabeler('value'); // OUTPUT: name=value Inner functions Functions can also be declared inside other functions. This allows you to modularize your code without always exposing private details.

function labeler(value) { function stringLabeler(value) { console.log('string=' + value); } function numberLabeler(value) { console.log('number=' + value); }

if (typeof value == 'string') { stringLabeler(value); } else if (typeof value == 'number') { numberLabeler(value); } }

labeler(5); // OUTPUT: number=5

labeler('fish'); // OUTPUT: string=fish

JS ARROW FUNCTIONS:

     Because functions are first order objects in JavaScript they can be declared anywhere and passed as parameters. This results in code with lots of anonymous functions cluttering things up. To make the code more compact the arrow syntax was created. This syntax replaces the need for the function keyword with the symbols => placed after the parameter declaration. The enclosing curly braces are also optional.
This is a function in arrow syntax that takes no parameters and always returns 3.

() => 3; The following two invocations of sort are equivalent.

const a = [1, 2, 3, 4];

// standard function syntax a.sort(function (v1, v2) { return v1 - v2; });

// arrow function syntax a.sort((v1, v2) => v1 - v2); Besides being compact, the arrow function syntax has some important semantic differences from the standard function syntax. This includes restrictions that arrow functions cannot be used for constructors or iterator generators.

Return values Arrow functions also have special rules for the return keyword. The return keyword is optional if no curly braces are provided for the function and it contains a single expression. In that case the result of the expression is automatically returned. If curly braces are provided then the arrow function behaves just like a standard function.

() => 3; // RETURNS: 3

() => { 3; }; // RETURNS: undefined

() => { return 3; }; // RETURNS: 3 This pointer Next, arrow functions inherit the this pointer from the scope of where it is created. This makes what is know as a closure. A closure allows a function to continue referencing its creation scope, even after it has passed out of that scope. This can be tricky to wrap your head around, and we discuss it in detail when we later talk about JavaScript scope. For now consider the following example.

The function makeClosure returns an anonymous function using the arrow syntax. Notice that the a parameter is overridden, a new b variable is created, and both a and b are referenced in the arrow function. Because of that reference, they are both part of the closure for the returned function.

function makeClosure(a) { a = 'a2'; const b = 'b2'; return () => [a, b]; } Next, we declare the variables a and b at the top level scope, and call makeClosure with a.

const a = 'a'; const b = 'b';

const closure = makeClosure(a); Now, when we call closure function it will output the values contained in scope where it was created instead of the current values of the variables.

console.log(closure()); // OUTPUT: ['a2', 'b2']

console.log(a, b); // OUTPUT: 'a' 'b' Closures provide a valuable property when we do things like execute JavaScript within the scope of an HTML page, because it can remember the values of variables when the function was created instead of what they are when they are executed.

JS ARRAYS:

JavaScript array objects represent a sequence of other objects and primitives. You can reference the members of the array using a zero based index. You can create an array with the Array constructor or using the array literal notation shown below.

const a = [1, 2, 3]; console.log(a[1]); // OUTPUT: 2

console.log(a.length); // OUTPUT: 3 Object functions The Array object has several interesting static functions associated with it. Here are some of the interesting ones.

Function Meaning Example push Add an item to the end of the array a.push(4) pop Remove an item from the end of the array x = a.pop slice Return a sub-array a.slice(1,-1) sort Run a function sort an array in place a.sort((a,b) => b-a) values Creates an iterator for use with a for of loop for (i of a.values()) {...} find Find the first item satisfied by a test function a.find(i => i < 2) forEach Run a function on each array item a.forEach(console.log) reduce Run a function to reduce each array item to a single item a.reduce((a, c) => a + c) map Run a function to map an array to a new array a.map(i => i+i) filter Run a function to remove items a.filter(i => i%2) every Run a function to test if all items match a.every(i => i < 3) some Run a function to test if any items match a.some(i => 1 < 1) const a = [1, 2, 3];

console.log(a.map((i) => i + i)); // OUTPUT: [2,4,6] console.log(a.reduce((v1, v2) => v1 + v2)); // OUTPUT: 6 console.log(a.sort((v1, v2) => v2 - v1)); // OUTPUT: [3,2,1]

a.push(4); console.log(a.length); // OUTPUT: 4

JS OBJECTS & CLASSES:

A JavaScript object represents a collection of name value pairs referred to as properties. The property name must be of type String or Symbol, but the value can be of any type. Objects also have common object-oriented functionality such as constructors, a this pointer, static properties and functions, and inheritance.

Objects can be created with the new operator. This causes the object's constructor to be called. Once declared you can add properties to the object by simply referencing the property name in an assignment. Any type of variable can be assigned to a property. This includes a sub-object, array, or function. The properties of an object can be referenced either with dot (obj.prop) or bracket notation (obj['prop']).

const obj = new Object();

obj.c = [1, 2, 3]; obj.hello = function () { console.log('hello'); };

console.log(obj); // OUTPUT: {a: 3, b: 'fish', c: [1,2,3], hello: func} The ability to dynamically modify an object is incredibly useful when manipulating data with an indeterminate structure.

⚠ Note the different uses of the term object. Object can refer to the standard JavaScript objects (e.g. Promise, Map, Object, Function, Date, ...), or it can refer specifically to the JavaScript Object object (i.e. new Object()), or it can refer to any JavaScript object you create (e.g. {a:'a', b:2} ). This overloaded usage can be a bit confusing.

Object-literals You can also declare a variable of object type with the object-literal syntax. This syntax allows you to provide the initial composition of the object.

const obj = { a: 3, b: 'fish', }; Object functions Object has several interesting static functions associated with it. Here are some of the commonly used ones.

Function Meaning entries Returns an array of key value pairs keys Returns an array of keys values Returns an array of values const obj = { a: 3, b: 'fish', };

console.log(Object.entries(obj)); // OUTPUT: [['a', 3], ['b', 'fish']] console.log(Object.keys(obj)); // OUTPUT: ['a', 'b'] console.log(Object.values(obj)); // OUTPUT: [3, 'fish'] Constructor Any function that returns an object is considered a constructor and can be invoked with the new operator.

function Person(name) { return { name: name, }; }

const p = new Person('Eich'); console.log(p); // OUTPUT: {name: 'Eich'} Because objects can have any type of property value you can create methods on the object as part of its encapsulation.

function Person(name) { return { name: name, log: function () { console.log('My name is ' + this.name); }, }; }

const p = new Person('Eich'); p.log(); // OUTPUT: My name is Eich This pointer Notice in the last example the use of the keyword this when we referred to the name property (this.name). The meaning of this depends upon the scope of where it is used, but in the context of an object it refers to a pointer to the object. We will talk more about the this pointer in the instruction on scope.

Classes You can use classes to define objects. Using a class clarifies the intent to create a reusable component rather than a one off object. Class declarations looks similar to declaring an object, but classes have an explicit constructor and assumed function declarations. The person object from above would look like the following when converted to a class.

class Person { constructor(name) { this.name = name; }

log() { console.log('My name is ' + this.name); } }

const p = new Person('Eich'); p.log(); // OUTPUT: My name is Eich You can make properties and functions of classes private by prefixing them with a #.

class Person { #name;

constructor(name) { this.#name = name; } }

const p = new Person('Eich'); p.#name = 'Lie'; // OUTPUT: Uncaught SyntaxError: Private field '#name' must be declared in an enclosing class Inheritance Classes can be extended by using the extends keyword to define inheritance. Parameters that need to be passed to the parent class are delivered using the super function. Any functions defined on the child that have the same name as the parent override the parent's implementation. A parent's function can be explicitly accessed using the super keyword.

class Person { constructor(name) { this.name = name; }

print() { return 'My name is ' + this.name; } }

class Employee extends Person { constructor(name, position) { super(name); this.position = position; }

print() { return super.print() + '. I am a ' + this.position; } }

const e = new Employee('Eich', 'programmer'); console.log(e.print()); // OUTPUT: My name is Eich. I am a programmer

JSON:

JavaScript Object Notation (JSON) was conceived by Douglas Crockford in 2001 while working at Yahoo! JSON, pronounced like the name Jason, received official standardization in 2013 and 2017 (ECMA-404, RFC 8259).

JSON provides a simple, and yet effective way, to share and store data. By design JSON is easily convertible to, and from, JavaScript objects. This make it a very convenient data format when working with web technologies. Because of its simplicity, standardization, and compatibility with JavaScript, JSON has become one of the world's most popular data formats.

Format A JSON document contains one of the following data types:

Type Example string "crockford" number 42 boolean true array [null,42,"crockford"] object {"a":1,"b":"crockford"} null null Most commonly, a JSON document contains an object. Objects contain zero or more key value pairs. The key is always a string, and the value must be one of the valid JSON data types. Key value pairs are delimited with commas. Curly braces delimit an object, square braces and commas delimit arrays, and strings are always delimited with double quotes.

Here is an example of a JSON document.

{ "class": { "title": "web programming", "description": "Amazing" }, "enrollment": ["Marco", "Jana", "فَاطِمَة"], "start": "2025-02-01", "end": null } JSON is always encoded with UTF-8. This allows for the representation of global data.

Converting to JavaScript You can convert JSON to, and from, JavaScript using the JSON.parse and JSON.stringify functions.

const obj = { a: 2, b: 'crockford', c: undefined }; const json = JSON.stringify(obj); const objFromJson = JSON.parse(json);

console.log(obj, json, objFromJson);

// OUTPUT: // {a: 2, b: 'crockford', c: undefined} // {"a":2, "b":"crockford"} // {a: 2, b: 'crockford'} Note that in this example, JSON cannot represent the JavaScript undefined object and so it gets dropped when converting from JavaScript to JSON.

REGEX:

Regular expression support is built right into JavaScript. If you are not familiar with regular expressions, you can think of them as textual pattern matchers. You use a regular expression to find text in a string so that you can replace it, or simply to know that it exists.

You can create a regular expression using the class constructor or a regular expression literal.

const objRegex = new RegExp('ab*', 'i'); const literalRegex = /ab*/i; The string class has several functions that accept regular expressions. This includes match, replace, search, and split. For a quick test to see if there is a match you can use the regular expression object's test function.

const petRegex = /(dog)|(cat)|(bird)/gim; const text = 'Both cats and dogs are pets, but not rocks.';

text.match(petRegex); // RETURNS: ['cat', 'dog']

text.replace(petRegex, 'animal'); // RETURNS: Both animals and animals are pets, but not rocks.

petRegex.test(text); // RETURNS: true

JS REST AND SPREAD:

Sometimes you want a function to take an unknown number of parameters. For example, if you wanted to write a function that checks to see if some number in a list is equal to a given number. You could write this using an array.

function hasNumber(test, numbers) { return numbers.some((i) => i === test); }

const a = [1, 2, 3]; hasNumber(2, a); // RETURNS: true However sometimes you don't have an array to work with. In this case you could create one on the fly.

function hasTwo(a, b, c) { return hasNumber(2, [a, b, c]); } But JavaScript provides the rest syntax to make this easier. Think of it as a parameter that contains the rest of the parameters. To turn the last parameter of any function into a rest parameter you prefix it with three periods. You can then you can call it with any number of parameters and they are all automatically combined into an array.

function hasNumber(test, ...numbers) { return numbers.some((i) => i === test); }

hasNumber(2, 1, 2, 3); // RETURNS: true Note that you can only make the last parameter a rest parameter. Otherwise JavaScript would not know which parameters to combine into the array.

Technically speaking, rest allows JavaScript to provide what is called variadic functions.

Spread Spread does the opposite of rest. It take an object that is iterable (e.g. array or string) and expands it into a function's parameters. Consider the following.

function person(firstName, lastName) { return { first: firstName, last: lastName }; }

const p = person(...['Ryan', 'Dahl']); console.log(p); // OUTPUT: {first: 'Ryan', last: 'Dahl'}

JS DESTRUCTURING:

Destructuring, not to be confused with destructing, is the process of pulling individual items out of an existing one, or removing structure. You can do this with either arrays or objects. This is helpful when you only care about a few items in the original structure.

An example of destructuring arrays looks like the following.

const a = [1, 2, 4, 5];

// destructure the first two items from a, into the new variables b and c const [b, c] = a;

console.log(b, c); // OUTPUT: 1, 2 Note that even though it looks like you are declaring an array with the syntax on the left side of the expression, it is only specifying that you want to destructure those values out of the array.

You can also combine multiple items from the original object using rest syntax.

const [b, c, ...others] = a;

console.log(b, c, others); // OUTPUT: 1, 2, [4,5] This works in a similar manner for objects. Except with arrays, the assignment of the associated value was assumed by the positions in the two arrays. When object destructuring, you explicitly specify the properties you want to pull from the source object.

const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };

const { a, c } = o;

console.log(a, c); // OUTPUT 1, ['fish', 'cats'] You can also map the names to new variables instead of just using the original property names.

const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };

const { a: count, b: type } = o;

console.log(count, type); // OUTPUT 1, animals Default values may also be provided for missing ones.

const { a, b = 22 } = {}; const [c = 44] = [];

console.log(a, b, c); // OUTPUT: undefined, 22, 44 Note that all of the above examples created new constant variables, but you can also use destructuring to reassign existing variables.

let a = 22;

[a] = [1, 2, 3];

console.log(a); // OUTPUT: 1

JS EXCEPTIONS:

JavaStript supports exception handling using the try catch and throw syntax. An exception can be triggered whenever your code generates an exception using the throw keyword, or whenever an exception is generated by the JavaScript runtime. For example, when an undefined variable is used.

To catch a thrown exception, you wrap a code block with the try keyword, and follow the try block with a catch block. If within the try block, including any functions that block calls, an exception is thrown then all of the code after the throw is ignored, the call stack is unwound, and the catch block is called.

In addition to a catch block, you can specify a finally block that is always called whenever the try block is exited regardless if an exception was ever thrown.

The basic syntax looks like the following.

try { // normal execution code } catch (err) { // exception handling code } finally { // always called code } For example:

function connectDatabase() { throw new Error('connection error'); }

try { connectDatabase(); console.log('never executed'); } catch (err) { console.log(err); } finally { console.log('always executed'); }

// OUTPUT: Error: connection error // always executed ⚠ When first using exception handling it is tempting to use it as way to handle normal flows of execution. For example, throwing a file not found exception when it is common for users to request nonexistent files. Throwing exceptions should only happen when something truly exceptional occurs. For example, a file not found exception when the file is required for your code to run, such as a required configuration file. You code will be easier to debug, and your logs more meaningful if you restrict exceptions to truly exceptional situations.

Fallbacks The fallback pattern is commonly implemented using exception handling. To implement the fallback pattern you put the normal feature path in a try block and then provide a fallback implementation in the catch block. For example, normally you would get the high scores for a game by making a network request, but if the network is not available then a locally cached version of the last available scores is used. By providing a fallback, you can always return something, even if the desired feature is temporarily unavailable.

function getScores() { try { const scores = scoringService.getScores(); // store the scores so that we can use them later if the network is not available window.localStorage.setItem('scores', scores); return scores; } catch { return window.localStorage.getItem('scores'); } }

JS SCOPE:

Understanding JavaScript scope is essential for making your programs run as you expect. Scope is defined as the variables that are visible in the current context of execution. JavaScript has four different types of scope:

Gobal - Visible to all code Module - Visible to all code running in a module Function - Visible within a function Block - Visible within a block of code delimited by curly braces Var Initially JavaScript used the keyword var to declare a variable. The problem with var, unlike const or let, is that it ignores block scope. Variables declared with var are always logically hoisted to the top of the function. For example, the following code shows the same variable name being used within different enclosing scopes. However, because var ignores block scope the for loop is simply assigning a new value to x rather than declaring a new variable that has the same name.

var x = 10; console.log('start', x);

for (var x = 0; x < 1; x++) { console.log('middle', x); }

console.log('end', x);

// OUTPUT: start 10 // middle 0 // end 1 ⚠ There are few cases where it makes sense to use var. It is strongly suggested that you only use const and let unless you fully understand why you are using var.

This The keyword this represents a variable that points to an object that contains the context within the scope of the currently executing line of code. The this variable is automatically declared and you can reference this anywhere in a JavaScript program. Because the value of this depends upon the context in which it is referenced, there are three different context that this can refer to:

Global - When this is referenced outside a function or object it refers to the globalThis object. The globalThis object represents the context for runtime environment. For example, when running in a browser, globalThis refers to the browser's window object. Function - When this is referenced in a function it refers to the object that owns the function. That is either an object you defined or globalThis if the function is defined outside of an object. Note that when running is JavaScript strict mode, a global function's this variable is undefined instead of globalThis. Object - When this is referenced in a object it refers to the object. 'use strict';

// global scope console.log('global:', this); console.log('globalThis:', globalThis);

// function scope for a global function function globalFunc() { console.log('globalFunctionThis:', this); } globalFunc();

// object scope class ScopeTest { constructor() { console.log('objectThis:', this); }

// function scope for an object function objectFunc() { console.log('objectFunctionThis:', this); } }

new ScopeTest().objectFunc(); Running the above code in a browser results in the following.

global: Window globalThis: Window globalFunctionThis: undefined objectThis: ScopeTest objectFunctionThis: ScopeTest Note that if we were not using JavaScript strict mode then globalFunctionThis would refer to Window.

Closure A closure is defined as a function and its surrounding state. That means whatever variables are accessible when a function is created are available inside of that function. This holds true even if you pass the function outside of the scope of its original creation.

Here is an example of a function that is created as part of an object. That means that function has access to the object's this pointer.

globalThis.x = 'global';

const obj = { x: 'object', f: function () { console.log(this.x); }, };

obj.f(); // OUTPUT: object Arrow functions are a bit different because they inherit the this pointer of their creation context. So if we change our previous example to return an arrow function, then this pointer at the time of creation will be globalThis.

globalThis.x = 'global';

const obj = { x: 'object', f: () => console.log(this.x), };

obj.f(); // OUTPUT: global However, if we make function in our object that returns an arrow function, then the this pointer will be the object's this pointer since that was the active context at the time the arrow function was created.

globalThis.x = 'global';

const obj = { x: 'object', make: function () { return () => console.log(this.x); }, };

const f = obj.make(); f(); // OUTPUT: object

JS MODULES:

JavaScript modules allow for the partitioning and sharing of code. Initially JavaScript had no support for modules. Node.js, a server side JavaScript execution application, introduced the concept of modules in order to support the importing of packages of JavaScript from third party providers.

JavaScript got full module support with ES6, and they have become the standard module representation as browser support for JavaScript modules is now almost universal.

In order to differentiate between the two implementations, Node.js modules are called CommonJS modules, and JavaScript modules are called ES modules.

Because modules create a file based scope for the code they represent, you must explicitly export the objects that you want to be visible outside the module. For example, here is a simple module that exports a function that displays an alert.

alert.js

export function alertDisplay(msg) { alert(msg); } You can import the module's exported function into another module using the import keyword.

main.js

import { alertDisplay } from './alert.js';

alertDisplay('called from main.js'); When you use CommonJS modules the Node.js runtime treats all JavaScript as if it were modules and so it works seamlessly. When you use ES modules in the browser, via HTML script references, things get a little more complicated. The key thing to understand is that modules can only be called from other modules. You cannot import a module object into a globally scoped JavaScript file.

From your HTML, you can differentiate that you are using a ES module by including the type of module in the script element. You can then import and use other modules and even make a module's object visible in the global scope. In the example below, we expose the alertDisplay imported function by attaching it to the global JavaScript window object so that it can then be called from the button onclick handler.

index.html

<script type="module"> import { alertDisplay } from './alert.js'; window.btnClick = alertDisplay; </script> Press me Fortunately, when you use a web framework bundler, discussed in later instruction, to generate your web application distribution code, you don't have to worry about differentiating between global Javascript files and JavaScript ES modules. The bundler will inject all the necessary syntax to connect your HTML to your modules. Historically, this was done by removing the modules and placing all of the JavaScript in a namespaced global partition. Now that ES Modules are supported on most browsers, the bundler will expose the ES module directly.
Because of the complex history of modules they can be a confusing topic, but it is well worth the time to understand how they work as they are a core piece of a web programmer's toolkit.

JS DOM:

The Document Object Model (DOM) is an object representation of the HTML elements that the browser uses to render the display. The browser also exposes the DOM to external code so that you can write programs that dynamically manipulate the HTML.

The browser provides access to the DOM through a global variable name document that points to the root element of the DOM. If you open the browser's debugger console window and type the variable name document you will see the DOM for the document the browser is currently rendering.

document

text1 text2

text3

p { color: red; } For everything in an HTML document there is a node in the DOM. This includes elements, attributes, text, comments, and whitespace. All of these nodes form a big tree, with the document node at the top.
Accessing the DOM Every element in an HTML document implements the DOM Element interface, which is derived from the DOM Node interface. The DOM Element Interface provides the means for iterating child elements, accessing the parent element, and manipulating the element's attributes. From your JavaScript code, you can start with the document variable and walk through the every element in the tree.

function displayElement(el) { console.log(el.tagName); for (const child of el.children) { displayElement(child); } }

displayElement(document); You can provide a CSS selector to the querySelectorAll function in order to select elements from the document. The textContent property contains all of the element's text. You can even access a textual representation of an element's HTML content with the innerHTML property.

const listElements = document.querySelectorAll('p'); for (const el of listElements) { console.log(el.textContent); } Modifying the DOM The DOM supports the ability insert, modify, or delete the elements in the DOM. To create a new element you first create the element on the DOM document. You then insert the new element into the DOM tree by appending it to an existing element in the tree.

function insertChild(parentSelector, text) { const newChild = document.createElement('div'); newChild.textContent = text;

const parentElement = document.querySelector(parentSelector); parentElement.appendChild(newChild); }

insertChild('#courses', 'new course'); To delete elements call the removeChild function on the parent element.

function deleteChild(parentSelector) { const el = document.querySelector(parentSelector); el.parentElement.removeChild(el); }

deleteChild('#courses div'); Injecting HTML The DOM also allows you to inject entire blocks of HTML into an element. The following code finds the first div element in the DOM and replaces all the HTML it contains.

const el = document.querySelector('div'); el.innerHTML = '

Hello!
'; However, directly injecting HTML as a block of text is a common attack vector for hackers. If an untrusted party can inject JavaScript anywhere in your application then that JavaScript can represent itself as the current user of the application. The attacker can then make requests for sensitive data, monitor activity, and steal credentials. The example below shows how the img element can be used to launch an attack as soon as the page is loaded.


Make sure that if you are injecting HTML that it cannot be manipulated by a user. Common injection paths include HTML input controls, URL parameters, and HTTP headers. Either sanitize any HTML that contains variables, or simply use DOM manipulation functions instead of using innerHTML.
Event Listeners All DOM elements support the ability to attach a function that gets called when an event occurs on the element. These functions are called event listeners. Here is an example of an event listener that gets called when an element gets clicked.

const submitDataEl = document.querySelector('#submitData'); submitDataEl.addEventListener('click', function (event) { console.log(event.type); }); There are lots of possible events that you can add a listener to. This includes things like mouse, keyboard, scrolling, animation, video, audio, WebSocket, and clipboard events. You can see the full list on MDN. Here are a few of the more commonly used events.

Event Category Description Clipboard Cut, copied, pasted Focus An element gets focus Keyboard Keys are pressed Mouse Click events Text selection When text is selected You can also add event listeners directly in the HTML. For example, here is a onclick handler that is attached to a button.

click me

JS PROMISES:

JavaScript executes as a single threaded application. That means there is only ever one piece of code executing at the same time. However, the fact that it does not execute concurrently does not mean that it does not execute in parallel. You can asynchronously execute code with the use of a JavaScript Promise. Because the execution is asynchronous the promise object can be in one of three states at any given point in time.

pending - Currently running asynchronously fulfilled - Completed successfully rejected - Failed to complete You create a promise by calling the Promise object constructor and passing it an executor function that runs the asynchronous operation. Executing asynchronously means that promise constructor may return before the promise executor function runs.

We can demonstrate asynchronous execution by using the standard JavaScript setTimeout function to create a delay in the execution of the code. The setTimeout function takes the number of milliseconds to wait and a function to call after that amount of time has expired. We call the delay function in a for loop in the promise executor and also a for loop outside the promise so that both code blocks are running in parallel.

const delay = (msg, wait) => { setTimeout(() => { console.log(msg, wait); }, 1000 * wait); };

new Promise((resolve, reject) => { // Code executing in the promise for (let i = 0; i < 3; i++) { delay('In promise', i); } });

// Code executing after the promise for (let i = 0; i < 3; i++) { delay('After promise', i); }

// OUTPUT: // In promise 0 // After promise 0 // In promise 1 // After promise 1 // In promise 2 // After promise 2 Resolving and rejecting Now that we know how to use a promise to execute asynchronously, we need to be able to set the state to fulfilled when things complete correctly, or to rejected when an error happens. The promise executor function takes two functions as parameters, resolve and reject. Calling resolve sets the promise to the fulfilled state, and calling reject sets the promise to the rejected state.

Consider the following "coin toss" promise that waits ten seconds and then has a fifty percent chance of resolving or rejecting.

const coinToss = new Promise((resolve, reject) => { setTimeout(() => { if (Math.random() > 0.5) { resolve('success'); } else { reject('error'); } }, 10000); }); If you log the coinToss promise object to the console immediately after calling the constructor, it will display that it is in the pending state.

console.log(coinToss); // OUTPUT: Promise {} If you then wait ten seconds and the log the coinToss promise object again, the state will either show as fulfilled or rejected depending upon the way the coin landed.

console.log(coinToss); // OUTPUT: Promise {} Then, catch, finally With the ability to asynchronously execute and set the resulting state, we now need a way to generically do something with the result of a promise after it resolves. This is done with functionality similar to exception handling. The promise object has three functions: then, catch, and finally. The then function is called if the promise is fulfilled, catch is called if the promise is rejected, and finally is always called after all the processing is completed.

We can rework our coinToss example and make it so 10 percent of the time the coin falls off the table and resolves to the rejected state. Otherwise the promise resolves to fulfilled with a result of either heads or tails.

const coinToss = new Promise((resolve, reject) => { setTimeout(() => { if (Math.random() > 0.1) { resolve(Math.random() > 0.5 ? 'heads' : 'tails'); } else { reject('fell off table'); } }, 10000); }); We then chain the then, catch and finally functions to the coinToss object in order to handle each of the possible results.

coinToss .then((result) => console.log(Coin toss result: ${result})) .catch((err) => console.log(Error: ${err})) .finally(() => console.log('Toss completed'));

// OUTPUT: // Coin toss result: tails // Toss completed The observer pattern Promises are the standard way to do asynchronous processing in JavaScript, but they are not the only way. The Observer pattern, popularized by web programming frameworks such as Angular, use a model called Observer. The major difference between Observers and Promises is that Promises immediately begin to execute when the Promise is created, but Observers form a pipeline that you then pass an execution object into. This allows Observers to be reused, and the result of executing an Observable to be saved as a history of a particular execution.

JS ASYNC/AWAIT:

JavaScript Promise objects are great for asynchronous execution, but as developers began build large systems with promises they started wanting a more concise representation. This was provided with the introduction of the async/await syntax. The await keyword wraps the execution of a promise and removed the need to chain functions. The await expression will block until the promise state moves to fulfilled, or throws an exception if the state moves to rejected. For example, if we have a function that returns a coin toss promise.

const coinToss = () => { return new Promise((resolve, reject) => { setTimeout(() => { if (Math.random() > 0.1) { resolve(Math.random() > 0.5 ? 'heads' : 'tails'); } else { reject('fell off table'); } }, 1000); }); }; We can create equivalent executions with either a promise then/catch chain, or an await with a try/catch block.

then/catch chain version

coinToss() .then((result) => console.log(Toss result ${result})) .catch((err) => console.error(Error: ${err})) .finally(() => console.log(Toss completed)); async, try/catch version

try { const result = await coinToss(); console.log(Toss result ${result}); } catch (err) { console.error(Error: ${err}); } finally { console.log(Toss completed); } async One important restriction for working with await is that you cannot call await unless it is called at the top level of the JavaScript, or is in a function that is defined with the async keyword. Applying the async keyword transforms the function so that it returns a promise that will resolve to the value that was previously returned by the function. Basically this turns any function into an asynchronous function, so that it can in turn make asynchronous requests.

This can be demonstrated with a function that makes animal noises. Notice that the return value is a simple string.

function cow() { return 'moo'; } console.log(cow()); // OUTPUT: moo If we designate the function to be asynchronous then the return value becomes a promise that is immediately resolved and has a value that is the return value of the function.

async function cow() { return 'moo'; } console.log(cow()); // OUTPUT: Promise {: 'moo'} We then change the cow function to explicitly create a promise instead of the automatically generated promise that the await keyword generates.

async function cow() { return new Promise((resolve) => { resolve('moo'); }); } console.log(cow()); // OUTPUT: Promise {} You can see that the promise is in the pending state because the promise's execution function has not yet resolved.

await The async keyword declares that a function returns a promise. The await keyword wraps a call to the async function, blocks execution until the promise has resolved, and then returns the result of the promise.

We can demonstrate await in action with the cow promise from above. If we log the output from invoking cow then we see that the return value is a promise. However, if we prefix the call to the function with the await keyword, execution will stop until the promise has resolved, at which point the result of the promise is returned instead of the actual promise object.

console.log(cow()); // OUTPUT: Promise {}

console.log(await cow()); // OUTPUT: moo By combining async, to define functions that return promises, with await, to wait on the promise, you can create code that is asynchronous, but still maintains the flow of the code without explicitly using callbacks.

Putting it all together You can see the benefit for async/await clearly by considering a case where multiple promises are required. For example, when calling the fetch web API on an endpoint that returns JSON, you would need to resolve two promises. One for the network call, and one for converting the result to JSON. A promise implementation would look like the following.

const httpPromise = fetch('https://simon.cs260.click/api/user/me'); const jsonPromise = httpPromise.then((r) => r.json()); jsonPromise.then((j) => console.log(j)); console.log('done');

// OUTPUT: done // OUTPUT: {email: 'bud@mail.com', authenticated: true} With async/await, you can clarify the code intent by hiding the promise syntax, and also make the execution block until the promise is resolved.

const httpResponse = await fetch('https://simon.cs260.click/api/user/me'); const jsonResponse = await httpResponse.json(); console.log(jsonResponse)); console.log('done');

// OUTPUT: {email: 'bud@mail.com', authenticated: true} // OUTPUT: done

## JS PROJECT:
This project was difficult for me, and I spent a lot of hours trying to figure out how to format my inserted text with javascript as well as how to save and edit variables entered in by the user. However, I was able to find creative solutions to my problems. I am most proud that I was able to make the recipes editable because I struggled even figuring out logically how to do it. I am also happy with how the text is printing out now. I learned that google is my friend, and also how to troubleshoot on the "inspect" option.

## SIMON SERVICE:
This project helped me understand more the purpose behind using nodes to host a website. I still do not have a full understanding of nodes but I definitely understand more. I also learned how to troubleshoot with VS Code which was helpful.

## SIMON DB: 
This project was helpful in getting me to understand how connecting to MongoDB works, as well as the importance of keeping the keys hidden. I feel like I have more of a handle on MongoDB after looking over and deploying this code.

## SIMON LOGIN: 
I really like how we are learning not just how to collect passwords but how to keep them secure as well. I am still a little confused as to the role of cookies in password collection and recollection. However, I understand more why we need to include secure, HTTPOnly, and sameSite.

## SIMON WEBSOCKETS: 
Websockets seem super cool and very useful. I didn't realize until the class lecture that live servers have been using websockets this whole time to update our websites while debugging. It also is wild to me how simple they are, yet how powerful they can be. THis was a fun opportunity to get to learn more about them.

## SERVICE/DB/LOGIN/WEBSOCKETS STARTUP:
From my startup using third party apis, secure login, and MongoDB for databases, I gained an appreciation for the complexities of websites. There is a lot more that goes into them than just CSS and HTML. My favorite part was about secure login and learning how hashing is used to compare the inputted password to what is in the system.

## SIMON REACT:
I originally had issues with this project, so I learned that it is important to install all of your packages before trying to deploy the website. However, other than that, I was surprised by how much work needs to be done to change vanilla JS to react. There was a lot of reworking files to make them have the correct format, which was long and rather frustrating to me.

## FINAL:
WEB SERVICES INTRODUCTION: Up to this point, your entire application is loaded from your web server and ran on the user's browser. It starts when the browser requests the index.html file from the web server. The index.html, in turn references other HTML, CSS, JavaScript, or image files. All of these files, that are running on the browser, comprise the front-end of your application.

Notice that when the front-end requests the application files from the web server it is using the HTTPS protocol. All web programming requests between devices use HTTPS to exchange data.

Front End

From our front-end Javascript we can make requests to external services running anywhere in the world. This allows us to get external data, such as an inspirational quote, that we then inject into the DOM for the user to read. To make a web service request, we supply the URL of the web service to the fetch function that is built into the browser.

Front End Fetch

The next step in building a full stack web application, is to create our own web service. Our web service will provide the static front-end files along with functions to handle fetch requests for things like storing data persistently, providing security, running tasks, executing application logic that you don't want your user to be able to see, and communicating with other users. The functionality provided by your web service represents the back-end of your application.

Generally the functions provided by a web service are called endpoints, or sometimes APIs. You access the web service endpoints from your front-end JavaScript with the fetch function. In the picture below, the back-end web service is not only providing the static files that make up the front-end, but also providing the web service endpoints that the front-end calls to do things like get a user, create a user, or get high scores.

Back End

The back-end web service can also use fetch to make requests to other web services. For example, in the image below the front-end uses fetch to request the user's data from the back-end web service. The back-end then uses fetch to call two other web services, one to get the user's data from the database, and another one to request subway routes that are near the user's home. That data is then combined together by the back-end web service and returned to the front-end for display in the browser.

Back End

In following instruction we will discuss, how to use fetch, HTTP, URLs, and build a web service using the Node.js application. With all of this in place your application will be a full stack application comprised of both a front-end and a back-end.

URL: The Uniform Resource Locator (URL) represents the location of a web resource. A web resource can be anything, such as a web page, font, image, video stream, database record, or JSON object. It can also be completely ephemeral, such as a visitation counter, or gaming session.

Looking at the different parts of a URL is a good way to understand what it represents. Here is an example URL that represents the summary of accepted CS 260 BYU students that is accessible using secure HTTP.

https://byu.edu:443/cs/260/student?filter=accepted#summary
The URL syntax uses the following convention. Notice the delimiting punctuation between the parts of the URL. Most parts of the URL are optional. The only ones that are required are the scheme, and the domain name.

<scheme>://<domain name>:<port>/<path>?<parameters>#<anchor>
Part	Example	Meaning
Scheme	https	The protocol required to ask for the resource. For web applications, this is usually HTTPS. But it could be any internet protocol such as FTP or MAILTO.
Domain name	byu.edu	The domain name that owns the resource represented by the URL.
Port	3000	The port specifies the numbered network port used to connect to the domain server. Lower number ports are reserved for common internet protocols, higher number ports can be used for any purpose. The default port is 80 if the scheme is HTTP, or 443 if the scheme is HTTPS.
Path	/school/byu/user/8014	The path to the resource on the domain. The resource does not have to physically be located on the file system with this path. It can be a logical path representing endpoint parameters, a database table, or an object schema.
Parameters	filter=names&highlight=intro,summary	The parameters represent a list of key value pairs. Usually it provides additional qualifiers on the resource represented by the path. This might be a filter on the returned resource or how to highlight the resource. The parameters are also sometimes called the query string.
Anchor	summary	The anchor usually represents an sub-location in the resource. For HTML pages this represents a request for the browser to automatically scroll to the element with an ID that matches the anchor. The anchor is also sometimes called the hash, or fragment ID.
Technically you can also provide a user name and password before the domain name. This was used historically to authenticate access, but for security reasons this is deprecated. However, you will still see this convention for URLs that represent database connection strings.

URL, URN, and URI
You will sometimes hear the use of URN or URI when talking about web resources. A Uniform Resource Name (URN) is a unique resource name that does not specify location information. For example, a book URN might be urn:isbn:10,0765350386. A Uniform Resource Identifier (URI) is a general resource identifier that could refer to either a URL and URN. With web programming you are almost always talking about URLs and therefore you should not use the more general URI.
  
PORTS: When you connect to a device on the internet you need both an IP address and a numbered port. Port numbers allow a single device to support multiple protocols (e.g. HTTP, HTTPS, FTP, or SSH) as well as different types of services (e.g. search, document, or authentication). The ports may be exposed externally, or they may only be used internally on the device. For example, the HTTPS port (443) might allow the world to connect, the SSH port (22) might only allow computers at your school, and a service defined port (say 3000) may only allow access to processes running on the device.

The internet governing body, IANA, defines the standard usage for port numbers. Ports from 0 to 1023 represent standard protocols. Generally a web service should avoid these ports unless it is providing the protocol represented by the standard. Ports from 1024 to 49151 represent ports that have been assigned to requesting entities. However, it is very common for these ports to be used by services running internally on a device. Ports from 49152 to 65535 are considered dynamic and are used to create dynamic connections to a device. Here is the link to IANA's registry.

Here is a list of common port numbers that you might come across.

Port	Protocol
20	File Transfer Protocol (FTP) for data transfer
22	Secure Shell (SSH) for connecting to remote devices
25	Simple Mail Transfer Protocol (SMTP) for sending email
53	Domain Name System (DNS) for looking up IP addresses
80	Hypertext Transfer Protocol (HTTP) for web requests
110	Post Office Protocol (POP3) for retrieving email
123	Network Time Protocol (NTP) for managing time
161	Simple Network Management Protocol (SNMP) for managing network devices such as routers or printers
194	Internet Relay Chat (IRC) for chatting
443	HTTP Secure (HTTPS) for secure web requests
Your ports
As an example of how ports are used we can look at your web server. When you built your web server you externally exposed port 22 so that you could use SSH to open a remote console on the server, port 443 for secure HTTP communication, and port 80 for unsecure HTTP communication.

Ports

Your web service, Caddy, is listening on ports 80 and 443. When Caddy gets a request on port 80, it automatically redirects the request to port 443 so that a secure connection is used. When Caddy gets a request on port 443 it examines the path provided in the HTTP request (as defined by the URL) and if the path matches a static file, it reads the file off disk and returns it. If the HTTP path matches one of the definitions it has for a gateway service, Caddy makes a connection on that service's port (e.g. 3000 or 4000) and passes the request to the service.

Internally on your web server, you can have as many web services running as you would like. However, you must make sure that each one uses a different port to communicate on. You run your Simon service on port 3000 and therefore cannot use port 3000 for your start up service. Instead you use port 4000 for your start up service. It does not matter what high range port you use. It only matters that you are consistent and that they are only used by one service.
  
HTTP: HTTP is how the web talks. When a web browser makes a request to a web server it does it using the HTTP protocol. In previous instruction we discussed how to use HTTP. Now, we will talk about the internals of HTTP. Just like becoming fluent in a foreign language make a visit to another country more enjoyable, understanding how to speak HTTP helps you communicate effectively when talking on the web.

When a web client (e.g. a web browser) and a web server talk they exchange HTTP requests and responses. The browser will make an HTTP request and the server will generate an HTTP response. You can see the HTTP exchange by using the browser's debugger or by using a console tool like Curl. For example, in your console you can use curl to make the following request.

curl -v -s http://info.cern.ch/hypertext/WWW/Helping.html
Request
The HTTP request for the above command would look like the following.

GET /hypertext/WWW/Helping.html HTTP/1.1
Host: info.cern.ch
Accept: text/html
An HTTP request has this general syntax.

<verb> <url path, parameters, anchor> <version>
[<header key: value>]*
[

  <body>
]
The first line of the HTTP request contains the verb of the request, followed by the path, parameters, and anchor of the URL, and finally the version of HTTP being used. The following lines are optional headers that are defined by key value pairs. After the headers you have an optional body. The body start is delimited from the headers with two new lines.

In the above example, we are asking to GET a resource found at the path /hypertext/WWW/Helping.html. The version used by the request is HTTP/1.1. This is followed by two headers. The first specifies the requested host (i.e. domain name). The second specifies what type of resources the client will accept. The resource type is always a MIME type as defined by internet governing body IANA. In this case we are asking for HTML.

Response
The response to the above request looks like this.

HTTP/1.1 200 OK
Date: Tue, 06 Dec 2022 21:54:42 GMT
Server: Apache
Last-Modified: Thu, 29 Oct 1992 11:15:20 GMT
ETag: "5f0-28f29422b8200"
Accept-Ranges: bytes
Content-Length: 1520
Connection: close
Content-Type: text/html

<TITLE>Helping -- /WWW</TITLE>
<NEXTID 7>
<H1>How can I help?</H1>There are lots of ways you can help if you are interested in seeing
the <A NAME=4 HREF=TheProject.html>web</A> grow and be even more useful...
An HTTP response has the following syntax.

<version> <status code> <status string>
[<header key: value>]*
[

  <body>
]
You can see that the response syntax is similar to the request syntax. The major difference is that the first line represents the version and the status of the response.

Understanding the meaning of the common HTTP verbs, status codes, and headers is important for you to understand, as you will use them in developing a web application. Take some time to internalize the following common values.

Verbs
There are several verbs that describe what the HTTP request is asking for. The list below only describes the most common ones.

Verb	Meaning
GET	Get the requested resource. This can represent a request to get a single resource or a resource representing a list of resources.
POST	Create a new resource. The body of the request contains the resource. The response should include a unique ID of the newly created resource.
PUT	Update a resource. Either the URL path, HTTP header, or body must contain the unique ID of the resource being updated. The body of the request should contain the updated resource. The body of the response may contain the resulting updated resource.
DELETE	Delete a resource. Either the URL path or HTTP header must contain the unique ID of the resource to delete.
OPTIONS	Get metadata about a resource. Usually only HTTP headers are returned. The resource itself is not returned.
Status codes
It is important that you use the standard HTTP status codes in your HTTP responses so that the client of a request can know how to interpret the response. The codes are partitioned into five blocks.

1xx - Informational.
2xx - Success.
3xx - Redirect to some other location, or that the previously cached resource is still valid.
4xx - Client errors. The request is invalid.
5xx - Server errors. The request cannot be satisfied due to an error on the server.
Within those ranges here are some of the more common codes. See the MDN documentation for a full description of status codes.

Code	Text	Meaning
100	Continue	The service is working on the request
200	Success	The requested resource was found and returned as appropriate.
201	Created	The request was successful and a new resource was created.
204	No Content	The request was successful but no resource is returned.
304	Not Modified	The cached version of the resource is still valid.
307	Permanent redirect	The resource is no longer at the requested location. The new location is specified in the response location header.
308	Temporary redirect	The resource is temporarily located at a different location. The temporary location is specified in the response location header.
400	Bad request	The request was malformed or invalid.
401	Unauthorized	The request did not provide a valid authentication token.
403	Forbidden	The provided authentication token is not authorized for the resource.
404	Not found	An unknown resource was requested.
408	Request timeout	The request takes too long.
409	Conflict	The provided resource represents an out of date version of the resource.
418	I'm a teapot	The service refuses to brew coffee in a teapot.
429	Too many requests	The client is making too many requests in too short of a time period.
500	Internal server error	The server failed to properly process the request.
503	Service unavailable	The server is temporarily down. The client should try again with an exponential back off.
Headers
📖 Deeper dive reading: MDN HTTP headers

HTTP headers specify metadata about a request or response. This includes things like how to handle security, caching, data formats, and cookies. Some common headers that you will use include the following.

Header	Example	Meaning
Authorization	Bearer bGciOiJIUzI1NiIsI	A token that authorized the user making the request.
Accept	image/*	What content format the client accepts. This may include wildcards.
Content-Type	text/html; charset=utf-8	The format of the response content. These are described using standard MIME types.
Cookie	SessionID=39s8cgj34; csrftoken=9dck2	Key value pairs that are generated by the server and stored on the client.
Host	info.cern.ch	The domain name of the server. This is required in all requests.
Origin	cs260.click	Identifies the origin that caused the request. A host may only allow requests from specific origins.
Access-Control-Allow-Origin	https://cs260.click	Server response of what origins can make a request. This may include a wildcard.
Content-Length	368	The number of bytes contained in the response.
Cache-Control	public, max-age=604800	Tells the client how it can cache the response.
User-Agent	Mozilla/5.0 (Macintosh)	The client application making the request.
Body
The format of the body of an HTTP request or response is defined by the Content-Type header. For example, it may be HTML text (text/html), a binary image format (image/png), JSON (application/json), or JavaScript (text/javascript). A client may specify what formats it accepts using the accept header.

Cookies
Cookie

📖 Deeper dive reading: MDN Using HTTP cookies

HTTP itself is stateless. This means that one HTTP request does not know anything about a previous or future request. However, that does not mean that a server or client cannot track state across requests. One common method for tracking state is the cookie. Cookies are generated by a server and passed to the client as an HTTP header.

HTTP/2 200
Set-Cookie: myAppCookie=tasty; SameSite=Strict; Secure; HttpOnly
The client then caches the cookie and returns it as an HTTP header back to the server on subsequent requests.

HTTP/2 200
Cookie: myAppCookie=tasty
This allows the server to remember things like the language preference of the user, or the user's authentication credentials. A server can also use cookies to track, and share, everything that a user does. However, there is nothing inherently evil about cookies, the problem comes from web applications that use them as a means to violate a user's privacy or inappropriately monetize their data.

HTTP Versions
HTTP continually evolves in order to increase performance and support new types of applications. You can read about the evolution of HTTP on MDN.

Year	Version	Features
1990	HTTP0.9	one line, no versions, only get
1996	HTTP1	get/post, header, status codes, content-type
1997	HTTP1.1	put/patch/delete/options, persistent connection
2015	HTTP2	multiplex, server push, binary representation
2022	HTTP3	QUIC for transport protocol, always encrypted
    
SOP and CORS: Security should always be on your mind when you are working with the web. The ability to provide services to a global audience makes the information on the web very valuable, and therefore an attractive target for nefarious parties. When website architecture and browser clients were still in their infancy they allowed JavaScript to make requests from one domain while displaying a website from a different domain. These are called cross-origin requests.

Consider the following example. An attacker sends out an email with a link to a hacker website (byu.iinstructure.com) that is similar to the real course website. Notice the additional i. If the hacker website could request anything from the real website then it could make itself appear and act just like the real education website. All it would have to do is request images, html, and login endpoints from the course's website and display the results on the hacker website. This would give the hacker access to everything the user did.

To combat this problem the Same Origin Policy (SOP) was created. Simply stated SOP only allows JavaScript to make requests to a domain if it is the same domain that the user is currently viewing. A request from byu.iinstructure.com for service endpoints that are made to byu.instructure.com would fail because the domains do not match. This provides significant security, but it also introduces complications when building web applications. For example, if you want build a service that any web application can use it would also violate the SOP and fail. In order to address this, the concept of Cross Origin Resource Sharing (CORS) was invented.

CORS allows the client (e.g. browser) to specify the origin of a request and then let the server respond with what origins are allowed. The server may say that all origins are allowed, for example if they are a general purpose image provider, or only a specific origin is allowed, for example if they are a bank's authentication service. If the server doesn't specify what origin is allowed then the browser assumes that it must be the same origin.

Going back to our hacker example, the HTTP request from the hacker site (byu.iinstructure.com) to the course's authentication service (byu.instructure.com) would look like the following.

GET /api/auth/login HTTP/2
Host: byu.instructure.com
Origin: https://byu.iinstructure.com
In response the banking website would return:

HTTP/2 200 OK
Access-Control-Allow-Origin: https://byu.instructure.com
The browser would then see that the actual origin of the request does not match the allowed origin and so the browser blocks the response and generates an error.

Notice that with CORS, it is the browser that is protecting the user from accessing the banking website's authentication endpoint from the wrong origin. CORS is only meant to alert the user that something nefarious is being attempted. A hacker can still proxy requests through their own server to the banking website and completely ignore the Access-Control-Allow-Origin header. Therefore the banking website needs to implement its own precautions to stop a hacker for using its services inappropriately.

Using third party services
When you make requests to your own web services you are always on the same origin and so you will not violate the SOP. However, if you want to make requests to a different domain than the one your web application is hosted on, then you need to make sure that domain allows requests as defined by the Access-Control-Allow-Origin header it returns. For example, if I have JavaScript in my web application loaded from cs260.click that makes a fetch request for an image from the website i.picsum.photos the browser will fail the request with an HTTP status code of 403 and an error message that CORS has blocked the request.

CORS

That happens because i.picsum.photos does not return an Access-Control-Allow-Origin header. Without a header the browser assumes that all requests must be made from the same origin.

If your web application instead makes a service request to icanhazdadjoke.com to get a joke, that request will succeed because icanhazdadjoke.com returns an Access-Control-Allow-Origin header with a value of * meaning that any origin can make requests to this service.

HTTP/2 200
access-control-allow-origin: *

Did you hear about the bread factory burning down? They say the business is toast.
This would have also succeeded if the HTTP header had explicitly listed your web application domain. For example, if you make your request from the origin cs260.click the following response would also satisfy CORS.

HTTP/2 200
access-control-allow-origin: https://cs260.click

I’ll tell you something about German sausages, they’re the wurst
This all means that you need to test the services you want to use before you include them in your application. Make sure they are responding with * or your calling origin. If they do not then you will not be able to use them.
    
The ability to make HTTP requests from JavaScript is one of the main technologies that changed the web from static content pages (Web 1.0) to one of web applications (Web 2.0) that fully interact with the user. Microsoft introduced the first API for making HTTP requests from JavaScript with the XMLHttpRequest API.

Today, the fetch API is the preferred way to make HTTP requests. The fetch function is built into the browser's JavaScript runtime. This means you can call it from JavaScript code running in a browser.

The basic usage of fetch takes a URL and returns a promise. The promise then function takes a callback function that is asynchronously called when the requested URL content is obtained. If the returned content is of type application/json you can use the json function on the response object to convert it to a JavaScript object.

The following example makes a fetch request to get and display an inspirational quote.

fetch('https://api.quotable.io/random')
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse);
  });
Response

{
  content: 'Never put off till tomorrow what you can do today.',
  author: 'Thomas Jefferson',
};
To do a POST request you populate the options parameter with the HTTP method and headers.

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'test title',
    body: 'test body',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse);
  });
 
 SERVICE DESIGN: Web services provide the interactive functionality of your web application. They commonly authenticate users, track their session state, provide, store, and analyze data, connect peers, and aggregate user information. Making your web service easy to use, performant, and extensible are factors that determine the success of your application. A good design will result in increased productivity, satisfied users, and lower processing costs.

Model and sequence diagrams
When first considering your service design it is helpful to model the application's primary objects and the interactions of the objects. You should attempt to stay as close to the model that is in your user's mind as possible. Avoid introducing a model that focuses on programming constructs and infrastructure. For example, a chat program should model participants, conversations, and messages. It should not model user devices, network connections, and data blobs.

Once you have defined your primary objects you can create sequence diagrams that show how the objects interact with each other. This will help clarify your model and define the necessary endpoints. You can use a simple tool like SequenceDiagram.org to create and share diagrams.

Sequence Diagram

Leveraging HTTP
Web services are usually provided over HTTP, and so HTTP greatly influences the design of the service. The HTTP verbs such as GET, POST, PUT, and DELETE often mirror the designed actions of a web service. For example, a web service for managing comments might list the comments (GET), create a comment (POST), update a comment (PUT), and delete a comment (DELETE). Likewise, the MIME content types defined by IANA are a natural fit for defining the types of content that you want to provide (e.g. HTML, PNG, MP3, and MP4). The goal is to leverage those technologies as much as possible so that you don't have to recreate the functionality they provide and instead take advantage of the significant networking infrastructure built up around HTTP. This includes caching servers that increase your performance, edge servers that bring your content closer, and replication servers that provide redundant copies of your content and make your application more resilient to network failures.



Endpoints
A web service is usually divided up into multiple service endpoints. Each endpoint provides a single functional purpose. All of the criteria that you would apply to creating well designed code functions also applies when exposing service endpoints.



⚠ Note that service endpoints are often called an Application Programming Interface (API). This is a throwback to old desktop applications and the programming interfaces that they exposed. Sometimes the term API refers to the entire collection of endpoints, and sometimes it is used to refer to a single endpoint.

Here are some things you should consider when designing your service's endpoints.

Grammatical - With HTTP everything is a resource (think noun or object). You act on the resource with an HTTP verb. For example, you might have an order resource that is contained in a store resource. You then create, get, update, and delete order resources on the store resource.

Readable - The resource you are referencing with an HTTP request should be clearly readable in the URL path. For example, an order resource might contain the path to both the order and store where the order resource resides: /store/provo/order/28502. This makes it easier to remember how to use the endpoint because it is human readable.

Discoverable - As you expose resources that contain other resources you can provide the endpoints for the aggregated resources. This makes it so someone using your endpoints only needs to remember the top level endpoint and then they can discover everything else. For example, if you have a store endpoint that returns information about a store you can include an endpoint for working with a store in the response.

GET /store/provo  HTTP/2
{
  "id": "provo",
  "address": "Cougar blvd",
  "orders": "https://cs260.click/store/provo/orders",
  "employees": "https://cs260.click/store/provo/employees"
}
Compatible - When you build your endpoints you want to make it so that you can add new functionality without breaking existing clients. Usually this means that the clients of your service endpoints should ignore anything that they don't understand. Consider the two following JSON response versions.

Version 1

{
  "name": "John Taylor"
}
Version 2

{
  "name": "John Taylor",
  "givenName": "John",
  "familyName": "Taylor"
}
By adding a new representation of the name field, you provide new functionality for clients that know how to use the new fields without harming older clients that ignore the new fields and simply use the old representation. This is all done without officially versioning the endpoint.

If you are fortunate enough to be able to control all of your client code you can mark the name field as depreciated and in a future version remove it once all of the clients have upgraded. Usually you want to keep compatibility with at least one previous version of the endpoint so that there is enough time for all of the clients to migrate before compatibility is removed.

Simple - Keeping your endpoints focused on the primary resources of your application helps to avoid the temptation to add endpoints that duplicate or create parallel access to primary resources. It is very helpful to write some simple class and sequence diagrams that outline your primary resources before you begin coding. These resources should focus on the actual resources of the system you are modeling. They should not focus on the data structure or devices used to host the resources. There should only be one way to act on a resource. Endpoints should only do one thing.

Documented - The Open API Specification is a good example of tooling that helps create, use, and maintain documentation of your service endpoints. It is highly suggested that you make use of such tools in order to provide client libraries for your endpoints and a sandbox for experimentation. Creating an initial draft of your endpoint documentation before you begin coding will help you mentally clarify your design and produce a better final result. Providing access to your endpoint documentation along with your production system helps with client implementations and facilitates easier maintenance of the service. The Swagger Petstore example documentation is a reasonable example to follow.

There are many models for exposing endpoints. We will consider three common ones, RPC, REST, and GraphQL.

RPC
Remote Procedure Calls (RPC) expose service endpoints as simple function calls. When RPC is used over HTTP it usually just leverages the POST HTTP verb. The actual verb and subject of the function call is represented by the function name. For example, deleteOrder or updateOrder. The name of the function is either the entire path of the URL or a parameter in the POST body.

POST /updateOrder HTTP/2

{"id": 2197, "date": "20220505"}
or

POST /rpc HTTP/2

{"cmd":"updateOrder", "params":{"id": 2197, "date": "20220505"}}
One advantage of RPC is that it maps directly to function calls that might exist within the server. This could also be considered a disadvantage as it directly exposes the inner workings of the service, and thus creates a coupling between the endpoints and the implementation.

REST
Representational State Transfer (REST) attempts to take advantage of the foundational principles of HTTP. This is not surprising considering the principle author of REST, Roy Fielding, was also a contributor to the HTTP specification. REST HTTP verbs always act upon a resource. Operations on a resource impact the state of the resource as it is transferred by a REST endpoint call. This allows for the caching functionality of HTTP to work optimally. For example, GET will always return the same resource until a PUT is executed on the resource. When PUT is used, the cached resource is replaced with the updated resource.

With REST the updateOrder endpoint would look like the following.

PUT /order/2197 HTTP/2

{"date": "20220505"}
Where the proper HTTP verb is used and the URL path uniquely identifies the resource. These seem like small differences, but maximizing HTTP pays dividends by making it easy for HTTP infrastructure, such as caching, to work properly.

There are several other pieces of Fielding's dissertation on REST, such as hypermedia, that are often quoted as being required for a truly "restful" implementation, and these are just as often ignored.

GraphQL
GraphQL focuses on the manipulation of data instead of a function call (RPC) or a resource (REST). The heart of GraphQL is a query that specifies the desired data and how it should be joined and filtered. GraphQL was developed to address frustration concerning the massive number of REST, or RPC calls, that a web application client needed to make in order to support even a simple UI widget.

Instead of making a call for getting a store, and then a bunch of calls for getting the store's orders and employees, GraphQL would send a single query that would request all of that information in one big JSON response. The server would examine the query, join the desired data, and then filter out anything that was not wanted.

Here is an example GraphQL query.

query {
  getOrder(id: "2197") {
    orders(filter: { date: { allofterms: "20220505" } }) {
      store
      description
      orderedBy
    }
  }
}
GraphQL helps to remove a lot of the logic for parsing endpoints and mapping requests to specific resources. Basically in GraphQL there is only one endpoint. The query endpoint.

The downside of that flexibility is that the client now has significant power to consume resources on the server. There is no clear boundary on what, how much, or how complicated the aggregation of data is. It also is difficult for the server to implement authorization rights to data as they have to be baked into the data schema. However, there are standards for how to define a complex schema. Common GraphQL packages provide support for schema implementations along with database adaptors for query support.
       
NODE.JS: In 2009 Ryan Dahl created Node.js. It was the first successful application for deploying JavaScript outside of a browser. This changed the JavaScript mindset from a browser technology to one that could run on the server as well. This means that JavaScript can power your entire technology stack. One language to rule them all. Node.js is often just referred to as Node, and is currently maintained by the Open.js Foundation.

Ryan Dahl

“You can never understand everything. But, you should push yourself to understand the system”

— Ryan Dahl

Browsers run JavaScript using a JavaScript interpreter and execution engine. For example, Chromium based browsers all use the V8 engine created by Google. Node.js simply took the V8 engine and ran it inside of a console application. When you run a JavaScript program in Chrome or Node.js, it is V8 that reads your code and executes it. With either program wrapping V8, the result is the same.

Node.js

Installing NVM and Node.js
Your production environment web server comes with Node.js already install. However, you will need to install Node.js in your development environment if you have not already. The easiest way to install Node.js is to first install the Node Version Manager (NVM) and use it to install, and manage, Node.js.

Installing on Windows
If you are using Windows, then follow the installation instructions from the windows-nvm repository. Click on latest installer and then scroll down to the Assets and download and execute nvm-setup.exe. Once the installation is complete, you will need to open a new console window so that it gets the updated path that includes NVM.

In the console application install the long term support (LTS) version of Node.

➜ nvm install lts
➜ nvm use lts
Installing on Linux or MacOS
If you are using Linux or MacOS then you can install NVM with the following console commands.

➜ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

➜ . ~/.nvm/nvm.sh
In the console application install the long term support (LTS) version of Node.

➜ nvm install --lts
Checking that Node is installed
The node.js console application is simply called node. You can verify that Node is working correctly by running node with the -v parameter. Note that your version might be different than what is shown here. As long as it is a LTS version you should be fine.

➜ node -v
v18.13.0
Running programs
You can execute a line of JavaScript with Node.js from your console with the -e parameter.

➜  node -e "console.log(1+1)"
2
However, to do real work you need to execute an entire project composed of dozens or even hundreds of JavaScript files. You do this by creating a single starting JavaScript file, named something like main.js, that references the code found in the rest your project. You then execute your code by running node with main.js as a parameter. For example, with the following JavaScript saved to a file named main.js

function countdown() {
  let i = 0;
  while (i++ < 5) {
    console.log(`Counting ... ${i}`);
  }
}

countdown();
We can execute the JavaScript by passed the file to node, and receive the following result.

➜  node main.js
Counting ... 1
Counting ... 2
Counting ... 3
Counting ... 4
Counting ... 5
You can also run node in interpretive mode by executing it without any parameters and then typing your JavaScript code directly into the interpreter.

➜ node
Welcome to Node.js v16.15.1.
> 1+1
2
> console.log('hello')
hello
Node package manager
While you could write all of the JavaScript for everything you need, it is always helpful to use preexisting packages of JavaScript for implementing common tasks. To load a package using Node.js you must take two steps. First install the package locally on your machine using the Node Package Manager (NPM), and then include a require statement in your code that references the package name. NPM is automatically installed when you installed Node.js.

NPM knows how to access a massive repository of preexisting packages. You can search for packages on the NPM website. However, before you start using NPM to install packages you need to initialize you code to use NPM. This is done by creating a directory that will contain your JavaScript and then running npm init. NPM will step you through a series of questions about the project you are creating. You can press the return key for each of questions if you want to accept the defaults. If you are always going to accept all of the defaults you can use npm init -y and skip the Q&A.

➜  mkdir npmtest
➜  cd npmtest
➜  npm init -y
Package.json
If you list the files in directory you will notice that it has created a file named package.json. This file contains three main things: 1) Metadata about your project such as its name and the default entry JavaScript file, 2) commands that you can execute to do things like run, test, or distribute your code, and 3) packages that this project depends upon. With NPM initialized to work with your project, you can now use it to install a node package. As a simple example, we will install a package that knows how to tell jokes. This package is called give-me-a-joke. You can search for it on the NPM website, see how often it is installed, examine the source code, and learn about who created it. You install the package using npm install followed by the name of the package.

➜  npm install give-me-a-joke
If you again examine the contents of the package.json file you will see a reference to the newly installed package dependency. If you decide you no longer want a package dependency you can always remove it with the npm uninstall <package name here> console command.

⚠ Note that when you start installing package dependencies NPM will create an additional file named package-lock.json and a directory named node-modules in your project directory. The node-modules directory contains the actual JavaScript for the package and all of its dependent packages. As you install several packages this directory will start to get very large. You do not want to check this directory into your source control system since it is so large and can be rebuilt using the information contained in the package.json and package-lock.json files. So make sure you include node-modules in your .gitignore file.

When you clone your source code from GitHub to a new location, just run npm install in the project directory. This will cause NPM to download all of the previously installed packages and recreate the node-modules directory. The package-lock.json file tracks the version of the package that you installed. That way if rebuild your node-modules directory you will have the version of the package you initially installed and not the latest available version, which might not be compatible with your code.

With NPM and the joke package installed, you can now use the package in a JavaScript file by referencing the package name as a parameter to the require function. This is then followed by a call the joke object's getRandomDadJoke function to actually generate a joke.

const giveMeAJoke = require('give-me-a-joke');
giveMeAJoke.getRandomDadJoke((joke) => {
  console.log(joke);
});
If we run this code using node we get the following result.

➜  node main.js
What do you call a fish with no eyes? A fsh.
This may seem like a lot of work but after you do it a few times it will begin to feel natural. Just remember the main steps.

Create your project directory
Initialize it for use with NPM by running npm init -y
Make sure .gitignore file contains node-modules
Install any desired packages with npm install <package name here>
Add require('<package name here>') to your JavaScript code
Run your code with node main.js
Creating a web service
With JavaScript we can write code that listens on a server port (e.g. 8080), receives HTTP requests, processes them, and then responds. We can use this to create a simple web service that we then execute using Node.js.

The following example first initializes the use of NPM and installs the package http. The http package contains the functionality for listening on server ports and manipulating HTTP requests.

➜ mkdir webservicetest
➜ cd webservicetest
➜ npm init -y
➜ npm install http
Now we can create our HTTP server using the http.createServer function and provide it with a callback function that takes a request (req) and response (res) object. That function is called whenever the server receives an HTTP request. In our example, the callback always returns the same HTML snippet, with a status code of 200, and a Content-Type header, no matter what request is made. Basically this is just a simple dynamically generated HTML page. A real web service would examine the HTTP path and return meaningful content based upon the purpose of the endpoint.

The server.listen call starts listening on port 8080 and blocks until the program is terminated.

const http = require('http');
const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello Node.js!</h1>');
  res.end();
});

server.listen(8080, () => {
  console.log(`Web service listening on port 8080`);
});
We execute the program by passing our JavaScript to Node. If the service starts up correctly then it should look like the following.

➜ node main.js
Web service listening on port 8080
You can now open you browser and point it to localhost:8080 and view the result. The interaction between the JavaScript, node, and the browser looks like this.

Node HTTP

You can kill the process by pressing CTRL-C in the console.

Deno and Bun
You should be aware that Ryan has created a successor to Node.js called Deno. This version is more compliant with advances in ECMAScript and has significant performance enhancements. There are also competitor server JavaScript applications. One of the more interesting rising stars is called Bun. If you have the time you should learn about them.
       
EXPRESS: In the previous instruction you saw how to use Node.js to create a simple web server. This works great for little projects where you are trying to quickly serve up some web content, but to build a production ready application you need a framework with a bit more functionality for easily implementing a full web service. This is where the Node package Express come in. Express provides support for:

Routing requests for service endpoints
Manipulating HTTP requests with JSON body content
Generating HTTP responses
Using middleware to add functionality
Express was created by TJ Holowaychuk and is currently maintained by the Open.js Foundation.

TJ Holowaychuk

“People tell you to not reinvent things, but I think you should … it will teach you things”

— TJ Holowaychuk

Everything in Express revolves around creating and using HTTP routing and middleware functions. You create an Express application by using NPM to install the Express package and then calling the express constructor to create the express application and listen for HTTP requests on a desired port.

➜ npm install express
const express = require('express');
const app = express();

app.listen(8080);
With the app object you can now add HTTP routing and middleware functions to the application.

Defining routes
HTTP endpoints are implemented in Express by defining routes that call a function based upon an HTTP path. The Express app object supports all of the HTTP verbs as functions on the object. For example, if you want to have a route function that handles an HTTP GET request for the URL path /store/provo you would call the get method on the app.

app.get('/store/provo', (req, res, next) => {
  res.send({ name: 'provo' });
});
The get function takes two parameters, a URL path matching pattern, and a callback function that is invoked when the pattern matches. The path matching parameter is used to match against the URL path of an incoming HTTP request.

The callback function has three parameters that represent the HTTP request object (req), the HTTP response object (res), and the next routing function that Express expects to be called if this routing function wants another function to generate a response.

The express app compares the routing function patterns in the order that they are added to the Express app object. So if you have two routing functions with patterns that both match, the first one that was added will be called and given the next matching function in the next parameter.

In our example above we hard coded the store name to be provo. A real store endpoint would allow any store name to be provided as a parameter in the path. Express supports path parameters by prefixing the parameter name with a colon (:). Express creates a map of path parameters and populates it with the matching values found in the URL path. You then reference the parameters using the req.params object. Using this pattern you can rewrite our getStore endpoint as follows.

app.get('/store/:storeName', (req, res, next) => {
  res.send({ name: req.params.storeName });
});
If we run our JavaScript using node we can see the result when make an HTTP request using curl.

➜ curl localhost:8080/store/orem
{"name":"orem"}
If you wanted an endpoint that used the POST or DELETE HTTP verb then you just use the post or delete function on the Express app object.

The route path can also include a limited wildcard syntax or even full regular expressions in path pattern. Here are a couple route functions using different pattern syntax.

// Wildcard - matches /store/x and /star/y
app.put('/st*/:storeName', (req, res) => res.send({ update: req.params.storeName }));

// Pure regular expression
app.delete(/\/store\/(.+)/, (req, res) => res.send({ delete: req.params[0] }));
Notice that in these examples the next parameter was omitted. Since we are not calling next we do not need to include it as a parameter. However, if you do not call next then no following middleware functions will be invoked for the request.

Using middleware
📖 Deeper dive reading: Express Middleware

The standard Mediator/Middleware design pattern has two pieces: A mediator and middleware. Middleware represents componentized pieces of functionality. The mediator loads the middleware components and determines their order of execution. When a request comes to the mediator it then passes the request around to the middleware components. Following this pattern, Express is the mediator, and middleware functions are the middleware components.

Express comes with a standard set of middleware functions. These provide functionality like routing, authentication, CORS, sessions, serving static web files, cookies, and logging. Some middleware functions are provided by default, and other ones must be installed using NPM before you can use it. You can also write your own middleware functions and use them with Express.

A middleware function looks very similar to a routing function. That is because routing functions are also middleware functions. The only difference is that routing functions are only called if the associated pattern matches. Middleware functions are always called for every HTTP request unless a preceding middleware function does not call next. A middleware function has the following pattern:

function middlewareName(req, res, next)
The middleware function parameters represent the HTTP request object (req), the HTTP response object (res), and the next middleware function to pass processing to. You should usually call the next function after completing processing so that the next middleware function can execute.

Middleware

Creating your own middleware
As an example of writing your own middleware, you can create a function that logs out the URL of the request and then passes on processing to the next middleware function.

app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});
Remember that the order that you add your middleware to the Express app object controls the order that the middleware functions are called. Any middleware that does not call the next function after doing its processing, stops the middleware chain from continuing.

Builtin middleware
In addition to creating your own middleware functions, you can use a built-in middleware function. Here is an example of using the static middleware function. This middleware responds with static files, found in a given directory, that match the request URL.

app.use(express.static('public'));
Now if you create a subdirectory in your project directory and name it public you can serve up any static content that you would like. For example, you could create an index.html file that is the default content for your web service. Then when you call your web service without any path the index.html file will be returned.

Third party middleware
You can also use third party middleware functions by using NPM to install the package and including the package in your JavaScript with the require function. The following uses the cookie-parser package to simplify the generation and access of cookies.

➜ npm install cookie-parser
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.post('/cookie/:name/:value', (req, res, next) => {
  res.cookie(req.params.name, req.params.value);
  res.send({ cookie: `${req.params.name}:${req.params.value}` });
});

app.get('/cookie', (req, res, next) => {
  res.send({ cookie: req.cookies });
});
It is common for middleware functions to add fields and functions to the req and res object so that other middleware can access the functionality they provide. You see this happening when the cookie-parser middleware adds the req.cookies object for reading cookies, and also adds the res.cookie function in order to make it easy to add a cookie to a response.

Error handling middleware
You can also add middleware for handling errors that occur. Error middleware looks similar to other middleware functions, but it takes an additional err parameter that contains the error.

function errorMiddlewareName(err, req, res, next)
If you wanted to add a simple error handler for anything that might go wrong while process HTTP requests you could add the following.

app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});
We can test that our error middleware is getting used by adding a new endpoint that generates an error.

app.get('/error', (req, res, next) => {
  throw new Error('Trouble in river city');
});
Now if we use curl to call our error endpoint we can see that the response comes from the error middleware.

➜ curl localhost:8080/error
{"type":"Error","message":"Trouble in river city"}
Putting it all together
Here is a full example of our web service built using Express.

const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

// Third party middleware - Cookies
app.use(cookieParser());

app.post('/cookie/:name/:value', (req, res, next) => {
  res.cookie(req.params.name, req.params.value);
  res.send({ cookie: `${req.params.name}:${req.params.value}` });
});

app.get('/cookie', (req, res, next) => {
  res.send({ cookie: req.cookies });
});

// Creating your own middleware - logging
app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});

// Built in middleware - Static file hosting
app.use(express.static('public'));

// Routing middleware
app.get('/store/:storeName', (req, res) => {
  res.send({ name: req.params.storeName });
});

app.put('/st*/:storeName', (req, res) => res.send({ update: req.params.storeName }));

app.delete(/\/store\/(.+)/, (req, res) => res.send({ delete: req.params[0] }));

// Error middleware
app.get('/error', (req, res, next) => {
  throw new Error('Trouble in river city');
});

app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

// Listening to a network port
const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
       
DEBUGGIN NODE.JS: Previously your JavaScript debugging was done using the browser's debugging tools as it executed in the browser. Now that you are writing JavaScript that runs using Node.js you need a way to debug your code without the help of browser. One great way to do that is to use the debugging tools built into VS Code. To debug JavaScript in VS Code you first need some JavaScript to debug. Open up VS Code and create a new file named main.js and paste the following code into the file.

let x = 1 + 1;

console.log(x);

function double(x) {
  return x * 2;
}

x = double(x);

console.log(x);
You can now debug main.js in VS Code by executing the Start Debugging command by pressing F5. The first time you run this, VS Code will ask you what debugger you want to use. Select node.js.

Debug start

The code will execute and the debug console window will automatically open to show you the debugger output where you can see the results of the two console.log statements found in the code.

Debug output

You can pause execution of the code by setting a breakpoint. Move your cursor over to the far left side of the editor window. As you hover on the left side of the line numbers you will see a red dot appear. Click on the dot to set the breakpoint.

Debug output

Now start the debugger again by pressing F5. The code will start running, but pause on the line with the breakpoint. You can then see the values of variables by looking at the variable window on the left, or by hovering your mouse over the variable you would like to inspect.

Debug pause

You can continue execution of the code by pressing F10 to step to the next line, F11 to step into a function call, or F5 to continue running from the current line. When the last line of code executes the debugger will automatically exit and you will need to press F5 to start it running again. You can stop debugging at any time by pressing SHIFT-F5.

Experiment with this simple file until you are comfortable running the debugger, setting breakpoints, and inspecting variables.

Debugging a Node.js web service
In order to debug a web service running under Node.js we first need to write our code. Replace the code in your main.js file with the following.

const express = require('express');
const app = express();

app.get('/*', (req, res) => {
  res.send({ url: req.originalUrl });
});

const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
Switch to your console application and run npm init -y and npm install express from your code directory so that we can use the Express package to write a simple web service.

Now we are ready to debug again. Set a breakpoint on the getStore endpoint callback (line 5) and the app.listen call (line 9). Start debugging by pressing F5. The debugger should stop on the listen call where you can inspect the app variable. Press F5 again to continue running. Now open up your browser and set the location to localhost:8080. This should hit the breakpoint on the endpoint. Take some time to inspect the req object. You should be able to see what the HTTP method is, what parameters are provided, and what the path currently is. Press F5 to continue.

Your browser should display the JSON object, containing the URL, that you returned from your endpoint. Now change the URL in the browser to include a path and some query parameters. Something like http://localhost:8080/fish/taco?order=2. Requesting that URL should cause your breakpoint to hit again where you can see the URL changes reflected in the req object.

Now, instead of pressing F5 to continue, press F11 to step into the res.send function. This will take you out of your code and into the express code that handles sending a response. Because you installed the Express package using NPM, all of Express' source code is sitting in the node_modules directory. You can also set breakpoints there, examine variables, and step into functions. Debugging into popular packages is a great way to learn how to code by seeing how really good programmers do things. Take some time to walk around Holowaychuk's code and see if you can understand what it is doing.

Debug step in

Nodemon
Once you start writing complex web applications you will find yourself making changes in the middle of debugging sessions and you would like have node restart automatically and update the browser as the changes are saved. This seems like a simple thing, but over the course of hundreds of changes, every second you can save really starts to add up.

The Nodemon package is basically a wrapper around node that watches for files in the project directory to change. When it detects that you saved something it will automatically restart node.

If you would like to experiment with this then take the following steps. First install Nodemon globally so that you can use it to debug all of your projects.

npm install -g nodemon
Then, because VS Code does not know how to launch nodemon automatically, you need create a VS Code launch configuration. In VS Code press CTRL-SHIFT-P (on Windows) or ⌘-⇧-P (on Mac) and type the command Debug: Add configuration. This will then ask you what type of configuration you would like to create. Type Node.js and select the Node.js: Nodemon setup option. in the launch configuration file at it creates, change the program from app.js to main.js (or whatever the main JavaScript file is for your application) and save the configuration file.

Now when you press F5 to start debugging it will run Nodemon instead of Node.js and your changes will automatically update your application when you save.
      
SERVICE DAEMONS: PM2
When you run a program from the console the program will automatically terminate when you close the console or if the computer restarts. In order to keep programs running after a shutdown you need to register it as a daemon. The term daemon comes from the idea of something that is always there working in the background. Hopefully you only have good daemons running in your background.

We want our web services to continue running as a daemon. We would also like a easy way to start and stop our services. That is what Process Manager 2 (PM2) does.

PM2 is already installed on your production server as part of the AWS AMI that you selected when you launched your server. Additionally, the deployment scripts found with the Simon projects automatically modify PM2 to register and restart your web services. That means you should not need to do anything with PM2. However, if you run into problems such as your services are not running, then here are some commands that you might find useful.

You can SSH into your server and see PM2 in action by running the following command.

pm2 ls
This should print out the two services, simon and startup, that are configured to run on your web server.

You can try some of the other commands, but only if you understand what they are doing. Using them incorrectly could cause your web services to stop working.

Command	Purpose
pm2 ls	List all of the hosted node processes
pm2 monit	Visual monitor
pm2 start index.js -n simon	Add a new process with an explicit name
pm2 start index.js -n startup -- 4000	Add a new process with an explicit name and port parameter
pm2 stop simon	Stop a process
pm2 restart simon	Restart a process
pm2 delete simon	Delete a process from being hosted
pm2 delete all	Delete all processes
pm2 save	Save the current processes across reboot
pm2 restart all	Reload all of the processes
pm2 restart simon-react --update-env	Reload process and update the node version to the current environment definition
pm2 update	Reload pm2
pm2 start env.js --watch --ignore-watch="node_modules"	Automatically reload service when index.js changes
pm2 describe simon	Describe detailed process information
pm2 startup	Displays the command to run to keep PM2 running after a reboot.
pm2 logs simon	Display process logs
pm2 env 0	Display environment variables for process. Use ls to get the process ID
Registering a new web service
If you want to setup another subdomain that accesses a different web service on your web server, you need to follow these steps.

Add the rule to the Caddyfile to tell it how to direct requests for the domain.
Create a directory and add the files for the web service.
Configure PM2 to host the web service.
Modify Caddyfile
SSH into your server.

Copy the section for the start up subdomain and alter it so that it represents the desired subdomain and give it a different port number that is not currently used on your server. For example:

tacos.cs260.click {
  reverse_proxy _ localhost:5000
  header Cache-Control none
  header -server
  header Access-Control-Allow-Origin *
}
This tells Caddy that when it gets a request for tacos.cs260.click it will act as a proxy for those requests and pass them on to the web service that is listening on the same machine (localhost), on port 5000. The other settings tell Caddy to return headers that disable caching, hide the fact that Caddy is the server (no reason to tell hackers anything about your server), and to allow any other origin server to make endpoint requests to this subdomain (basically disabling CORS). Depending on what your web service does you may want different settings.

Restart Caddy to cause it to load the new settings.

sudo service caddy restart
Now Caddy will attempt to proxy the requests, but there is no web service listening on port 5000 and so you will get an error from Caddy if you make a request to tacos.cs260.click.

Create the web service
Copy the ~/services/startup directory to a directory that represents the purpose of your service. For example:

cp -r ~/services/startup ~/services/tacos

If you list the directory you should see an index.js file that is the main JavaScript file for your web service. It has the code to listen on the designated network port and respond to requests. The following is the JavaScript that causes the web service to listen on a port that is provided as an argument to the command line.

const port = process.argv.length > 2 ? process.argv[2] : 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
There is also a directory named public that has static HTML/CSS/JavaScript files that your web service will respond with when requested. The index.js file enables this with the following code:

app.use(express.static('public'));
You can start up the web service, listening on port 5000, using Node as follows.

node index.js 5000
You can now access your web service through the browser, or curl.

curl https://tacos.cs260.click
Caddy will receive the request and map the subdomain name, tacos.cs260.click, to a request for https://localhost:5000. Your web service is listening on port 5000 and so it receives the request and responds.

Stop your web service by pressing CTRL-C in the SSH console that you used to start the service. Now your browser request for your subdomain should return an error again.

Configure PM2 to host the web service
The problem with running your web service from the console with node index.js 5000, is that as soon as you close your SSH session it will terminate all processes you started in that session, including your web service. Instead you need something that is always running in the background to run your web service. This is where daemons come into play. The daemon we use to do this is called PM2.

From your SSH console session run:

pm2 ls
This will list the web services that you already have registered with PM2. To run your newly created web service under PM2, make sure you are in your service directory, and run the command similar to the following, with the service name and port substituted to your desired values:

cd ~/services/tacos
pm2 start index.js -n tacos -- 5000
pm2 save
If you run pm2 ls again you should see your web service listed. You can now access your subdomain in the browser and see the proper response. PM2 will keep running your service even after you exit your SSH session.
       
UI TESTING: Test driven development (TDD) is a proven methodology for accelerating application creation, protecting against regression bugs, and demonstrating correctness. TDD for console based applications and server based code is fairly straight forward. Web application UI code is significantly more complex to test, and using automated tests to drive your UI development is even more difficult.

The problem is that a browser is required to execute UI code. That means you have to actually test the application in the browser. Additionally, every one of the major browsers behaves slightly differently, viewport size makes a big difference, all the code executes asynchronously, network disruptions are common, and then there is the human factor. A human will interact with the browser in very unexpected ways. Clicking where they shouldn't, clicking rapidly, randomly refreshing the browser, flushing cache, not flushing cache, leaving the application up for days on end, switching between tabs, opening the application multiple times, logging in on different tabs, logging out of one tab while still using the application on another tab, or ... on and on. And we haven't even talked about running all the different browsers on all of the possible devices.

Of course the alternative to not test your code doesn't work either. That only means that you have to manually test everything every time you make any change, or you let your users test everything. That is not a good recipe for long term success.

Fortunately this is a problem that many strong players have been working on for decades now, and the solutions, while not perfect, are getting better and better. We will look at two of these solutions. One is for executing automated tests in the browser, and the other is for testing on different browsers and devices.

Automating the browser - Playwright
📖 Deeper dive reading: Playwright and VS Code

No one understands the difficulty of testing applications in a browser better than the companies that build web browsers. They have to test every possible use of HTML, CSS, and JavaScript that a user could think of. There is no way that manual testing is going to work and so early on they started putting hooks into their browsers that allowed them to be driven from automated external processes. Selenium was introduced in 2004 as the first popular tool to automate the browser. However, Selenium is generally considered to be flaky and slow. Flakiness means that a test fails in unpredictably, unreproducible, ways. When you need thousands of tests to pass before you can deploy a new feature, even a little flakiness becomes a big problem. If those tests take hours to run then you have an even bigger problem.

The market now has lots of alternatives when considering which automated browser framework to use. State of JS includes statistics on how popular these frameworks are. With frameworks coming and going all of the time, one telling statistic is the frameworks ability to retain users.

State of JS testing

— Retention of browser based testing frameworks (Source: 2021.stateofjs.com)

For the purposes of this instruction, we could pick any of the top contenders. However, we are going to pick a newcomer, Playwright. Playwright has some major advantages. It is backed by Microsoft, it integrates really well with VS Code, and it runs as a Node.js process. It is also considered one of the least flaky of the testing frameworks.

As a demonstration of using Playwright, consider the following simplified HTML file containing a button that changes the paragraph text. The button calls a JavaScript function defined in a script element located in the HTML file.

<body>
  <p id="welcome" data-testid="msg">Hello world</p>
  <button onclick="changeWelcome()">change welcome</button>
  <script>
    function changeWelcome() {
      const welcomeEl = document.querySelector('#welcome');
      welcomeEl.textContent = 'I feel welcomed';
    }
  </script>
</body>
First, you need to install Playwright. In your project directory, use NPM to download the playwright packages, install the browser drivers, configure your project, and create a couple example test files.

npm init playwright@latest
Next, you want to install the Playwright extension for VS Code. Go to the extensions tab in VS Code and search for, and install, Playwright Test for VSCode.

You can now write your first Playwright test. Take the following and paste it over the tests/example.spec.js file that the Playwright install created.

import { test, expect } from '@playwright/test';

test('testWelcomeButton', async ({ page }) => {
  // Navigate to the welcome page
  await page.goto('http://localhost:5500/');

  // Get the target element and make sure it is in the correct starting state
  const hello = page.getByTestId('msg');
  await expect(hello).toHaveText('Hello world');

  // Press the button
  const changeBtn = page.getByRole('button', { name: 'change welcome' });
  await changeBtn.click();

  // Expect that the change happened correctly
  await expect(hello).toHaveText('I feel not welcomed');
});
This test makes sure you can successfully navigate to the desired page, that the page contains the desired elements, that you can press the button and the text changes as expected.

Before you run the test, you actually need your application running for the test to execute against. You can do this by using the VS Code Live Server extension, or if you are testing a Node.js based service then run npm run start. You can actually add configuration to your tests so that your application is started when your tests run, but for now, just start up your application before you run the test.

To run the test in VS Code, select the Test Explorer tab. You should see your test listed in the explorer. Select the example.spec.ts test and press the play button. This will start the test, launch a browser, run the test code to interact with the browser, and display the result. In this case our test fails because it is expecting the resulting test to be I feel not welcomed when it actually displays I feel welcomed.

The following image should be similar to what you see. You can see the listing of tests on the left and the JavaScript based test in the editor window on the right. When a test fails the editor window displays a clear description of what went wrong. You can even debug the tests as they execute just like you would any other Node.js based JavaScript execution.

Playwright

You can fix the test by either changing index.html or test/example.spec.js so that the text matches. Once you have done that you can run the test again and the test explorer should display a green check box.

This is just a simple example of the powerful functionality of Playwright. You are encouraged to explore its functionality and even add some tests to your projects. Once you have gained some competency with Playwright you will find that you can write your code faster and feel more confident when changing things around.

Testing various devices - Browser Stack
With the ability to run automated UI tests, we now turn our attention to testing on the multitude of various devices. There are several services out there that help with this. One of these is BrowserStack. BrowserStack lets you pick from a long list of physical devices that you can run interactively, or use when driving automated tests with Selenium. The image below only shows a partial list of iPhone devices. BrowserStack also has devices for Android, Mac, and Windows.

BrowserStack devices

When you launch a device it connects the browser interface to a physical device hosted in a data center. You can then use the device to reproduce user reported problems, or validate that your implementation works on that specific device. The following image shows the use of BrowserStack to experiment with an iPhone 14 running iOS 16.

BrowserStack iPhone

BrowserStack offers free trials if you would like to see how your start up application works on a specific device.
       
ENDPOINT TESTING: Using test driven development (TDD) for testing service endpoints is a common industry practice. Testing services is usually easier than writing UI tests because it does not require a browser. However, it does still take effort to learn how to write tests that are effective and efficient. Making this a standard part of your development process will give you a significant advantage as you progress in your professional career.

As demonstrated by the following State of JS survey, there are lots of good testing packages that work well with Express driven services. We are going to look at the current champion Jest.

State of JS Testing

To get started with Jest we need a simple web service. In a console window, create a test directory, install Express, and open up VS Code.

mkdir testJest
cd testJest
npm init -y
npm install express
code .
Now create a file named server.js and use Express to create an application with two endpoints. One to get a store (getStore), and another to update a store.

server.js

const express = require('express');
const app = express();

app.use(express.json());

// Endpoints
app.get('/store/:storeName', (req, res) => {
  res.send({ name: req.params.storeName });
});

app.put('/store/:storeName', (req, res) => {
  req.body.updated = true;
  res.send(req.body);
});

module.exports = app;
In order to allow Jest to start up the HTTP server when running tests, we initialize the application a little bit differently than we have in the past. Normally, we would have just started listening on the Express app object after we defined our endpoints. Instead we export the Express app object from our server.js file and then import the app object in the index.js file that is used to run our service.

index.js

const app = require('./server');

const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
Breaking apart the definition of the service from the starting of the service allows us to start the service both when we run normally and also when using our testing framework.

Jest endpoint requests

You can test that the service is working properly by running the service in the VS Code debugger and pressing F5 while viewing the index.js file. Then open a browser and navigate to http://localhost:8080/store/provo. Stop the debugging session once you have demonstrated that the service is working correctly.

To launch the service using Jest we create another file that has a suffix of .test.js. Any file with that suffix is considered a testing file and will automatically be discovered by Jest and examined for tests to run.

A simple test
Before we write tests for our endpoints we will write a simple test that demonstrates how Jest works. A test is created by calling the Jest test function. Note that you don't need to include a require statement to import Jest functions into your code. Jest will automatically import itself when it discovers a test file.

Let's make our first test by creating a file named store.test.js and pasting in the following code.

store.test.js

test('that equal values are equal', () => {
  expect(false).toBe(true);
});
The test function takes a description as the first parameter. The description is meant to be human readable. In this case it reads: "test that equal values are equal". The second parameter is the function to call. Our function just calls the Jest expect function and chains it to the toBe function. You can read this as "expect false to be true", which is of course is not true, but we want to see our test fail the first time we run it. We will fix this later so that we can show what happens when a test succeeds.

In order to run the test we need to install the Jest package using NPM. From the console install the package. The -D parameter tells NPM to install Jest as a development package. That keeps it from being included when we do production release builds.

npm install jest -D
Now, replace the scripts section of the package.json file with a new command that will run our tests with Jest.

"scripts": {
  "test": "jest"
},
With that in place we can run the test command and our test will execute. Notice that Jest shows exactly where the test failed and what expected values were not received.

➜ npm run test

 FAIL  ./store.test.js
  ✕ that unequal values are not equal (1 ms)

  ● that unequal values are not equal

    expect(received).toBe(expected) // Object.is equality

    Expected: true
    Received: false

      3 |
      4 | test('that unequal values are not equal', () => {
    > 5 |   expect(false).toBe(true);
        |                 ^
      6 | });
      7 |
      8 | // describe('endpoints', () => {

      at Object.toBe (store.test.js:5:17)

Tests:       1 failed, 1 total
We can then fix our test by rewriting it so that the expected value matches the provided value.

store.test.js

test('that equal values are equal', () => {
  expect(true).toBe(true);
});
This time when we run the test it passes.

➜  npm run test

 PASS  ./store.test.js
  ✓ that equal values are equal (1 ms)

Tests:       1 passed, 1 total
Note that this example didn't actually test any of our code, but it does demonstrate how easy it is to write tests. A real test function would call code in your program. Let's do this by actually making calls to our endpoints.

Testing endpoints
To test our endpoints we need another package so that we can make HTTP requests without having to actually send them over the network. This is done with the NPM package called supertest. Go ahead and install this now.

npm install supertest -D
We can then alter store.test.js to import our Express service and also the request function from supertest that we will use to make HTTP requests.

To make an HTTP request you pass the Express app to the supertest request function and then chain on the HTTP verb function that you want to call, along with the endpoint path. You can then chain on as many expect functions as you would like. In the following example we will expect an HTTP status code of 200 (OK), and that the body of the response contains the object that we expect the endpoint to return.

If something goes wrong, the end function will contain an error and we pass the error along to the done function. Otherwise we just call done without the error.

store.test.js

const request = require('supertest');
const app = require('./server');

test('getStore returns the desired store', (done) => {
  request(app)
    .get('/store/provo')
    .expect(200)
    .expect({ name: 'provo' })
    .end((err) => (err ? done(err) : done()));
});
When we run this test we see that it passes without error.

➜  npm run test

 PASS  ./store.test.js
  ✓ getStore returns the desired store (16 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.237 s, estimated 1 s
You can change the test to expect a status code of 500 (Server Error) if you want to see the test fail. You can also change the endpoint code to return a 201 status code (Created) and also see the test fail.

Now We can add a test for the updateStore endpoint. To do this we can copy the getStore endpoint, change the description, change the HTTP function verb to put, and send the body of the put request using the chained send function.

const request = require('supertest');
const app = require('./server');

test('updateStore saves the correct values', (done) => {
  request(app)
    .put('/store/provo')
    .send({ items: ['fish', 'milk'] })
    .expect(200)
    .expect({ items: ['fish', 'milk'], updated: true })
    .end((err) => (err ? done(err) : done()));
});

test('getStore returns the desired store', (done) => {
  request(app)
    .get('/store/provo')
    .expect(200)
    .expect({ name: 'provo' })
    .end((err) => (err ? done(err) : done()));
});
The great thing about test driven development (TDD) is that you can actually write your tests first and then write your code based upon the design represented by the tests. When your tests pass you know your code is complete. Additionally, when you make later modifications to your code you can simply run your tests again. If they pass then you can be confident that your code is still working without having to manually test everything yourself. With systems that have hundreds of endpoints and hundreds of thousands of lines of code, TDD becomes an indispensible part of the development process.
       
SIMON SERVICE: This deliverable demonstrates converting the JavaScript application into a web application by implementing a web service that listens on a network port for HTTP requests. The web service provide endpoints for getting and updating the scores. The application also uses a couple third party endpoints to display inspirational quotes on the about page and show a random header image.

We will use Node.js and Express to create our HTTP service.

You can view this application running here: Example Simon Service

Simon Service

Service endpoint definitions
Here is our design, documented using curl commands, for the two endpoints that the Simon web service provides.

GetScores - Get the latest high scores.

curl -X GET /api/scores

#Response
{ "scores":[
  {"name":"Harvey", "score":"337", "date":"2022/11/20"},
  {"name":"도윤 이", "score":"95", "date":"2019/05/20"}
]}
SubmitScore - Submit a score for consideration in the list of high scores.

curl -X POST /api/score -d '{"name":"Harvey", "score":"337", "date":"2022/11/20"}'

#Response
{ "scores":[
  {"name":"Harvey", "score":"337", "date":"2022/11/20"},
  {"name":"도윤 이", "score":"95", "date":"2019/05/20"}
]}
Third party endpoints
The about.js file contains code for making calls to third party endpoints using fetch. We make one call to picsum.photos to get a random picture and another to quotable.io to get a random quote. Once the endpoint asynchronously returns, the DOM is updated with the requested data. Here is an example of the quote endpoint call.

function displayQuote(data) {
  fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then((data) => {
      const containerEl = document.querySelector('#quote');

      const quoteEl = document.createElement('p');
      quoteEl.classList.add('quote');
      const authorEl = document.createElement('p');
      authorEl.classList.add('author');

      quoteEl.textContent = data.content;
      authorEl.textContent = data.author;

      containerEl.appendChild(quoteEl);
      containerEl.appendChild(authorEl);
    });
}
Steps to convert Simon to a service
Converting Simon to a service involved the following steps.

Move all the previous deliverable code files (_.html, _.js, *.css, favicon.ico, and assets) into a sub-directory named public. We will use the HTTP Node.js based service to host the front-end application files. This is done with the static file middleware that we will add our service index.js.

app.use(express.static('public'));
When running our service the static file middleware takes care of reading the front-end code from the public directory and returning it to the browser. The service only directly handles the endpoint requests.

Simon service

Within the project directory run npm init -y. This configures the directory to work with node.js.

Modify or create .gitignore to ignore node_modules.

Install the Express package by running npm install express. This will write the Express package dependency in the package.json file and install all the Express code to the node_modules directory.

Create a file named index.js in the root of the project. This is the entry point that node.js will call when you run your web service.

Add the basic Express JavaScript code needed to host the application static content and the desired endpoints.

const express = require('express');
const app = express();

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

// GetScores
apiRouter.get('/scores', (_req, res) => {
  res.send(scores);
});

// SubmitScore
apiRouter.post('/score', (req, res) => {
  scores = updateScores(req.body, scores);
  res.send(scores);
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
Modify the Simon application code to make service endpoint requests to our newly created HTTP service code.

async function loadScores() {
  const response = await fetch("/api/scores")
  const scores = await response.json()

  // Modify the DOM to display the scores
       
STORAGE SERVICES: Web applications commonly need to store files associated with the application or the users of the application. This includes files such as images, user uploads, documents, and movies. Files usually have an ID, some metadata, and the bytes representing the file itself. These can be stored using a database service, but usually that is overkill and a simpler solution will be cheaper.

It might be tempting to store files directly on your server. This is usually a bad idea for several reasons.

Your server has limited drive space. If you server runs out of drive space your entire application will fail.
You should consider your server as being ephemeral, or temporary. It can be thrown away and replaced by a copy at any time. If you start storing files on the server, then your server has state that cannot be easily replaced.
You need backup copies of your application and user files. If you only have one copy of your files on your server, then they will disappears when your server disappears, and you must always assume that your server will disappear.
Instead you want to use a storage service that is specifically designed to support production storage and delivery of files.

AWS S3
There are many such solutions out there, but one of the most popular ones is AWS S3. S3 provides the following advantages:

It has unlimited capacity
You only pay for the storage that you use
It is optimized for global access
It keeps multiple redundant copies of every file
You can version the files
It is performant
It supports metadata tags
You can make your files publicly available directly from S3
You can keep your files private and only accessible to your application
In this course we will not be using an storage services for the Simon project. If however, you want to use S3 as the storage service for your Start Up application then you need to learn how to use the AWS SDK. You can find detailed information about using AWS S3 with Node.js on the AWS website. Generally, the steps you need to take include:

Creating a S3 bucket to store your data in.
Getting credentials so that your application can access the bucket.
Using the credentials in your application.
Using the SDK to write, list, read, and delete files from the bucket.
⚠ Make sure that you do not include your credentials in your code. If you check your credentials into your GitHub repository they will immediately be stolen and used by hackers to take over your AWS account. This may result in significant monetary damage to you.
       
DATA SERVICES: Web applications commonly need to store application and user data persistently. The data can be many things, but it is usually a representation of complex interrelated objects. This includes this like a user profile, organizational structure, game play information, usage history, billing information, peer relationship, library catalog, and so forth.

Data service

Historically SQL databases have served as the general purpose data service solution, but starting around 2010 specialty data services that better support document, graph, JSON, time, sequence, and key-value pair data began to take significant roles in applications from major companies. These data services are often called NoSQL solutions because they do not use the general purpose relational database paradigms popularized by SQL databases. However, they all have very different underlying data structures, strengths, and weaknesses. That means that you should not simply split all of the possible data services into two narrowly defined boxes, SQL and NoSQL, when you are considering the right data service for your application.

Here is a list of some of the popular data services that are available.

Service	Specialty
MySQL	Relational queries
Redis	Memory cached objects
ElasticSearch	Ranked free text
MongoDB	JSON objects
DynamoDB	Key value pairs
Neo4J	Graph based data
InfluxDB	Time series data
MongoDB
MongoDB logo

For the projects in this course that require data services, we will use MongoDB. Mongo increases developer productivity by using JSON objects as its core data model. This makes it easy to have an application that uses JSON from the top to the bottom of the technology stack. A mongo database is made up of one or more collections that each contain JSON documents. You can think of a collection as a large array of JavaScript objects, each with a unique ID. The following is a sample of a collection of houses that are for rent.

[
  {
    _id: '62300f5316f7f58839c811de',
    name: 'Lovely Loft',
    summary: 'A charming loft in Paris',
    beds: 1,
    last_review: {
      $date: '2022-03-15T04:06:17.766Z',
    },
    price: 3000,
  },
  {
    _id: '623010b97f1fed0a2df311f8',
    name: 'Infinite Views',
    summary: 'Modern home with infinite views from the infinity pool',
    property_type: 'House',
    beds: 5,
    price: 250,
  },
];
Unlike relational databases that require a rigid table definition where each column must be strictly typed and defined beforehand, Mongo has no strict schema requirements. Each document in the collection usually follows a similar schema, but each document may have specialized fields that are present, and common fields that are missing. This allows the schema of a collection to morph organically as the data model of the application evolves. To add a new field to a Mongo collection you just start insert the field into the documents as desired. If the field is not present, or has a different type in some documents, then the document simply doesn't match the query criteria when the field is referenced.

The query syntax for Mongo also follow a JavaScript inspired flavor. Consider the following queries on the houses for rent collection that was shown above.

// find all houses
db.house.find();

// find houses with two or more bedrooms
db.house.find({ beds: { $gte: 2 } });

// find houses that are available with less than three beds
db.house.find({ status: 'available', beds: { $lt: 3 } });

// find houses with either less than three beds or less than $1000 a night
db.house.find({ $or: [(beds: { $lt: 3 }), (price: { $lt: 1000 })] });

// find houses with the text 'modern' or 'beach' in the summary
db.house.find({ summary: /(modern|beach)/i });
Using MongoDB in your application
📖 Deeper dive reading: MongoDB tutorial

The first step to using Mongo in your application is to install the mongodb package using NPM.

➜ npm install mongodb
With that done you then use the MongoClient object to make a client connection to the database server. This requires a username, password, and the hostname of the database server.

const { MongoClient } = require('mongodb');

const userName = 'holowaychuk';
const password = 'express';
const hostname = 'mongodb.com';

const uri = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(uri);
With the client connection you can then get a database object and from that a collection object. The collection object allows you to insert, and query for, documents. You do not have to do anything special to insert a JavaScript object as a Mongo document. You just call the insertOne function on the collection object and pass it the JavaScript object. When you insert a document, if the database or collection does not exists, Mongo will automatically create them for you. When the document is inserted into the collection it will automatically be assigned a unique ID.

const collection = client.db('rental').collection('house');

const house = {
  name: 'Beachfront views',
  summary: 'From your bedroom to the beach, no shoes required',
  property_type: 'Condo',
  beds: 1,
};
await collection.insertOne(house);
To query for documents you use the find function on the collection object. Note that the find function is asynchronous and so we use the await keyword to wait for the promise to resolve before we write them out to the console.

const cursor = collection.find();
const rentals = await cursor.toArray();
rentals.forEach((i) => console.log(i));
If you do not supply any parameters to the find function then it will return all documents in the collection. In this case we only get back the single document that we previously inserted. Notice that the automatically generated ID is returned with the document.

Output

[
  {
    _id: new ObjectId('639a96398f8de594e198fc13'),
    name: 'Beachfront views',
    summary: 'From your bedroom to the beach, no shoes required',
    property_type: 'Condo',
    beds: 1,
  },
];
You can provide a query and options to the find function. In the example below we query for a property_type of Condo that has less than two bedrooms. We also specify the options to sort by descending price, and limit our results to the first 10 documents.

const query = { property_type: 'Condo', beds: { $lt: 2 } };

const options = {
  sort: { price: -1 },
  limit: 10,
};

const cursor = collection.find(query, options);
const rentals = await cursor.toArray();
rentals.forEach((i) => console.log(i));
The query matches the document that we previously inserted and so we get the same result as before.

There is a lot more functionality that MongoDB provides, but this is enough to get you started. If you are interested you can explore the tutorials on their website.

Managed services
Historically each application development team would have developers that managed the data service. Those developers would acquisition hardware, install the database software, monitor the memory, cpu, and disk space, control the data schema, and handle migrations and upgrades. Much of this work has now moved to services that are hosted and managed by a 3rd party. This relieves the development team from much of the day to day maintenance. The team can instead focus more on the application and less on the infrastructure. With a managed data service you simply supply the data and the service grows, or shrinks, to support the desired capacity and performance criteria.

MongoDB Atlas
All of the major cloud providers offer multiple data services. For this class we will use the data service provided by MongoDB called Atlas. No credit card or payment is required to setup and use Atlas, as long as you stick to the shared cluster environment.

Mongo sign up

⚠ This video tutorial will step you through the process of creating your account and setting up your database. You really want to watch this video. Note that some of the Atlas website interface may be slightly different, but the basic concepts should all be there is some shape or form. The main steps you need to take are:

Create your account.
Create a database cluster.
Create your root database user credentials. Remember these for later use.
⚠ Set network access to your database to be available from anywhere. Atlas IP Anywhere
Copy the connection string and use the information in your code.
Save the connection and credential information in your production and development environments as instructed above.
You can always find the connection string to your Atlas cluster by pressing the Connect button from your Database > DataServices view.

Atlas connection string

Keeping your keys out of your code
You need to protect your credentials for connecting to your Mongo database. One common mistake is to check them into your code and then post it to a public GitHub repository. Instead you can load your credentials when the application executes. One common way to do that is to read them from environment variables. The JavaScript process.env object provides access to the environment.

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

if (!userName) {
  throw Error("Database not configured. Set environment variables");
}
Following this pattern requires you to set these variables in your development and production environments before you can successfully execute.

Setting environment variables for your production environment
For your production environment, you will add your MongoDB Atlas credentials by using SSH to your server.

➜  ssh -i [key pair file] ubuntu@[yourdomainnamehere]
for example,

➜  ssh -i ~/keys/production.pem ubuntu@myfunkychickens.click
Then open up the global environment settings file /etc/environment.

sudo vi /etc/environment
In the environment file you will find that the credentials are already set to access the class demo MongoDB server. You want to replace those values with your own values so that your data will be stored in your server.

export MONGOUSER=<yourmongodbusername>
export MONGOPASSWORD=<yourmongodbpassword>
export MONGOHOSTNAME=<yourmongodbhostname>
When you are done modifying the /etc/environment with your MongoDB username, password, and hostname, save the file. It will look something like the following.

export MONGOUSER=cs260mongo
export MONGOPASSWORD=toomanysecrets
export MONGOHOSTNAME=cs260.nan123cs.mongodb.net
Exit your SSH session and reconnect again so that the environment variables are active in the console window you are using.

You then need to tell your Simon and Start Up services to use the new values found in the environment file. To do this you need to tell our service daemon, PM2, to reload its stored environment for all services that it manages. You then need to tell PM2 to save the new configuration so that it will persist when your server restarts. Run these commands from a SSH session on your production server.

pm2 restart all --update-env
pm2 save
Setting environment variables for your development environment
For your development environment add the same environment variables. Depending on what operating system and console you are using, how you add the variables will be different.

Linux

Modify the /etc/environment file to include the three environment variable export statements as defined above.
Mac

Modify your shell resource file to include three environment variable export statements defined above. If you are using Zsh then the file is: ~/.zshrc. If you are using Bash then the file is: ~/.bashrc.
Windows

From the Start Menu search for "system environment variables" in the search bar
Go to the Advanced Tab
Click on Environment Variables
Under SYSTEM variables click on NEW
Add each variable individually into the variables information and click APPLY and OK
Restart program needing the variables
If necessary consult the documentation for the operating system, or console shell, you are using for the details on how to set environment variables.

Using Mongo from your code
With that all done, you should be good to use Atlas from both your development and production environments. You can test that things are working correctly with the following example.

const { MongoClient } = require('mongodb');

// Read the credentials from environment variables so that you do not accidentally check in your credentials
const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

async function main() {
  // Connect to the database cluster
  const url = `mongodb+srv://${userName}:${password}@${hostname}`;
  const client = new MongoClient(url);
  const collection = client.db('rental').collection('house');

  // Insert a document
  const house = {
    name: 'Beachfront views',
    summary: 'From your bedroom to the beach, no shoes required',
    property_type: 'Condo',
    beds: 1,
  };
  await collection.insertOne(house);

  // Query the documents
  const query = { property_type: 'Condo', beds: { $lt: 2 } };
  const options = {
    sort: { score: -1 },
    limit: 10,
  };

  const cursor = collection.find(query, options);
  const rentals = await cursor.toArray();
  rentals.forEach((i) => console.log(i));
}

main().catch(console.error);
To execute the above example, do the following:

Create a directory called mongoTest
Save the above content to a file named main.js
Run npm init -y
Run npm install mongodb
Run node main.js.
This should output something like the following if everything is working correctly.

{
_id: new ObjectId("639b51b74ef1e953b884ca5b"),
name: 'Beachfront views',
summary: 'From your bedroom to the beach, no shoes required',
property_type: 'Condo',
beds: 1
}
       
This deliverable demonstrates using a database service, MongoDB, to persistently save data. Our web service will call the database service to save high scores. This creates a third layer in our Simon technology stack.

Client application - Simple HTML/CSS/JavaScript
Web service - Caddy, Node.js, Express
Database service - MongoDB
You can view this application running here: Example Simon DB. Although you won't be able to see any difference from the simon-service version, because the only difference is that when the simon-db service is restarted it doesn't lose its high score data because it is saved persistently in the database.

Connecting to the database
We use a cloud service called MongoDB Atlas for our database service. Once we are connected to Atlas, we can make service calls to MongoDB from our web service. This involves specifying the database service endpoint and making services calls like the following.

const { MongoClient } = require('mongodb');

const url = `mongodb+srv://${userName}:${password}@${hostname}`;
const client = new MongoClient(url);
client.connect(err => {
  const collection = client.db("test").collection("devices");

  // ... perform actions on the DB collection

  client.close();
});
Create a MongoDB Atlas cluster
Before you can start writing your own code you need to get a MongoDB Atlas account and create a database cluster that you can use as your database service. If you have not done that yet go back and review the instruction on data services.

Handling credentials
Make sure you follow the instruction given previously about providing and protecting your MongoDB credentials using environment variables.

Working with the database
The database.js file contains the functions for getting and adding high scores. The database functions are called from the getScores and submitScores endpoints found in index.js.
       
AUTHORIZATION SERVICES: If your application is going to remember a user's data then it will need a way to uniquely associate the data with a particular credential. That usually means that you authenticate a user by asking for information, such as an email address and password. You then remember, for some period of time, that the user has authenticated by storing an authentication token on the user's device. Often that token is stored in a cookie that is passed back to your web service on each request. The service can now associate data that the user supplies with a unique identifier that corresponds to their authorization token.

authentication

Determining what a user is authorized to do in your application is also important. For example, you might have different roles in your application such as Administrators, Editors, and Customers. Once you have the ability to authenticate a user and store information about that user, you can also store the authorization for the user. A simple application might have a single field that represents the role of the user. The service code would then use that role to allow, limit, or prevent what a service endpoint does. A complex web application will usually have very powerful authorization representation that controls the user's access to every part of the application. For example, an Editor role might have authorization only to work on content that they created or were invited to.

authorize

As you might imagine, authentication and authorization can become very complex, very quickly. It is also a primary target for a hacker. If they can bypass the authentication or escalate what they are authorized to do then they can gain control of your application. Additionally, constantly forcing users to authenticate in a secure way causes users to not want to use an application. This creates opposing priorities. Keep the system secure or make it easy to use.

In an attempt to remove the complexity of authentication and authorization from your application many service providers and package developers have created solutions that you can use. Assuming that you are using a trusted, well tested, service this is an attractive option because it removes the cost of building, testing, and managing that critical infrastructure yourself.

Authorization services often use standard protocols for authenticating and authorizing. These include standards such as OAuth, SAML, and OIDC. Additionally, they usually support concepts like Single Sign On (SSO) and Federated Login. Single sign on allows a user to use the same credentials for multiple web applications. For example, you can login into GitHub using your Google credentials. Federated login allows a user to login once and then the authentication token reused to automatically log the user into multiple websites. For example, logging into Gmail allows you to also use Google Docs and YouTube without logging in again.

For this course we will implement our own authentication using a simple a simple email/password design. Knowing how to implement a simple authentication design will help you appreciate what authentication services provide. If you want to experiment with different authorization services you might consider AWS Cognito, or Google Firebase.
       
ACCOUNT CREATION AND LOGIN: The first step towards supporting authentication in your web application is providing a way for users to uniquely identify themselves. This usually requires two service endpoints. One to initially create an authentication credential, and a second to authenticate, or login, on future visits. Once a user is authenticated we can control access to other endpoints. For example, web services often have a getMe endpoint that gives information about the currently authenticated user. We will implement this endpoint to demonstrate that authentication is actually working correctly.

Endpoint design
Using HTTP we can map out the design of each of our endpoints.

Create authentication endpoint
This takes an email and password and returns a cookie containing the authentication token and user ID. If the email already exists it returns a 409 (conflict) status code.

POST /auth/create HTTP/2
Content-Type: application/json

{
  "email":"marta@id.com",
  "password":"toomanysecrets"
}
HTTP/2 200 OK
Content-Type: application/json
Set-Cookie: auth=tokenHere

{
  "id":"337"
}
Login authentication endpoint
This takes an email and password and returns a cookie containing the authentication token and user ID. If the email does not exist or the password is bad it returns a 401 (unauthorized) status code.

POST /auth/login HTTP/2
Content-Type: application/json

{
  "email":"marta@id.com",
  "password":"toomanysecrets"
}
HTTP/2 200 OK
Content-Type: application/json
Set-Cookie: auth=tokenHere

{
  "id":"337"
}
GetMe endpoint
This uses the authentication token stored in the cookie to look up and return information about the authenticated user. If the token or user do not exist it returns a 401 (unauthorized) status code.

GET /user/me HTTP/2
Cookie: auth=tokenHere
HTTP/2 200 OK
Content-Type: application/json

{
  "email":"marta@id.com"
}
Web service
With our service endpoints designed, we can now build our web service using Express.

const express = require('express');
const app = express();

app.post('/auth/create', async (req, res) => {
  res.send({ id: 'user@id.com' });
});

app.post('/auth/login', async (req, res) => {
  res.send({ id: 'user@id.com' });
});

const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
Follow these steps, and then add in the code from the sections that follow. There is a copy of the final version of the example at the end of this instruction. If you get lost, or things are not working as expected, refer to the final version.

Create a directory called authTest that we will work in.

Save the above content to a file named main.js. This is our starting web service.

Run npm init -y to initial the project to work with node.js.

Run npm install express cookie-parser mongodb uuid bcrypt to install all of the packages we are going to use.

Run node main.js or press F5 in VS Code to start up the web service.

You can now open a console window and use curl to try out one of the endpoints.

➜  curl -X POST localhost:8080/auth/create

{"id":"user@id.com"}
Handling requests
With our basic service created, we can now implement the create authentication endpoint. The first step is to read the credentials from the body of the HTTP request. Since the body is designed to contain JSON we need to tell Express that it should parse HTTP requests, with a content type of application/json, automatically into a JavaScript object. We do this by using the express.json middleware. We can then read the email and password directly out of the req.body object. We can test that this is working by temporarily including them in the response.

app.use(express.json());

app.post('/auth/create', (req, res) => {
  res.send({
    id: 'user@id.com',
    email: req.body.email,
    password: req.body.password,
  });
});
➜  curl -X POST localhost:8080/auth/create -H 'Content-Type:application/json' -d '{"email":"marta@id.com", "password":"toomanysecrets"}'

{"id":"user@id.com","email":"marta@id.com","password":"toomanysecrets"}
Now that we have proven that we can parse the request bodies correctly, we can change the code to add a check to see if we already have a user with that email address. If we do, then we immediately return a 409 (conflict) status code. Otherwise we create a new user and return the user ID.

app.post('/auth/create', async (req, res) => {
  if (await getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.email, req.body.password);
    res.send({
      id: user._id,
    });
  }
});
Using the database
We want to persistently store our users in Mongo and so we need to set up our code to connect to and use the database. This code is explained in the instruction on data services if you want to review what it is doing.

const { MongoClient } = require('mongodb');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

const url = `mongodb+srv://${userName}:${password}@${hostname}`;
const client = new MongoClient(url);
const collection = client.db('authTest').collection('user');
With a Mongo collection object we can implement the getUser and createUser functions.

function getUser(email) {
  return collection.findOne({ email: email });
}

async function createUser(email, password) {
  const user = {
    email: email,
    password: password,
    token: 'xxx',
  };
  return collection.insertOne(user);
}
But, we are missing a couple of things. We need to a real authentication token, and we cannot simply store a clear text password in our database.

Generating authentication tokens
To generate a reasonable authentication token we use the uuid package. UUID stands for Universally Unique Identifier, and it does a really good job creating a hard to guess, random, unique ID.

const uuid = require('uuid');

token: uuid.v4();
Securing passwords
Next we need to securely store our passwords. Failing to do so is a major security concern. If, and it has happened to many major companies, a hacker is able to access the database, they will have the passwords for all of your users. This may not seem like a big deal if your application is not very valuable, but users often reuse passwords. That means you will also provide the hacker with the means to attack the user on many other websites.

So instead of storing the password directly, we want to cryptographically hash the password so that we never store the actual password. When we want to validate a password during login, we can hash the login password and compare it to our stored hash of the password.

To hash our passwords we will use the bcrypt package. This creates a very secure one way hash of the password. If you are interested in understanding how bcrypt works, it is definitely worth the time.

const bcrypt = require('bcrypt');

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await collection.insertOne(user);

  return user;
}
Passing authentication tokens
We now need to pass our generated authentication token to the browser when the login endpoint is called, and get it back on subsequent requests. To do this we use HTTP cookies. The cookie-parser package provides middleware for cookies and so we will leverage that.

We import the cookieParser object and then tell our app to use it. When a user is successfully created, or logs in, we set the cookie header. Since we are storing an authentication token in the cookie we want to make it as secure as possible, and so we use the httpOnly, secure, and sameSite options.

httpOnly tells the browser to not allow JavaScript running on the browser to read the cookie.
secure requires HTTPS to be used when sending the cookie back to the server.
sameSite will only return the cookie to the domain that generated it.
const cookieParser = require('cookie-parser');

// Use the cookie parser middleware
app.use(cookieParser());

apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.email, req.body.password);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

function setAuthCookie(res, authToken) {
  res.cookie('token', authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}
Login endpoint
The login authorization endpoint needs to get the hashed password from the database, compare it to the provided password using bcrypt.compare, and if successful set the authentication token in the cookie. If the password does not match, or there is no user with the given email, the endpoint returns status 401 (unauthorized).

app.post('/auth/login', async (req, res) => {
  const user = await getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});
GetMe endpoint
With everything in place to create credentials and login using the credentials, we can now implement the getMe endpoint to demonstrate that it all actually works. To implement this we get the user object from the database by querying on the authentication token. If there is not an authentication token, or there is no user with that token, we return status 401 (unauthorized).

app.get('/user/me', async (req, res) => {
  authToken = req.cookies['token'];
  const user = await collection.findOne({ token: authToken });
  if (user) {
    res.send({ email: user.email });
    return;
  }
  res.status(401).send({ msg: 'Unauthorized' });
});
Final code
Here is the full example code.

const { MongoClient } = require('mongodb');
const uuid = require('uuid');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

const url = `mongodb+srv://${userName}:${password}@${hostname}`;
const client = new MongoClient(url);
const collection = client.db('authTest').collection('user');

app.use(cookieParser());
app.use(express.json());

// createAuthorization from the given credentials
app.post('/auth/create', async (req, res) => {
  if (await getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.email, req.body.password);
    setAuthCookie(res, user.token);
    res.send({
      id: user._id,
    });
  }
});

// loginAuthorization from the given credentials
app.post('/auth/login', async (req, res) => {
  const user = await getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// getMe for the currently authenticated user
app.get('/user/me', async (req, res) => {
  authToken = req.cookies['token'];
  const user = await collection.findOne({ token: authToken });
  if (user) {
    res.send({ email: user.email });
    return;
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

function getUser(email) {
  return collection.findOne({ email: email });
}

async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);
  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await collection.insertOne(user);

  return user;
}

function setAuthCookie(res, authToken) {
  res.cookie('token', authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
Experiment
With everything implemented we can use curl to try it out. First start up the web service from VS Code by pressing F5 and selecting node.js as the debugger if you have not already done that. You can set breakpoints on all of the different endpoints to see what they do and inspect the different variables. Then open a console window and run the following curl commands. You should see similar results as what is shown below. Note that the -c and -b parameters tell curl to store and use cookies with the given file.

➜  curl -X POST localhost:8080/auth/create -H 'Content-Type:application/json' -d '{"email":"지안@id.com", "password":"toomanysecrets"}'

{"id":"639bb9d644416bf7278dde44"}


➜  curl -c cookie.txt -X POST localhost:8080/auth/login -H 'Content-Type:application/json' -d '{"email":"지안@id.com", "password":"toomanysecrets"}'

{"id":"639bb9d644416bf7278dde44"}


➜  curl -b cookie.txt localhost:8080/user/me

{"email":"지안@id.com"}
       
This deliverable demonstrates authenticating users and storing credentials and authentication tokens in MongoDB.

You can view this application running here: Example Simon Login

Simon Login

Authorization UI
The public/index.html, public/login.js, and public/login.css files provide all the login UI. Bootstrap provides the styling for the controls.

When index.html is loaded an anonymous function in login.js determines if the user is already authenticated and uses that state to hide or show the login controls.

When a user logs in, logs out, or creates credentials the service endpoints are called.

Authorization cookie
The application service uses a secure cookie to store the authorization token for an authenticated user.

function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}
Note the use of secure, httpOnly, and sameSite. Make sure you are familiar with what each of these mean.

When a user is logged in, the cookie is added. When a user makes a secure request, the cookie is checked. When the user logs out, the cookie is removed.

Application service endpoints
The service endpoints are contained in index.js. The endpoints include authCreate, authLogin, authLogout, and userGet. These all work with the database to store and get credentials and update the authorization cookie.

A new Express router, secureApiRouter wraps the existing router to add a middleware function that verifies that the authorization cookie is valid before passing the request to endpoints that require authorization. That makes it easy to create secure endpoints by just registering them with secureApiRouter.
       
WEB SOCKET: HTTP is based on a client server architecture. A client always initiates the request and the server responds. This is great if you are building a global document library connected by hyperlinks, but for many other use cases it just doesn't work. Applications for notifications, distributed task processing, peer to peer communication, or asynchronous events need communication that is initiated by two or more connected devices.

For years, web developers created hacks to work around the limitation of the client/server model. This included solutions like having the client frequently pinging the server to see if the server had anything to say, or keeping client initiated connections open for a very long time as the client waited for some event to happen on the server. Needless to say, none of these solutions were elegant or efficient.

Finally, in 2011 the communication protocol WebSocket was created to solve this problem. The core feature of WebSocket is that it is fully duplexed. Meaning that after the initial connection is made from a client, using vanilla HTTP, and then upgraded by the server to a WebSocket connection, the relationship changes to a peer to peer connection where either party can efficiently send data at any time.

WebSocket Upgrade

WebSocket connections are still only between two parties. So if you want to facilitate a conversation between a group of users the server must act as the intermediary. Each peer first connects to the server, and then the server forwards messages amongst the peers.

WebSocket Peers

Creating a WebSocket conversation
JavaScript running on a browser can initiate a websocket connection with the browser's WebSocket API. First you create a WebSocket object by specifying the port you want to communicate on.

You can then send messages with the send function, and register a callback using the onmessage function to receive messages.

const socket = new WebSocket('ws://localhost:9900');

socket.onmessage = (event) => {
  console.log('received: ', event.data);
};

socket.send('I am listening');
The server uses the ws package to create a WebSocketServer that is listening on the same port the browser is using. By specifying a port when you create the WebSocketServer you are telling the server to listen for HTTP connections on that port and to automatically upgrade them to a WebSocket connection if the request has a connection: Upgrade header.

When a connection is detected it calls the server's on connection callback. The server can then send messages with the send function, and register a callback using the on message function to receive messages.

const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 9900 });

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    const msg = String.fromCharCode(...data);
    console.log('received: %s', msg);

    ws.send(`I heard you say "${msg}"`);
  });

  ws.send('Hello webSocket');
});
In later instruction we will show you how to run and debug this example.
