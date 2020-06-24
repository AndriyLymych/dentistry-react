export const requiredValidator = value => value ? undefined : `Це поле є обов'язковим для вводу`;

export const maxLengthValidator = maxLength => value => value && value.length > maxLength ?
    `Максимальна довжина поля не більше ${maxLength} символів` : undefined;


export const minLengthValidator = minLength => value => {
    return value && value.length < minLength ? `Мінімальна довжина поля ${minLength} символа` : undefined
};

export const minAgeValidator = minAge => value => {
    return value < minAge ? `Мінімальний вік не може бути менше ${minAge} років` : undefined
};

export const maxAgeValidator = maxAge => value => {
    return value > maxAge ? `Максимальний вік не може перевищувати ${maxAge} років` : undefined
};
export const isNumberValidator = value => {
    return isNaN(Number(value)) ? `Поле може містити лише цифрові значення` : undefined
};

export const emailValidator = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
    'Електронна адреса введено некоректно' : undefined;

export const passwordValidator = value =>
    value && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/i.test(value)
        ? 'Пароль має містити як мінімум одну малу , одну велику літери, одну цифру та один спецсимвол'
        : undefined;

export const phoneNumberValidator = value =>
    value && !/^\+?3?8?(0[5-9][0-9]\d{7})$/i.test(value)
        ? 'Некоректний номер телефону'
        : undefined;

export const minPriceValidator = minPrice => value => {
    return value < minPrice ? `Мінімальна ціна не може бути меншою за ${minPrice}` : undefined
};

export const isCorrectSpecialityValidator = value => {
    return isNaN(Number(value)) ? `Ви не вибрали жодної спеціальності` : undefined
};