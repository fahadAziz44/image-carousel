import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


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

const ImageSlider = (props) => {
    const [centered, setCenter] = useState(0);
    const [totalSlides, setTotalSlides] = useState(React.Children.count(props.children));
    const slideRef = React.createRef()
    const slideRefs = React.Children.map(props.children, () => {
        return React.createRef()
    })


    useEffect(() => {
        executeScroll(slideRefs[centered])
    });

    const moveNext = () => {
        setCenter((centered + 1) % totalSlides)
    }

    const movePrev = () => {
        if (centered <= 0) {
            setCenter(totalSlides - 1)
        } else {
            setCenter(centered - 1)
        }
    }

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
                    React.Children.map(props.children, (element, index) => {
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
    children: PropTypes.any
};
export default ImageSlider


