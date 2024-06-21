import React, {FC} from 'react';
import img from "../../images/notFound.jpg";
import {PageHOC} from "../../components";
import './index.scss';

type NotFoundProps = {};

export const NotFound: FC<NotFoundProps> = () => {
  return (
    <PageHOC>
      <div className="notFound">
        <img src={img} alt="img"/>
      </div>
    </PageHOC>
  );
};
