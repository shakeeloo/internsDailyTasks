document.getElementById('name').addEventListener('blur', blurName)
document.getElementById('code').addEventListener('blur', blurCode)
document.getElementById('email').addEventListener('blur', blurEmail)
document.getElementById('phone').addEventListener('blur', blurPhone)
document.getElementById('btn').addEventListener('click', submit)

function blurName(){
    const name = document.getElementById('name');
    const regE = /^[a-zA-Z]{2,10}$/;
    if(!regE.test(name.value)){               //test() method compares whether the values are samee or not
        name.classList.add("is-invalid")
    }else{
        name.classList.remove("is-invalid")
    }
    return name.value;
}

function blurCode(){
    const code = document.getElementById('code');
    const regE = /^[0-9]{5}-([0-9]{1})?$/;
    if(!regE.test(code.value)){               //test() method compares whether the values are samee or not
        code.classList.add("is-invalid")
    }else{
        code.classList.remove("is-invalid")
    }
    return code.value;
}

function blurEmail(){
    const email = document.getElementById('email');
    const regE =  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if(!regE.test(email.value)){               //test() method compares whether the values are samee or not
        email.classList.add("is-invalid")
    }else{
        email.classList.remove("is-invalid")
    }
    return email.value;
}

function blurPhone(){
    const phone = document.getElementById('phone');
    const regE =  /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
    if(!regE.test(phone.value)){               //test() method compares whether the values are samee or not
        phone.classList.add("is-invalid")
    }else{
        phone.classList.remove("is-invalid")
    }
    return phone.value;
}

const form_= [blurName(),blurCode(),blurEmail(),blurPhone()]

function submit(e){
    let info_ ='';

        form_.forEach(item => {
            info_ += `
            <ul>
            <li>${item}</li>
            <li>${item}</li>
            <li>${item}</li>
            <li>${item}</li>
            </ul>
            `        
        });

    document.getElementById('info').innerHTML = info_;
    e.preventDefault();
}

