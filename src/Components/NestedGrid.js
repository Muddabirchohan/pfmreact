import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Accounts from "./Accounts";
import Budget from "./Budget";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

class NestedGrid extends Component {
    render() {
        return (
            <div>
                <Grid container spacing={24}>
                <Grid item xs={3}>
                    <h1 style={{color: '#3f51b5'}}> Accounts </h1>
                    <Paper>
                        <Accounts/>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <h1 style={{color: '#3f51b5'}}> Budget </h1>
                    <Paper>
                       <Budget/>
                    </Paper>
                </Grid>

                </Grid>
            </div>
        );
    }
}


export default NestedGrid;