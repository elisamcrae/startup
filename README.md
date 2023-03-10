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

JS PROJECT:
This project was difficult for me, and I spent a lot of hours trying to figure out how to format my inserted text with javascript as well as how to save and edit variables entered in by the user. However, I was able to find creative solutions to my problems. I am most proud that I was able to make the recipes editable because I struggled even figuring out logically how to do it. I am also happy with how the text is printing out now. I learned that google is my friend, and also how to troubleshoot on the "inspect" option.
