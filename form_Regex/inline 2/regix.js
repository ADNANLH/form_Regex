
//first name
function checkName(){
    
    var firstname = document.getElementById('firstname').value;
    let regex = /[0-9\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/g;
    if(firstname === '' || firstname.length>30 || regex.test(firstname) ) {
        document.getElementById('name').innerHTML = 'first name is required.';
        document.getElementById('firstname').style.borderColor="red";
        
    }else{
        document.getElementById('name').innerHTML = '';
        document.getElementById('firstname').style.borderColor="#09c372";
        
    }
}   

//last name
function checkLastName(){
    var lastname = document.getElementById('lastname').value;
    let regex = /[0-9\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/g;
    if(lastname === '' || lastname.length>30 || regex.test(lastname)) {
        document.getElementById('namelast').innerHTML = 'last name is required.';
        document.getElementById('lastname').style.borderColor="red";    
    }else{
        document.getElementById('namelast').innerHTML = '';
        document.getElementById('lastname').style.borderColor="#09c372";   
        
    }
}

// email
function checkEmail(){
    
        var firstname = document.getElementById('firstname').value;
        var lastname = document.getElementById('lastname').value;
        var email = document.getElementById('email').value;
        if(email === '') {
            document.getElementById('paraemail').innerHTML = 'Email is required.';
            document.getElementById('email').style.borderColor="red";
            
        }else if (email === firstname + "." + lastname + "@ofppt.ma") {
            document.getElementById('paraemail').innerHTML = '';
            document.getElementById('email').style.borderColor="#09c372";
            
            
        }else {
            document.getElementById('paraemail').innerHTML = 'Email Not Valid.';
            document.getElementById('email').style.borderColor="red";
            
        }
    }
    
    //phone
    function checkPhone(){
        var telephone = document.getElementById('telephone').value;
        var regexPhone = /^[0]+[5-7]+\d{8}$/ig;
        if(telephone === '' || telephone.length>10 ) {
            document.getElementById('paratele').innerHTML = 'Telephone is required.';
            document.getElementById('telephone').style.borderColor="red";
            
            
        }else if (regexPhone.test(telephone)) {
            document.getElementById('paratele').innerHTML = '';
            document.getElementById('telephone').style.borderColor="#09c372";
            
        }else {
            document.getElementById('paratele').innerHTML = 'Telephone Non Valid.';
            document.getElementById('telephone').style.borderColor="red";  
             
        }
    }
    
    //gender
    function checkGender(){
        if (document.getElementById('female').checked) {
            document.getElementById("paragenre").innerHTML = '';
            
        }else if(document.getElementById('male').checked) {
            document.getElementById("paragenre").innerHTML = '';
            
        }else {
            document.getElementById("paragenre").innerHTML = "select something pls";
            
        }
    }
    //groups
    function checkGroup(){
        let ch1 = document.getElementById('DW101').checked
        let ch2 = document.getElementById('DW102').checked
        let ch3 = document.getElementById('DW103').checked
        let ch4 = document.getElementById('DW104').checked
        let ch5 = document.getElementById('DM101').checked
        let ch6 = document.getElementById('DM102').checked
        
        if (ch1 == false && ch2 == false && ch3 == false && ch4 == false && ch5 == false && ch6 == false) {
            document.getElementById("AFFICHE").innerHTML = 'SELECT SOMETHING';
            
            
        }else {
            document.getElementById("AFFICHE").innerHTML = ""
            
        };
    }
    //clubs 
    function checkClubs(){
        var clubs = document.getElementById("Club(s)-select");
        var count = 0
        for (let i = 0; i < clubs.options.length; i++) {
            if ( clubs.options[i].selected== true ) {
                count++;
            }else if (count >=1 && count <=3) {
                document.getElementById("paraclb").innerHTML = "";  
                   
            }else {
                document.getElementById("paraclb").innerHTML = "you limited in 3";
            }
        }
    }