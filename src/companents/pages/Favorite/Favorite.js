import React from 'react';
import ProductCart from "../productCart/ProductCart";
import {useSelector} from "react-redux";

const Favorite = () => {
    const {favorite} = useSelector(s=> s)
    return (
        <div>
            <div className='container'>
                <div className='flex flex-wrap py-16'>
                    {
                        favorite.map(el=>(
                            <ProductCart product={el}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Favorite;