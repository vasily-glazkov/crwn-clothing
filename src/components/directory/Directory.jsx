import React from 'react';
import './directory.styles.scss';
import CategoryItem from "../category-item/CategoryItem";
const Directory = (props) => {
    console.log(props)
    return (
        <div className='directory-container'>
            {props.categories.map((category) => {
                console.log(category)
                return <CategoryItem key={category.id} {...category} />
            })}
        </div>
    );
}

export default Directory;