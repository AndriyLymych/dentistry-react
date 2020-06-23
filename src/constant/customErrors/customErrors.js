export const customErrors = {
    //+
    BAD_REQUEST_BLOCK_USER: {
        message: 'Цей користувач вже заблокований',
        code: 4001
    },
    //+
    BAD_REQUEST_UNLOCK_USER: {
        message: 'Цей користувач вже розблокований',
        code: 4002
    },
    //+
    BAD_REQUEST_USER_NOT_PRESENT: {
        message: 'Нажаль, такого користувача немає',
        code: 4003
    },
    //+
    BAD_REQUEST_NO_TOKEN: {
        message: 'Token is not present',
        code: 4004
    },
    //+
    BAD_REQUEST_COMMENT_NOT_PRESENT: {
        message: 'Нажаль, такий коментар відсутній',
        code: 4005
    },
    //+
    BAD_REQUEST_USER_ALREADY_PRESENT: {
        message: 'Нажаль, користувач з такою електронною адресою вже присутній ',
        code: 4006
    },
    //+
    BAD_REQUEST_DOCTOR_NOT_PRESENT: {
        message: 'Нажаль, такого лікаря немає',
        code: 4007
    },
    //+
    BAD_REQUEST_YOU_ARE_NOT_DOCTOR: {
        message: 'Ця послуга доступна лише для лікаря',
        code: 4008
    },
    //+
    BAD_REQUEST_ADMIN_NOT_PRESENT: {
        message: 'Нажаль, такого адміністратора немає',
        code: 4009
    },
    //+
    BAD_REQUEST_YOU_ARE_NOT_ADMIN: {
        message: 'Ця послуга доступна лише для адміністратора',
        code: 40010
    },


    //401 error code
    UNAUTHORIZED_USER: {
        message: 'Авторизуйтесь, щоб продовжити',
        code: 4011
    },

    UNAUTHORIZED_BAD_TOKEN: {
        message: 'Помилка авторизації',
        code: 4012
    },


    //403 error code

    //+
    FORBIDDEN_MEDICAL_SERVICE_IS_NOT_PRESENT: {
        message: 'Нажаль, така послуга відсутня',
        code: 4031
    },

    //+
    FORBIDDEN_USER_IS_BLOCKED: {
        message: 'Нажаль, такий користувач заблокований',
        code: 4032
    },
    //+
    FORBIDDEN_PASSWORDS_NOT_MATCH: {
        message: 'Паролі не співпадають. Спробуйте ще раз.',
        code: 4033
    },
    //+
    FORBIDDEN_WRONG_ACTION_TOKEN: {
        message: 'Помилка відновлення паролю. Час сесії минув. Спробуйте ще раз.',
        code: 4034
    },
    //+
    FORBIDDEN_NO_SPECIALITIES: {
        message: 'Немає жодної спеціальності',
        code: 4035
    },
    //+
    FORBIDDEN_RECORD_NOT_PRESENT: {
        message: 'Такого запису на прийом не існує',
        code: 4036
    },
    //+
    FORBIDDEN_PHOTO_NOT_PRESENT: {
        message: 'Ви не вибрали жодного фото',
        code: 4037
    } ,
    //+
    FORBIDDEN_PHOTO_BIG_SIZE: {
        message: 'Розмір фото не має перевищувати 5 мегабайт',
        code: 4038
    },
    //+
    FORBIDDEN_PHOTO_COUNT: {
        message: 'Ви можете завантажити лише одне фото',
        code: 4039
    }
};