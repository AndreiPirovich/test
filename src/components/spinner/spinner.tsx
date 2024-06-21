import React, {FC} from 'react';
import './index.scss';

type SpinnerProps = {};

export const Spinner: FC<SpinnerProps> = () => (
  <div className="loader__wrapper">
    <div className="loader"/>
  </div>
);
