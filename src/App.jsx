import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Splash from './pages/Splash'
import Onboarding from './pages/Onboarding'
import Login from './pages/Login'
import Home from './pages/Home'
import Category from './pages/Category'
import Search from './pages/Search'
import AppOverview from './pages/AppOverview'
import AiAnalysis from './pages/AiAnalysis'
import Buyout from './pages/Buyout'
import FurnitureCategory from './pages/FurnitureCategory'
import BiumGuide from './pages/BiumGuide'
import LightingCategory from './pages/LightingCategory'
import VrScan from './pages/VrScan'
import CareService from './pages/CareService'
import PointHouse from './pages/PointHouse'
import Membership from './pages/Membership'
import Mypage from './pages/Mypage'
import LoginEmpty from './pages/LoginEmpty'
import SignupGuide from './pages/SignupGuide'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/splash" replace />} />
        <Route path="/index.html" element={<Navigate to="/splash" replace />} />
        <Route path="/splash" element={<Splash />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/search" element={<Search />} />
        <Route path="/app-overview" element={<AppOverview />} />
        <Route path="/ai-analysis" element={<AiAnalysis />} />
        <Route path="/buyout" element={<Buyout />} />
        <Route path="/furniture-category" element={<FurnitureCategory />} />
        <Route path="/bium-guide" element={<BiumGuide />} />
        <Route path="/lighting-category" element={<LightingCategory />} />
        <Route path="/vr-scan" element={<VrScan />} />
        <Route path="/care-service" element={<CareService />} />
        <Route path="/point-house" element={<PointHouse />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/login-empty" element={<LoginEmpty />} />
        <Route path="/signup-guide" element={<SignupGuide />} />
        <Route path="*" element={<Navigate to="/splash" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
