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
import AppIcon from '../../assets/images/gclo.png'

import PostScream from '../scream/PostScream'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

class Navbar extends Component {
    render() {
        const {authenticated} = this.props
        return (
            // <AppBar>
            //     <Toolbar className="nav-container">
            //         {authenticated ? (
            //             <Fragment>
            //                 <PostScream />
            //                 <Link to="/">
            //                     <MyButton tip="Home">
            //                         <HomeIcon/>
            //                     </MyButton>
            //                 </Link>

            //                 <Notifications/>
                            
            //             </Fragment>
            //         ) : (
            //             <Fragment>
            //                 <Button color="inherit" component={Link} to="/login" >
            //                 Login
            //             </Button>
            //             <Button color="inherit" component={Link} to="/" >
            //                 Home
            //             </Button>
            //             <Button color="inherit" component={Link} to="/signup" >
            //                 SignUp
            //             </Button>   
            //             </Fragment>
            //         )}
            //     </Toolbar>
            // </AppBar>
            <AppBar style={{background: '#F5F5F5'}}>
                <Container>
                    <Toolbar>
                        <Grid justify="space-between" container spacing={24}>
                            <Grid item>
                                <Link to="/">
                                    <img src={AppIcon} alt="geco" style={{maxWidth:'8%', height: 'auto', marginTop: 5}} to="/" />
                                </Link>
                            </Grid>
                            <Grid item>
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
                                    <Button color="primary" variant="outlined" component={Link} to="/login" 
                                        style={{borderRadius: '60px', width: 'auto', height: 30, textTransform: 'none'}}>
                                        Login
                                    </Button>
                                    {/* <Button color="inherit" component={Link} to="/" >
                                        Home
                                    </Button> */}
                                    <Button color="primary" variant="contained" component={Link} to="/signup" 
                                        style={{borderRadius: '60px', width: 'auto', height: 30, textTransform: 'none', marginLeft: 20}}>
                                        SignUp
                                    </Button>   
                                </Fragment>
                                )}
                            </Grid>
                        </Grid>
                    </Toolbar>
                </Container>
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
