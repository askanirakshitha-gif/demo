import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import HomeBluePreview from './pages/HomeBluePreview';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import Register from './pages/Register';
import Confirmation from './pages/Confirmation';
import Schedule from './pages/Schedule';
import Accommodation from './pages/Accommodation';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import { AuthProvider } from './context/AuthContext';
import { RegistrationProvider } from './context/RegistrationContext';

function App() {
  return (
    <AuthProvider>
      <RegistrationProvider>
        <Router>
          <div className="flex flex-col min-h-screen bg-[#06060c] text-white">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/preview-blue" element={<HomeBluePreview />} />
                <Route path="/events" element={<Events />} />
                <Route path="/events/:id" element={<EventDetails />} />
                <Route path="/register" element={<Register />} />
                <Route path="/confirmation/:regId" element={<Confirmation />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/accommodation" element={<Accommodation />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/admin" element={<AdminDashboard />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </RegistrationProvider>
    </AuthProvider>
  );
}

export default App;
