import React from "react";
function List()
{
    const course = ["C","Java","Python","HTML","CSS","JavaScript"]
    const CourseList = course.map((x) => {
        return(
            <li>{x}</li>
        )
    })
    return(
        <div>
            <ul>{CourseList}</ul>
        </div>
    )
}
export default List;