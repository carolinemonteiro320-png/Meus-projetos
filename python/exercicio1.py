n = float(input('Qual a distância da sua viagem em Km? '))
print('Você está prestes a começar uma viagem de {}Km'.format(n))
if n <= 200:
    preço = n * 0.5
else:
    preço = n * 0.45
print('E o valor da sua passagem é de R${:.2f}'.format(preço))
