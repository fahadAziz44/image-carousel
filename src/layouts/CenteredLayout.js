import React from 'react';
import styled from 'styled-components';

const CenteredFlex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`

const CenteredLayout = (props) => {
    return (
        <CenteredFlex>
            {props.children}
        </CenteredFlex>
    )
}
export default CenteredLayout