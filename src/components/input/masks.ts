import React from "react";

export function cep(e: React.FormEvent<HTMLInputElement>) {
    // "00000-000"
    e.currentTarget.maxLength = 9;
    let value = e.currentTarget.value;

    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{5})(\d)/, "$1-$2");

    e.currentTarget.value = value;
    return e
}

export function cardNumber(e: React.FormEvent<HTMLInputElement>) {
    // "0000 0000 0000 0000"
    e.currentTarget.maxLength = 19;
    let value = e.currentTarget.value;

    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{4})(\d)/g, "$1 $2");
    value = value.replace(/^(\d{4})\s(\d{4})(\d)/g,"$1 $2 $3");
    value = value.replace(/^(\d{4})\s(\d{4})\s(\d{4})(\d)/g,"$1 $2 $3 $4");

    e.currentTarget.value = value;
    return e
}