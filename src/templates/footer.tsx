import React from "react";
import styled from "styled-components";


const Container = styled.header`
  height: 60px;
  background-color: #fff;
  border-bottom: 2px solid #edeeef;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 100;
`;


const AppFooter = () => {
    return (
        <Container>
            Footer
        </Container>
    );
  };
  
  export default AppFooter;