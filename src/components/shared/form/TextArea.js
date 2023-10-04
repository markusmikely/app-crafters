import FormGroup from "./FormGroup"

const TextArea = ({field, label, placeholder}) => {
    return (
        <FormGroup {...field} label={label}>
            <textarea {...field} placeholder={placeholder} />
        </FormGroup>
    )
}

export default TextArea