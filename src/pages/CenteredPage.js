import React from 'react'
import styled from 'styled-components'
import ImageSlider from '../components/Slider'
import SampleSlide from '../components/SampleSlide'
import Emoji from '../components/Emoji'
import bowing from '../images/bowing.jpg'


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
            <ImageSlider>
                <SampleSlide> <Emoji symbol="🛸" />Out of this world Slider<Emoji symbol="🛸" /></SampleSlide>
                <SampleSlide> <Emoji symbol="🐉" /> I call it Drragger <Emoji symbol="🐉" /></SampleSlide>
                <SampleSlide> <Emoji symbol="🧨" /> Now You can slide anything :D <Emoji symbol="🤫😄" /></SampleSlide>
                <SampleSlide> for Example: Brains <Emoji symbol="🧠" /></SampleSlide>
                <SampleSlide > <Emoji symbol={[...Array(15)].map((x, i) => '🧠')} /> </SampleSlide>
                <SampleSlide> and some rockets <Emoji symbol="🚀" /></SampleSlide>
                <SampleSlide> <Emoji symbol={[...Array(15)].map((x, i) => '🚀')} /> </SampleSlide>
                <SampleSlide> <Emoji symbol="✨" />Thanks for the opportunity<Emoji symbol="✨" /></SampleSlide>
                <SampleSlide> <Emoji symbol="🚀" />really appreciate it<Emoji symbol="🚀" /></SampleSlide>
                <SampleSlide> <img src={bowing} className='bow' alt='bow' /></SampleSlide>
                <SampleSlide> <img src='https://media.giphy.com/media/QMkPpxPDYY0fu/source.gif' className='bow' alt='bow' />
                </SampleSlide>
            </ImageSlider>
        </CenteredFlex>
    )
}
export default CenteredPage