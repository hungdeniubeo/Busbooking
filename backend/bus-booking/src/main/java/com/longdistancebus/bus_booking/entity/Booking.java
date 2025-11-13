package com.longdistancebus.bus_booking.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "bookings")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // ai đặt
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    // đặt chuyến nào
    @ManyToOne
    @JoinColumn(name = "trip_id", nullable = false)
    private Trip trip;

    @Column(name = "seat_number", nullable = false)
    private Integer seatNumber;

    @Column(nullable = false, length = 20)
    private String status; // BOOKED / CANCELED

    @Column(name = "booked_at")
    private LocalDateTime bookedAt;
}
