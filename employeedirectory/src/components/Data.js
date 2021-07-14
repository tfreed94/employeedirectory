import React, { Component } from "react";
import Table from "../components/Table";
import API from '../utils/API'

class Data extends Component {
    state = {
        employees: [],
        filteredEmp: [],
        empInfo: this.empInfo,
    };
    get empInfo() {
        return {
            location: "",
            phone: "",
            name: "",
            email: "",

        };
    }

    componentDidMount() {
        API.getEmployees().then((res) => this.setState({
            employees: res.data.results,
            filteredEmp: res.data.results,
        }))
    }

    sortEmpInfo = (key) => {
        let sortEmp = this.state.filteredEmp;
        if (this.state.empInfo[key]) {
            this.setState({
                filteredEmp: sortEmp.reverse(),
                empInfo: {
                    ...this.empInfo,
                    [key]: this.state.empInfo[key] === "asc" ? "desc" : "asc",
                },
            });
        }
        this.setState({
            filteredEmp: sortEmp,
            empInfo: {
                ...this.empInfo, [key]: "asc",
            },
        });

    };

    render() {
        return (
            <div className="container">
                <Table
                    state={this.state}
                    sortEmpInfo={this.sortEmpInfo}
                />
            </div>
        );
    }
}

export default Data;