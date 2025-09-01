const Utilitarios = require("../src/utilitarios");

describe("Testes da classe Utilitarios", () => {
    let utilitarios;

    beforeEach(() => {
        utilitarios = new Utilitarios();
    });

    test("Deve inverter string", () => {
        const result = utilitarios.inverterString("teste");
        expect(result).toBe("etset");
    });

    test("Deve contar caracteres", () => {
        const result = utilitarios.contarCaracteres("teste");
        expect(result).toBe(5);
    });

    test("Deve transformar string para caixa alta", () => {
        const result = utilitarios.paraMaiusculas("teste");
        expect(result).toBe("TESTE");
    });

    test("Deve transformar string para minúsculas", () => {
        const result = utilitarios.paraMinusculas("TESTE");
        expect(result).toBe("teste");
    });

    test("Deve transformar a primeira letra em maiúscula", () => {
        const result = utilitarios.primeiraLetraMaiuscula("teste");
        expect(result).toBe("Teste");
    });

    test("Deve somar números", () => {
        const result = utilitarios.somar(5, 5);
        expect(result).toBe(10);
    });

    test("Deve subtrair números", () => {
        const result = utilitarios.subtrair(10, 4);
        expect(result).toBe(6);
    });

    test("Deve multiplicar números", () => {
        const result = utilitarios.multiplicar(3, 4);
        expect(result).toBe(12);
    });

    test("Deve dividir números", () => {
        const result = utilitarios.dividir(10, 2);
        expect(result).toBe(5);
    });

    test("Deve lançar um erro ao tentar dividir por zero", () => {
        expect(() => utilitarios.dividir(10, 0)).toThrow("Divisão por zero");
    });

    test("Deve validar se um número é par", () => {
        expect(utilitarios.ehPar(10)).toBeTruthy();
        expect(utilitarios.ehPar(7)).toBeFalsy();
    });

    test("Deve pegar o primeiro elemento do array", () => {
        const result = utilitarios.primeiroElemento([4, 1, 3, 2]);
        expect(result).toBe(4);
    });

    test("Deve pegar o último elemento do array", () => {
        const result = utilitarios.ultimoElemento([4, 1, 3, 2]);
        expect(result).toBe(2);
    });

    test("Deve pegar o tamanho do array", () => {
        const result = utilitarios.tamanhoArray([4, 1, 3, 2]);
        expect(result).toBe(4);
    });

    test("Deve ordenar o array", () => {
        const result = utilitarios.ordenarArray([4, 1, 3, 2]);
        expect(result).toEqual([1, 2, 3, 4]);
    });

    test("Deve inverter o array", () => {
        const result = utilitarios.inverterArray([4, 1, 3, 2]);
        expect(result).toEqual([2, 3, 1, 4]);
    });

    test("Deve gerar um número aleatório menor que o máximo", () => {
        const result = utilitarios.gerarNumeroAleatorio(50);
        expect(typeof result).toBe('number');
        expect(result).toBeLessThan(50);
    });

    test("Deve gerar um número aleatório usando o valor padrão (100)", () => {
        const result = utilitarios.gerarNumeroAleatorio(); // Chamando sem argumento
        expect(typeof result).toBe('number');
        expect(result).toBeLessThan(100);
    });

    test("Deve verificar se o valor é um número", () => {
        expect(utilitarios.ehNumero(123)).toBeTruthy();
        expect(utilitarios.ehNumero("abc")).toBeFalsy();
    });

    test("Deve remover espaços do início e do fim", () => {
        const result = utilitarios.removerEspacos("  olá mundo  ");
        expect(result).toBe("olá mundo");
    });

    test("Deve repetir o texto o número de vezes especificado", () => {
        const result = utilitarios.repetirTexto("abc", 3);
        expect(result).toBe("abcabcabc");
    });

    test("Deve juntar um array em uma string com um separador", () => {
        const result = utilitarios.juntarArray(['a', 'b', 'c'], '-');
        expect(result).toBe("a-b-c");
    });

    test("Deve juntar um array usando o separador padrão (vírgula)", () => {
        const result = utilitarios.juntarArray(['a', 'b', 'c']); // Chamando sem o separador
        expect(result).toBe("a,b,c");
    });

    test("Deve contar o número de palavras corretamente", () => {
        const result = utilitarios.contarPalavras("  isto é um teste  ");
        expect(result).toBe(4);
    });

    test("Deve calcular a média de um array", () => {
        const result = utilitarios.mediaArray([1, 2, 3, 4, 5]);
        expect(result).toBe(3);
    });

    test("Deve retornar 0 para a média de um array vazio", () => {
        const result = utilitarios.mediaArray([]);
        expect(result).toBe(0);
    });

    test("Deve remover elementos duplicados de um array", () => {
        const result = utilitarios.removerDuplicados([1, 2, 2, 3, 1, 4]);
        expect(result).toEqual([1, 2, 3, 4]);
    });

    test("Deve verificar se uma string é um palíndromo", () => {
        expect(utilitarios.ehPalindromo("Anotaram a data da maratona")).toBeTruthy();
        expect(utilitarios.ehPalindromo("teste")).toBeFalsy();
    });

    test("Deve mesclar dois objetos", () => {
        const obj1 = { nome: "João", idade: 30 };
        const obj2 = { idade: 31, cidade: "São Paulo" };
        const result = utilitarios.mesclarObjetos(obj1, obj2);
        expect(result).toEqual({ nome: "João", idade: 31, cidade: "São Paulo" });
    });
});