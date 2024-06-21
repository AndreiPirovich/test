import React, {FC, ReactElement} from 'react';
import {Sidebar} from "../sidebar/sidebar";
import './index.scss';

type PageHocProps = {
  children: ReactElement;
};

export const PageHOC: FC<PageHocProps> = ({children}) => {
  return (
    <div className="app-wrapper">
      <Sidebar />
      <div className="content">
        <div className="container">
          {children}
        </div>
      </div>
    </div>
  );
};
