import React from "react";
import './data_table.css'

export default function Data_table(){
    return(
        <>
            <div className="container">
                <table className="content-table">
                    <thead>
                        <tr>
                        <th>S.N.</th>
                        <th>Name</th>
                        <th>Days</th>
                        <th>Absent</th>
                        <th>Present</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Employee</td>
                        <td>Monday</td>
                        <td>Yes</td>
                        <td>No</td>
                        </tr>
                        <tr className="active-row">
                        <td>2</td>
                        <td>Employee</td>
                        <td>Tuesday</td>
                        <td>No</td>
                        <td>Yes</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Employee</td>
                        <td>Wednesday</td>
                        <td>No</td>
                        <td>Yes</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
