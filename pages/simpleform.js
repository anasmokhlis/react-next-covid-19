import React, { Component } from 'react'
import Layouts from '../components/Layouts';
import { Field, reduxForm } from 'redux-form';

class ContactForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName:"",
            lastName:""
        }
    }

    mySybmit(values){
        console.log(values)
    }



    render() {
        


        return (
            <form onSubmit={this.props.handleSubmit(this.mySybmit)}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <Field name="firstName" component="input" type="text" value={() => this.setState({firstName: e.target.value}) } />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <Field name="lastName" component="input" type="text" value={() => this.setState({lastName: e.target.value}) }  />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <Field name="email" component="input" type="email" />
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

// Decorate the form component
ContactForm = reduxForm({
    form: 'contact' // a unique name for this form
})(ContactForm);

export default ContactForm;
