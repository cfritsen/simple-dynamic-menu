import React from 'react';

export default function NoNavMove() {
    return (
        <div class="container">
            <header>
                <h1>No Nav Move</h1>
                <h3>Plain old regular default Nav menu</h3>
            </header>
            <section>
                <p>This page is using the default Nav menu insterted in the base App file. This demonstrates the component's convenience and reusability. Or rather, it demonstrates the power of React and why I made this component using React.</p>
                <p>All StaticTest pages redirect here. Those are just there as an example of dynamically generated submenus.</p>
                <p>There's not much to say here that hasn't already been said on the home page, so there won't be a wall of text here. Feel free to use the menu to check out the cool shifting feature in the WithNavMove section.</p>
            </section>
        </div>
    )
}