import React from 'react';
import LandingLayout from "../Layouts/Landing";

export default function Welcome({ user, title }) {
    return (
        <LandingLayout>
            <h1>Welcome {title}</h1>
            <p>Welcome to your first Inertia app!</p>
        </LandingLayout>
    )
}
