import React, { Component } from "react";
import Table from "../Table";
import API from '../../utils/API'
import "../styling/data.css";

class Data extends Component {
    state = {
        search: "",
        employee: [],
        filterEmployee: [],
        direction: this.direction,
    };
    get direction() {
        return {
            name: "",
            email: "",
            phone: "",
            age: "",
            location: "",

        };
    }

    componentDidMount() {
        API.getemployee().then((res) =>
            this.setState({ employee: res.data.results, filterEmployee: res.data.results, }))
            .catch((err) => console.log(err));
    }

    sortdirection = (key, primary = 0, secondary = 0) => {

        render() {
            return (
                <>
                    <div> <Table/> </div>
                </>
            );
        }
    }
}