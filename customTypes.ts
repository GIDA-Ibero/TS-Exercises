type PersonType = {
  nombre: string;
  apellido: string;
  edad: number;
  cardNumber?: string;
  getName?: () => void;
}

interface NombreApellido {
  nombre: string;
  apellido: string;
}

interface Edad {
  edad: number
}

interface PersonType2 extends NombreApellido, Edad {
  cardNumber: string;
}

const person: PersonType = {
  nombre: 'Jair',
  apellido: 'Escamilla',
  edad: 21,
  getName: function() {
    console.log(this.nombre)
  }
};

const person2: PersonType = {
  nombre: 'César',
  apellido: 'Arellano',
  edad: 21,
  getName: function() {
    console.log(this.nombre)
  }
}

const persona3: PersonType = {
  nombre: 'Rulas',
  apellido: 'González',
  edad: 21,
}