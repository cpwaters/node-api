import React, { useState, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';

const Users = () => {
  const { data, loading } = useFetch(`http://localhost:5555/api/users`);
  console.log(data);

  return (
    loading ? <div className="App-logo"></div> :
    <>
      <h1>Users</h1>
      {data && data.map((user, i) => <h4 key={i}>{user.name}</h4>)}
    </>
  );
};

export default Users;