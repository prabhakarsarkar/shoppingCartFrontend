import { GET_ITEM , ADD_ITEM , DELETE_ITEM,ITEM_LOADING } from "../Actions/Type";
const initialState ={
    item:[],
    loading:false
}

export default function(state=initialState,action){
    // console.log(action.payload);
    switch(action.type){
        case GET_ITEM:
            return{
                ...state,
                item:action.payload
            }
            case DELETE_ITEM:
                return{
                    ...state,
                    item:state.item.filter(items=> items._id !==action.payload)
                }
                case ADD_ITEM:
                    return{
                        ...state,
                        item:[action.payload, ...state.item]
                    }
                    case ITEM_LOADING:
                        return{
                            ...state,
                            loading:true
                        }
            default :return state
    }
}