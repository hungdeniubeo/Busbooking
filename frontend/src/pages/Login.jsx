import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import "./auth.css";

const API_BASE = "http://localhost:8080";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post(`${API_BASE}/api/auth/login`, form);
      login(res.data.token);
      navigate(from, { replace: true });
    } catch (err) {
      console.error(err);
      setError("Đăng nhập thất bại. Vui lòng kiểm tra lại.");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-brand">
          <div className="auth-logo">BB</div>
          <div>
            <div className="auth-title">BusBooking</div>
            <div className="auth-subtitle">Đăng nhập tài khoản của bạn</div>
          </div>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-field">
            <label>Tên đăng nhập</label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              required
              placeholder="Nhập tên đăng nhập"
            />
          </div>
          <div className="auth-field">
            <label>Mật khẩu</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              placeholder="Nhập mật khẩu"
            />
          </div>

          {error && <p className="auth-error">{error}</p>}

          <button type="submit" className="auth-btn auth-btn--primary">
            Đăng nhập
          </button>
        </form>

        <p className="auth-footer-text">
          Chưa có tài khoản?{" "}
          <Link to="/register" className="auth-link">
            Đăng ký ngay
          </Link>
        </p>
      </div>

      <div className="auth-hero">
        <h2>Đặt vé xe đường dài an toàn & dễ dàng</h2>
        <p>
          Tìm chuyến xe, chọn ghế yêu thích, nhận thông báo hành trình – tất cả
          trong một nền tảng.
        </p>
        <ul>
          <li>✔ Thanh toán linh hoạt</li>
          <li>✔ Thông tin nhà xe minh bạch</li>
          <li>✔ Hỗ trợ 24/7</li>
        </ul>
      </div>
    </div>
  );
}
