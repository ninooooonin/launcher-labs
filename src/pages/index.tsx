import React, { Fragment } from "react";
import styled from "styled-components";

// Templates
import AppHead from "../templates/head";

// Styled Components
import app from "../scss/app.module.scss";

const Page: any = () => {

  return (
    <Fragment>
      <AppHead
        title={"Home"}
        description="Launcher Labs by CommandBar"
        url="/"
      />
    
    </Fragment>
  );
};

export default Page;
