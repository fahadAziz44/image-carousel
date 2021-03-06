
import React from 'react'
import styled from 'styled-components'

const SampleSlideWrapper = styled.div`
    background-color: #71bf71;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    width: 100%;
    height: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    &:hover {
        background-color: #89e489;
    }
`


export default ({children, ...rest}) => {
    return (
        <SampleSlideWrapper {...rest}>
            <h2>{children}</h2>
        </SampleSlideWrapper>
    )
}