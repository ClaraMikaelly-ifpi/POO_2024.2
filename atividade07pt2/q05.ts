/*b. A classe Produto tem atributos privados representando identificador,
descrição, quantidade de produtos em estoque e valor unitário;*/

class Produto {
    private id: number;
    private descricao: string;
    private quantidade: number;
    private valorUnitario: number;

    constructor(id: number, descricao: string, quantidade: number, valorUnitario: number){
        this.id = id;
        this.descricao = descricao;
        this.quantidade = quantidade;
        this.valorUnitario = valorUnitario;
    }
    // acessar os atributos
    getId(): number {
        return this.id;
    }

    getDescricao(): string {
        return this.descricao;
    }

    getQuantidade(): number {
        return this.quantidade;
    }

    getValorUnitario(): number {
        return this.valorUnitario;
    }



    // d. Produto possui dois métodos para repor e dar baixa.
    repor(quantidade: number): void {
        this.quantidade += quantidade;
    }

    darBaixa(quantidade: number): void {
        if (this.quantidade >= quantidade) {
            this.quantidade -= quantidade;
        } else {
            console.log("Quantidade insuficiente em estoque");
        }
    }
}

// c. ProdutoPerecivel tem as mesmas características de Produto, porém possui a mais um atributo representando a data da validade. 
// Use herança.
class ProdutoPerecivel extends Produto {
    private dataValidade: Date;

    constructor (id: number, descricao: string, quantidade: number, valorUnitario: number, dataValidade: Date) {
        super(id, descricao, quantidade, valorUnitario);
        this.dataValidade = dataValidade;
    }

    // e. Um produto perecível possui um método que diz se um produto está válido ou não comparando sua data de validade com a data atual.
    estaValido(): boolean {
        const hoje = new Date();
        return hoje <= this.dataValidade;
    }

    // f. Use sobrescrita, ou seja, reescreva os métodos repor e dar baixa para que não seja possível executar a ação caso o produto não esteja na validade.
    repor(quantidade: number): void {
        if(this.estaValido()){
            super.repor(quantidade);
        } else {
            console.log("Produto vencido. Não é possível repor");   
        }
    }

    darBaixa(quantidade: number): void {
        if(this.estaValido()){
            super.darBaixa(quantidade);
        } else {
            console.log("Produto vencido. Não é possível dar baixa");
        }
    }
}

// g. Crie uma classe chamada Estoque que possui um atributo privado representando um array de produtos (Produto ou ProdutoPerecivel).
class Estoque {
    private produtos: (Produto | ProdutoPerecivel)[];

    constructor(){
        this.produtos = [];
    }

    // h. Implemente métodos para inserir, consultar pelo atributo id, excluir, repor e dar baixa nos produtos na classe estoque.
    inserir(produto: Produto | ProdutoPerecivel): void {
        // i. Crie validações para não deixar serem incluídos produtos com mesmo id ou mesma descrição.
        if (!this.existe(produto.getId(), produto.getDescricao())){
            this.produtos.push(produto);
        } else {
            console.log("Produto com mesmo Id ou descrição já existe");
        }
    }

    consultar(id: number): Produto | ProdutoPerecivel | undefined {
        return this.produtos.find(produto => produto.getId() === id);
    }

    excluir(id: number): void {
        const index = this.produtos.findIndex(produto => produto.getId() === id);
        if (index !== -1) {
            this.produtos.splice(index, 1);
        } else {
            console.log("Produto não encontrado");
        }
    }

    // j. Os métodos repor e dar baixa na classe estoque chamam os métodos da classe produto para finalmente alterar a quantidade.
    repor(id: number, quantidade: number): void {
        const produto = this.consultar(id);
        if (produto) {
            produto.repor(quantidade);
        } else {
            console.log("Produto não encontrado");
        }
    }

    darBaixa(id: number, quantidade: number): void { 
        const produto = this.consultar(id);
        if (produto) {
            produto.darBaixa(quantidade);
        } else {
            console.log("Produto não encontrado");
        }
    }

    // i. Crie uma consulta adicional através de um método existe(id: number, descricao: string): boolean.

    existe(id: number, descricao: string): boolean {
        return this.produtos.some(produto => produto.getId() === id || produto.getDescricao() === descricao);
    }

    
    // l. Implemente um método que liste todos os produtos perecíveis vencidos.
    listarPereciveisVencidos(): ProdutoPerecivel[] {
        return this.produtos.filter(produto => produto instanceof ProdutoPerecivel && !produto.estaValido()) as ProdutoPerecivel[];

    }

}