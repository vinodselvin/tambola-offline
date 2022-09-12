import * as React from 'react';
import TextField from '@mui/material/TextField';
import {Button, Grid} from '@mui/material';
import { height } from '@mui/system';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';


class Ticket extends React.Component {
    constructor() {
        super();
        this.state = {
            username: localStorage.getItem("username") || "Guest",
            series: [],
            selectedSeries: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        };
    }

    componentDidMount(){
        let series = this.generateSeries();
        this.setState({series})
    }

    generateSeries = () => {

        let series = [];

        while(true){

            let number = "";

            while(true){
                number = this.getRandomInt(1, 99);
                
                if(!series.includes(number)){
                    break;
                }
            }

            series.push(number);

            if(series?.length == 15){
                break;
            }
        }

        return series;
    }

    ticketClicked = (i) => {

        let selectedSeries = [...this.state.selectedSeries];

        if(selectedSeries[i] == 0){
            selectedSeries[i] = this.state.series[i];
        }
        else{
            selectedSeries[i] = 0;
        }

        this.setState({selectedSeries});

    }

    getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    inputChange = (key, value) => {
        this.setState({[key]: value});
    }

    render() {
        return <React.Fragment>
            <Box sx={{ flexGrow: 1, marginTop: "70px" }}>
                <Grid container>
                    <Grid item xs={12} style={{textAlign: "center"}}>
                        <h1>#{this.state.username}</h1>
                    </Grid>
                </Grid>
                <Grid container >
                    <Grid item xs={2}></Grid>
                    <Grid item xs={1}>
                        <div class={"ticket " + (this.state.series[0] == this.state.selectedSeries[0] ? 'active' : '')} onClick={() => this.ticketClicked(0)}>{this.state.series[0]}</div>
                    </Grid>
                    <Grid item xs={2}>
                        <div class="ticket"></div>
                    </Grid>
                    <Grid item xs={1}>
                        <div class={"ticket " + (this.state.series[1] == this.state.selectedSeries[1] ? 'active' : '')} onClick={() => this.ticketClicked(1)}>{this.state.series[1]}</div>
                    </Grid>
                    <Grid item xs={1}>
                        <div class={"ticket " + (this.state.series[2] == this.state.selectedSeries[2] ? 'active' : '')} onClick={() => this.ticketClicked(2)}>{this.state.series[2]}</div>
                    </Grid>
                    <Grid item xs={1}>
                        <div class="ticket"></div>
                    </Grid>
                    <Grid item xs={1}>
                        <div class={"ticket " + (this.state.series[3] == this.state.selectedSeries[3] ? 'active' : '')} onClick={() => this.ticketClicked(3)}>{this.state.series[3]}</div>
                    </Grid>
                    <Grid item xs={1}>
                        <div class={"ticket " + (this.state.series[4] == this.state.selectedSeries[4] ? 'active' : '')} onClick={() => this.ticketClicked(4)}>{this.state.series[4]}</div>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
                <Grid container >
                    <Grid item xs={2}></Grid>
                    <Grid item xs={1}>
                        <div class="ticket"></div>
                    </Grid>
                    <Grid item xs={1}>
                        <div class={"ticket " + (this.state.series[5] == this.state.selectedSeries[5] ? 'active' : '')} onClick={() => this.ticketClicked(5)}>{this.state.series[5]}</div>
                    </Grid>
                    <Grid item xs={1}>
                        <div class={"ticket " + (this.state.series[6] == this.state.selectedSeries[6] ? 'active' : '')} onClick={() => this.ticketClicked(6)}>{this.state.series[6]}</div>
                    </Grid>
                    <Grid item xs={1}>
                        <div class="ticket"></div>
                    </Grid>
                    <Grid item xs={1}>
                        <div class={"ticket " + (this.state.series[7] == this.state.selectedSeries[7] ? 'active' : '')} onClick={() => this.ticketClicked(7)}>{this.state.series[7]}</div>
                    </Grid>
                    <Grid item xs={1}>
                        <div class={"ticket " + (this.state.series[8] == this.state.selectedSeries[8] ? 'active' : '')} onClick={() => this.ticketClicked(8)}>{this.state.series[8]}</div>
                    </Grid>
                    <Grid item xs={1}>
                        <div class="ticket"></div>
                    </Grid>
                    <Grid item xs={1}>
                        <div class={"ticket " + (this.state.series[9] == this.state.selectedSeries[9] ? 'active' : '')} onClick={() => this.ticketClicked(9)}>{this.state.series[9]}</div>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
                <Grid container >
                    <Grid item xs={2}></Grid>
                    <Grid item xs={1}>
                        <div class="ticket"></div>
                    </Grid>
                    <Grid item xs={1}>
                        <div class={"ticket " + (this.state.series[10] == this.state.selectedSeries[10] ? 'active' : '')} onClick={() => this.ticketClicked(10)}>{this.state.series[10]}</div>
                    </Grid>
                    <Grid item xs={1}>
                        <div class={"ticket " + (this.state.series[11] == this.state.selectedSeries[11] ? 'active' : '')} onClick={() => this.ticketClicked(11)}>{this.state.series[11]}</div>
                    </Grid>
                    <Grid item xs={1}>
                        <div class={"ticket " + (this.state.series[12] == this.state.selectedSeries[12] ? 'active' : '')} onClick={() => this.ticketClicked(12)}>{this.state.series[12]}</div>
                    </Grid>
                    <Grid item xs={1}>
                        <div class="ticket"></div>
                    </Grid>
                    <Grid item xs={1}>
                        <div class={"ticket " + (this.state.series[13] == this.state.selectedSeries[13] ? 'active' : '')} onClick={() => this.ticketClicked(13)}>{this.state.series[13]}</div>
                    </Grid>
                    <Grid item xs={1}>
                        <div class={"ticket " + (this.state.series[14] == this.state.selectedSeries[14] ? 'active' : '')} onClick={() => this.ticketClicked(14)}>{this.state.series[14]}</div>
                    </Grid>
                    <Grid item xs={1}>
                        <div class="ticket"></div>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={12} style={{textAlign: "center", fontSize: "20px"}}>
                        <p>Full Housie: {this.state.selectedSeries?.includes(0) ? "No" : "Yes"}</p>
                        <p>First Row: {this.state.selectedSeries.slice(0, 5)?.includes(0) ? "No" : "Yes"}</p>
                        <p>Second Row: {this.state.selectedSeries.slice(6, 10)?.includes(0) ? "No" : "Yes"}</p>
                        <p>Third Row: {this.state.selectedSeries.slice(11, 15)?.includes(0) ? "No" : "Yes"}</p>
                    </Grid>
                </Grid>
            </Box>

        </React.Fragment>
    }
}

export default Ticket;