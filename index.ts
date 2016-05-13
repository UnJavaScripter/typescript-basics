interface IPokemon {
    nombre: string,
    sonido: string,
    dormido?: boolean
}

class Pokemon {
  
  pokemon;
    
  get (){
    return this.pokemon;
  }

  set (nuevoPokemon){
    this.pokemon = nuevoPokemon;
  }
  
  hacerHablar() {
    if (this.pokemon.dormido){
      console.log('Zzzzz');
    }else{
      console.log(this.pokemon.sonido);
    }
  }

  constructor(nuevoPokemon: IPokemon) {
    this.set(nuevoPokemon);
  }
}


let pikachu = new Pokemon({ nombre: "Pikachu", sonido: "¡Pika pika!" });

pikachu.hacerHablar();

let snorlax = new Pokemon({ nombre: "Snorlax", sonido: "Snoooor-laax", dormido: true });

snorlax.hacerHablar();