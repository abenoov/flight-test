import React, {useState, useEffect} from "react";
import { FormControl, Grid, MenuItem, Select, TextField, withStyles, InputLabel, Button } from "@material-ui/core";
import useForm from "./useForm";
import { connect } from "react-redux";
import * as actions from "../actions/flight";

const styles = theme => ({
    root: {
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
        minWidth: 230,
        }
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 230,
    },
    smMargin: {
        margin: theme.spacing(1)
    }
})

const initialFieldValues = {
    flightName: '',
    fromCity: '',
    fromTimeDate: '',
    toCity: '',
    toTimeDate: '',
    status: '',
    delay: ''
}



const FlightForm = ({classes, ...props}) => {

    const {
        values,
        setValues,
        handleInputChange,
        resetForm
    } = useForm(initialFieldValues, props.setCurrentId)
    
    // Is to fix bug label in drop down menu; Material-ui
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);
    //

    const handleSubmit = e => {
        e.preventDefault()
        // console.log(values)
        if(props.currentId == 0)
        props.createFlight(values, () => {window.alert('Submited')})
        else
        props.updateFlight(props.currentId, values, () => {window.alert('Successfully Edited!')} )

        resetForm()
    }

    useEffect(() => {
        if(props.currentId != 0) 
        setValues({
            ...props.flightList.find(x => x.id == props.currentId)
        })
    }, [props.currentId])

    return (
        <form autoComplete="off" noValidate className = {classes.root} onSubmit = {handleSubmit}>
            <Grid container>
                <Grid item xs = {12}>
                    <TextField
                    name = "flightName"
                    variant = "outlined"
                    label = "Flight Name"
                    value = {values.flightName}
                    onChange = {handleInputChange}
                    />
                    <TextField
                    name = "fromCity"
                    variant = "outlined"
                    label = "Departures"
                    value = {values.fromCity}
                    onChange = {handleInputChange}
                    />
                    <TextField
                    name = "fromTimeDate"
                    variant = "outlined"
                    label = "Departure Time"
                    value = {values.fromTimeDate}
                    onChange = {handleInputChange}
                    />
                    <TextField
                    name = "toCity"
                    variant = "outlined"
                    label = "Arrivals"
                    value = {values.toCity}
                    onChange = {handleInputChange}
                    />
                    <TextField
                    name = "toTimeDate"
                    variant = "outlined"
                    label = "Arrival Time"
                    value = {values.toTimeDate}
                    onChange = {handleInputChange}
                    />
                    <FormControl variant = "outlined" className = {classes.formControl}>
                        <InputLabel ref = {inputLabel}>Status</InputLabel>
                        <Select
                            name = "status"
                            value = {values.status}
                            onChange = {handleInputChange}
                            labelWidth = {labelWidth}
                        >
                            <MenuItem value = "">Status</MenuItem>
                            <MenuItem value = "Departed">Departed</MenuItem>
                            <MenuItem value = "Landed">Landed</MenuItem>
                            <MenuItem value = "Expected">Expected</MenuItem>
                            <MenuItem value = "On Time">On Time</MenuItem>
                            <MenuItem value = "Cancelled">Cancelled</MenuItem>
                            <MenuItem value = "Boarding">Boarding</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                    name = "delay"
                    variant = "outlined"
                    label = "Delay"
                    value = {values.delay}
                    onChange = {handleInputChange}
                    />
                    <div>
                        <Button className = {classes.smMargin}
                        variant = "contained"
                        color = "primary"
                        type = "submit"
                        
                        >
                            Submit
                        </Button>
                        <Button className = {classes.smMargin}
                        variant = "contained"
                        color = "secondary"
                        onClick = {resetForm}
                        >
                            Reset
                        </Button>
                    </div>
                </Grid>
        
            </Grid>
        </form>
    );
}

const mapStateToProps = state => ({
    flightList: state.flight.list
})

const mapActionToProps = {
    createFlight: actions.create,
    updateFlight: actions.update
}

export default connect(mapStateToProps, mapActionToProps) (withStyles(styles)(FlightForm));
