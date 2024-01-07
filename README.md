# simple-dynamic-menu
A menu that uses a nested object to dynamically update.

Originally written for use with LightningReborn.com, this is designed as a simple yet scalable navigation menu.
Using an object with nested objects called "Links", "Menu", and "SubMenu", this menu dynamically updates, saving the headache of coding a navigation change every update.

<h3>Organizing Link Data</h3>
The value of "Links" should be an object containing page names as keys, and routing paths as objects.
The values of Menu and SubMenu should be arrays that match desired keys in Links.
Optionally, you can add a Footer object here that matches the Menu format for dynamic footer navigation.
The routing is still hard-coded. Making this update dynamically is a stretch goal of mine.

<h3>How to Use</h3>
The NavMenu component takes two props: linkData and className. 
The default class to pass as a proponent should be 'navbar'. 
'navbar' and 'navbar-right' are functionally the same. The Navbar sticks and can be optionally shifted on stick. Having both classes allows me to hide the main navbar for this.
'navbar-center' puts it in the center. Page-specific code can be implemented to shift from center to right on stick. 
Or, all pages can be set up that way by putting that code in the NavBar component itself.

<h3>Page Specific On Stick Code</h3>
The WithNavMove page has the code to make this work. It ignores className passed as a proponent in favor of changing classes between 'navbar-center' and 'navbar-right'.
A second, unchanging class 'navbar-home' class is added to reliably track the navigation menu through its class changes.
The page-specific navbar is placed under the header. The main navbar must be hidden for this. 
