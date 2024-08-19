import React from 'react';
import { Line, Pie } from '@ant-design/charts';

function ChartComponent({ sortedTransactions }) {
  // Transform data for the line chart
  const data = sortedTransactions.map((item) => {
    return { date: item.date, amount: item.amount };
  });

  // Transform data for the pie chart
  const spendingData = sortedTransactions
    .filter((transaction) => transaction.type === 'expense')
    .map((transaction) => {
      return { tag: transaction.tag, amount: transaction.amount };
    });

  const config = {
    data: data,
    width: 800,
    height: 450,
    autoFit: true,
    xField: 'date',
    yField: 'amount',
  };

  const spendingConfig = {
    data: spendingData,
    width: 500,
    angleField: 'amount',
    colorField: 'tag',
  };

  return (
    <div className='charts-wrapper'>
      <div>
        <h2 style={{ marginTop: 0 }}>Your Analytics</h2>
        <Line {...config} />
      </div>
      <div>
        <h2>Your Spendings</h2>
        <Pie {...spendingConfig} />
      </div>
    </div>
  );
}

export default ChartComponent;
