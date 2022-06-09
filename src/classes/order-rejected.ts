import { ShoppingOrderState } from '../interfaces/shopping-order-state';
import { ShoppingOrder } from './shopping-order';

export class OrderRejected implements ShoppingOrderState {
  private name = 'OrderRejected';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    console.log('O pedido já foi recusado.');
  }

  rejectPayment(): void {
    console.log(
      'O pedido já está recusado.',
    );
  }

  waitPayment(): void {
    console.log('O pedido já foi recusado.');
  }

  shipOrder(): void {
    console.log('Não é possível enviar um pedido com o pagamento recusado.');
  }
}
