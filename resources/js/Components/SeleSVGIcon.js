import React from 'react';
import {ReactSVG} from "react-svg";

const SeleSVGIcon = ({path, className}) => {
    return <ReactSVG
        beforeInjection={(svg) => {
            svg.classList.add(className)
        }}
        src={`/images/${path}`}
    />
}

export default SeleSVGIcon;
