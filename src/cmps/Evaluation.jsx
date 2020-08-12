import React, { Component } from 'react';
import {Star} from './Star';

export const Evaluation = ({stars, maxStars}) => {
    let res = [];
    for (let i = 0; i < maxStars; i++) {
       res.push( (i < stars) ? <Star state={true}/> : <Star state={false}/>);
    }
    return res;
};

