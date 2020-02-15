import React from 'react';
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

class ImageSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0,
            total: 5
        };

    }

    moveNext() {
        this.setState({ selected: (this.state.selected + 1) % this.state.total })
    }

    movePrev() {
        this.setState({ selected: (this.state.selected + 1) % this.state.total })
    }


    render() {
        return (
            <Wrapper>
                <div className='slider'>
                    {
                        React.Children.map(this.props.children, (element, index) => {
                            return <element.type {...element.props} className={`${element.props.className} slide slide_${index}`}>{element.children}</element.type>
                        })
                    }
                </div>
                <div className='nav-links'>

                </div>
            </Wrapper>
        )
    }
}


ImageSlider.propTypes = {
    children: PropTypes.any
};
export default ImageSlider


