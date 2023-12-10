let form = document.querySelector('.js-form'),
    formInputs = document.querySelectorAll('.js-input'),
    inputEmail = document.querySelector('.js-input-email'),
    inputMessage = document.querySelector('.js-input-message'),
    inputCheckbox = document.querySelector('.js-input-checkbox');


function validateEmail(email) {
    let re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    return re.test(String(email).toLocaleLowerCase());

}


form.onsubmit = function () {
    // console.log('function work submit button');
    let emailVal = inputEmail.value,
        emtyInputs = Array.from(formInputs).filter(input => input.value === '');


    formInputs.forEach(function (input) {
        if (input.value === '') {
            input.classList.add('error');
            console.log('input not filled');
        } else {
            input.classList.remove('error');
        }
    });

    if (emtyInputs.length !== 0) {
        console.log('input not filled');
        return false;
    }

    if (!validateEmail(emailVal)) {
        console.log('email not valid');
        inputEmail.classList.add('error');
        return false;
    } else {
        inputEmail.classList.remove('error');

    }

    if (!inputCheckbox.checked) {
        console.log('checkbox not checked');
        inputCheckbox.classList.add('error');
        return false;
    } else {
        inputCheckbox.classList.remove('error');

    }


}
