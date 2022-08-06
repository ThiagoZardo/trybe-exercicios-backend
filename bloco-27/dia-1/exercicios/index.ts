import Cliente from './classes/Cliente';
import Pedidos from './classes/Pedidos';
import Item from './classes/Item';

const client = new Cliente('Thiago');

const sandwich = new Item('Sanduíche Natural', 5.00);
const juice = new Item('Suco de Abacaxi', 5.00);
const dessert = new Item('Gelatina de Uva', 2.50);

const order = new Pedidos(client, [sandwich, juice, dessert], 'dinheiro', 0.10);

// console.log('Order: ', order);
console.log('VALOR TOTAL', order.valorTotalPedido())
console.log('VALOR COM DESCONTO', order.valorComDescontoAplicado());
