import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';
const initialState={
    token:'',
    error:null,
    loading:false,
    sidebar:true
}
const authStart=(state,action)=>{
    return updateObject(state,{
        error:null,
        loading:true
    })
}
const authSuccess=(state,action)=>{
    return updateObject(state,{
        error:null,
        loading:false,
        token:action.token
    })
}

const authError=(state,action)=>{
    return updateObject(state,{
        error:action.error,
        loading:false,

    })
}
const authLogout=(state,action)=>{
    return updateObject(state,{
        token:null

    })
}
const SidebarToggle=(state,action)=>{
    return updateObject(state,{
        sidebar:action.status

    })
}
const reducer=(state=initialState,action)=>{
    switch (action.type){
        case actionTypes.AUTH_START:return authStart(state,action);
        case actionTypes.AUTH_SUCCESS:return authSuccess(state,action);
        case actionTypes.AUTH_FAIL:return authError(state,action);
        case actionTypes.AUTH_LOGOUT:return authLogout(state,action);
        case "Toggle":return SidebarToggle(state,action);
        default:
            return state;
    }

}

export default reducer;