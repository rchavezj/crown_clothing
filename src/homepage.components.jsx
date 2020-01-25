import React from 'react';
import MenuItem from './components/menu-item.components';

const HomePage = () => {
    return(
        <div className="homepage">
            <div className="directory-menu">
                <MenuItem title={'HATS'} />
                <MenuItem title={'JACKETS'} />
                <MenuItem title={'SNEAKERS'} />
                <MenuItem title={'WOMENS'} />
                <MenuItem title={'MENS'} />
            </div>
        </div>
    );
};

export default HomePage;