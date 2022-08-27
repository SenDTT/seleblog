import React from 'react';
import {Link, styled} from "@nextui-org/react";

const SeleLink = styled(Link, {
    variants: {
        size: {
            selePrimary: {

            },
            seleBtnPrimary: {

            }
        },
        color: {
            selePrimary: {

            },
            seleBtnPrimary: {
                '&:hover': {
                    opacity: 1,
                }
            }
        }
    }
});

export default SeleLink;
