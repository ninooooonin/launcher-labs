import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Actions from './actions';
import { ArrowRightIcon, PlusIcon, EllipsisIcon, SearchIcon } from '../components/general/icons';

const Container = styled.div`
    position: relative;
    margin-top: 200px;
    cursor: pointer;
    z-index: 100;

    &.preview-mode {
        position: fixed;
        bottom: 25px;
        right: 25px;
    }
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

    &.color {
        &-turquise { 
            background-color: #58B99E; 
            background: linear-gradient(180deg, #0EF1C4 0%, #1ABC9C 100%);

            .launcher-keys span {
                color: #58B99E;
            }

            .launcher-placeholder {
                color: #FFFFFF;
            }

            .launcher-search path,
            .launcher-plus path,
            .launcher-ellipsis path {
                fill: #FFFFFF;
            }
        }

        &-emerald { 
            background-color: #65C97A; 
            background: linear-gradient(180deg, #53F977 0%, #1ABC9C 100%);

            .launcher-keys span {
                color: #65C97A;
            }

            .launcher-placeholder {
                color: #FFFFFF;
            }

            .launcher-search path,
            .launcher-plus path,
            .launcher-ellipsis path {
                fill: #FFFFFF;
            }
        }

        &-peter-river { 
            background-color: #5296D5; 

            .launcher-keys span {
                color: #5296D5;
            }

            .launcher-placeholder {
                color: #FFFFFF !important;
            }

            .launcher-search path,
            .launcher-plus path,
            .launcher-ellipsis path {
                fill: #FFFFFF;
            }
        }

        &-amethyst { 
            background-color: #925CB1; 

            .launcher-keys span {
                color: #925CB1;
            }

           .launcher-placeholder {
                color: #FFFFFF !important;
            }

            .launcher-search path,
            .launcher-plus path,
            .launcher-ellipsis path {
                fill: #FFFFFF;
            }
        }

        &-wet-asphalt { 
            background-color: #38485C; 

            .launcher-keys span {
                color: #38485C;
            }

           .launcher-placeholder {
                color: #FFFFFF !important;
            }

            .launcher-search path,
            .launcher-plus path,
            .launcher-ellipsis path {
                fill: #FFFFFF;
            }
        }

        &-sunflower { 
            background-color: #EAC645; 

            .launcher-keys span {
                color: #EAC645;
            }

           .launcher-placeholder {
                color: #FFFFFF !important;
            }

            .launcher-search path,
            .launcher-plus path,
            .launcher-ellipsis path {
                fill: #FFFFFF;
            }
        }

        &-carrot { 
            background-color: #D8833B; 

            .launcher-keys span {
                color: #D8833B;
            }

           .launcher-placeholder {
                color: #FFFFFF !important;
            }

            .launcher-search path,
            .launcher-plus path,
            .launcher-ellipsis path {
                fill: #FFFFFF;
            }
        }

        &-alizarin { 
            background-color: #D65745; 

            .launcher-keys span {
                color: #D65745;
            }

           .launcher-placeholder {
                color: #FFFFFF !important;
            }

            .launcher-search path,
            .launcher-plus path,
            .launcher-ellipsis path {
                fill: #FFFFFF;
            }
        }

        &-cloud { 
            background-color: #EDF0F1; 

            .launcher-keys .launcher-key {
                /* color: #EDF0F1; */
                background: linear-gradient(180deg,#dfdddd 0%,#c1c0c0 100%);
            }

           .launcher-placeholder {
                /* color: #FFFFFF !important; */
            }

            .launcher-search path,
            .launcher-plus path,
            .launcher-ellipsis path {
                /* fill: #FFFFFF; */
            }

            .launcher-divider {
                border-left: 1.5px solid #dfdddd;
            }
        }

        &-concrete { 
            background-color: #98A4A6; 

            .launcher-keys .launcher-key {
                color: #98A4A6;
            }

           .launcher-placeholder {
                color: #FFFFFF !important;
            }

            .launcher-search path,
            .launcher-plus path,
            .launcher-ellipsis path {
                fill: #FFFFFF;
            }

            .launcher-divider {
                border-left: 1.5px solid #7d8789;
            }
        }

        &-gold {
            background: radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
                radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%);

            .launcher-keys span {
                color: #5d4a1f;
            }

            .launcher-placeholder {
                color: #FFFFFF !important;
            }

            .launcher-search path,
            .launcher-plus path,
            .launcher-ellipsis path {
                fill: #FFFFFF;
            }
        }

        &-pride { 
            /* background-color: #D22D1F;  */
            background: linear-gradient(90deg, #D22D1F 0%, #F09336 19.65%, #FCEE4F 38.13%, #387F30 54.96%, #1E4BF5 79.19%, #6B1383 99.38%);

            .launcher-keys span {
                color: #D22D1F;
            }

           .launcher-placeholder {
                color: #FFFFFF !important;
            }

            .launcher-search path,
            .launcher-plus path,
            .launcher-ellipsis path {
                fill: #FFFFFF;
            }
        }

        &-support-ukraine { 
            /* background-color: #255AB5;  */
            background-image: linear-gradient(to bottom,#255AB5,#255AB5 50%,#F7D748 50%);

            .launcher-keys span {
                color: #255AB5;
            }

           .launcher-placeholder {
                color: #FFFFFF !important;
            }

            .launcher-search path,
            .launcher-plus path,
            .launcher-ellipsis path {
                fill: #FFFFFF;
            }
        }

        &-random {
            background: linear-gradient(-45deg, #fbc531, #e84118, #00a8ff, #44bd32);
            animation: gradient 3s ease infinite;
            background-size: 500% 500%;

            .launcher-keys span {
                color: #e84118;
            }

           .launcher-placeholder {
                color: #FFFFFF !important;
            }

            .launcher-search path,
            .launcher-plus path,
            .launcher-ellipsis path {
                fill: #FFFFFF;
            }
        }

    }

    &.border {
        
    }

    &.animate {
        &-vibrate:hover { animation: vibrate 0.3s linear both; }
        &-shake:hover { animation: shake 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both; }
        &-jello:hover { animation: jello 0.9s both; }
        &-wobble:hover { animation: wobble 0.8s both; }
        &-heartbeat:hover { animation: heartbeat 1.5s ease-in-out both; }
    }

    @keyframes vibrate {
        0% {
            transform: translate(0);
        }
        20% {
            transform: translate(-2px, 2px);
        }
        40% {
            transform: translate(-2px, -2px);
        }
        60% {
            transform: translate(2px, 2px);
        }
        80% {
            transform: translate(2px, -2px);
        }
        100% {
            transform: translate(0);
        }
    }

    @keyframes shake {
        0%,
        100% {
            transform: translateX(0);
        }
        10%,
        30%,
        50%,
        70% {
            transform: translateX(-3px);
        }
        20%,
        40%,
        60% {
            transform: translateX(3px);
        }
        80% {
            transform: translateX(1px);
        }
        90% {
            transform: translateX(-1px);
        }
    }

    @keyframes jello {
        0% {
            transform: scale3d(1, 1, 1);
        }
        30% {
            transform: scale3d(1.05, 0.75, 1);
        }
        40% {
            transform: scale3d(0.75, 1.25, 1);
        }
        50% {
            transform: scale3d(1.08, 0.85, 1);
        }
        65% {
            transform: scale3d(0.95, 1.05, 1);
        }
        75% {
            transform: scale3d(1.05, 0.95, 1);
        }
        100% {
            transform: scale3d(1, 1, 1);
        }
    }

    @keyframes wobble {
        0%,
        100% {
            -webkit-transform: translateX(0%);
                    transform: translateX(0%);
            -webkit-transform-origin: 50% 50%;
                    transform-origin: 50% 50%;
        }
        15% {
            -webkit-transform: translateX(-20px) rotate(6deg);
                    transform: translateX(-20px) rotate(6deg);
        }
        30% {
            -webkit-transform: translateX(12px) rotate(-6deg);
                    transform: translateX(12px) rotate(-6deg);
        }
        45% {
            -webkit-transform: translateX(-12px) rotate(3.6deg);
                    transform: translateX(-12px) rotate(3.6deg);
        }
        60% {
            -webkit-transform: translateX(9px) rotate(-2.4deg);
                    transform: translateX(9px) rotate(-2.4deg);
        }
        75% {
            -webkit-transform: translateX(-6px) rotate(1.2deg);
                    transform: translateX(-6px) rotate(1.2deg);
        }
    }

    @keyframes heartbeat {
        from {
            -webkit-transform: scale(1);
                    transform: scale(1);
            -webkit-transform-origin: center center;
                    transform-origin: center center;
            -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
        }
        10% {
            -webkit-transform: scale(0.93);
                    transform: scale(0.93);
            -webkit-animation-timing-function: ease-in;
                    animation-timing-function: ease-in;
        }
        17% {
            -webkit-transform: scale(0.98);
                    transform: scale(0.98);
            -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
        }
        33% {
            -webkit-transform: scale(0.95);
                    transform: scale(0.95);
            -webkit-animation-timing-function: ease-in;
                    animation-timing-function: ease-in;
        }
        45% {
            -webkit-transform: scale(1);
                    transform: scale(1);
            -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
        }
    }

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
    font-size: 16px;
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

const propTypes = {
    preview: PropTypes.bool,
    activeStyles: PropTypes.string, 
    activeColors: PropTypes.string, 
    activeBorders: PropTypes.string,
    activeAnimations: PropTypes.string, 
    activeAccessories: PropTypes.string, 
};

const defaultProps = {
    preview: false,
    activeStyles: '', 
    activeColors: '',
    activeBorders: '',
    activeAnimations: '',
    activeAccessories: '',
};

const Launcher = (props: any) => {
    const {        
        preview,
        activeStyles,
        activeColors,
        activeBorders,
        activeAnimations,
        activeAccessories
    } = props;

    return (
      	<Container className={`${preview ? 'preview-mode': ''}`}>
            { activeStyles !== 'classic' && activeStyles !== 'inline-classic' && activeStyles !== 'inline-basic' && <Actions /> }
            <Wrapper className={`color-${activeColors} border-${activeBorders} animate-${activeAnimations}`}>
                { activeStyles !== 'classic' && activeStyles !== 'classic-pro' && activeStyles !== 'inline-basic-pro' && activeStyles !== 'inline-basic' &&  
                    <SearchIcon styles={`launcher-search`}/> 
                }
                { activeStyles !== 'classic' && activeStyles !== 'classic-pro' && 
                    <Placeholder className={`launcher-placeholder`} style={{ marginRight: 120 }}>Search for anything</Placeholder>
                }
                <Keys className={`launcher-keys`}>
                    <Key className={`launcher-key`}>⌘</Key>
                    <PlusIcon styles={`launcher-plus`}/>
                    <Key className={`launcher-key`}>K</Key>                
                </Keys>
                {/* <Placeholder style={{ marginRight: 120 }}>Search for anything</Placeholder> */}
                { activeStyles !== 'classic' && activeStyles !== 'inline-classic' && activeStyles !== 'inline-basic' && 
                    <Fragment>
                        <Divider className={`launcher-divider`}/>
                        <Action><EllipsisIcon styles={`launcher-ellipsis`}/></Action>
                    </Fragment>
                }
            </Wrapper>
        </Container>
    )
}

Launcher.propTypes = propTypes;
Launcher.defaultProps = defaultProps;

export default Launcher;