import * as React from 'react';
import TextField from '@mui/material/TextField';
import {Button, Grid} from '@mui/material';
import { height } from '@mui/system';
import { Link } from 'react-router-dom'


class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            username: localStorage.getItem("username") || "Guest"
        };
    }

    inputChange = (key, value) => {
        this.setState({[key]: value});
        localStorage.setItem('username', value);
    }

    render() {
        return <React.Fragment>
        <Grid container>
            <Grid item xs={12}>
                <h1 align="center" className='game-title'>HOUSIE / TAMBOLA</h1>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={12} sm={12} lg={6} md={6} xl={6} style={{textAlign: "center", margin: "auto", marginTop: "45px", marginBottom:"45px"}}>
                <TextField 
                    id="standard-basic" 
                    value={this.state.username} 
                    label="Enter your name" 
                    variant="standard" 
                    style={{width: "100%"}}
                    onChange={(e) => this.inputChange('username', e.target.value)} />
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={12}>
                <hr/>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={12} sm={12} lg={6} md={6} xl={6} style={{textAlign: "center", margin: "auto", paddingTop: "45px", paddingBottom: "45px"}}>
                <Link to="/tambola-offline/organize" style={{textDecoration: "none"}}>
                    <Button variant="outlined" className="organize-btn" >Organize Game</Button>
                </Link>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={12} sm={12} lg={6} md={6} xl={6} style={{textAlign: "center", margin:"auto",  marginBottom:"30px"}}>
                <Link to="/tambola-offline/ticket" style={{textDecoration: "none"}}>
                    <Button variant="outlined" className="organize-btn">Play Game</Button>
                </Link>
            </Grid>
        </Grid>
        </React.Fragment>
    }
}

export default Home;