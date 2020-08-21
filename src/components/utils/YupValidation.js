import * as Yup from "yup"

const ValidationSchema = Yup.object().shape({
    firstName: Yup.string()
        .required("First name is required.")
        .min(2, "your first name is longer than that")
        ,
    lastName: Yup.string()
        .required("Last name is required.")
        .min(2, "your last name is longer than that"),
    job: Yup.string()
        .required("A job is required")
  })

export default ValidationSchema