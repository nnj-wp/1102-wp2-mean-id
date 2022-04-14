import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// import Landing_51 from './pages/Landing_51';
import { Landing_51, Dashboard_51, Register_51, Error_51 } from './pages';
import styled from 'styled-components';

function App_51() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard_51 />} />
        <Route path="/landing" element={<Landing_51 />} />
        <Route path="/register" element={<Register_51 />} />
        <Route path="*" element={<Error_51 />} />
      </Routes>
      {/* <Landing_51 /> */}
    </BrowserRouter>
  );
}

export default App_51;
