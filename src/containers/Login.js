import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Carousel from '../components/Carousel';

const styles = theme => ({
    root : {
        flexGrow : 1,
    },
    paper :{
        padding: theme.spacing.unit *2,
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
});

const Login = (props) => {
    
    return (
        <div className={props.classes.root}>
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <Carousel></Carousel>
                </Grid>
                <Grid item xs={6} sm={6} lg={3}>
                    <Paper className={props.classes.paper}>xs=6</Paper>
                </Grid>
                
            </Grid> 
        </div>
    );

}
Login.propTypes = {
    classes : PropTypes.object.isRequired
}

export default withStyles(styles)(Login);
