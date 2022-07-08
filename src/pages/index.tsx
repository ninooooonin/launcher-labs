import React, { Fragment } from "react";
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
	height: 850px;
	width: 100%;
	/* background-color: #ffffff1a; */
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 8px;
`

const Page: any = () => {
	return (
		<Fragment>
			<AppHead title={"Home"} description="Launcher Labs by CommandBar" url="/" />
			<AppContainer styles={`${app.container}`}>
				<LayoutWrapper>
					<Container>
						<Launcher />
						<Custom />
					</Container>
				</LayoutWrapper>
			</AppContainer>
		</Fragment>
	);
};

export default Page;
