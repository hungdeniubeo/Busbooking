package com.longdistancebus.bus_booking.repository;

import com.longdistancebus.bus_booking.entity.Trip;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TripRepository extends JpaRepository<Trip, Long> {
}
