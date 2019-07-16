import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as actions from '../../store/actions/auth';
import {connect} from 'react-redux';


const propTypes = {
    children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
    constructor(props){
        super(props);
        this.state={
            sidebarStatus:true
        }
    }
    Logout=e=>{
        this.props.onLogout();
    }

    sidebartoggle=e=>{
        this.setState({
            sidebarStatus: !this.state.sidebarStatus
        });
    this.props.onToggleSidebar(this.state.sidebarStatus);

    }

    render() {

        // eslint-disable-next-line
        const { children, ...attributes } = this.props;

        return (
            <header className="topbar">
                <nav className="navbar top-navbar navbar-expand-md navbar-light">
                    {/* ============================================================== */}
                    {/* Logo */}
                    {/* ============================================================== */}
                    <div className="navbar-header">
                        <a className="navbar-brand" href="index.html">
                            {/* Logo icon */}<b>
                            {/*You can put here icon as well // <i class="wi wi-sunset"></i> //*/}
                            {/* Dark Logo icon */}
                            <img src="./assets/images/logo-icon.png" alt="homepage" className="dark-logo" />
                            {/* Light Logo icon */}
                            <img src="./assets/images/logo-light-icon.png" alt="homepage" className="light-logo" />
                        </b>
                            {/*End Logo icon */}
                            {/* Logo text */}<span>
                {/* dark Logo text */}
                            <img src="./assets/images/logo-text.png" alt="homepage" className="dark-logo" />
                            {/* Light Logo text */}
                            <img src="./assets/images/logo-light-text.png" className="light-logo" alt="homepage" /></span>
                        </a>
                    </div>
                    {/* ============================================================== */}
                    {/* End Logo */}
                    {/* ============================================================== */}
                    <div className="navbar-collapse">
                        {/* ============================================================== */}
                        {/* toggle and nav items */}
                        {/* ============================================================== */}
                        <ul className="navbar-nav mr-auto">
                            {/* This is  */}
                            <li className="nav-item"> <a onClick={this.sidebartoggle} className="nav-link nav-toggler hidden-md-up waves-effect waves-dark" ><i className="mdi mdi-menu" /></a> </li>
                            <li className="nav-item"> <a onClick={this.sidebartoggle} className="nav-link sidebartoggler hidden-sm-down waves-effect waves-dark" ><i className="mdi mdi-menu" /></a> </li>
                            <li className="nav-item hidden-sm-down"><span>Dashboard</span></li>
                        </ul>
                        {/* ============================================================== */}
                        {/* User profile and search */}
                        {/* ============================================================== */}
                        <ul className="navbar-nav my-lg-0">
                            {/* ============================================================== */}
                            {/* Search */}
                            {/* ============================================================== */}
                            {/* Language */}
                            {/* ============================================================== */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle waves-effect waves-dark" href data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="flag-icon flag-icon-us" /></a>
                                <div className="dropdown-menu dropdown-menu-right animated bounceInDown"> <a className="dropdown-item" href="#"><i className="flag-icon flag-icon-in" /> India</a> <a className="dropdown-item" href="#"><i className="flag-icon flag-icon-fr" /> French</a> <a className="dropdown-item" href="#"><i className="flag-icon flag-icon-cn" /> China</a> <a className="dropdown-item" href="#"><i className="flag-icon flag-icon-de" /> Dutch</a>
                                </div>
                            </li>
                            {/* ============================================================== */}
                            {/* Profile */}
                            {/* ============================================================== */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle waves-effect waves-dark" href data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="./assets/images/users/1.jpg" alt="user" className="profile-pic" /></a>
                                <div className="dropdown-menu dropdown-menu-right animated flipInY">
                                    <ul className="dropdown-user">
                                        <li>
                                            <div className="dw-user-box">
                                                <div className="u-img"><img src="./assets/images/users/1.jpg" alt="user" /></div>
                                                <div className="u-text">
                                                    <h4>Steave Jobs</h4>
                                                    <p className="text-muted">varun@gmail.com</p><a href="pages-profile.html" className="btn btn-rounded btn-danger btn-sm">View Profile</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li role="separator" className="divider" />
                                        <li><a href="#"><i className="ti-user" /> My Profile</a></li>
                                        <li><a href="#"><i className="ti-wallet" /> My Balance</a></li>
                                        <li><a href="#"><i className="ti-email" /> Inbox</a></li>
                                        <li role="separator" className="divider" />
                                        <li><a href="#"><i className="ti-settings" /> Account Setting</a></li>
                                        <li role="separator" className="divider" />
                                        <li><a onClick={this.Logout}><i className="fa fa-power-off" /> Logout</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
                 );
    }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;
const mapStateToProps=state=>{
    return{
        isAuthenticated:state.token!==null,
        toggleSidebar:state.sidebar
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        onLogout:()=>dispatch(actions.logout()),
        onToggleSidebar:(res)=>dispatch(actions.SideBarToggler(res))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DefaultHeader);

