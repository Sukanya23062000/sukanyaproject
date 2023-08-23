import React from "react";
import '../App.css';
function Table()
{
    const students = [{name : "Moni", age : 23, gender : "female"},
                      {name : "Bom", age : 35, gender : "male"},
                      {name : "Mou", age : 48, gender : "female"}]
    return(
        <div>
            <center>
                <table border={"1"}>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                    </tr>
                    {students.map(
                        (val,key) => {
                            return(
                                <tr key={key}>
                                    <td>{val.name}</td>
                                    <td>{val.age}</td>
                                    <td>{val.gender}</td>
                                </tr>
                            )
                        }
                    )}
                </table>
            </center>
        </div>
    )
}
export default Table;