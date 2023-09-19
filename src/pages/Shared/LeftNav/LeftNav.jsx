// import React from 'react';       

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div>
            <h3>All Caterogy</h3>
            <div>
                {
                    categories.map((categrie) => <div key={categrie.id}>
                        <Link to={`/category/${categrie.id}`}>{categrie.name}</Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default LeftNav;