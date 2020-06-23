export const requiredValidator = value => value ? undefined : `Це поле є обов'язковим для вводу`;

export const maxLengthValidator = maxLength => value => value && value.length > maxLength ?
    `Максимальна довжина поля ${maxLength} символів` : undefined;


export const minLengthValidator = maxLength => value => {
    return value && value.length < maxLength ? `Мінімальна довжина поля ${maxLength} символа` : undefined
};

export const emailValidator = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
    'Електронна адреса введено некоректно' : undefined;

export const passwordValidator = value =>
    value && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/i.test(value)
        ? 'Пароль має містити як мінімум одну малу , одну велику літери, одну цифру та один спецсимвол'
        : undefined;