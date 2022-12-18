var btn = document.getElementById("btn");

btn.addEventListener('click',function(){

    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var telephone = document.getElementById('telephone').value;
    var clubs = document.getElementById("Club(s)-select");
    let valid = false;
    let regex = /[0-9\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/g;

    //first name
    if(firstname === '' || firstname.length>30 || regex.test(firstname) ) {
        document.getElementById('name').innerHTML = 'first name is required.';
        document.getElementById('firstname').style.borderColor="red";
        valid = false;
    }else{
        document.getElementById('name').innerHTML = '';
        document.getElementById('firstname').style.borderColor="#09c372";
        valid = true;
    }

    //last name
    if(lastname === '' || lastname.length>30 || regex.test(lastname)) {
        document.getElementById('namelast').innerHTML = 'last name is required.';
        document.getElementById('lastname').style.borderColor="red";
        valid =false;
        
    }else{
        document.getElementById('namelast').innerHTML = '';
        document.getElementById('lastname').style.borderColor="#09c372";   
        valid =true;
    }
    
// email
    if(email === '') {
        document.getElementById('paraemail').innerHTML = 'Email is required.';
        document.getElementById('email').style.borderColor="red";
        valid =false;
    }else if (email === firstname + "." + lastname + "@ofppt.ma") {
        document.getElementById('paraemail').innerHTML = '';
        document.getElementById('email').style.borderColor="#09c372";
        valid =true;
        
    }else {
        document.getElementById('paraemail').innerHTML = 'Email Not Valid.';
        document.getElementById('email').style.borderColor="red";
        valid =false;
    }

    var regexPhone = /^[0]+[5-7]+\d{8}$/ig;
    if(telephone === '' || telephone.length>10 ) {
        document.getElementById('paratele').innerHTML = 'Telephone is required.';
        document.getElementById('telephone').style.borderColor="red";
        valid =false;
        
    }else if (regexPhone.test(telephone)) {
        document.getElementById('paratele').innerHTML = '';
        document.getElementById('telephone').style.borderColor="#09c372";
        valid =true;
    }else {
        document.getElementById('paratele').innerHTML = 'Telephone Non Valid.';
        document.getElementById('telephone').style.borderColor="red";  
        valid =false; 
    }
    
    //gender
    if (document.getElementById('female').checked) {
        document.getElementById("paragenre").innerHTML = '';
    }else if(document.getElementById('male').checked) {
        document.getElementById("paragenre").innerHTML = '';
    }else {
        document.getElementById("paragenre").innerHTML = "select something pls";
    }
    //groups
    if (document.getElementById('DW101').checked) {
        document.getElementById("AFFICHE").innerHTML = '';
        
    }else if(document.getElementById('DW102').checked) {
        
        document.getElementById("AFFICHE").innerHTML = '';
        
    }else if(document.getElementById('DW103').checked) {
        
        document.getElementById("AFFICHE").innerHTML = '';
        
    }else if(document.getElementById('DW104').checked) {
        
        document.getElementById("AFFICHE").innerHTML = '';
        
    }else if(document.getElementById('DM101').checked) {
        
        document.getElementById("AFFICHE").innerHTML = '';
        
    }else if(document.getElementById('DM102').checked) {
        
        document.getElementById("AFFICHE").innerHTML = '';
        
    }else {
        document.getElementById("AFFICHE").innerHTML = "SELECT SOMETHING"
    };
    //clubs 
    var count = 0
    for (let i = 0; i < clubs.options.length; i++) {
        if ( clubs.options[i].selected ) {
            count++;
        }else if (count <= 3 && count != 0) {
            document.getElementById("paraclb").innerHTML = "";    
        }else if (count === 0) {
            document.getElementById("paraclb").innerHTML = "select something";
            
        }else {
            document.getElementById("paraclb").innerHTML = "you limited in 3";
        }
    }
  
    if (valid === true) {
        window.location.href = 'finish.html'
    }
});