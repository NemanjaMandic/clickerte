import React from 'react';

const Image = ({ className, src}) => {
 
    return ( 
        <img
            className={className}
            src={src}
        />
     );
}
 
export default Image;
