import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import "./auth.css";

const API_BASE = "http://localhost:8080";

export default function Register() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
    fullName: "",
    email: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post(`${API_BASE}/api/auth/register`, form);
      login(res.data.token);
      navigate("/");
    } catch (err) {
      console.error(err);
      setError("Đăng ký thất bại. Có thể username đã tồn tại.");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-brand">
          <div className="auth-logo">BB</div>
          <div>
            <div className="auth-title">BusBooking</div>
            <div className="auth-subtitle">Tạo tài khoản mới</div>
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
              placeholder="Chọn tên đăng nhập"
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
              placeholder="Tối thiểu 6 ký tự"
            />
          </div>
          <div className="auth-field">
            <label>Họ tên</label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="VD: Nguyễn Văn A"
            />
          </div>
          <div className="auth-field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </div>

          {error && <p className="auth-error">{error}</p>}

          <button type="submit" className="auth-btn auth-btn--primary">
            Đăng ký
          </button>
        </form>

        <p className="auth-footer-text">
          Đã có tài khoản?{" "}
          <Link to="/login" className="auth-link">
            Đăng nhập
          </Link>
        </p>
      </div>

      <div className="auth-hero">
        <h2>Tham gia cộng đồng khách hàng BusBooking</h2>
        <p>
          Lưu lịch sử chuyến đi, nhận ưu đãi cá nhân hóa và quản lý vé của bạn
          ở mọi nơi.
        </p>
        <ul>
          <li>✔ Lưu thông tin hành khách</li>
          <li>✔ Thông báo giá vé & khuyến mãi</li>
          <li>✔ Hỗ trợ đổi/huỷ vé dễ dàng</li>
        </ul>
      </div>
    </div>
  );
}
