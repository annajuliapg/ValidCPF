//Valide o CPF

function validCPF (cpf){

	let soma = 0, digito = 0, i, j
	
	if(cpf.length != 11) return false
		
		//primeiro digito
		j = 0		
		for (i = 10; i>1; i--){
			soma = soma + (parseInt(cpf[j])*i)
			j++
		}

		digito = (soma % 11)

		if(digito == 10 || digito == 11) digito = 0

		digito = 11 - digito
		
		if(digito != parseInt(cpf[9])) return false

		//segundo digito
		soma = 0
		j = 0		
		for (i = 11; i>1; i--){
			soma = soma + (parseInt(cpf[j])*i)
			j++
		}
		digito = (soma % 11)

		if(digito == 10 || digito == 11) digito = 0

		digito = 11 - digito
		
		if(digito != parseInt(cpf[10])) return false

	return true
}

//const cpfString = "546.471.429-49"
const cpfString = prompt("Digite seu CPF ")

const cpf = cpfString.replace(/\D+/g, '')

//console.log(cpf);

if(validCPF(cpf))
	console.log("CPF Válido :D")
else
	console.log("CPF Inválido :(")