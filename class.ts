class MyArray<T> {
  private array: Array<T> = [];

  constructor( firstElement: T ) {
    this.array = [firstElement];
  }

  addElement( newElement: T ): void | T {
    this.array = [ ...this.array, newElement ];
    return newElement;
  }

  getElement( position: number ): T | undefined {
    return this.array[position] || undefined;
  }
}

const array = new MyArray<string | number>(2);

array.addElement(5);
array.addElement(9);
array.addElement(456);
array.addElement(45);

console.log( array.getElement(2) );
