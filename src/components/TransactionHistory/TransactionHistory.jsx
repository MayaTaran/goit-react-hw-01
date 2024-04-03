import css from "./TransactionHistory.module.css";
export const TransactionHistory = ({ transactions }) => {
  return (
    <div className={css.container}>
      <table className={css.table} >
        <thead>
          <tr >
            <th className={css.title}>Type</th>
            <th className={css.title}>Amount</th>
            <th className={css.title}>Currency</th>
          </tr>
        </thead>

        <tbody >
          {transactions.map(transaction => (
            <tr className={css.row} key={transaction.id}>
              <td className={css.item}>{transaction.type}</td>
              <td className={css.item}>{transaction.amount}</td>
              <td className={css.item}>{transaction.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
