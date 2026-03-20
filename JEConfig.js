// JEConfig.js
// Global configuration for this specific exercise (Pure Air - Chapter 1).

const exerciseConfig = {
  // App labels
  appTitle: "Journal Entry Practice – Pure Air",
  subtitle: "September transactions and events  (Ch 1).",

  // Entity / report labels
  entityName: "Pure Air",
  chartWindowTitle: "Chart of Accounts – Pure Air",
  tbWindowTitle: "Trial Balance",
  tbEntityName: "Pure Air – Trial Balance",

  // Mode: "exercise" (feedback & grading) or "test" (no feedback / grading)
  // mode: "exercise",   // default
  // mode: "test",

  // How to label the starting balances in the ledger:
  // "beginning"  → “Beginning balance”
  // "unadjusted" → “Unadjusted balance”
  // startingBalanceLabelMode: "unadjusted", // when needed
  // startingBalanceLabelMode: "beginning", // default, undefined

  // Login / initial screen
  useLoginScreen: true,
  loginTitle: "Journal Entry Practice",
  loginSubtitle: "Pure Air",
  loginPrompt: "Enter your name (optional) and password to begin.",
  // Empty string = no password required
  loginPassword: "KUBS",
  loginButtonLabel: "Start",

  // Footer
  footerText: "For Korea University classroom use only. Do not redistribute.",
  copyright:
    `© ${new Date().getFullYear()} Jinhan Pae. All rights reserved.`
};
