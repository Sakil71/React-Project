import React from 'react';

const List = ({route}) => {
    const {name, path} = route;

    return (
        <li className='hover:bg-white hover:text-red-700 font-medium px-4 py-1 rounded cursor-pointer'><a href={path}>{name}</a></li>
    );
};

export default List;