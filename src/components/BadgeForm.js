import React, { Component } from 'react'

export class BadgeForm extends Component {
    state = {

    };
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = e => {
        console.log("Button was click!")
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log("Form was submited")
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <h1>New attendant</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input
                            onChange={this.handleChange}
                            className="form-control"
                            type="text"
                            name="firstname"
                            value={this.state.firstname}
                        />
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input
                            onChange={this.handleChange}
                            className="form-control"
                            type="text"
                            name="lastname"
                            value={this.state.lastname}

                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            onChange={this.handleChange}
                            className="form-control"
                            type="email"
                            name="email"
                            value={this.state.email}

                        />
                    </div>

                    <div className="form-group">
                        <label>Job Title</label>
                        <input
                            onChange={this.handleChange}
                            className="form-control"
                            type="text"
                            name="jobtitle"
                            value={this.state.jobtitle}

                        />
                    </div>

                    <div className="form-group">
                        <label>Twitter</label>
                        <input
                            onChange={this.handleChange}
                            className="form-control"
                            type="text"
                            name="twitter"
                            value={this.state.twitter}

                        />
                    </div>


                    <button

                        onClick={this.handleClick}
                        className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm
