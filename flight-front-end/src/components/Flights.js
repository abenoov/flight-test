import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import * as actions from "../actions/flight";
import { Button, ButtonGroup, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, withStyles } from "@material-ui/core";
import FlightForm from "./FlightForm";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const styles = theme =>({
    root: {
        "& .MuiTableCell-head":{ // styling a class
            fontSize: "1rem",
        }
    },
    paper: {
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    }
})

const Flights = ({classes,...props}) => {
    const [currentId, setCurrentId] = useState(0)

    useEffect(() => {
        props.fetchAllFlights()
    }, []) //componentDidMount

    return (
        <Paper className = {classes.paper} elevation = {3}>
            <Grid container>
                <Grid item xs={3}>
                    <FlightForm {...({ currentId, setCurrentId })} />
                </Grid>
                <Grid item xs={9}>
                    <TableContainer>
                        <Table>
                            <TableHead className = {classes.root}>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell>FLIGHT</TableCell>
                                    <TableCell>DEPARTURES</TableCell>
                                    <TableCell>TIME</TableCell>
                                    <TableCell>ARRIVALS</TableCell>
                                    <TableCell>TIME</TableCell>
                                    <TableCell>STATUS</TableCell>
                                    <TableCell>DELAY</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    props.flightList.map((record, index) => {
                                        return (<TableRow key = {index} hover>
                                            <TableCell>
                                                <ButtonGroup variant = "text">
                                                    <Button><EditIcon color = "primary"
                                                    onClick = {() => {setCurrentId(record.id)}}/></Button>
                                                    <Button><DeleteIcon color = "secondary"/></Button>
                                                </ButtonGroup>
                                            </TableCell>
                                            <TableCell>{record.flightName}</TableCell>
                                            <TableCell>{record.fromCity}</TableCell>
                                            <TableCell>{record.fromTimeDate}</TableCell>
                                            <TableCell>{record.toCity}</TableCell>
                                            <TableCell>{record.toTimeDate}</TableCell>
                                            <TableCell>{record.status}</TableCell>
                                            <TableCell>{record.delay}</TableCell>
                                        </TableRow>)
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Paper>
    );
}

const mapStateToProps = state => ({
    flightList: state.flight.list
})

const mapActionToProps = {
    fetchAllFlights: actions.fetchAll
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(Flights));
