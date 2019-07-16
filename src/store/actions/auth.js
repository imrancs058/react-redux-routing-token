import * as actionTypes from './actionTypes';
import axios from 'axios';
export const authStart=()=>{
    return{
        type:actionTypes.AUTH_START
    }
}
export const authSuccess=token=>{
    return {
        type:actionTypes.AUTH_SUCCESS,
        token:token
    }
}
export const authError=error=>{
    return {
        type:actionTypes.AUTH_FAIL,
        error:error
    }
}
export const logout=()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    return {
        type:actionTypes.AUTH_LOGOUT
    }
}
export const SidebarToggle=status=>{
    return {
        type:"Toggle",
        status:status
    }
}
export const checkAuthTimeout=expirationTime=>{
    return dispatch=>{
        setTimeout(()=>{
            dispatch(logout());
        },expirationTime*1000)
    }

}
export const authLogin=(authData)=>{
    return dispatch=>{
        dispatch(authStart());
        axios.post("http://localhost:3322/api/user/signin",authData).then(res=>{
            const token=res.data.token;
            const expirationDate=new Date(new Date().getTime()+3600*1000);
            localStorage.setItem('token',token);
            localStorage.setItem('expirationDate',expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600));
            return {
                message: 'Successfull login'
            }



        }).catch(err=>{
            dispatch(authError(err));
        })
    }
}

export const authCheckState=()=>{
    return dispatch=>{
        const token=localStorage.getItem('token');
        if(token==undefined){

            dispatch(logout());
        }else {
            const expirationDate=new Date(localStorage.getItem('expirationDate'));
            if(expirationDate<=new Date()){
                dispatch(logout());
            }else {
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout((expirationDate.getTime()-new Date().getTime())/1000))
            }
        }
    }
}

export const SideBarToggler=(res)=>{
    return dispatch=>{

        dispatch(SidebarToggle(res));
    }
}