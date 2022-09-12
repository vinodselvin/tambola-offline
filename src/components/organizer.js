import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { Chip, Grid } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

class Organizer extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            series: Array.from({length: 99}, (_, index) => index + 1),
            start: false,
            selectedSeries: [],
            current: ""
        };
    }

    inputChange = (key, value) => {
        this.setState({[key]: value});
    }

    getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    handleStart = (val) => {
        this.setState({start: val});
        const msg = new SpeechSynthesisUtterance();
        let number = "";

        while(true){
            number = this.getRandomInt(1, 99);
            if(!this.state.selectedSeries.includes(number)){
                break;
            }
        }
        msg.text = "The Number is " + number;
        window.speechSynthesis.speak(msg);
        let selectedSeries = [...this.state.selectedSeries];
        selectedSeries.push(number);
        this.setState({selectedSeries, current: number})
    }

    render() {
        return <React.Fragment>
            <Grid container>
                <Grid item xs={12}>
                    <h1 align="center">Housie Game</h1>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} sm={12} md={2} style={{color: "green", paddingTop: "10px", textAlign: "center", border: "2px solid black"}}>
                    <div onClick={() => this.handleStart(true)} style={{fontSize: "80px", cursor: "pointer"}}>Pick</div>
                </Grid>
                <Grid item xs={12} sm={12} md={2} style={{color: "green", fontSize: "80px", textAlign: "center", border: "2px solid black"}}>
                    {this.state.current}
                </Grid>
                <Grid item xs={12} sm={12} md={8} style={{fontSize: "50px", paddingTop: "20px", color: "red", textAlign: "center", border: "2px solid black"}}>
                    {this.state.selectedSeries.reverse().slice(0,5).join(", ")}
                </Grid>
            </Grid>
            
            <Grid container style={{padding: "25px"}}>
            {this.state.series?.map(i => 
                <div style={{padding: "15px", width: "20px", margin: "5px", height:"20px", border: "3px solid red", borderRadius:"50%", background: "white", textAlign: "center", fontWeight: "bold", backgroundColor:this.state.selectedSeries?.includes(i) ? 'orange' : 'white'}}>
                    {i}
                </div>
            )}
            </Grid>
        </React.Fragment>
    }
}

export default Organizer;