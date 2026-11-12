#include <stdio.h>

int main() {
    int i = 1; // Inicialização da variável de controle

    while (i < 5) { // Condição: roda enquanto i for menor que 5
        printf("i = %d\n", i);
        i++; // Soma +1 na variável (evita loop infinito)
    }

    return 0;
}
