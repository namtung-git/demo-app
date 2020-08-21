import React from 'react'
import { useFormik } from 'formik';
import YupValidation from '../utils/YupValidation'

const styles = {
    input: {
        margin: '12px 0'
    },
    button: {
        margin: '12px 0'
    },
    buttonSmall: {
        width: 'auto'
    },
    image: {
        height: 200,
        width: 'auto',
        margin: '24px 0'
    }
}

function AddForm(props){
    const {
        addVillager,
    } = props

    const {handleSubmit, handleChange, values, errors, isValid, validateForm} = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            job: ""
        },
        validationSchema: YupValidation,
        onSubmit(values){
            addVillager(values)
        }
    })


    return (
        <div className="villager-form">
           
            <form onSubmit = {handleSubmit}>
                <input
                    className = "input"
                    style = {styles.input}
                    name = "firstName"
                    placeholder = "Enter villager first name"
                    values = {values.firstName}
                    onChange = {handleChange}/>

                {errors.firstName ? errors.firstName : null}

                <input
                    className = "input"
                    style = {styles.input}
                    name = "lastName"
                    placeholder = "Enter villager last name"
                    values = {values.lastName}
                    onChange = {handleChange}/>

                {errors.lastName ? errors.lastName : null}

                <select
                    className = "input"
                    style = {styles.input}
                    name = "job"
                    value = {values.job}
                    onChange = {handleChange}
                    >
                        <option value = "" label="What the villager will do?"/>
                        <option value = "A Nurse" label="A Nurse"/>
                        <option value = "A Fullstack Developer" label="A Fullstack Developer"/>
                        <option value = "An Artist" label="An Artist"/>
                        <option value = "A Witcher" label="A Witcher"/>
                </select>

                {errors.job ? errors.job : null}

                <button
                    className = "btn"
                    style = {styles.button}
                    type = "submit"
                    disabled = {!isValid}
                    >
                    Add to your island
                </button>
            </form>
        </div>
        
    )
}

export default AddForm