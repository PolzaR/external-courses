const form_log_in = document.querySelector('.header-form-log-in');
const user = document.querySelector('#username');
const form_inputs = form_log_in.querySelectorAll('input');
const showFormLogIn = function() {
	form_log_in.style.display = 'block';
};

const fadeFormLogIn = function(event) {
    if (event.target != user && event.target != form_inputs[0] && event.target != form_inputs[1]) {
        form_log_in.style.display = 'none';
    };
}

user.addEventListener('click', showFormLogIn);
document.addEventListener('click', fadeFormLogIn);
