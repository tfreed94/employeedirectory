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

    sortdirection = () => {
        render(); {
            return (

                    <div> <Table/> </div>
            );
        }
    }
}
export default Data