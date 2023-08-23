import React from "react";
import { useState } from "react";
import './RegistrationForm.css';

function RegistrationForm()
{
    const [firstname,setFirstname] = useState("")
    const [lastname,setLastname] = useState("")
    const [mobilenumber,setMobnumber] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confpassword,setConfpassword] = useState("")
    const [PasswordError,setPasswordError] = useState(false)
    const [dob,setDob] = useState("")
    const [gender,setSelectOption] = useState('')
    const [selectstate,setSelectState] = useState("")
    const [selectcourse,setSelectCourse] = useState("")
    const [deliverymode,setSelectDelivery] = useState("")
    const [comments,setComments] = useState("")

    const handleOptionChange = (event) => {
        setSelectOption(event.target.value);
    }
    const handleOption = (event) => {
        setSelectDelivery(event.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(password !== confpassword)
        {
            setPasswordError(true);
        }
        else
        {
            setPasswordError(false);
            console.log("First Name : ", firstname);
            console.log("Last Name : ", lastname);
            console.log("Mobile Number : ", mobilenumber);
            console.log("Email : ", email);
            console.log("Password : ", password);
            console.log("Confirm Password : ", confpassword);

            console.log("DOB : ", dob);
            console.log("Gender : ", gender);
            console.log("Select State : ", selectstate);
            console.log("Select Course : ", selectcourse);
            console.log("Delivery Mode : ", deliverymode);
            console.log("Comments : ", comments);
            alert('Your response updated successfully : ' + firstname);
        }
    }

    return(
        <div>
            <form className="registration-form" onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Personal Information</legend>
                    <div className="form-group">
                        <label>First Name : </label>
                        <input type="text" id="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)}required placeholder="Enter your first name" />
                    </div>
                    <div className="form-group">
                        <label>Last Name : </label>
                        <input type="text" id="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)}required placeholder="Enter your last name" />
                    </div>
                    <div className="form-group">
                        <label>Mobile Number : </label>
                        <input type="text" id="mobilenumber" value={mobilenumber} onChange={(e) => setMobnumber(e.target.value)}required placeholder="Enter your mobile number" maxLength={"10"} />
                    </div>
                    <div className="form-group">
                        <label>Email : </label>
                        <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)}required placeholder="Enter your email" />
                    </div>
                    <div className="form-group">
                        <label>Password : </label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}required placeholder="Enter password" maxLength={"10"} />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password : </label>
                        <input type="password" id="confpassword" value={confpassword} onChange={(e) => setConfpassword(e.target.value)}required placeholder="Confirm password" maxLength={"10"} />
                    </div>
                    <div className="form-group">
                        <label>DOB : </label> 
                        <input type="date" id="dob" value={dob} onChange={(e) => setDob(e.target.value)}required />
                    </div>
                    <div className="form-group1">
                        <label>Gender : </label>
                        <input type="radio" className="gender" value="Male" checked={gender==="Male"} onChange={handleOptionChange} />
                        <label>Male</label>
                        <input type="radio" className="gender" value="Female" checked={gender==="Female"} onChange={handleOptionChange} />
                        <label>Female</label>
                        <input type="radio" className="gender" value="Others" checked={gender==="Others"} onChange={handleOptionChange} />
                        <label>Others</label>
                    </div>
                    <div className="form-group">
                        <label>Select State : </label>
                        <select id="selectstate" value={selectstate} onChange={(e) => setSelectState(e.target.value)}required>
                            <option>Select State : </option>
                            <option>Maharastra</option>
                            <option>Delhi</option>
                            <option>West Bengal</option>
                            <option>Uttar Pradesh</option>
                            <option>Madhya Pradesh</option>
                            <option>Tamil Nadu</option>
                        </select>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Course Information</legend>
                    <div className="form-group">
                        <label>Select Course : </label>
                        <select id="selectcourse" value={selectcourse} onChange={(e) => setSelectCourse(e.target.value)}required>
                            <option></option>
                            <option>Java Full Stack</option>
                            <option>Python Full Stack</option>
                            <option>AWS</option>
                            <option>Software Testing</option>
                            <option>Artificial Intelligence</option>
                        </select>
                    </div>
                    <div className="form-group1">
                        <label>Delivery Mode : </label>
                        <input type="radio" className="delivery" value="Online" checked={deliverymode==="online"} onChange={handleOption} />
                        <label>Online</label>
                        <input type="radio" className="delivery" value="Offline" checked={deliverymode==="offline"} onChange={handleOption} />
                        <label>Offline</label>
                    </div>
                    <div className="form-group">
                        <label>Comments : </label>
                        <textarea id="comments" value={comments} onChange={(e) => setComments(e.target.value)}required></textarea>
                    </div>
                </fieldset>
                <br></br>
                {PasswordError && <p className="warning"> *Password does not match* </p>}
                <button type="submit">Register</button>
                <br></br>
            </form>
        </div>
    )
}
export default RegistrationForm;