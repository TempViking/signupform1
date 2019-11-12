import './scss/base.scss';

function testForm(event = false) {
    if (event) event.preventDefault();
    testEmail(document.querySelector('.form-label__email').value);
    testPhoneNumber(document.querySelector('.form-label__phone').value);
    if(!document.querySelector('.check-label__input').checked) {
        alert('You need agree to the terms!');
    }
}

function testEmail(field) {
    if (field.toString().trim().search(/^[a-zA-Z0-9\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z]+$/) === -1) {
        alert('Wrong email!');
    }
}

function testPhoneNumber(field) {
    if (field.toString().trim().search(/^\d{11}$/) === -1) {
        alert('Wrong phone number!');
    }
}

window.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        testForm();
    }
});

window.testForm = testForm;