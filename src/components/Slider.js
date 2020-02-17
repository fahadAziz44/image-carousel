import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import sliderHook from '../states/SliderState'
import SlideViewer from './SlideViewer'
import NavButtons from './NavButtons'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: relative;
`

const ImageSlider = ({looped, children}) => {
    const {centered, moveNext, movePrev } = sliderHook({}, 0, children)
    
    return (
        <Wrapper>
            <SlideViewer className='slider' showing={centered} slides={children} />
            <NavButtons moveNext={moveNext}  movePrev={movePrev} />
        </Wrapper>
    )
}

ImageSlider.propTypes = {
    children: PropTypes.any,
    looped: PropTypes.bool,
};

export default ImageSlider
