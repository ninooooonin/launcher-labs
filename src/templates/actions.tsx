import React from 'react';
import styled from 'styled-components';

import { URL } from "../components/general/text";
import { ArrowRightIcon, DiscordIcon, PlusIcon, EllipsisIcon, IntercomIcon } from '../components/general/icons';

const Container = styled.div`
    position: absolute;
    bottom: 60px;
    right: 0px;
`

const Wrapper = styled.div`
    /* height: 280px;    */
    width: 280px;
    background-color: #FFFFFF;
    border-radius: 8px;
    padding: 8px 0px;
`

const Options = styled.div`
    border-bottom: 1px solid #E9E9E9;

    &:last-child {
        border-bottom: none;
    }
`

const Option = styled(URL)`
    width: 100%;
    height: 42px;
    display: flex;
    align-items: center;
    padding: 0 12px;
    justify-content: space-between;
    /* outline: 1px solid red; */

    &:hover {
        background-color: #0000000a;
    }
`

const Content = styled.div`
    display: flex;
    align-items: center;

    .icon {
        
    }
`

const Label = styled.span`
    margin-left: 10px;
    font-family: var(--font-medium);
    font-size: 14.5px;
    color: #000000;
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
    height: 21px;
    width: 21px;
    border-radius: 3px;
    background: linear-gradient(180deg, #F2F2F2 0%, #E1E1E1 100%);
    /* background: #F2F2F2; */
    font-family: var(--font-medium);
    font-size: 12.5px;
    color: #000000;
`

const Then = styled.span`
    font-family: var(--font-regular);
    font-size: 11.5px;
    color: #000000;
    margin: 0px 6px;
`

const Actions = (props: any) => {
    const { } = props;
    return (
      	<Container>
            <Wrapper>

                <Options>
                    <Option href='/'>
                        <Content>
                            <DiscordIcon styles={`icon`} />
                            <Label>Product Updates</Label>
                        </Content>
                    </Option>
                </Options>

                <Options className={`multiple`}>
                    <Option href='/'>
                        <Content>
                            <DiscordIcon styles={`icon`} />
                            <Label>Help Center</Label>
                        </Content>
                        <Keys>
                            <Key>H</Key>
                        </Keys>
                    </Option>
                    <Option href='/'>
                        <Content>
                            <DiscordIcon styles={`icon`} />
                            <Label>Troubleshooting</Label>
                        </Content>
                    </Option>
                    <Option href='/'>
                        <Content>
                            <IntercomIcon styles={`icon`} />
                            <Label>Contact Support</Label>
                        </Content>
                    </Option>
                </Options>
                <Options>
                    <Option href='/'>
                        <Content>
                            <DiscordIcon styles={`icon`} />
                            <Label>Changelog</Label>
                        </Content>
                        {/* <Keys>
                            <Key>L</Key>
                            <PlusIcon styles={`launcher-plus`}/>
                            <Key>O</Key>                
                        </Keys> */}
                    </Option>
                    <Option href='/'>
                        <Content>
                            <DiscordIcon styles={`icon`} />
                            <Label>Join our Community</Label>
                        </Content>
                        {/* <Keys>
                            <Key>G</Key>
                            <PlusIcon styles={`launcher-plus`}/>
                            <Key>D</Key>                
                        </Keys> */}
                    </Option>
                    <Option href='/'>
                        <Content>
                            <DiscordIcon styles={`icon`} />
                            <Label>Shortcuts</Label>
                        </Content>
                        <Keys>
                            <Key>J</Key>
                            {/* <PlusIcon styles={`launcher-plus`}/>
                            <Key>H</Key>                 */}
                        </Keys>
                    </Option>
                </Options>

            </Wrapper>
        </Container>
    )
}

export default Actions;