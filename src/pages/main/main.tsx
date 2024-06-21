import React, {FC} from 'react';
import {Outlet} from "react-router-dom";
import {PageHOC} from "../../components";

export const Main: FC = () => (
  <PageHOC>
    <Outlet/>
  </PageHOC>
);

