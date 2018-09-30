import { CartActionTypes, CartActions } from "../actions/actions";

// Every state item will have a reducer!
export let initialState = []

// Reducer functions always accept the previous state and an action.
// Remember! This needs to be immutable (Keeps the state predictable and let's our application perform better under OnPush detection).
export function reducer(state=initialState, action: CartActions) {  
    switch (action.type) {
        case CartActionTypes.ADD_PRODUCT: 
            return [...state, action.payload]
        case CartActionTypes.REMOVE_PRODUCT: 
            let product = action.payload        
            return state.filter((el)=>el.id != product.id)
        default: 
            return state
    }
}