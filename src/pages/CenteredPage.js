import React from 'react';
import styled from 'styled-components';
import ImageSlider from '../components/Slider'


const CenteredFlex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;

    .limiting-window {
        height: 100%;
        width: 100%;
        max-width: 500px;
        max-height: 500px;
    }
`

const CenteredPage = (props) => {
    return (
        <CenteredFlex>
            <div className='limiting-window'>
                <ImageSlider>
                    {
                        [...Array(5)].map((x, i) => <Image key={i} index={i} />)
                    }
                </ImageSlider>
            </div>
        </CenteredFlex>
    )
}
export default CenteredPage



const ImageWrapper = styled.div`
    background-color: #71bf71;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    width: 100%;
    height: 100%;
    &:hover {
        background-color: #89e489;
    }
`


const Image = (props) => {
    return (
        <ImageWrapper {...props}>
            <h2>{props.index + 1}</h2>
        </ImageWrapper>
    )
}