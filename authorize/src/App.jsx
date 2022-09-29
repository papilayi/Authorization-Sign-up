import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'

class App extends Component {
    constructor(){
        super()
        this.state = {
            "username":'',
            "firstName":'',
            "lastName":'',
            "email":'',
            "password":'',
            "phoneNumber":'',
            "address":'',
            "gender":''
        }
        this.changeUsername = this.changeUsername.bind(this)
        this.changeFirstName = this.changeFirstName.bind(this)
        this.changeLastName = this.changeLastName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.changePhoneNumber = this.changePhoneNumber.bind(this)
        this.changeAddress = this.changeAddress.bind(this)
        this.changeGender = this.changeGender.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        
    }

    changeUsername(event){
        this.setState({
            username:event.target.value
        })
    }
    changeFirstName(event){
        this.setState({
            firstName:event.target.value
        })
    }
    changeLastName(event){
        this.setState({
            lastName:event.target.value
        })
    }
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }
    changePhoneNumber(event){
        this.setState({
            phoneNumber:event.target.value
        })
    }
    changeAddress(event){
        this.setState({
            address:event.target.value
        })
    }
    changeGender(event){
        this.setState({
            gender:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()

        const registered = {
            username: this.state.username,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            phoneNumber: this.state.phoneNumber,
            address: this.state.address,
            gender: this.state.gender
        }

        axios.post('http://localhost:4000/app/signup', registered)
        .then(response => console.log(response.data))

        this.setState({
            username:'',
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            phoneNumber:'',
            address:'',
            gender:''
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="form-div">
                        <form onSubmit={this.onSubmit}>
                            <input type='text'
                            placeholder='Username'
                            onChange={this.changeUsername}
                            value={this.state.username}
                            className='form-control form-group'
                            />

                            <input type='text'
                            placeholder='Firstname'
                            onChange={this.changeFirstName}
                            value={this.state.firstName}
                            className='form-control form-group'
                            />

                            <input type='text'
                            placeholder='Lastname'
                            onChange={this.changeLastName}
                            value={this.state.lastName}
                            className='form-control form-group'
                            />

                            <input type='email'
                            placeholder='E-mail'
                            onChange={this.changeEmail}
                            value={this.state.email}
                            className='form-control form-group'
                            />

                            <input type='password'
                            placeholder='Password'
                            onChange={this.changePassword}
                            value={this.state.password}
                            className='form-control form-group'
                            />

                            <input type='tel'
                            placeholder='Phone Number'
                            onChange={this.changePhoneNumber}
                            value={this.state.phoneNumber}
                            className='form-control form-group'
                            />

                            <input type='text'
                            placeholder='Address'
                            onChange={this.changeAddress}
                            value={this.state.address}
                            className='form-control form-group'
                            />

                            <input type='text'
                            placeholder='Gender'
                            onChange={this.changeGender}
                            value={this.state.gender}
                            className='form-control form-group'
                            />

                            <input type='submit' 
                            className="btn btn-danger btn-block" 
                            value='Submit'/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;