import React from 'react';

const MainButton = ({ children }) => {
    return (
        <button className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary">{children}</button>
    );
};

export default MainButton;