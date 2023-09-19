// import React from 'react';

import { useParams } from "react-router-dom";

const Catagory = () => {
    const { id } = useParams()
    console.log(id)
    return (
        <div>
            <h1>Catagory...... {id}</h1>
        </div>
    );
};

export default Catagory;