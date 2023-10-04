import FormGroup from "./FormGroup"

const Input = ({field, placeholder, label}) => {
    return (
        <FormGroup {...field} label={label}>
            <input {...field} placeholder={placeholder} />
        </FormGroup>
    )
}

export default Input