import React from 'react';
import  { Redirect } from 'react-router-dom'
import './login-register-lock.css';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/auth';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Username:'',
            Password:''
        }

        this.formSubmit=this.formSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
     formSubmit=e=>{
        e.preventDefault();
         //this.props.dispatch(this.props.onTryAuthSignIn(this.state));
         this.props.onTryAuthSignIn(this.state)

        console.log(JSON.stringify(this.state));

    }
    handleChange=e=>{
        e.preventDefault();
        const {name,value}=e.target;
        this.setState({
            [name]:value
        })
    }


    checkLoginStatus=()=>{
this.context.router.push("/");
    }

render(){
    let loginStatus=this.props.isAuthenticated;
    if(loginStatus!=''){
        return <Redirect to='/'  />
    }
    return(


    <div className="login-register" >
            <div className="login-box card">
                <div className="card-body">
                    <form className="form-horizontal form-material" id="loginform" onSubmit={this.formSubmit}>
                        <h3 className="box-title m-b-20">Sign In</h3>
                        <div className="form-group ">
                            <div className="col-xs-12">
                                <input className="form-control" type="text" required placeholder="Username" name="Username" onChange={this.handleChange} /> </div>
                        </div>
                        <div className="form-group">
                            <div className="col-xs-12">
                                <input className="form-control" type="password" required placeholder="Password" name="Password" onChange={this.handleChange} /> </div>
                        </div>

                        <div className="form-group text-center">
                            <div className="col-xs-12 p-b-20">
                                <button className="btn btn-block btn-lg btn-info btn-rounded" type="submit">Log In</button>
                            </div>
                        </div>
                        <div className="row">

                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}
}

const mapStateToProps=state=>{
    return{
        isAuthenticated:state.token
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        onTryAuthSignIn:(res)=>dispatch(actions.authLogin(res)),

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
