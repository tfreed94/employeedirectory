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
    handleFormSubmit = (event) => {
        event.preventDefault();
    };
    componentDidMount() {
        API.getEmployees().then((res) => this.setState({
            employees: res.data.results,
            filteredEmp: res.data.results,
        }))
    }

    sortEmpInfo = (key, primNum = 0, secNum = 0) => {

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
        else {
            sortEmp = this.state.filteredEmp.sort((a, b) => {
                a = a[key];
                b = b[key];
                if (primNum) {
                    if (secNum && a[primNum] === b[primNum]) {
                        return a[secNum].localeCompare(b[secNum]);
                    }
                    return a[primNum].localeCompare(b[primNum]);
                } else {
                    return a.localeCompare(b);
                }
            });

            this.setState({
                filteredEmp: sortEmp,
                empInfo: {
                    ...this.empInfo, [key]: "asc",
                },
            });
        }
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