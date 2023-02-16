import propTypes from 'prop-types';
import { Table, Thead, Tbody, Tr } from './TransactionHistory.styled';

export const TransactionsHistory = ({ items }) => {
  return (
    <Table>
      <Thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Thead>

      <Tbody>
        {items.map(item => {
          return (
            <Tr key={item.id}>
              <td>{item.type} </td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

TransactionsHistory.propTypes = {
  items: propTypes.arrayOf(
    propTypes.exact({
      type: propTypes.string.isRequired,
      amount: propTypes.string.isRequired,
      currency: propTypes.string.isRequired,
      id: propTypes.string.isRequired,
    })
  ),
};
