import React, { Component } from "react";
import Table from "../components/Table";
import API from '../utils/API'

class Data extends Component {
    state = {
        search: "",
        employees: [],
        employeefilter: [],
        params: this.params,
    };
    get params() {
        return {
            location: "",
            phone: "",
            age: "",
            name: "",
            email: "",

        };
    }
    handleFormSubmit = (event) => {
        event.preventDefault();
    };
    componentDidMount() {
        API.getEmployees()
            .then((res) =>
                this.setState({
                    employees: res.data.results,
                    employeefilter: res.data.results,
                })
            )
            .catch((err) => console.log(err));
    }

    sortParams = (key, primary = 0, secondary = 0) => {

        let employeeSorted = this.state.employeefilter;
        if (this.state.params[key]) {
            this.setState({
                employeefilter: employeeSorted.reverse(),
                params: {
                    ...this.params,
                    [key]: this.state.params[key] === "asc" ? "desc" : "asc",
                },
            });
        }
        else {
            employeeSorted = this.state.employeefilter.sort((a, b) => {
                a = a[key];
                b = b[key];


                if (primary) {
                    if (secondary && a[primary] === b[primary]) {
                        return a[secondary].localeCompare(b[secondary]);
                    }
                    return a[primary].localeCompare(b[primary]);
                } else {
                    return a.localeCompare(b);
                }
            });

            this.setState({
                employeefilter: employeeSorted,
                params: {
                    ...this.params,
                    [key]: "asc",
                },
            });
        }
    };

    render() {
        return (
            <>
                <div className="container mt-4">
                    <Table
                        state={this.state}
                        sortParams={this.sortParams}
                    />
                </div>
            </>
        );
    }
}

export default Data;