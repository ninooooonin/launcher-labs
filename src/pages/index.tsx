import React, { Fragment, useState } from "react";
import styled from "styled-components";

// Templates
import AppContainer from "../templates/container";
import AppHead from "../templates/head";
import Launcher from "../templates/launcher";
import Custom from "../templates/custom";


// Styled Components
import { Wrapper as LayoutWrapper, Column } from "../components/general/layout";


// Styles
import app from "../scss/app.module.scss";

const Container = styled.div`
	height: 600px;
	width: 100%;
	/* background-color: #ffffff1a; */
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 8px;
`

const Page: any = () => {
	const [preview, setPreview] = useState(false);
	const [activeTab, setActiveTab] = useState('styles');
	const [activeStyles, setActiveStyles] = useState('classic');
	const [activeColors, setActiveColors] = useState('default');
	const [activeBorders, setActiveBorders] = useState('basic');
	const [activeAnimations, setActiveAnimations] = useState('none');
	const [activeAccessories, setActiveAccessories] = useState('');

	return (
		<Fragment>
			<AppHead title={"Launcher Labs by CommandBar"} description="Launcher Labs by CommandBar" url="/" />
			<AppContainer styles={`${app.container}`}>
				<LayoutWrapper>
					<Container>
						<Launcher 
							preview={preview}
							activeStyles={activeStyles}
							activeColors={activeColors}
							activeBorders={activeBorders}
							activeAnimations={activeAnimations}
							activeAccessories={activeAccessories}
						/>
						<Custom 
							preview={preview}
							setPreview={setPreview}
							activeTab={activeTab}
							activeStyles={activeStyles}
							activeColors={activeColors}
							activeBorders={activeBorders}
							activeAnimations={activeAnimations}
							activeAccessories={activeAccessories}
							setActiveTab={setActiveTab}
							setActiveStyles={setActiveStyles}
							setActiveColors={setActiveColors}
							setActiveBorders={setActiveBorders}
							setActiveAnimations={setActiveAnimations}
							setActiveAccessories={setActiveAccessories}
						/>
					</Container>
				</LayoutWrapper>
			</AppContainer>
		</Fragment>
	);
};

export default Page;
