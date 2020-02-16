import React from 'react';
import styled from 'styled-components';
import ImageSlider from '../components/Slider'


const CenteredFlex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`

const CenteredPage = (props) => {
    return (
        <CenteredFlex>
            <ImageSlider>
                {
                    [...Array(5)].map((x, i) => <Image  key={i} index={i} />)
                }
            </ImageSlider>
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
            <h4>{props.index}</h4>
        </ImageWrapper>
    )
}