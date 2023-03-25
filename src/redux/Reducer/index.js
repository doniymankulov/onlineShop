const initialState = {
    product: [],
    favorite: [],
    basket: []
}

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PRODUCT':
            return {...state, product: action.payload}
        case 'ADD_TO_BASKET':
            const foundProduct = state.basket.find(el => el.id === action.payload.id)
            if (foundProduct) {
                return {
                    ...state, basket: state.basket.map(el => el.id === foundProduct.id ? {
                        ...el,
                        quantity: el.quantity + 1
                    } : el)
                }
            } else {
                return {...state, basket: [...state.basket, {...action.payload, quantity: 1}]}
            }
        case 'DECREASE_TO_BASKET':
            return {
                ...state, basket: state.basket.map(el => {
                    if (el.id === action.payload) {
                        if (el.quantity > 1) {
                            return {
                                ...el, quantity: el.quantity - 1
                            }
                        } else {
                            return el
                        }
                    } else {
                        return el
                    }
                })
            }
        case 'DELETE':
            return {
                ...state, basket: state.basket.filter(el => {
                    return el.id !== action.payload
                })
            }

        case 'ADD_TO_FAVORITE':
            const foundFavorite = state.favorite.find(el => el.id === action.payload.id)
            if (foundFavorite) {
                return {...state, favorite: state.favorite.filter(el => el.id !== action.payload.id )}
            } else {
                return {...state, favorite: [...state.favorite, {...action.payload,isLiked:true}]}
            }
        default:
            return state
    }
}