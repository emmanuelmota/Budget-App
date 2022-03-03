import React from 'react';
import Transaction from './Transaction.jsx';

const TransactionList = function (props) {
  const { data, cats, patch } = props;
  // Map over this.props.data
  //  For each transaction we will return a "transaction" component and pass to it props
  //  We will then in the return block below place {mappedTransactions}
  const mappedTransactions = data.map((tr) => (
    <Transaction patch={patch} transaction={tr} key={tr.id} availCats={cats} />
  ));
    // console.log('Props data Line 14', this.props.data);
    // console.log(mappedTransactions);
  return (
    <div className="txn">
      <h3>Transactions</h3>
      <div className="txn-table">
        <div className="txn-header txn-row">
          <div className="txn-data">Date</div>
          <div className="txn-data">Description</div>
          <div className="txn-data">Amount</div>
          <div className="txn-data">Category</div>
        </div>
        {mappedTransactions}
      </div>
    </div>
  );
};

export default TransactionList;
