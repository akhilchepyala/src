import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [openModal, setModal] = useState(false);
  const handleModalClick = () => {
    setModal(false);
  };
  const handleOpenModalClick = () => {
    setModal(true);
  };

  return (
    <Fragment>
      {openModal && <Cart clickFunctionForModal={handleModalClick} />}
      <Header openClickForModal={handleOpenModalClick} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
