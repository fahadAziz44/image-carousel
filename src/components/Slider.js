import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import sliderHook from './SliderHook'


const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;

    .nav-links {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        .nav-link {
            cursor: pointer;
        }
    }

    .slider {
        width: 100%;
        height: 100%;
        display: flex;
        overflow-x: scroll;
        -webkit-overflow-scrolling: touch;
        scroll-snap-type: x mandatory;
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none;  /* Internet Explorer 10+ */
        scroll-behavior: smooth;
    }
    .slider::-webkit-scrollbar { 
        display: none;  /* Safari and Chrome */
    }
    .slides > div {
        scroll-snap-align: start;
    }
    
    .slide {
        width: 100%;
        flex-shrink: 0;
        height: 100%;
        scroll-behavior: smooth;
        scroll-snap-align: start;
        text-align: center;
        position: relative;
    } 
`

const ImageSlider = ({looped, children}) => {
    
    const {centered, moveNext, movePrev } = sliderHook({reducer: (state, action) => {
        if(!looped && action.type === sliderHook.types.next && state.centered === state.totalSlides - 1) {
            return { ...action.changes, centered: state.centered }
        } else return { ...action.changes }
    }}, 0, children)

    const slideRef = React.createRef()
    const slideRefs = React.Children.map(children, () => {
        return React.createRef()
    })

    useEffect(() => {
        executeScroll(slideRefs[centered])
    });

    const executeScroll = (ref) => {
        if (slideRef && slideRef.current && ref && ref.current) {
            slideRef.current.scroll({
                left: ref.current.offsetLeft,
                top: 0,
                behavior: 'smooth'
            })
        }
    }

    return (
        <Wrapper>
            <div ref={slideRef} className='slider'>
                {
                    React.Children.map(children, (element, index) => {
                        return (
                        <div ref={slideRefs[index]} className={`slide slide_${index}`}>
                            {element}
                        </div>
                        )
                    })
                }
            </div>
            <div className='nav-links'>
                <div className='nav-link nav-link--prev' onClick={movePrev}>Prev</div>
                <div className='nav-link nav-link--next' onClick={moveNext}>Next</div>
            </div>
        </Wrapper>
    )

}


ImageSlider.propTypes = {
    children: PropTypes.any,
    looped: PropTypes.bool,
};
export default ImageSlider


