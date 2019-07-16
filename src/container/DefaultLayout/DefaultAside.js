import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as actions from '../../store/actions/auth';
import {connect} from 'react-redux';


const propTypes = {
    children: PropTypes.node,
};

const defaultProps = {};

class DefaultAside extends Component {
    constructor(props){
        super(props)
    }



    render() {

        // eslint-disable-next-line
        const { children, ...attributes } = this.props;

        return (
            <aside className={this.props.toggleSidebar?"left-sidebar fix-header card-no-border fix-sidebar":"left-sidebar fix-header card-no-border fix-sidebar mini-sidebar"} >
                {/* Sidebar scroll*/}
                <div className="scroll-sidebar">
                    {/* Sidebar navigation*/}
                    <nav className="sidebar-nav">
                        <ul id="sidebarnav">
                            <li> <a className="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i className="mdi mdi-email" /><span className="hide-menu">Inbox</span></a>
                                <ul aria-expanded="false" className="collapse">
                                    <li><Link to="/category" >Category</Link></li>
                                    <li><Link to="/" >Dashboard</Link></li>

                                </ul>
                            </li>
                            <li> <a className="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i className="mdi mdi-email" /><span className="hide-menu">Inbox</span></a>
                                <ul aria-expanded="false" className="collapse">
                                    <li><Link to="/category" >Category</Link></li>
                                    <li><Link to="/" >Dashboard</Link></li>

                                </ul>
                            </li>
                            <li> <a className="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i className="mdi mdi-email" /><span className="hide-menu">Inbox</span></a>
                                <ul aria-expanded="false" className="collapse">
                                    <li><Link to="/category" >Category</Link></li>
                                    <li><Link to="/" >Dashboard</Link></li>

                                </ul>
                            </li>
                        </ul>
                    </nav>
                    {/* End Sidebar navigation */}
                </div>
                {/* End Sidebar scroll*/}
            </aside>
        );
    }
}

DefaultAside.propTypes = propTypes;
DefaultAside.defaultProps = defaultProps;
const mapStateToProps=state=>{
    return{
        toggleSidebar:state.sidebar
    }
}

export default connect(mapStateToProps,null)(DefaultAside);

