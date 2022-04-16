import React from 'react';
import { render } from 'react-dom';
import { InertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

InertiaProgress.init({ color: '#4B5563', showSpinner: true });

const app = document.getElementById('app');

render(
    <InertiaApp
        initialPage={JSON.parse(app.dataset.page)}
        resolveComponent={name => {
            console.log(`./Pages/${name}`);
            return import(`./Pages/${name}`).then(module => module.default)
        }}
    />, app
);
