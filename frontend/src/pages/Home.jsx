import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./home.css";

export default function Home() {
  const navigate = useNavigate();
  const auth = useAuth();
  const isAuthenticated = auth?.isAuthenticated;
  const profileName = "Tài khoản của bạn";

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  const onSearch = (e) => {
    e.preventDefault();
    if (!from || !to || !date) {
      alert("Nhập đầy đủ điểm đi, điểm đến và ngày.");
      return;
    }
    navigate(
      `/trips?from=${encodeURIComponent(from)}&to=${encodeURIComponent(
        to
      )}&date=${date}`
    );
  };

  return (
    <div className="home-main">
      {/* TOP BAR TRONG MAIN (không phải sidebar) */}
      <header className="topbar">
        <div className="topbar__search">
          <span className="topbar__icon">🔍</span>
          <input
            placeholder="Tìm tuyến, chuyến xe, mã vé..."
            aria-label="Search"
          />
        </div>
        <div className="topbar__actions">
          <button className="icon-button" aria-label="Notifications">
            🔔
          </button>
          <button className="icon-button" aria-label="Toggle theme">
            🌙
          </button>
          {isAuthenticated ? (
            <div className="topbar__avatar">
              {profileName.charAt(0).toUpperCase()}
            </div>
          ) : (
            <button
              className="btn btn--tiny"
              onClick={() => navigate("/login")}
            >
              Đăng nhập
            </button>
          )}
        </div>
      </header>

      <main className="home-content">
        {/* HERO + FORM TÌM CHUYẾN */}
        <section className="hero-section">
          <div className="hero-text">
            <h1>Tìm chuyến xe nhanh – đặt vé chỉ trong 1 phút</h1>
            <p>
              Chọn tuyến phù hợp, giữ chỗ tức thì, theo dõi lịch trình và ưu đãi
              ngay trên một màn hình.
            </p>
            <ul className="hero-highlights">
              <li>✔ So sánh nhiều nhà xe</li>
              <li>✔ Chọn ghế trực quan</li>
              <li>✔ Nhận thông báo hành trình</li>
            </ul>
          </div>

          <form className="hero-search-card" onSubmit={onSearch}>
            <div className="form-row">
              <label>
                Điểm đi
                <input
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  placeholder="VD: Bến xe Miền Đông"
                />
              </label>
              <label>
                Điểm đến
                <input
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  placeholder="VD: Bến xe Cần Thơ"
                />
              </label>
              <label>
                Ngày đi
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </label>
            </div>
            <button type="submit" className="btn btn--search">
              Tìm chuyến
            </button>
          </form>
        </section>

        {/* CÁC SECTION DƯỚI BANNER */}
        <section className="section-grid">
          {/* Tuyến phổ biến */}
          <div className="section-card">
            <div className="section-header">
              <h2>Tuyến phổ biến</h2>
              <Link to="/routes" className="section-link">
                Xem tất cả
              </Link>
            </div>
            <div className="chips">
              <button className="chip">TP.HCM → Cần Thơ</button>
              <button className="chip">TP.HCM → Đà Lạt</button>
              <button className="chip">Hà Nội → Hải Phòng</button>
              <button className="chip">Đà Nẵng → Huế</button>
            </div>
            <ul className="section-list">
              <li>
                <span className="list-icon">🚌</span>
                <div>
                  <div className="list-title">TP.HCM → Cần Thơ</div>
                  <div className="list-subtitle">
                    Khoảng 3 giờ • 15 chuyến/ngày
                  </div>
                </div>
              </li>
              <li>
                <span className="list-icon">🚌</span>
                <div>
                  <div className="list-title">TP.HCM → Đà Lạt</div>
                  <div className="list-subtitle">
                    Khoảng 6–8 giờ • Giường nằm cao cấp
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Ưu đãi nổi bật */}
          <div className="section-card">
            <div className="section-header">
              <h2>Ưu đãi nổi bật</h2>
              <button className="section-link fake-link">Xem thêm</button>
            </div>
            <div className="promo-carousel">
              <div className="promo-card">
                <div className="promo-badge">-10%</div>
                <h3>Giảm giá giữa tuần</h3>
                <p>Áp dụng cho các chuyến từ Thứ 2–Thứ 5. Hạn dùng 31/12.</p>
              </div>
              <div className="promo-card">
                <div className="promo-badge">New</div>
                <h3>Thành viên mới</h3>
                <p>
                  Tặng 1 voucher 50k cho tài khoản đăng ký lần đầu trong tháng.
                </p>
              </div>
            </div>
          </div>

          {/* Tin tức & Thông báo */}
          <div className="section-card">
            <div className="section-header">
              <h2>Tin tức & Thông báo</h2>
              <button className="section-link fake-link">Xem thêm</button>
            </div>
            <ul className="news-list">
              <li>
                <div className="news-thumb">11/2025</div>
                <div>
                  <div className="news-title">
                    Ra mắt tính năng chọn ghế trực quan
                  </div>
                  <div className="news-subtitle">
                    Cập nhật mới giúp bạn nhìn rõ ghế trống – ghế đã đặt.
                  </div>
                </div>
              </li>
              <li>
                <div className="news-thumb">10/2025</div>
                <div>
                  <div className="news-title">
                    Nâng cấp hệ thống thông báo trễ chuyến
                  </div>
                  <div className="news-subtitle">
                    Nhận thông báo ngay khi chuyến xe thay đổi giờ.
                  </div>
                </div>
              </li>
              <li>
                <div className="news-thumb">09/2025</div>
                <div>
                  <div className="news-title">
                    Mở thêm tuyến TP.HCM – Phú Quốc
                  </div>
                  <div className="news-subtitle">
                    Kết hợp xe + tàu cao tốc, đặt vé một lần là xong.
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <footer className="home-footer">
          © {new Date().getFullYear()} BusBooking • Đặt vé xe đường dài an toàn
          & tiện lợi.
        </footer>
      </main>
    </div>
  );
}
