import React from 'react';
import './directory.styles.scss';
import CategoryItem from "../category-item/CategoryItem";
const Directory = (props) => {
    return (
        <div className='directory-container'>
            {props.categories.map((category) => {
                return <CategoryItem key={category.id} {...category} />
            })}
        </div>
    );
}

export default Directory;