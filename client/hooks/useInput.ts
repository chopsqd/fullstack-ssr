import React, {useState} from "react";

export const useInput = (initialValue: any) => {
    const [value, setValue] = useState(initialValue)

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return {
        value, onChange
    }
}