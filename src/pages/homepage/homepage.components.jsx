import React from 'react';
import "./homepage.styles.scss";
import Directory from "../../components/directory/directory.components";

const HomePage = (props) => {
    return(
        <div className="homepage">
            <Directory history={props.history}/>
        </div>
    );
};

export default HomePage;