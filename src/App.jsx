import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";
import ChatBot from "./components/chatBot"
import VendorList from "./components/Filter";
import JobPortalOverview from "./components/Jobportal";
import CollegeEventOverview from "./components/college";

function App() {
  return (
    <Router>
      <Layout>
      

        <Routes>
          <Route path="/" element={<VendorList />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/jobportal" element={<JobPortalOverview />} />
          <Route path="/collegeevent" element={<CollegeEventOverview/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
