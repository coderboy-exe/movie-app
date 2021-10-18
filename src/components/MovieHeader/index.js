import React from 'react';
import { Link } from 'react-router-dom';


import { Wrapper, Content } from './MovieHeader.styles';


const MovieHeader = ({ movieTitle }) => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <span>Home</span>
            </Link>
            <span>|</span>
            <span>{movieTitle}</span>

        </Content>
    </Wrapper>
);


export default MovieHeader
