function Validar()
{
    expressao_cpf = /^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$/g ;
    expressao_telefone = /^\([0-9]{2}\) [0-9] [0-9]{4}-[0-9]{4}$/g ;
    expressao_cep = /^[0-9]{5}-[0-9]{3}$/g ;
    
    texto_cpf = cpf.value
    texto_telefone = telefone.value
    texto_cep = cep.value

    resposta_cpf = expressao_cpf.test(texto_cpf)
    resposta_telefone = expressao_telefone.test(texto_telefone)
    resposta_cep = expressao_cep.test(texto_cep)

    resposta_global = [resposta_cpf, resposta_telefonem, resposta_cep]

    if (resposta_cpf == false || resposta_telefone == false || resposta_cep == false)
    {
        alert("DADOS INVALIDOS") ;

        if (resposta_cpf == false) {
            cpf.classList.remove('certo')
            cpf.classList.add('errado')
        }
        if (resposta_telefone == false) {
            telefone.classList.remove('certo')
            telefone.classList.add('errado')
        }
        if (resposta_cep == false) {
            cep.classList.remove('certo')
            cep.classList.add('errado')
        }
    }

    if (resposta_cpf == true || resposta_telefone == true || resposta_cep == true)
    {
        if (resposta_cpf == true) {
            cpf.classList.remove('errado')
            cpf.classList.add('certo')
        }
        if (resposta_telefone == true) {
            telefone.classList.remove('errado')
            telefone.classList.add('certo')
        }
        if (resposta_cep == true) {
            cep.classList.remove('errado')
            cep.classList.add('certo')
        }
    }
}

function Limpar() 
{
    document.getElementById("cpf").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("cep").value = "";

    cpf.classList.remove('certo', 'errado')
    telefone.classList.remove('certo', 'errado')
    cep.classList.remove('certo', 'errado')
}