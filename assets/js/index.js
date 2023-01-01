const OPEN_FORM_BTN = $('.btn');
const CL_BTN = $('.clBtn');
const FORM_WRAPPER = $('.form-wrapper');
const FORM = $('.form');

//Функция открытия формы
function openForm() {
    OPEN_FORM_BTN.on('click', function() {
        FORM_WRAPPER.addClass('visible');
    })
}
//Функция закрытия формы
function closeForm() {
    CL_BTN.on('click', function() {
        FORM_WRAPPER.removeClass('visible');
    })
    $(document).mouseup( function(e){ 
		if ( !FORM.is(e.target) 
		    && FORM.has(e.target).length === 0 ) { 
			FORM_WRAPPER.removeClass('visible');
		}
	});
}
openForm();
closeForm();

//Валидация формы при нажатии на кнопку отправить
$('.btn_submit').on('click', function() {
    const NAME = $('.name');
    const SURNAME = $('.surname');
    const PHONE = $('.phone');
    const EMAIL = $('.email');

    //Проверка поля ИМЯ
    if (NAME.val().trim() == '') {
        $('.errorMessage').text('Введите имя');
        NAME.addClass('error');
        SURNAME.removeClass('error');
        PHONE.removeClass('error');
        EMAIL.removeClass('error');
        return false;
    } 
    //Проверка поля ФАМИЛИЯ
    else if (SURNAME.val().trim() == '') {
        $('.errorMessage').text('Введите фамилию');
        SURNAME.addClass('error');
        NAME.removeClass('error');
        PHONE.removeClass('error');
        EMAIL.removeClass('error');
        return false;
    } 
    //Проверка поля ТЕЛЕФОН
    else if (PHONE.val().trim() == '') {
        $('.errorMessage').text('Введите телефон');
        PHONE.addClass('error');
        NAME.removeClass('error');
        SURNAME.removeClass('error');
        EMAIL.removeClass('error');
        return false;
    } else if (PHONE.val().replace(/\D+/g,'').length != 11) {
        $('.errorMessage').text('Введите корректный телефон');
        PHONE.addClass('error');
        NAME.removeClass('error');
        SURNAME.removeClass('error');
        EMAIL.removeClass('error');
        return false;
    } 
    //Проверка поля EMAIL
    else if (EMAIL.val().trim() == '') {
        $('.errorMessage').text('Введите E-mail');
        EMAIL.addClass('error');
        NAME.removeClass('error');
        SURNAME.removeClass('error');
        PHONE.removeClass('error');
        return false;
    } else if (/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(EMAIL.val()) == false) {
        $('.errorMessage').text('Введите корректный E-mail');
        EMAIL.addClass('error');
        NAME.removeClass('error');
        SURNAME.removeClass('error');
        PHONE.removeClass('error');
        return false;
    }
    $('.errorMessage').text('');
    NAME.removeClass('error');
    SURNAME.removeClass('error');
    PHONE.removeClass('error');
    EMAIL.removeClass('error');
})