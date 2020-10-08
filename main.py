#Valide o CPF

import re

def validCPF (cpf):

	soma = 0
	digito = 0

	if len(cpf) != 11: return False

	#primeiro digito
	j = 0		
	for i in range (10, 1, -1):
		soma = soma + (int(cpf[j])*i)
		j += 1

	digito = (soma % 11)

	if digito == 10 or digito == 11: digito = 0

	digito = 11 - digito

	if digito != int(cpf[9]): return False

	#segundo digito
	soma = 0
	j = 0		
	for i in range (11, 1, -1):
		soma = soma + (int(cpf[j])*i)
		j += 1

	digito = (soma % 11)

	if digito == 10 or digito == 11: digito = 0

	digito = 11 - digito
	
	if digito != int(cpf[10]): return False

	return True

cpf = input("Digite o CPF: ")

"""
for char in ".-":
	cpf = cpf.replace(char, "")
"""

cpf = re.sub('\D', "", cpf)

#print(cpf)

if validCPF(cpf):
	print("CPF Válido :D")
else:
	print("CPF Inválido :(")