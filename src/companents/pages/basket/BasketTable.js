import React from 'react';
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {useDispatch} from "react-redux";
import {FcFullTrash} from "react-icons/fc";

const BasketTable = ({el}) => {
    const dispatch = useDispatch()
    const addToBasket = (product) => {
        dispatch({type: 'ADD_TO_BASKET', payload: product})
    }
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {el.title}
            </th>
            <td className="px-6 py-4">
                <img src={el.image} width={50} alt=""/>
            </td>
            <td className="px-6 py-4 flex items-center text-[20px] py-4">
                <span onClick={() => addToBasket(el)}
                      className='mx-2 text-[15px] cursor-pointer'><AiOutlinePlus/></span>
                <span className='text-2xl'>{el.quantity}</span>
                <span onClick={() => dispatch({type: 'DECREASE_TO_BASKET', payload: el.id})}
                      className='mx-2 text-[15px] cursor-pointer'><AiOutlineMinus/></span>

            </td>
            <td className="px-6 py-4">
                {el.price * el.quantity}
            </td>
            <td className="px-6 py-4 text-right">
                <FcFullTrash onClick={() => dispatch({type: 'DELETE', payload: el.id})} className='cursor-pointer text-3xl'/>
            </td>
        </tr>
    );
};

export default BasketTable;