import React, { useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scroll-behavior: smooth;
    &::-webkit-scrollbar { 
        display: none;  /* Safari and Chrome */
    }

    /* .slides > div {
        scroll-snap-align: start;
    } */
    
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


const SlideViewer = ({showing, slides, childNamePrefix = '', ...rest}) => {
    const slideRef = React.createRef()
    const slideRefs = React.Children.map(slides, () => {
        return React.createRef()
    })

    useEffect(() => {
        executeScroll(slideRefs[showing])
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
        <Wrapper ref={slideRef} {...rest}>
            {
                React.Children.map(slides, (element, index) => {
                    return (
                        <div ref={slideRefs[index]} className={`${childNamePrefix}slide slide_${index}`}>
                            {element}
                        </div>
                    )
                })
            }
        </Wrapper>
    )
}

export default SlideViewer