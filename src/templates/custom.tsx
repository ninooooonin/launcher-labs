import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Styled Components
import { Wrapper as LayoutWrapper, Column } from "../components/general/layout";

const Container = styled(LayoutWrapper)`
	height: 450px;
	position: absolute;
	bottom: 0px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    background-color: #1B1D20;
    border: 1px solid #37393e;
    border-bottom: 0px;

`

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
`

const Content = styled.div`

`

const Tabs = styled.div`
    display: flex;
    flex-direction: row;
    /* border: 1px solid red; */
    justify-content: space-between;
    padding: 24px 18px 18px;
    border-bottom: 1px solid #282A2F;
`

const Tab = styled.button`
    font-family: var(--font-medium);
    font-size: 18px;
    color: #5C6269;
    background-color: transparent;
    border: none;
    padding: 0px 12px; 
    margin-right: 12px;
    cursor: pointer;

    &:last-child {
        margin-right: 0px;
    }

    &:hover:not(.active) {
        color: #74787d;
    }

    &.active {
        color: #c3c3c3;
    }

    &.preview {
        background: linear-gradient(180deg, #9D7AFF 0%, #6738EC 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
    }
`

const Section = styled.div`
    height: 200px;
    width: 100%;
    padding: 18px 18px;
`

const Pills = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Pill = styled.button`
    position: relative;
    flex-grow: 1;
    border: 0px;
    height: 65px;
    padding: 0px 12px;
    background-color: #282A2F;
    color: #c3c3c3;
    font-family: var(--font-regular);
    font-size: 16px;
    margin-right: 12px;
    border-radius: 12px;
    cursor: pointer;
    border: 1px solid transparent;
    transition: all 0.1s ease-in;
    min-width: calc(100% / 5 - 12px);
    margin-top: 12px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:last-child,
    &:nth-child(5n) {
        margin-right: 0px;
    }

    &:nth-child(-n+5) {
        margin-top: 0px;
    }

    &:hover {
        /* background-color: #c3c3c3; */
        border: 1px solid #37393e;
        color: #FFFFFF;
    }

    &.active {
        border: 1px solid #7a49d1;
        color: #FFFFFF;
    }
`

const Color = styled.div`
    top: 0px;
    height: 21px;
    width: 21px;
    border-radius: 5px;


    &.pride {
        background-image: linear-gradient(to bottom, #D22D1F, #D22D1F 15%, #F09336 30%, #FCEE4F 45%, #387F30 60%, #1E4BF5 70%, #6B1383 80%);

    }

    &.support-ukraine {
        background-image: linear-gradient(to bottom, #255AB5, #255AB5 50%, #F7D748 50%);
    }


    &.random {
        background: linear-gradient(-45deg, #fbc531, #e84118, #00a8ff, #44bd32);
        animation: gradient 3s ease infinite;
        background-size: 400% 400%;
    }

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
`   

const propTypes = {
    preview: PropTypes.bool,
    setPreview: PropTypes.any,
    activeTab: PropTypes.string,
    activeStyles: PropTypes.string, 
    activeColors: PropTypes.string, 
    activeBorders: PropTypes.string,
    activeAnimations: PropTypes.string, 
    activeAccessories: PropTypes.string, 
    setActiveTab: PropTypes.any,
    setActiveStyles: PropTypes.any,
    setActiveColors: PropTypes.any,
    setActiveBorders: PropTypes.any,
    setActiveAnimations: PropTypes.any,
    setActiveAccessories: PropTypes.any
};

const defaultProps = {
    preview: false,
    setPreview: null,
    activeTab: 'styles',
    activeStyles: '', 
    activeColors: '',
    activeBorders: '',
    activeAnimations: '',
    activeAccessories: '',
    setActiveTab: null,
    setActiveStyles: null,
    setActiveColors: null,
    setActiveBorders: null,
    setActiveAnimations: null,
    setActiveAccessories: null,
};

const Custom = (props: any) => {
    const { 
        preview,
        setPreview,
        activeTab, 
        activeStyles,
        activeColors,
        activeBorders,
        activeAnimations,
        activeAccessories,
        setActiveTab,
        setActiveStyles,
        setActiveColors,
        setActiveBorders,
        setActiveAnimations,
        setActiveAccessories
    } = props;

    const tabs = [
        { label: 'Styles', key: 'styles' },
        { label: 'Sizes', key: 'sizes' },
        { label: 'Colors', key: 'colors' },
        { label: 'Borders', key: 'borders' },
        { label: 'Animations', key: 'animations' },
        { label: 'Accessories', key: 'accessories' },
    ];

    const styles = [
        { label: 'Classic', key: 'classic' },
        { label: 'Classic Pro', key: 'classic-pro' },
        { label: 'Inline Classic', key: 'inline-classic' },
        { label: 'Inline Classic Pro', key: 'inline-classic-pro' },
        { label: 'Inline Basic', key: 'inline-basic' },
    ];

    const colors = [
        { label: 'Default', key: 'default', colors: [] },
        { label: 'Turquise', key: 'turquise', colors: ['#58B99E'] },
        { label: 'Emerald', key: 'emerald', colors: ['#65C97A'] },
        { label: 'Peter River', key: 'peter-river', colors: ['#5296D5'] },
        { label: 'Amethyst', key: 'amethyst', colors: ['#925CB1'] },
        { label: 'Wet Asphalt', key: 'wet-asphalt', colors: ['#38485C'] },
        { label: 'Sunflower', key: 'sunflower', colors: ['#EAC645'] },
        { label: 'Carrot', key: 'carrot', colors: ['#D8833B'] },
        { label: 'Alizarin', key: 'alizarin', colors: ['#D65745'] },
        { label: 'Cloud', key: 'cloud', colors: ['#EDF0F1'] },
        { label: 'Concrete', key: 'concrete', colors: ['#98A4A6'] },
        { label: 'Pride', key: 'pride', colors: ['#D22D1F', '#F09336', '#FCEE4F', '#1E4BF5', '#6B1383'] },
        { label: 'Support Ukraine', key: 'support-ukraine', colors: ['#255AB5', '#F7D748'] },
        { label: 'Random', key: 'random', colors: ['#6B1383'] },

    ];

    const borders = [
        { label: 'Default', key: '' },
        { label: 'Basic', key: 'basic' },
        { label: 'Gradient', key: 'gradient' },
    ];

    const animations = [
        { label: 'Default', key: '' },
        { label: 'Vibrate', key: 'vibrate' },
        { label: 'Shake', key: 'shake' },
        { label: 'Jello', key: 'jello' },
        { label: 'Wobble', key: 'wobble' },
        { label: 'Bounce', key: 'bounce' },
        { label: 'Pulsate', key: 'pulsate' },
    ];

    const accessories = [
        { label: 'None', key: 'none' },
        { label: 'Intercom', key: 'intercom' },
        { label: 'Discord', key: 'discord' },
    ];

    const generateTabs = () => {
        return tabs.map((tab) => {
            const { key, label} = tab;
            return (
                <Tab className={`${activeTab == key ? 'active': ''}`} 
                    key={key} onClick={() => setActiveTab(key)}>{label}</Tab>
            )
        })
    }

    const generateStyles = () => {
        return styles.map((data) => {
            const { key, label} = data;
            return <Pill key={key} className={`${activeStyles == key ? 'active': ''}`} 
                onClick={() => setActiveStyles(key)}>{label}</Pill>
        })
    }

    const generateColors = () => {
        return colors.map((data) => {
            const { key, label, colors} = data;

            const handleColor = () => {
                return { backgroundColor: colors[0] }
            }

            return (
                <Pill key={key} className={`${activeColors == key ? 'active': ''}`}
                    onClick={() => setActiveColors(key)}>
                    { colors.length !== 0 && <Color className={`${key}`} style={handleColor()} />}
                    <span style={{ marginLeft: 12 }}>{label}</span>
                </Pill>
            )
        })
    }

    const generateBorders = () => {
        return borders.map((data) => {
            const { key, label} = data;
            return <Pill key={key} className={`${activeBorders == key ? 'active': ''}`}
                onClick={() => setActiveBorders(key)}>{label}</Pill>
        })
    }

    const generateAnimations = () => {
        return animations.map((data) => {
            const { key, label} = data;
            return <Pill key={key} className={`${activeAnimations == key ? 'active': ''} ${key}`}
                onClick={() => setActiveAnimations(key)}>{label}</Pill>
        })
    }

    const generateAccessories = () => {
        return accessories.map((data) => {
            const { key, label} = data;
            return <Pill key={key} className={`${activeAccessories == key ? 'active': ''} ${key}`}
                onClick={() => setActiveAccessories(key)}>{label}</Pill>
        })
    }

    return (
      	<Container>
            <Wrapper>
                <Tabs>
                    <Content>{ generateTabs() }</Content>
                    <Tab className={`preview`} onClick={() => setPreview(!preview)}>Preview</Tab>
                </Tabs>
                <Section>
                    { activeTab == 'styles' && <Pills className={`styles`}>{ generateStyles() }</Pills> }
                    { activeTab == 'colors' && <Pills className={`colors`}>{ generateColors() }</Pills> }
                    { activeTab == 'borders' && <Pills className={`borders`}>{ generateBorders() }</Pills> }
                    { activeTab == 'animations' && <Pills className={`animations`}>{ generateAnimations() }</Pills> }
                    { activeTab == 'accessories' && <Pills className={`accessories`}>{ generateAccessories() }</Pills> }
                </Section>
            </Wrapper>
        </Container>
    )
}

Custom.propTypes = propTypes;
Custom.defaultProps = defaultProps;

export default Custom;