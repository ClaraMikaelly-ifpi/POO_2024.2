# Atividade 08 - pt1

## Questão 01 - 3 tipos mais comuns de tratamento de erros

### Throw  
A instrução `throw` permite que você crie exceções personalizadas ou lance exceções quando uma condição específica é encontrada. Isso é útil para sinalizar a ocorrência de erros ou situações inesperadas durante a execução do programa.  

```typescript
function validaValor(valor: number) {
    if (valor <= 0) {
        throw new Error("O valor deve ser maior que zero.");
    }
}

try {
    validaValor(-1);
} catch (error) {
    console.error("Erro:", error.message);
}
```

### Finally
a declaração `finally` garante que um bloco de código será executado independentemente de uma exceção ter sido lançada ou não.

```try:
    arquivo = open("exemplo.txt", "r")
    # Código que pode causar uma exceção
except FileNotFoundError:
    # Código para tratar a exceção
    print("Erro: Arquivo não encontrado!")
finally:
    # Código que sempre será executado
    arquivo.close()
```
### Bloco Try-Catch
O bloco `try-catch` permite capturar e lidar com erros em tempo de execução.  
```try:
    # Código que pode causar uma exceção
    resultado = 10 / 0
except ZeroDivisionError:
    # Código para tratar a exceção
    print("Erro: Divisão por zero!")
```
## Questão 02 - 
- **Try-Catch**: Pode deixar o código verboso e difícil de ler, esconder bugs importantes e impactar a performance se exceções ocorrerem frequentemente.

- **Throw**: Pode causar terminação inesperada se a exceção não for tratada, Exceções são caras em termos de performance e podem impactar o desempenho se usadas em excesso.

- **Finally**: ode complicar a depuração do código, já que sempre é executado, e pode ocultar a exceção original se ele próprio lançar uma exceção.
