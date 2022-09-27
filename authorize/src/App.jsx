import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css"

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
        // this.onChangeLastName = this.changeLastName.bind(this)
        // this.onChangeEmail = this.changeEmail.bind(this)
        // this.onChangePassword = this.changePassword.bind(this)
        // this.changePhoneNumber = this.changePhoneNumber.bind(this)
        // this.onChangeAddress = this.changeAddress.bind(this)
        // this.onChangeGender = this.changeGender.bind(this)
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

    render() {
        return (
            <div>
                <div className="container">
                    <div className="form-div">
                        <form>
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

                            <input type='text'
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