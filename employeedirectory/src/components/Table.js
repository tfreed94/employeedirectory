import React from 'react';
import '../styling/table.css'

const Table = (comp) => {
    return (
        <table className="table text-center">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">
                        <span onClick={() => comp.sortEmpInfo("name", "first", "last")}>
                            Name <i class="bi bi-filter sort icon"></i>
                        </span></th>
                    <th scope="col">Email</th>
                    <th scope="col">
                        <span onClick={() => comp.sortEmpInfo("location", "state", "city")}>
                            Location <i class="bi bi-filter sort icon"></i>
                        </span>
                    </th>
                </tr>
            </thead>
            <tbody>
                {comp.state.employees.map((employee) => {
                    const { first, last } = employee.name;
                    const name = `${first} ${last}`;
                    const { city, state } = employee.location
                    const location = ` ${city}, ${state} `
                    return (
                        <tr key={employee.login.uuid}>
                            <td>
                                <img src={employee.picture.large} alt='employee name' />
                            </td>
                            <td className="align-middle">{name}</td>
                            <td className="align-middle">
                                <a href={`mailto:${employee.email}`}>{employee.email}</a>
                            </td>
                            <td className="align-middle">
                                <span>{location}</span>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Table;