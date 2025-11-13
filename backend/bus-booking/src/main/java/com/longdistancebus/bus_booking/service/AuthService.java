package com.longdistancebus.bus_booking.service;
import com.longdistancebus.bus_booking.dto.AuthResponse;
import com.longdistancebus.bus_booking.dto.LoginRequest;
import com.longdistancebus.bus_booking.dto.RegisterRequest;

public interface AuthService {
    AuthResponse register(RegisterRequest request);
    AuthResponse login(LoginRequest request);
}
