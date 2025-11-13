import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AppShell() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="app-shell">
      {/* Sidebar */}
      <aside className="sidenav">
        <div className="sidenav__brand">
          <div className="avatar">LB</div>
          <div>
            <div className="brand__name">LongDistanceBus</div>
            <div className="brand__role">
              {isAuthenticated ? "Logged in" : "Guest"}
            </div>
          </div>
        </div>

        <nav className="sidenav__nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              "sidenav__link" + (isActive ? " active" : "")
            }
          >
            <span className="sidenav__icon">🏠</span>
            <span>Trang chủ</span>
          </NavLink>

          <NavLink
            to="/trips"
            className={({ isActive }) =>
              "sidenav__link" + (isActive ? " active" : "")
            }
          >
            <span className="sidenav__icon">🚌</span>
            <span>Chuyến xe</span>
          </NavLink>
        </nav>

        <div className="sidenav__spacer" />

        {!isAuthenticated ? (
          <div className="sidenav__auth">
            <button onClick={() => navigate("/login")}>Đăng nhập</button>
            <button onClick={() => navigate("/register")}>Đăng ký</button>
          </div>
        ) : (
          <button className="sidenav__logout" onClick={handleLogout}>
            Đăng xuất
          </button>
        )}
      </aside>

      {/* Content */}
      <div className="app-content">
        <header className="app-header">
          <h1 className="app-title">Hệ thống đặt vé xe khách</h1>
        </header>
        <main className="app-body">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
