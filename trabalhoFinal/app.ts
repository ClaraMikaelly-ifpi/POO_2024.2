import * as readline from 'readline';

class SocialNetwork {
    private friends: string[] = [];
    private posts: string[] = [];
    private profileActive: boolean = true;
    private rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    public askQuestion(question: string): Promise<string> {
        return new Promise<string>(resolve => this.rl.question(question, resolve));
    }

    async addFriend(): Promise<void> {
        const friendName: string = await this.askQuestion("Digite o nome do amigo a ser adicionado: ");
        this.friends.push(friendName);
        console.log(`${friendName} foi adicionado como amigo.`);
    }

    async removeFriend(): Promise<void> {
        const friendName: string = await this.askQuestion("Digite o nome do amigo a ser removido: ");
        const index: number = this.friends.indexOf(friendName);
        if (index !== -1) {
            this.friends.splice(index, 1);
            console.log(`${friendName} foi removido dos amigos.`);
        } else {
            console.log(`${friendName} não está na lista de amigos.`);
        }
    }

    async addPost(): Promise<void> {
        const post: string = await this.askQuestion("Digite a publicação: ");
        this.posts.push(post);
        console.log("Publicação adicionada com sucesso.");
    }

    listFriends(): void {
        console.log("Lista de amigos:");
        this.friends.forEach(friend => console.log(`- ${friend}`));
    }

    listPosts(): void {
        console.log("Lista de postagens:");
        this.posts.forEach(post => console.log(`- ${post}`));
    }

    activateProfile(): void {
        this.profileActive = true;
        console.log("Perfil ativado.");
    }

    deactivateProfile(): void {
        this.profileActive = false;
        console.log("Perfil desativado.");
    }

    close(): void {
        this.rl.close();
    }
}

// Menu interativo
const socialNetwork = new SocialNetwork();

async function main() {
    let running = true; // Variável para controlar o loop

    while (running) {
        console.log("\nMenu:");
        console.log("1. Adicionar amigo");
        console.log("2. Remover amigo");
        console.log("3. Adicionar publicação");
        console.log("4. Listar amigos");
        console.log("5. Listar postagens");
        console.log("6. Ativar perfil");
        console.log("7. Desativar perfil");
        console.log("8. Sair");

        const choice: string = await socialNetwork.askQuestion("Escolha uma opção: ");

        switch (choice) {
            case "1":
                await socialNetwork.addFriend();
                break;
            case "2":
                await socialNetwork.removeFriend();
                break;
            case "3":
                await socialNetwork.addPost();
                break;
            case "4":
                socialNetwork.listFriends();
                break;
            case "5":
                socialNetwork.listPosts();
                break;
            case "6":
                socialNetwork.activateProfile();
                break;
            case "7":
                socialNetwork.deactivateProfile();
                break;
            case "8":
                running = false; // Define running como false para sair do loop
                socialNetwork.close();
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    }
}

main();

