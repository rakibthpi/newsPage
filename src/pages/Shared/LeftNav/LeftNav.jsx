// import React from 'react';       

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://new-server-ifd8ksamu-rakib-hosens-projects.vercel.app/categories')
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