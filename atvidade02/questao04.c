#include <stdio.h>

int main() {
    int inteiro = 5;
    double flutuante = 10.5;
    // Soma de int e double com conversão implícita
    double resultado = inteiro + flutuante;
    printf("Resultado: %f\n", resultado);

    // Conversão explícita de double para int
    int resultadoInteiro = (int)flutuante;
    printf("Resultado da conversão: %d\n", resultadoInteiro);

    return 0;
}
/*Conversão Implícita de int para double:
Na linha double resultado = inteiro + flutuante;, o int (5) é convertido implicitamente para double (5.0) antes da soma com 10.5. Isso resulta em 15.5, que é armazenado em resultado.
Conversão Explícita de double para int:
Na linha int resultadoInteiro = (int)flutuante;, o valor 10.5 é convertido explicitamente para int, resultando em 10. Esse tipo de conversão pode levar à perda de dados, como a parte decimal, e pode causar problemas se não for usada com cuidado.
*/
