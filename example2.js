const transactions = [
    { id: 1, amount: 10 },
    { id: 2, amount: 15 },
    { id: 3, amount: 20 },
  ];
  
  const transactionDetails = transactions.map(transaction => ({
    transactionId: transaction.id,
    value: transaction.amount,
    status: 'Processed',
  }));
  
  console.log(transactionDetails);
  // Output:
  // [
  //   { transactionId: 1, value: 10, status: 'Processed' },
  //   { transactionId: 2, value: 15, status: 'Processed' },
  //   { transactionId: 3, value: 20, status: 'Processed' }
  // ]
  