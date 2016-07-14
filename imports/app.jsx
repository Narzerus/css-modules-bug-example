import React from 'react';
import { testStyles } from 'meteor/css-modules-repro-styles';

console.log(testStyles);

export default () => (
  <div className={testStyles.foo}>
  </div>
)
