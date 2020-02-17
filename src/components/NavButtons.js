import React from 'react'
import styled from 'styled-components'
import { ReactComponent as NextLogo } from '../images/right-chevron.svg'

const NavLinks = styled.div`
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    .nav-link {
        width: 60px;
        height: 60px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0.3;
        &:hover {
            opacity: 0.9;
        }
        &--prev {
            transform: rotate(180deg);
        }
    }
`

const NavButtons = ({ moveNext, movePrev }) => (
    <NavLinks>
        <div className='nav-link nav-link--prev' onClick={movePrev}><NextLogo className='left' /></div>
        <div className='nav-link nav-link--next' onClick={moveNext}><NextLogo className='right' /></div>
    </NavLinks>
)

export default NavButtons