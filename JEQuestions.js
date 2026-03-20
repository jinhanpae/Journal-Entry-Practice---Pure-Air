// JEQuestions.js
// Pure Air – Chapter 1 transaction set (using account IDs)

const CURRENT_YEAR = new Date().getFullYear();

const journalQuestions = [
  {
    id: 1,
    date: `${CURRENT_YEAR}-09-01`,
    title: "Transaction (1). Investment by Shareholders",
    description:
      "Aiden and Ruby invest ₩15,000 cash in Pure Air in exchange for ₩15,000 of ordinary shares.",
    correctLines: [
      { accountId: 100, debit: 15000, credit: 0 }, // Cash
      { accountId: 300, debit: 0, credit: 15000 }  // Share Capital - Ordinary
    ],
    explanation:
      "Cash (asset) increases, so debit Cash. Share Capital - Ordinary (equity) increases, so credit it."
  },
  {
    id: 2,
    date: `${CURRENT_YEAR}-09-05`,
    title: "Transaction (2). Purchase of Equipment for Cash",
    description:
      "Pure Air purchases computer equipment for ₩7,000 cash.",
    correctLines: [
      { accountId: 150, debit: 7000, credit: 0 }, // Equipment
      { accountId: 100, debit: 0, credit: 7000 }  // Cash
    ],
    explanation:
      "Equipment (asset) increases, so debit Equipment. Cash (asset) decreases, so credit Cash."
  },
  {
    id: 3,
    date: `${CURRENT_YEAR}-09-05`,
    title: "Transaction (3). Purchase of Supplies on Credit",
    description:
      "Pure Air purchases headsets and computer accessories for ₩1,600 from Mobile Solutions on account, with payment due in October.",
    correctLines: [
      { accountId: 120, debit: 1600, credit: 0 }, // Supplies
      { accountId: 200, debit: 0, credit: 1600 }  // Accounts Payable
    ],
    explanation:
      "Supplies (asset) increases, so debit Supplies. A liability to Mobile Solutions arises, so credit Accounts Payable."
  },
  {
    id: 4,
    date: `${CURRENT_YEAR}-09-10`,
    title: "Transaction (4). Services Performed for Cash",
    description:
      "Pure Air receives ₩1,200 cash from customers for app development services performed.",
    correctLines: [
      { accountId: 100, debit: 1200, credit: 0 }, // Cash
      { accountId: 500, debit: 0, credit: 1200 }  // Service Revenue
    ],
    explanation:
      "Cash (asset) increases, so debit Cash. Service Revenue increases equity, so credit Service Revenue."
  },
  {
    id: 5,
    date: `${CURRENT_YEAR}-09-11`,
    title: "Transaction (5). Purchase of Advertising Service on Credit",
    description:
      "Pure Air receives a bill for ₩250 from Programming News for advertising on its website and will pay later.",
    correctLines: [
      { accountId: 600, debit: 250, credit: 0 }, // Advertising Expense
      { accountId: 200, debit: 0, credit: 250 }  // Accounts Payable
    ],
    explanation:
      "Advertising Expense increases (debit) and reduces equity. The unpaid bill creates a liability, so credit Accounts Payable."
  },
  {
    id: 6,
    date: `${CURRENT_YEAR}-09-15`,
    title: "Transaction (6). Services Performed for Cash & Credit",
    description:
      "Pure Air performs ₩3,500 of app development services: receives ₩1,500 cash and bills ₩2,000 on account.",
    correctLines: [
      { accountId: 100, debit: 1500, credit: 0 }, // Cash
      { accountId: 110, debit: 2000, credit: 0 }, // Accounts Receivable
      { accountId: 500, debit: 0, credit: 3500 }  // Service Revenue
    ],
    explanation:
      "Cash and Accounts Receivable (assets) increase for the amounts received and billed. Total Service Revenue is ₩3,500, so credit Service Revenue."
  },
  {
    id: 7,
    date: `${CURRENT_YEAR}-09-26`,
    title: "Transaction (7). Payment of Expenses",
    description:
      "Pure Air pays the following cash expenses for September: office rent ₩600, salaries and wages ₩900, and utilities ₩200.",
    correctLines: [
      { accountId: 610, debit: 600, credit: 0 }, // Rent Expense
      { accountId: 620, debit: 900, credit: 0 }, // Salaries and Wages Expense
      { accountId: 630, debit: 200, credit: 0 }, // Utilities Expense
      { accountId: 100, debit: 0, credit: 1700 } // Cash
    ],
    explanation:
      "Rent, Salaries and Wages, and Utilities Expenses increase (debits). Cash decreases for the total ₩1,700, so credit Cash."
  },
  {
    id: 8,
    date: `${CURRENT_YEAR}-09-27`,
    title: "Transaction (8). Payment of Accounts Payable",
    description:
      "Pure Air pays its ₩250 Programming News bill that was recorded earlier as a liability.",
    correctLines: [
      { accountId: 200, debit: 250, credit: 0 }, // Accounts Payable
      { accountId: 100, debit: 0, credit: 250 }  // Cash
    ],
    explanation:
      "Paying the bill removes the liability: debit Accounts Payable. Cash decreases, so credit Cash. No new expense is recorded."
  },
  {   // Non‑transactions
    id: 9,
    date: `${CURRENT_YEAR}-09-28`,
    title: "Item (9). Contract Signed",
    description:
      "Pure Air signs a contract to provide services next month. No cash is received and no services are performed now.",
    requiresEntry: false,
    correctLines: [],
    explanation:
      "Signing a contract alone does not affect assets, liabilities, equity, revenue, or expenses, so no journal entry is recorded."
  },
  {
    id: 10,
    date: `${CURRENT_YEAR}-09-29`,
    title: "Transaction (10). Receipt of Cash on Account",
    description:
      "Pure Air receives ₩600 cash from customers previously billed in Transaction (6).",
    correctLines: [
      { accountId: 100, debit: 600, credit: 0 }, // Cash
      { accountId: 110, debit: 0, credit: 600 }  // Accounts Receivable
    ],
    explanation:
      "Collecting from customers increases Cash (debit) and reduces Accounts Receivable (credit). No additional revenue is recorded."
  },
  {
    id: 11,
    date: `${CURRENT_YEAR}-09-30`,
    title: "Transaction (11). Dividends",
    description:
      "Pure Air pays a cash dividend of ₩1,300 to shareholders Aiden and Ruby.",
    correctLines: [
      { accountId: 400, debit: 1300, credit: 0 }, // Dividends
      { accountId: 100, debit: 0, credit: 1300 }  // Cash
    ],
    explanation:
      "Dividends are distributions to shareholders, so debit Dividends (reducing retained earnings). Cash decreases, so credit Cash."
  }
];
