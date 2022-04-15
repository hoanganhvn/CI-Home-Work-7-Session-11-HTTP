import { useState } from "react";
import axios from 'axios';

function Form() {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const handleFetchGender = async () => {
        const url = `https://api.genderize.io/?name=${name}`;
        const response = await fetch(url);
        const data = await response.json();
        const gender = data.gender;
        setGender(gender);
    }
    const [age, setAge] = useState("");
    const handleFetchAge = async () => {
        const url = `https://api.agify.io/?name=${name}`;
        const response = await fetch(url);
        const data = await response.json();
        const age = data.age;
        setAge(age);
    }
    const [country, setCountry] = useState("");
    const handleFetchCountry = async () => {
        const url = `https://api.nationalize.io/?name=${name}`;
        const response = await fetch(url);
        const data = await response.json();
        const country = data.country[0].country_id;
        setCountry(country);
    }
    const [imagesDog, setImagesDog] = useState("");
    const handleFetchImagesDog = async () => {
        const url = `https://dog.ceo/api/breeds/image/random`;
        const response = await fetch(url);
        const data = await response.json();
        const imgurl = data.message;
        setImagesDog(imgurl);
    }
    const [activity, setActivity] = useState("");
    const handleFetchActivity = async () => {
        const url = `https://www.boredapi.com/api/activity`;
        const response = await axios.get(url);
        const data = await response.data;
        const activity = data.activity;
        setActivity(activity);
    }
    const handleChange = (e) => {
        const inputName = e.target.value;
        setName(inputName);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        handleFetchAge();
        handleFetchGender();
        handleFetchCountry();
        handleFetchImagesDog();
        handleFetchActivity();
    };
    const [ageCheck, setAgeCheck] = useState("");
    const [email, setEmail] = useState("");
    const [genderCheck, setGenderCheck] = useState("");
    const [location, setLocation] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [nameCheck, setNameCheck] = useState("");
    const [phone, setPhone] = useState("");
    const [picture, setPicture] = useState("");
    const [time, setTime] = useState("");
    const handleFetchUser = async () => {
        const url = `https://randomuser.me/api/`;
        const response = await axios.get(url);
        const data = await response.data.results[0];
        const age = data.dob.age;
        const email = data.email;
        const gender = data.gender;
        const location = data.location.street.number + ", " + data.location.street.name + ", " + data.location.state + ", " + data.location.city + ", " + data.location.country + ".";
        const username = data.login.username;
        const password = data.login.password;
        const name = data.name.title + " " + data.name.first + " " + data.name.last;
        const phone = data.phone;
        const picture = data.picture.large;
        const time = data.registered.age + " Years";
        setAgeCheck(age);
        setEmail(email);
        setGenderCheck(gender);
        setLocation(location);
        setUsername(username);
        setPassword(password);
        setNameCheck(name);
        setPhone(phone);
        setPicture(picture);
        setTime(time);
    }
    const handleClick = (e) => {
        e.preventDefault();
        handleFetchUser();
    };

    return (
        <div className="container" >
            <div className="row">
                <div className="col-sm-6 ">
                    <form className=" bg-secondary text-white" onSubmit={handleSubmit}>
                        <h1 className="display-6 text-center">Search User</h1>
                        <div className="input-group">
                            <input type="text" value={name} className="form-control mb-3" placeholder="Search..." onChange={handleChange} />
                            <div className="input-group-btn">
                                <button className="btn btn-default" type="submit">
                                    <i className="fa fa-search border-dark text-dark " />
                                </button>
                            </div>
                        </div>
                        <ul className="list-group text-dark">
                            <li className="list-group-item">Name: {name}</li>
                            <li className="list-group-item">Gender: {gender}</li>
                            <li className="list-group-item">Age: {age}</li>
                            <li className="list-group-item">Country: {country}</li>
                            <li className="list-group-item">ImagesDog:
                                <img src={imagesDog} className="rounded img-fluid" alt="" />
                            </li>
                            <li className="list-group-item">Activity: {activity}</li>
                        </ul>
                    </form>
                </div>
                <div className="col-sm-6">
                    <form className=" bg-secondary text-white">
                        <h1 className="col-sm-12 display-6 text-center">Check User</h1>
                        <button type="button" className="col-sm-6 d-md-flex justify-content-md-center btn btn-primary mx-auto mb-3" onClick={handleClick}>Click to Check</button>
                        <ul className="list-group text-dark">
                            <li className="list-group-item">Picture:
                                <img src={picture} className="rounded img-fluid" alt="" />
                            </li>
                            <li className="list-group-item">Name: {nameCheck}</li>
                            <li className="list-group-item">Age: {ageCheck}</li>
                            <li className="list-group-item">Gender: {genderCheck}</li>
                            <li className="list-group-item">Phone: {phone}</li>
                            <li className="list-group-item">Location: {location}</li>
                            <li className="list-group-item">Email: {email}</li>
                            <li className="list-group-item">Username: {username}</li>
                            <li className="list-group-item">Password: {password}</li>
                            <li className="list-group-item">Time: {time}</li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;