import { createContext, useState, useEffect } from "react";

import FetchHelper from "../fetch-helper.js";

export const TransactionListContext = createContext();

function TransactionListProvider({ children }) {
  const [transactionListDto, setTransactionListDto] = useState({
    state: "ready", // one of ready/pending/error
    data: null,
    error: null,
  });

  async function handleLoad() {
    setTransactionListDto((current) => {
      return { ...current, state: "pending" };
    });
    const result = await FetchHelper.transaction.list();
    setTransactionListDto((current) => {
      if (result.ok) {
        return { ...current, state: "ready", data: result.data, error: null };
      } else {
        return { ...current, state: "error", error: result.data };
      }
    });
  }

  useEffect(() => {
    handleLoad();
  }, []);

  const value = {
    ...transactionListDto,
    handlerMap: {
      handleLoad,
    },
  };

  return (
    <TransactionListContext.Provider value={value}>
      {children}
    </TransactionListContext.Provider>
  );
}

export default TransactionListProvider;
