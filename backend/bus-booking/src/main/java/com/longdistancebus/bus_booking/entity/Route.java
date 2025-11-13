package com.longdistancebus.bus_booking.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "routes")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Route {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "from_station", nullable = false, length = 100)
    private String fromStation;

    @Column(name = "to_station", nullable = false, length = 100)
    private String toStation;

    @Column(name = "distance_km")
    private Integer distanceKm;

    @Column(name = "estimated_time_minutes")
    private Integer estimatedTimeMinutes;
}
