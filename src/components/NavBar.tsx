import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, LayoutDashboard, ListChecks, Bot, Users, LogOut, User, Shield } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import "./NavBar.css";

const memberLinks = [
  { to: "/member/dashboard", label: "Dashboard", icon: <LayoutDashboard size={22} /> },
  { to: "/member/tasks", label: "Taken", icon: <ListChecks size={22} /> },
  { to: "/member/profile", label: "Profiel", icon: <User size={22} /> },
  { to: "/member/progress", label: "Voortgang", icon: <ListChecks size={22} /> },
  { to: "/member/ai-running", label: "AI Bot", icon: <Bot size={22} /> },
  { to: "/member/referrals", label: "Referrals", icon: <Users size={22} /> },
];

const adminLinks = [
  { to: "/admin/dashboard", label: "Dashboard", icon: <Shield size={22} /> },
  { to: "/admin/tasks", label: "Takenbeheer", icon: <ListChecks size={22} /> },
  { to: "/admin/referrals", label: "Referralbeheer", icon: <Users size={22} /> },
  { to: "/admin/registrations", label: "Registratiebeheer", icon: <ListChecks size={22} /> },
  { to: "/admin/users", label: "Gebruikers", icon: <Users size={22} /> },
  { to: "/admin/notifications", label: "Notificaties", icon: <Bot size={22} /> },
  // Voeg hier meer admin-links toe als nodig
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { signOut, userRole } = useAuth();
  const navigate = useNavigate();

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("slide-menu-overlay")) {
      setOpen(false);
    }
  };

  const handleLogout = async () => {
    setOpen(false);
    await signOut();
    navigate("/inlog");
  };

  // Toon altijd alle relevante links voor admin (en alle member links voor members)
  const links = userRole === 'admin' ? adminLinks : memberLinks;

  return (
    <nav className="navbar">
      <button className="hamburger-btn" aria-label="Menu" onClick={() => setOpen(true)}>
        <Menu size={28} />
      </button>
      {/* Hamburger overlay & menu */}
      <div className={`slide-menu-overlay${open ? " open" : ""}`} onClick={handleOverlayClick}>
        <aside id="slide-menu" className={open ? "open" : ""}>
          <button className="close-btn" aria-label="Sluiten" onClick={() => setOpen(false)}>
            <X size={28} />
          </button>
          <ul>
            {links.map((item) => (
              <li key={item.to} className={location.pathname.startsWith(item.to.replace(/\/$/, "")) ? "active" : ""}>
                <Link to={item.to} onClick={() => setOpen(false)}>
                  {item.icon}
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="logout sep">
              <button type="button" className="logout-btn" onClick={handleLogout}>
                <LogOut size={22} /> Uitloggen
              </button>
            </li>
          </ul>
        </aside>
      </div>
    </nav>
  );
};

export default NavBar;