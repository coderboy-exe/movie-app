import React from 'react';

//HELPERS
import { calcTime, convertMoney } from '../../helpers';


//STYLES
import { Content, Wrapper } from './MovieInfoBar.styles';


const MovieInfoBar = ({ time, budget, revenue }) =>(
    <Wrapper>
        <Content>
            <div className='column'>
                <p>Run Time: {calcTime(time)}</p>
            </div>
            <div className='column'>
                <p>Budget: {convertMoney(budget)}</p>
            </div>
            <div className='column'>
                <p>Revenue: {convertMoney(revenue)}</p>
            </div>
        </Content>
    </Wrapper>

)

export default MovieInfoBar
