import * as Yup from "yup"

const ValidationSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, "your first name is longer than that")
        .required("First name is required."),
    lastName: Yup.string()
        .min(2, "your last name is longer than that")
        .required("Last name is required."),
    job: Yup.string()
        .required("A job is required")
  })

export default ValidationSchema