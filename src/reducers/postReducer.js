import {FETCH_POSTS, NEW_POST} from "../actions/types"

const intialState={
    items:[],
    item:{}
}

export default function (state =intialState, action){
    switch(action.type){
        case FETCH_POSTS:
            console.log(action.payload)
            return{
                ...state,
                items: action.payload
            }
        default:
            return state
    }
}