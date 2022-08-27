import React from 'react';
import MenuBar from "../Components/MenuBar";
import {Container} from "@nextui-org/react";

export default function LandingLayout({ children }) {
    return (
        <main>
            <header>
                <Container  fluid="true">
                    <MenuBar />
                </Container>
            </header>
            <article>
                <Container  fluid="true">
                    {children}
                </Container>
            </article>
        </main>
    )
}
