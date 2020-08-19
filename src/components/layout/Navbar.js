import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MyButton from '../../util/MyButton';
import PostScream from '../scream/PostScream';
import Notifications from './Notification';

//MUI stuff

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import IconButton from '@material-ui/core/IconButton';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';




class Navbar extends Component {
    render() {
        const { authenticated } = this.props;
        return(
              <AppBar>
                  <Toolbar>
                    { authenticated ? (
                        <Fragment>
                            <FlightTakeoffIcon />
                            <IconButton  color="inherit" component={Link} to="/">
                                TraStory
                            </IconButton>
                            <hr/>
                            <PostScream />
                            <Notifications />
                        </Fragment>
                    ) : (
                        <Fragment>
                            <FlightTakeoffIcon />
                            <IconButton  color="inherit" component={Link} to="/">
                            TraStory
                            </IconButton>
                            <hr/>
                            <IconButton color='inherit' component={Link} to='/login'>
                                Login
                            </IconButton>
                            <IconButton color='inherit' component={Link} to='/signup'>
                                Sign Up
                            </IconButton>
                        </Fragment>
                    )}
                  </Toolbar>
              </AppBar>
        );
    }
}

Navbar.propTypes = {
    authenticated: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated
});

export default connect(mapStateToProps)(Navbar);
