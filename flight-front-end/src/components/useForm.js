import React, {useState, useEffect} from "react";

const useForm = (initialFieldValues, setCurrentId) => {
    const [values, setValues] = useState(initialFieldValues)

    const handleInputChange = e => {
        const {name, value} = e.target
        setValues ({
            ...values,
            [name]: value
        })
    }

    const resetForm = () => {
        setValues({
            ...initialFieldValues
        })
        setCurrentId(0)
    }

    return {
        values,
        setValues,
        handleInputChange, 
        resetForm 
    };
}

export default useForm;