import Header from "./Header";
import Footer from "./Footer";
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShipmentDetails from "./Component/ShipmentDetails";
import ShipmentsTable from "./Component/ShipmentTable/ShipmentsTable";
import PageNotfound from "./Component/PageNotfound";


function App() {
  return (
    <div className="App">

      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShipmentsTable />} />
          <Route path="/ShipmentDetails" element={<ShipmentDetails />} />
          <Route path="/ShipmentsTable" element={<ShipmentsTable />} />
          <Route path="*" element={<PageNotfound />} />
        </Routes>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
