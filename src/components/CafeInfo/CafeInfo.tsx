import React from 'react';
import css from './CafeInfo.module.css';

const Description: React.FC = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Sip Happens Café</h1>
      <p className={css.text}>
        Please rate our service by selecting one of the options below.
      </p>
    </div>
  );
};

export default Description;
