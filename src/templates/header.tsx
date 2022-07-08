import React from "react";
import styled from "styled-components";

// Styled Components
import { URL } from "../components/general/text";
import { Wrapper as LayoutWrapper } from "../components/general/layout";

// Icons
import { BrandIcon } from "../components/general/icons";

const Container = styled.header`
    height: 70px;
    background-color: #000000;
    box-sizing: border-box;
    position: sticky;
    top: 0;
    z-index: 100;
    padding: 0 21px;
    display: flex;
    align-items: center;
`;

const AppHeader = () => {
    return (
        <Container>
            <URL href="/">
                <BrandIcon styles={"brand-logo"} />
            </URL>
        </Container>
    );
  };
  
  export default AppHeader;