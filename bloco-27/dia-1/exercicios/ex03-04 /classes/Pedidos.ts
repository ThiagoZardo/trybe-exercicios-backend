/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { totalmem } from 'os';
import Cliente from './Cliente';
import Item from './Item';

export default class Pedidos {
  private cliente: Cliente;
  private itensConsumidos: Item[];
  private formaPagamento: string;
  private desconto?: number;

  constructor(cliente: Cliente, itemConsumido: Item[], formaPagamento: string, desconto: number) {
    this.cliente = cliente;
    this.itensConsumidos = itemConsumido;
    this.formaPagamento = formaPagamento;
    this.desconto = desconto;
  }

  get getCliente(): Cliente {
    return this.cliente;
  }

  get GetItensConsumidos(): Item[] {
    return this.itensConsumidos;
  }

  get GetFormadePagamento(): string {
    return this.formaPagamento;
  }

  get GetDesconto(): number {
    return this.desconto || 0;
  }

  


  set SetCliente(clienteParam: Cliente) {
    this.cliente = clienteParam;
  }

  set SetItensConsumidos(itemParam: Item[]) {
    this.itensConsumidos = itemParam;
  }

  set SetFormadePagamento(pagamentoParam: string ) {
    this.formaPagamento = pagamentoParam;
  }

  set SetDesconto(desconto: number) {
    this.desconto = desconto;
  }

  public valorTotalPedido(): number {
    return this.itensConsumidos.reduce((acc, currentValue) => {
      const total = acc + currentValue.valorPedido;
      return total;
    }, 0);
  }

  public valorComDescontoAplicado(): number {
    const valorTotal = this.valorTotalPedido();
    const desconto = this.desconto || 0;
    const descontoPercentual = (desconto * 100);
    const descontoConvertido = (descontoPercentual * valorTotal) / 100;
    const total = valorTotal - descontoConvertido;
    return total;
  }
}