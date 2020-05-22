import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import MyButton from '../../util/MyButton'
import Notifications from './Notifications'
// Redux
import {connect} from 'react-redux'
// MUI
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
// Icons
import HomeIcon from '@material-ui/icons/Home'

import PostScream from '../scream/PostScream'

class Navbar extends Component {
    render() {
        const {authenticated} = this.props
        return (
            <AppBar>
                <Toolbar className="nav-container">
                    {authenticated ? (
                        <Fragment>
                            <PostScream />
                            <Link to="/">
                                <MyButton tip="Home">
                                    <HomeIcon/>
                                </MyButton>
                            </Link>

                            <Notifications/>
                            
                        </Fragment>
                    ) : (
                        <Fragment>
                            <Button color="inherit" component={Link} to="/login" >
                            Login
                        </Button>
                        <Button color="inherit" component={Link} to="/" >
                            Home
                        </Button>
                        <Button color="inherit" component={Link} to="/signup" >
                            SignUp
                        </Button>   
                        </Fragment>
                    )}
                </Toolbar>
            </AppBar>
        )
    }
}

const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated
})

Navbar.propTypes = {
    authenticated: PropTypes.bool.isRequired
}

export default connect(mapStateToProps)(Navbar)