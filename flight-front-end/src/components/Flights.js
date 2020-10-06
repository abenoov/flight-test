import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import * as actions from "../actions/flight";

const Flights = (props) => {
      // const[x, setX] = useState(0)
    // setX(5)

    useEffect(() => {
        props.fetchAllFlights()
    }, []) //componentDidMount

    return (<div>form Flights </div>)
}

const mapStateToProps = state => ({
        flightList: state.flight.list
})

const mapActionToProps = {
    fetchAllFlights: actions.fetchAll
}

export default connect(mapStateToProps, mapActionToProps)(Flights);
