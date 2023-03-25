import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {BsBasket, BsFillHeartFill} from "react-icons/bs";
import {useNavigate} from "react-router-dom";
import {FaTrash} from "react-icons/fa";

const ProductCart = ({product}) => {
    const dispatch = useDispatch()
    const addToBasket = (product) => {
        dispatch({type: 'ADD_TO_BASKET', payload: product})
    }

    const {favorite} = useSelector(s => s)

    const found = favorite.some(el => el.id === product.id)
    const navigate = useNavigate()

    const {basket} = useSelector(s => s)
    const foundProduct = basket.some(el => el.id === product.id)
    return (
        <div
            className="max-w-sm basis-1/3 mx-auto my-20  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="productCart#">
                <img className="rounded-t-lg" src={product.image} alt=""/>
            </a>
            <div className="p-5">
                <a href="productCart#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.description} <br/>
                    цена:{product.price}
                </p>
                <div className='p-5 flex items-center'>


                    <button type="button" onClick={() => dispatch({
                        type: 'ADD_TO_FAVORITE',
                        payload: product
                    })}
                            className={`${found ? 'text-red-600' : 'text-white'} bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 cursor-pointer hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}>

                        {
                            product.isLiked ? <FaTrash className='text-white'/> : <BsFillHeartFill/>
                        }
                    </button>

    {
        foundProduct ? <button onClick={() => navigate('/basket')} type="button"
                               className="focus:outline-none text-white flex items-center bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
            перейти в &nbsp; <BsBasket/>
        </button> : <button onClick={() => addToBasket(product)}
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            добавить в &nbsp; <BsBasket/>
        </button>
    }
                </div>

            </div>
        </div>
    );
};

export default ProductCart;