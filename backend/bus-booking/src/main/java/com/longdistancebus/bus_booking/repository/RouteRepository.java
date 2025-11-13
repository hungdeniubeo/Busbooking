package com.longdistancebus.bus_booking.repository;

import com.longdistancebus.bus_booking.entity.Route;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RouteRepository extends JpaRepository<Route, Long> {
}
