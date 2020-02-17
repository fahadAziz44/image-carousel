import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import sliderHook from './SliderHook'
import SlideViewer from './SlideViewer'
import { ReactComponent as NextLogo } from '../images/right-chevron.svg'


const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: relative;
    .nav-links {
        
    }
`
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

const ImageSlider = ({looped, children}) => {
    
    const {centered, moveNext, movePrev } = sliderHook({reducer: (state, action) => {
        if(!looped && action.type === sliderHook.types.next && state.centered === state.totalSlides - 1) {
            return { ...action.changes, centered: state.centered }
        } else return { ...action.changes }
    }}, 0, children)

    
    return (
        <Wrapper>
            <SlideViewer className='slider' showing={centered} slides={children} />
            <NavLinks>
                <div className='nav-link nav-link--prev' onClick={movePrev}><NextLogo className='left' /></div>
                <div className='nav-link nav-link--next' onClick={moveNext}><NextLogo className='right' /></div>
            </NavLinks>
        </Wrapper>
    )

}

ImageSlider.propTypes = {
    children: PropTypes.any,
    looped: PropTypes.bool,
};

export default ImageSlider


