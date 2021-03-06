

const inputFileButton = document.getElementById("inputfilebutton");
inputFileButton.addEventListener("click", CliqueBotaoArquivo);

const inputNumberButton = document.getElementById("inputnumberbutton");
inputNumberButton.addEventListener("click", ClikBotNum);

  function CliqueBotaoArquivo() {

    arquivo = document.getElementById("inputfile");

    var fr = new FileReader();
    var info 

    try { 

    if ((arquivo.files[0]) == null) {

        throw "  Arquivo não reconhecido"

        }

        fr.readAsText(arquivo.files[0]); 

        fr.onload = function () {

            info = fr.result;

            console.log(`Informação do arquivo: ${info}`)
            document.getElementById('output').textContent = fr.result;

    if (info == "") { 

        throw ` Arquivo inválido`

            }
        }
    }

    catch (error) { 

        console.log(error)
        alert("  Arquivo não inserido")
        document.getElementById('output').textContent = "  Arquivo não inserido";

    }

    finally {

        alert("Obrigado pela visita")

    }
}

    function ClikBotNum(){

    try {
    
    val_dig = document.getElementById("inputnumber")
    val_ver =  Number(val_dig.value)

    if(val_dig.value == "") throw ' Coloque um número'

    else if (val_ver <= 5 || val_ver >= 10) throw ' Informe um valor maior que 5 e menor que 10'

  }

    catch(error){
   
    document.getElementById("output-number").innerHTML = `Erro: ${error}`
    console.log(error)
    alert(`Erro: ${error}`)
  }

    finally {
   
    document.getElementById("output-number").innerHTML = `  O número escolhido foi: ${val_dig.value}`

     }
  }