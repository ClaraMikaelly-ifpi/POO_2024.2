export class Perfil {
    private static nextId = 1;
    private id: number;
    private apelido: string;
    private foto: string; // emoji
    private email: string;
    private status: boolean;
    private amigos: Perfil[] = [];
    private postagens: Publicacao[] = [];

    constructor(apelido: string, foto: string, email: string) {
        this.id = Perfil.nextId;
        this.apelido = apelido;
        this.foto = foto;
        this.email = email;
        this.status = true;
    }

    public adicionarAmigos(amigo: Perfil): void {
        this.amigos.push(amigo);
        console.log(`${amigo.apelido} foi adicionado como amigo!`);
    }

    public removerAmigos(amigo: Perfil): void {
        const index = this.amigos.indexOf(amigo);
        if (index !== -1) {
            this.amigos.splice(index, 1);
            console.log(`${amigo.apelido} foi removido dos amigos!`);
        } else {
            console.log(`${amigo.apelido} não está na lista de amigos!`);   
        }
    }

    public adicionarPublicacao(conteudo: string): void {
        const novaPublicacao = new Publicacao(conteudo, this);
        this.postagens.push(novaPublicacao);
        console.log("Publicação adicionada com sucesso!");   
    }

    public listarAmigos(): void {
        console.log("Lista de amigos:");
        this.amigos.forEach(amigo => console.log(`- ${amigo.apelido}`));
    }

    public listarPostagens(): void {
        console.log("Lista de postagens:");
        this.postagens.forEach(postagens => console.log(`- ${postagens.getConteudo()}`));
    }

    public desativarPerfil(): void {
        this.status = false;
        console.log("Perfil desativado!");
    }

    public ativarPerfil(): void {
        this.status = true;
        console.log("Perfil ativado!");
    }

    public getApelido(): string {
        return this.apelido;
    }

    public getEmail(): string {
        return this.email;
    }

    public isAtivo(): boolean {
        return this.status;
    }

    public getId(): number {
        return this.id;
    }

    public getAmigos(): Perfil[] {
        return this.amigos;
    }

    public adicionarPublicacaoObj(publicacao: Publicacao): void {
        this.postagens.push(publicacao);
    }

}