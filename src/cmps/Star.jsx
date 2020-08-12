import React, { Component } from 'react';
import {
    Star as StarFilledIcon,
    StarBorder as StarEmptyIcon
} from "@material-ui/icons";

export const Star = ({state}) => {
    return (state) ? <StarFilledIcon/> : <StarEmptyIcon/>;
};
