import HeaderBox from "@/components/shared/HeaderBox";
import RightSidebar from "@/components/shared/RightSidebar";
import TotalBalanceBox from "@/components/shared/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggenIn = {
    firstName: "Aggelos",
    lastName: "Konstantilieris",
    email: "contact@jsmastery.pro",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggenIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.0}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar user={loggenIn} transactions={[]} banks={[{}, {}]} />
    </section>
  );
};

export default Home;
