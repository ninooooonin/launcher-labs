import React from 'react';
import styled from 'styled-components';

import Actions from './actions';
import { ArrowRightIcon, PlusIcon, EllipsisIcon, SearchIcon } from '../components/general/icons';

const Container = styled.div`
    position: relative;
    margin-bottom: 80px;
`

const Wrapper = styled.div`
    height: 45px;
    display: flex;
    flex-direction: row;
    align-items: center;
    /* border: 1px solid red; */
    padding: 0px 10px;
    border-radius: 5px;
    background-color: #FFFFFF;
`

const Keys = styled.div`
    height: inherit;
    display: flex;
    flex-direction: row;
    align-items: center;

    .launcher-plus {
        margin: 0px 6px;
    }
`

const Key = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 24px;
    width: 24px;
    border-radius: 5px;
    background: linear-gradient(180deg, #F2F2F2 0%, #E1E1E1 100%);
    font-family: var(--font-medium);
    font-size: 14.5px;
`

const Placeholder = styled.span`
    margin-left: 10px;
    font-size: 15px;
    font-family: var(--font-medium);
    opacity: 0.75;
`

const Divider = styled.span`
    height: 25px;
    border-left: 1.5px solid #E9E9E9;
    margin: 0px 8px;
`

const Action = styled.button`
    padding: 0px;
    margin: 0px;
    border: 0px;
    background-color: transparent;
    cursor: pointer;
`

const Launcher = (props: any) => {
    const { } = props;
    return (
      	<Container>
            <Actions />
            <Wrapper>
                <SearchIcon />
                <Placeholder style={{ marginRight: 120 }}>Search for anything</Placeholder>
                <Keys>
                    <Key>⌘</Key>
                    <PlusIcon styles={`launcher-plus`}/>
                    <Key>K</Key>                
                </Keys>
                {/* <Placeholder style={{ marginRight: 120 }}>Search for anything</Placeholder> */}
                {/* <Divider />
                <Action><EllipsisIcon /></Action> */}
            </Wrapper>
        </Container>
    )
}

export default Launcher;