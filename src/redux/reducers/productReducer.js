import { actionTypes } from "../constants/action-types";

// const initialState = {
//     products:[{
//         id:1,
//         title: "Febby",
//         category:"developer",
//     }],
// }

const initialState = {
    products: [],
}

export const productReducer  = (state = initialState, {type, payload}) => {
        switch (type) {
            case actionTypes.SET_PRODUCTS:
                return {...state, products: payload}
        
            default:
                return state
        }

}

export const selectedProductReducer = (state={}, {type,payload}) => {
    switch (type) {
        case actionTypes.SELECTED_PRODUCT:
            //destructure
            return {...state, ...payload}
        case actionTypes.REMOVE_SELECTED_PRODUCT:
            //destructure
            return {}
    
        default:
            return state;
    }
}