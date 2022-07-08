import React from 'react';
import styled from 'styled-components';

// Styled Components
import { Wrapper as LayoutWrapper, Column } from "../components/general/layout";

const Container = styled(LayoutWrapper)`
	height: 500px;
	position: absolute;
	bottom: 0px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    background-color: #1B1D20;
    padding: 24px 18px;
`

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    /* border: 1px solid red; */
`

const Custom = (props: any) => {
    const { } = props;
    return (
      	<Container>
            <Wrapper>

                

            </Wrapper>
        </Container>
    )
}

export default Custom;