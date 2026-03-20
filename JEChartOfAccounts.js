// JEChartOfAccounts.js
// Chart of accounts for Softbyte journal practice

const chartOfAccounts = [
  // Assets 100–199
  { id: 100, code: "100", name: "Cash", type: "Asset" },
  { id: 110, code: "110", name: "Accounts Receivable", type: "Asset" },
  { id: 120, code: "120", name: "Supplies", type: "Asset" },
  { id: 150, code: "150", name: "Equipment", type: "Asset" },

  // Liabilities 200–299
  { id: 200, code: "200", name: "Accounts Payable", type: "Liability" },
  { id: 210, code: "210", name: "Salaries and Wages Payable", type: "Liability" }, // spare

  // Equity 300–399
  { id: 300, code: "300", name: "Share Capital - Ordinary", type: "Equity" },
  { id: 330, code: "330", name: "Retained Earnings", type: "Equity" }, // spare
  { id: 350, code: "350", name: "Accumulated Other Comprehensive Income", type: "Equity" }, // spare

   // Others 400-499 and 900-999
  { id: 400, code: "400", name: "Dividends", type: "Other" },
  
  // Revenues 500–599
  { id: 500, code: "500", name: "Service Revenue", type: "Revenue" },

  // Expenses 600–699
  { id: 600, code: "600", name: "Advertising Expense", type: "Expense" },
  { id: 610, code: "610", name: "Rent Expense", type: "Expense" },
  { id: 620, code: "620", name: "Salaries and Wages Expense", type: "Expense" },
  { id: 630, code: "630", name: "Utilities Expense", type: "Expense" },
  { id: 640, code: "640", name: "Bad Debt Expense", type: "Expense" }, // spare
];
