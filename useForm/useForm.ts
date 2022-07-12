import { useState } from "react";

export const useForm = <T extends Object>(initialState: T) => {
    const [formState, setFormState] = useState<T>(initialState);
    
    const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const setFormValue = (state: T) => {
        setFormState(state);
    }

    const onReset = () => {
        setFormState(initialState);
    }
    
    return {
        formState,
        onChange,
        setFormValue,
        onReset
    };
};