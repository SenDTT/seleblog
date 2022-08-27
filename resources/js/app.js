import React from 'react';
import { render } from 'react-dom';
import { InertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import {NextUIProvider} from "@nextui-org/react";
import theme from "./sele-theme";

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

InertiaProgress.init({ color: '#4B5563', showSpinner: true });

const app = document.getElementById('app');

render(
    <NextUIProvider theme={theme}>
        <InertiaApp
            initialPage={JSON.parse(app.dataset.page)}
            resolveComponent={name => import(`./Pages/${name}`).then(module => module.default)}
        />
    </NextUIProvider>, app
);
