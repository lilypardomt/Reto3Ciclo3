/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package retog35.reto.repository;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import retog35.reto.model.Reservaciones;
import retog35.reto.repository.crud.InterfaceReservaciones;

/**
 *
 * @author USUARIO
 */
@Repository
public class RepositorioReservaciones {
    @Autowired
    private InterfaceReservaciones crud4;

    public List<Reservaciones> getAll() {
        return (List<Reservaciones>) crud4.findAll();
    }

    public Optional<Reservaciones> getReservation(int id) {
        return crud4.findById(id);
    }

    public Reservaciones save(Reservaciones reservation) {
        return crud4.save(reservation);
    }

    public void delete(Reservaciones reservation) {
        crud4.delete(reservation);
    }
}
