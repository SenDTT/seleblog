import React from 'react';
import MenuBar from "../Components/MenuBar";

export default function LandingLayout({children}) {
    return (
        <main>
            <header>
                <MenuBar/>
            </header>
            <article>{children}</article>
        </main>
    )
}
