package com.longdistancebus.bus_booking.repository;

import com.longdistancebus.bus_booking.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking, Long> {
}
