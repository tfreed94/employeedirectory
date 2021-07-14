import React from 'react';


const Table = (props) => {
    return (
        <table className="table table-striped table-sortable text-center">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">
                        <span onClick={() => props.sortParams("name", "first", "last")}>
                            Name <i class="bi bi-filter sort icon"></i>
                        </span></th>
                    <th scope="col">Email</th>
                    <th scope="col">
                    <span onClick={() => props.sortParams("location", "state", "city")}>
                            Location <i class="bi bi-filter sort icon"></i>
                        </span>
                    </th>
                    <th scope="col">Phone</th>
                    <th scope="col">Age</th>
                </tr>
            </thead>
            <tbody>
                {props.state.employees.map((employee) => {

                    const { title, first, last } = employee.name;
                    const name = `${title}. ${first} ${last}`;
                    const { city, state, street } = employee.location
                    const location = ` ${street.number} ${street.name}, ${city}, ${state} `
                    const {age} = employee.dob
                    const dob = `${age}`

                    console.log(employee);

                    return (
                        <tr key={employee.login.uuid}>
                            <td>
                                <img src={employee.picture.large} alt={name} />
                            </td>
                            <td className="align-middle">{name}</td>
                            <td className="align-middle">
                                <a href={`mailto:${employee.email}`}>{employee.email}</a>
                            </td>
                            <td className="align-middle">
                                <span>{location}</span>
                            </td>
                            <td className="align-middle">
                                <span>Home Phone: {employee.phone}</span>
                                <br></br>
                                <span>Cell Phone: {employee.cell}</span>
                            </td>
                            <td className="align-middle">
                                <span>{dob}</span>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Table;