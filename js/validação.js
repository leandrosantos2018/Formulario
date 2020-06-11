function Validar(){
    var nome = form1.nome.value;
    var email = form1.email.value;
    var data = form1.datanascimento.value;
    var sexo = form1.sexo.value;
    var are = form1.areadeinteresse.value;
    var estado = form1.EstadoCivil.value;
    var  data  = form1.datanascimento.value;
    data = data.replace(/\//g, "-"); 
   var data_array = data.split("-");
   var hoje = new Date();
   var nasc  = new Date(data);
   var idade = hoje.getFullYear() - nasc.getFullYear();
   var m = hoje.getMonth() - nasc.getMonth();

   if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) idade--;

    if(nome == "" || nome.length<=10){
                alert('Preencha o campo nome com minimo 15 caracteres!!!');
                form1.nome.focus();
                return false;
            } 

            if(email == "" || email.indexOf('@') == -1 ||email.length<=9 ){
                alert('Preencha o campo E-mail.');
                form1.email.focus();
                return false;
            }
            if(data_array[0].length != 4){
      data = data_array[2]+"-"+data_array[1]+"-"+data_array[0]; 
      
   }
   if(idade < 15){
    alert("Pessoas menores de 15 não podem se cadastrar.");
    return false;
 }
            if(estado == ""){
                alert('Favor escolhe seu estado civil!!!!');
                return false;
            }
           if(are == ""){
              alert('favor Escolhe uma ou mais area de interesse');
              form1.datanascimento.focus();
                return false;
           }

            

        }