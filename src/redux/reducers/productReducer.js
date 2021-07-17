import { actionTypes } from "../constants/action-types";

const initialState = {
    products:[{
        id:1,
        title: "Febby",
        category:"developer",
    }],
}

export const productReducer  = (state = initialState, {type, payload}) => {
        switch (type) {
            case actionTypes.SET_PRODUCTS:
                return state
        
            default:
                return state
        }

}