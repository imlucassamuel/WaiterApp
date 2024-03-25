import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Array<Order> = [{
  '_id': '65e67416caf7d51dcafeaf98',
  'table': '26',
  'status': 'WAITING',
  'products': [
    {
      'product': {
        'name': 'Pizza quatro queijos',
        'imagePath': '1709600163666-quatro-queijos.png',
        'price': 40,
      },
      'quantity': 3,
      '_id': '65e67416caf7d51dcafeaf99'
    },
    {
      'product': {
        'name': 'Coca cola',
        'imagePath': '1709601221304-coca-cola.png',
        'price': 7,
      },
      'quantity': 2,
      '_id': '65e67416caf7d51dcafeaf9a'
    }
  ],
}];

export function Orders() {
  return (
    <Container>
      <OrdersBoard icon="🕝" title="Fila de espera" orders={orders} />
      <OrdersBoard icon="👨‍🍳" title="Em preparação" orders={[]} />
      <OrdersBoard icon="✅" title="Pronto!" orders={[]} />
    </Container>
  );
}

