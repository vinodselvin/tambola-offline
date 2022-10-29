import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { Accordion, AccordionDetails, AccordionSummary, Breadcrumbs, Button, Card, Chip, Grid, Snackbar, Typography } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
class Organizer extends React.Component {
    constructor() {
        super();
        this.state = {
            username: localStorage.getItem("username") || "Guest",
            series: Array.from({length: 99}, (_, index) => index + 1),
            start: false,
            selectedSeries: [],
            current: "",
            open: false,
            expanded: false
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
        this.setState({selectedSeries, current: number, open: true})
    }

    handleAccordion = (panel) => (event, isExpanded) => {
        this.setState({expanded: isExpanded ? panel : false});
    };

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({open: false})
    }
    render() {
        return <React.Fragment>
            <Grid container>
                <Grid item xs={12}>
                    <h1 align="center" className='game-title'>HOUSIE / TAMBOLA</h1>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={6}>
                    <Breadcrumbs aria-label="breadcrumb" className="breadcrumbs">
                        <Link to="/tambola-offline" color="inherit">
                            Home
                        </Link>
                        <Typography color="text.primary">Organize Game</Typography>
                    </Breadcrumbs>
                </Grid>
                <Grid item xs={6}>
                    <span className="w-name">Welcome, <span className="a-name">{this.state.username}</span></span>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className="pickcoin">
                    <Button onClick={() => this.handleStart(true)} className="pick" variant="outlined">Next</Button>
                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={7} xl={7} className="valueseries">
                    <Accordion expanded={this.state.expanded === 'panel1'} onChange={this.handleAccordion('panel1')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography>
                                Last 5 picks
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {/* <Card> */}
                            {[...this.state.selectedSeries].reverse().slice(0,5).map(selected => 
                                <Chip label={selected} variant='filled' className={'coin'}></Chip>)
                            }
                            {/* </Card> */}
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
            
            
            <Grid container className="game-board">
                <Grid item xs={12} sm={12} md={12}>
                    <Card className="board-card">
                    {this.state.series?.map(i => 
                        <Chip label={i} variant={this.state.selectedSeries?.includes(i) ? 'filled' : 'outlined'} className={'coin'}></Chip>
                    )}
                    </Card>
                </Grid>
            </Grid>
            <Snackbar
                anchorOrigin={{ vertical: "center", horizontal: "center" }}
                open={this.state.open}
                autoHideDuration={3000}
                onClose={this.handleClose}
                message={this.state.current}
            />
        </React.Fragment>
    }
}

export default Organizer;