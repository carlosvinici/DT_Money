import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal/index";
import { GlobalStyle } from "./styles/global";



export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransactionsModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal 
      isOpen={isNewTransactionModalOpen} 
      onRequestClose={handleCloseNewTransactionModal}/>
      <GlobalStyle />
    </>
  );
}

