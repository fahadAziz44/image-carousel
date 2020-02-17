import React from 'react'
import styled from 'styled-components'
import ImageSlider from '../components/Slider'
import SampleSlide from '../components/SampleSlide'


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
                    <SampleSlide text={'🛸Out of this world Slider🛸'} />
                    <SampleSlide text={'🧠I call it S lider 🧠'} />
                    <SampleSlide text={'🧨You can slide anything inside 🧨'} />
                    <SampleSlide text={'for Example: Brains 🧠'} />
                    {
                        [...Array(2)].map((x, i) => <SampleSlide key={i} text={
                            [...Array(i+3)].map((x, i) => '🧠')    
                        } />)
                    }
                    <SampleSlide text={'✨Thanks for the opportunity✨'} />
                    <SampleSlide text={'🚀really appreciate that🚀'} />
                </ImageSlider>
            </div>
        </CenteredFlex>
    )
}
export default CenteredPage