
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('[href="#close"]').addEventListener('click', function () {
    document.body.style.overflow = 'visible';
    document.querySelector('#openModal').style.marginLeft = '0px';
    var inputs = document.querySelectorAll('input[type=text]');
    for (var i = 0;  i < inputs.length; i++) inputs[i].value = '';
    console.log(inputs.length);
    });
    
    var scrollbar = document.body.clientWidth - window.innerWidth + 'px';

    //document.body.style.overflow = 'hidden';
    //document.querySelector('#openModal').style.marginLeft = scrollbar;

    //var elems = document.querySelectorAll('.btn__cta_main');
    //for (var i = 0; i < elems.length; i++)
    //   elems[i].addEventListener('click', send_sms() );
});

function send_sms(nameForm) {

    localStorage.setItem("nameForm", nameForm);

    var phone;
    try {
        if (document.getElementsByName("PhoneFormThree")[0].value != '') phone = document.getElementsByName("PhoneFormThree")[0].value;
        if (document.getElementsByName("FirstFormNumber")[0].value != '') phone = document.getElementsByName("FirstFormNumber")[0].value;
        if (document.getElementsByName("PhoneFormTwo")[0].value != '') phone = document.getElementsByName("PhoneFormTwo")[0].value;
    } catch(e) {
        console.log(e);
    }
    var flag = true;
    if (phone == '' || phone == null) {
        document.getElementById("text-modal").innerHTML= `Укажите номер<br>`;
        console.log("!!!czxc  " + phone)
        return;
    }
    phone = phone.replace("+","");
    if (phone[0] == "8") phone = phone.replaceAt(0, "7");

    if (phone.length < 10) {flag = false;}
    if (phone.length == 11 && phone[0] != "7") {console.log("qwe");flag = false;}
    
    if (phone.length == 10 && phone[0] != "7") phone = "7" + phone;
    if (flag == false) {
        document.getElementById("text-modal").innerHTML= `Неправильный номер<br>`;
        return;
    } else {
        document.getElementById("text-modal").innerHTML= `Отправка СМС ...`; // предварительное сообщение до фактической отправки
    };

    console.log("czxc  " + phone)

    if (flag && phone != '') {

        document.getElementById("caption").innerText = "Верификация телефона +" + phone;
        const xhr = new XMLHttpRequest();
        var params = '?phone='+phone+'&action=send';
        xhr.open("GET", '/sms.php' + params, false);
        //xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = () => { // Call a function when the state changes.
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                if (xhr.responseText.indexOf("ResponseOk") >= 0) {
                    document.getElementById("text-modal").innerHTML=
                        `На ваш телефон выслано SMS сообщение.<br>
                        Введите 4-значный код:<br>
                        <input name="code" id="code" type="text" size="4" maxlength="4" required style="text-align: center; font-size: 2rem; letter-spacing: 0.5rem;"><br>
                        <Button class="button-agree" onclick="verify_code();" >Подтвердить</Button>`;
                    
                } else {
                    document.getElementById("text-modal").innerHTML=`Что-то пошло не так ..`;
                }
            }
        }
        xhr.send();
        
        document.getElementById("code").focus();
        document.getElementById("code").click();

    } else {
        document.getElementById("text-modal").innerHTML= `Заполните поле "Телефон"<br>`;
    };

    document.getElementById("code").focus();
    document.getElementById("code").click();

}; // end send_sms()


function verify_code() {

    var nameForm = localStorage.getItem("nameForm");
    let dataQuiz = "";
    if (nameForm == "quiz42" || nameForm == "quiz54") 
        for (var i=1; i<=19; i++)
            if (document.getElementById("radio"+i).checked)
                dataQuiz += document.getElementById("radio"+i).value + " _ ";

    var phone;
    try {
        if (document.getElementsByName("PhoneFormThree")[0].value != '') phone = document.getElementsByName("PhoneFormThree")[0].value;
        if (document.getElementsByName("FirstFormNumber")[0].value != '') phone = document.getElementsByName("FirstFormNumber")[0].value;
        if (document.getElementsByName("PhoneFormTwo")[0].value != '') phone = document.getElementsByName("PhoneFormTwo")[0].value;
    } catch(e) {
        console.log(e);
    }
    
    var name;
    try {
    if (document.getElementsByName("NameFormThree")[0].value != '') name = document.getElementsByName("NameFormThree")[0].value;
    if (document.getElementsByName("NameFormTwo")[0].value != '') name = document.getElementsByName("NameFormTwo")[0].value;
    } catch(e) {
        console.log(e);
    }
    
    var text = document.getElementsByName("MainFormMessage")[0].value;
    var code = document.getElementsByName("code")[0].value;

    phone = phone.replace("+","");
    if (phone[0] == "8") phone = phone.replaceAt(0, "7");
    
      
    const xhr = new XMLHttpRequest();
    var params = `?name=${name}&phone=${phone}&text=${text}&code=${code}&nameForm=${nameForm}&dataQuiz=${dataQuiz}&action=verify`;
    //console.log(params);
    xhr.open("GET", '/sms.php' + params, false);
    //xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = () => { // Call a function when the state changes.
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        if (xhr.responseText.indexOf("ResponseOk") >= 0) {
            document.getElementById("text-modal").innerHTML=
                `Спасибо. Код подтвержден.<br>
                Ваше сообщение отправлено.<br>
                Наш сотрудник свяжется с вами в ближайшее время.`;
            document.getElementById("caption").innerHTML=
                `Заявка отправлена`;
            if (nameForm == '42 главная форма') ym(56680159,'reachGoal','call_from_web');
                else ym(56680159,'reachGoal','sms_verify_ok');
        } else {
          document.getElementById("caption").innerHTML="Ошибка";
          document.getElementById("text-modal").innerHTML=`Неправильный код SMS.`;
        }
      }
    }
    xhr.send();
};


String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
};

function onlyNumberKey(evt) {
      var ASCIICode = (evt.which) ? evt.which : evt.keyCode
      if (ASCIICode == 43) return true;
      if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
          return false;
      else
          return true;
};
