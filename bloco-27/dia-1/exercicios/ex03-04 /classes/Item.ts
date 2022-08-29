export default class Item {
  private nomePedido: string;
  valorPedido: number;

  constructor(nomePedidoParam: string, valorParam: number) {
    this.nomePedido = nomePedidoParam;
    this.valorPedido = valorParam;
  }

  get GetNomePedido(): string {
    return this.nomePedido;
  }

  set SetNomePedido(nomePedidoParam: string) {
    this.nomePedido = nomePedidoParam;
  }

  get GetValorPedido(): number {
    return this.valorPedido;
  }

  set SetValorPedidos(valorPedidoParam: number) {
    this.valorPedido = valorPedidoParam;
  }
}