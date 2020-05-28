import {
    GET_PRODUCTS_BY_SELL ,
    GET_PRODUCTS_BY_ARRIVAL,
    ADD_PRODUCT,
    CLEAR_PRODUCT,
    GET_PRODUCT_DETAIL,
    CLEAR_PRODUCT_DETAIL
} from '../actions/types';


export default function(state={},action){
    switch(action.type){
        case GET_PRODUCTS_BY_SELL :
            return {...state, bySell : action.payload } ;
        case GET_PRODUCTS_BY_ARRIVAL :
            return {...state};
        case ADD_PRODUCT :
                return {...state,addProduct: action.payload}
                case CLEAR_PRODUCT:
                    return { ...state,addProduct: action.payload }
                case GET_PRODUCT_DETAIL:
                    return {...state, prodDetail: action.payload }
                case CLEAR_PRODUCT_DETAIL:
                    return {...state, prodDetail: action.payload }
        default:
            return state;
    }
}