import React from 'react';

const UserCounter = ({ userCount }) => {
  if (userCount === undefined) {
    return <h1>Loading...</h1>;
  }

  return <h1>{userCount} pessoas já calcularam a sua aposentadoria</h1>;
};

export default UserCounter;
