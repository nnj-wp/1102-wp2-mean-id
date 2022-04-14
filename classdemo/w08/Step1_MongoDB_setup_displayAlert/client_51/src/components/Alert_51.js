import React from 'react';

import { useAppContext } from '../context/appContext_51';

export const Alert_51 = () => {
  const { alertText, alertType } = useAppContext();
  return <div className={`alert alert-${alertType}`}>{alertText}</div>;
};

export default Alert_51;
