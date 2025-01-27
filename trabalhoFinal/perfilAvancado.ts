import { Perfil } from "./perfil";

export class PerfilAvancado extends Perfil {
    constructor(apelido: string, foto: string, email: string) {
        super(apelido, foto, email);
    }

    public habilitarDesabilitarPerfil(outroPerfil: Perfil): void {
        if (outroPerfil.isAtivo()) {
            outroPerfil.desativarPerfil();
        } else {
            outroPerfil.ativarPerfil();
        }
    }
}