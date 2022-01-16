import React from 'react';
import {Field, Form, reduxForm} from "redux-form";

class StreamForm extends React.Component {

    renderInput = ({input, label, meta}) => {
        /* return (
             <input
                 onChange={input.onChange}
                 value={input.value}
             />
         );*/

        const className = `field ${meta.error && meta.touched ? 'error' : ''}`

        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        );
    }

    renderError = ({error, touched}) => {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            );
        }
    }

    onSubmit = (formValues) => {
        console.log(formValues);
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <Form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title"/>
                <Field name="description" component={this.renderInput} label="Enter Description"/>

                <button className="ui button primary">Submit</button>
            </Form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};
    if (!formValues.title) {
        errors.title = 'Title is required';
    }

    if (!formValues.description) {
        errors.description = 'Description is required';
    }

    return errors;
}

export default reduxForm({
    form: 'streamForm',
    validate: validate
})(StreamForm);

