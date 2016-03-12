import React from 'react';

export const Layout = ({content}) => (
  <div className="grid m2 p2">
    <div className="grid-row">
      <div className="grd-row-col-6">
        <h1>Expense Mage</h1>
        <hr />
      </div>
    </div>
    <div className="grid-row">
      <div className="grd-row-col-6">
        <div>{content}</div>
      </div>
    </div>
  </div>
);
