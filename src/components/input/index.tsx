import React, { InputHTMLAttributes, useCallback } from 'react'
import { cep, cardNumber } from './masks'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    mask: "cep" | "cardNumber"

}

const Input: React.FC<InputProps> = ({ mask, ...props }) => {

    const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {

        if (mask === "cep") {
            cep(e);
        }
        if (mask === "cardNumber") {
            cardNumber(e);
        }

    }, [mask])

    return (
        <input type="text" {...props} onKeyUp={handleKeyUp} maxLength={2} />
    )
}

export default Input