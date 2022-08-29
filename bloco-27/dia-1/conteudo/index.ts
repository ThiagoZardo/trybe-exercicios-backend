class TV {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(b: string, s: number, r: string, c: string[]) {
    this._brand = b;
    this._size = s;
    this._resolution = r;
    this._connections = c;
  }

  turnOn():void {
    console.log(`TV marca: ${this._brand}, tamanho: ${this._size}, resolução: ${this._resolution}, conexão: ${this._connections}`);
  }

  get connectedTo(): string | undefined {
    return this._connectedTo;
  }

  set connectedTo(newValue: string | undefined) {
    if (!newValue || this._connections.includes(newValue)) {
      this._connectedTo = newValue;
      console.log(this._connectedTo);
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }
};

const tv1 = new TV('LG', 47, '150x2400', ['hdmi', 'wifi']);
tv1.connectedTo = 'Wi-Fi';
console.log('Conectado em: ', tv1.connectedTo);
