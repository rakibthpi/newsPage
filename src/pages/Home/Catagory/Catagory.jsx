// import React from 'react';

import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";

const Catagory = () => {
    const { teamId } = useParams()
    console.log(teamId);
    const newsData = useLoaderData();

    return (
        <div>

            {teamId && <h1>Catagory...... {newsData?.length}</h1>}
            {
                newsData.map(news => <NewsCard
                    key={news._id}
                    news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Catagory;