import React, { Component } from 'react';


import PropTypes from 'prop-types';



const propTypes = {
    children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
    render() {

        // eslint-disable-next-line
        const { children, ...attributes } = this.props;

        return (

                <footer className="footer"> © 2019 Admin Pro by wrappixel.com </footer>



        );
    }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
