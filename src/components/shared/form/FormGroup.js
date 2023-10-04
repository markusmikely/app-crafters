const FormGroup = ({name, label, children}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            {children}
        </div>
    )
}

export default FormGroup