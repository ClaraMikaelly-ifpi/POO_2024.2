class ControleDeAudio:
    def _init_(self):
        self.volume = 2

    def aumentar_volume(self):
        if self.volume < 10:
            self.volume += 1

    def diminuir_volume(self):
        if self.volume > 0:
            self.volume -= 1

    def ler_volume(self):
        return self.volume
    
    # Criando um objeto da classe
controle = ControleDeAudio()

# Lendo o volume atual
volume_atual = controle.ler_volume()
<<<<<<< HEAD
print("O volume atual é:", volume_atual)
=======
print("O volume atual é:", volume_atual)
>>>>>>> 36f59fed3779b5da06e42a4e7280ebf0863dcd3a
