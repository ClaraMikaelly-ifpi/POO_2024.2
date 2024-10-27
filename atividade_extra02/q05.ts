class ControleDeAudio {
    private volume: number = 2;
  
    aumentarVolume(): void {
      if (this.volume < 10) {
        this.volume++;
      }
    }
  
    diminuirVolume(): void {
      if (this.volume > 0) {
        this.volume--;
      }
    }
  
    lerVolume(): number {
      return this.volume;
    }
  }
  