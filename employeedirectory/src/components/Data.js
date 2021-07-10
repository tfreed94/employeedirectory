import React, { Component } from "react";
import Table from "../Table";
import API from '../../utils/API'
import "../styling/data.css";

class Data extends Component {
    state = {
        employee: [],
        filteredEmployee: [],
        search: "",
        sortDirections: this.sortDirection,
    }
    get sortDirection() {
        return {
            age: '',
            phone: '',
            location: '',
            phone: '',
            email: '' 
        }
    }
}