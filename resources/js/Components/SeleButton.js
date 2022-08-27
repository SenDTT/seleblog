import React from 'react';
import {Button, styled} from "@nextui-org/react";

const SeleButton = styled(Button, {
    variants: {
        size: {
            selePrimary: {
                fontWeight: 'bold',
                fontSize: '1.15rem',
                paddingLeft: '1.5rem',
                paddingRight: '1.5rem',
                minWidth: 'min-content'
            }
        },
        color: {
            selePrimary: {
                boxShadow: '2px 2px 2px',
                boxShadowColor: '$mainYellow',
                background: '$mainBlue',
                color: '$mainYellow',
                '&:hover': {
                    opacity: 1,
                }
            }
        }
    }
});

export default SeleButton;
