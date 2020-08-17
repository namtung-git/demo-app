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

function EditForm(props){
    const {
        editVillager,
        updateVillager,
        closeEditor
    } = props

    const {handleSubmit, handleChange, values, errors, isValid} = useFormik({
        initialValues: editVillager,
        
        validationSchema: YupValidation,
        enableReinitialize: true,

        onSubmit(values){
            updateVillager(values)
        }
    })

    return (
        <div className="villager-form">
            <form onSubmit = {handleSubmit}>
                <input
                    className = "input"
                    style = {styles.input}
                    name = "firstName"
                    placeholder = {values.firstName}
                    values = {values.firstName}
                    onChange = {handleChange}/>

                {errors.firstName ? errors.firstName : null}

                <input
                    className = "input"
                    style = {styles.input}
                    name = "lastName"
                    placeholder = {values.lastName}
                    values = {values.firstName}
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
                    Save the changes
                </button>
            </form>
            <button onClick={closeEditor} className="card__form">✕</button>
        </div>
        
    )
}

export default EditForm