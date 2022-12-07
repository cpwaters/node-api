import React, { useState, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';

const Users = () => {
    const { data, loading } = useFetch(`http://localhost:5555/api/stock`);
    console.log(data);

    return (
        loading ? <div className="App-logo"></div> :
        <>
            <h1>Stock</h1>
            {data && data.map((item, i) => <h4 key={i}>{item.make}</h4>)}
        </>
    );
};

export default Users;