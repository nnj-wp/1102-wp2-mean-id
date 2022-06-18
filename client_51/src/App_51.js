import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// import Landing_xx from "./pages/Landing_xx";
import {
  Landing_51,
  Register_51,
  Error_51,
  ProtectedRoute_51,
  TestFetchUseCors_51,
  TestFetchUseProxy_51,
} from './pages';

import {
  AddJob_51,
  AllJobs_51,
  Profile_51,
  Stats_51,
  SharedLayout_51,
} from './pages/dashboard';

import styled from 'styled-components';

function App_51() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute_51>
              <SharedLayout_51 />
            </ProtectedRoute_51>
          }
        >
          <Route index element={<Stats_51 />} />
          <Route path="profile" element={<Profile_51 />} />
          <Route path="add-job" element={<AddJob_51 />} />
          <Route path="all-jobs" element={<AllJobs_51 />} />
        </Route>
        <Route path="/landing" element={<Landing_51 />} />
        <Route path="/register" element={<Register_51 />} />
        <Route path="/testcors" element={<TestFetchUseCors_51 />} />
        <Route path="/testproxy" element={<TestFetchUseProxy_51 />} />
        <Route path="*" element={<Error_51 />} />
      </Routes>
      {/* <Landing_xx /> */}
    </BrowserRouter>
  );
}

export default App_51;
