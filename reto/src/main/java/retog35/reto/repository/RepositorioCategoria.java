/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package retog35.reto.repository;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import retog35.reto.model.Categoria;
import retog35.reto.repository.crud.InterfaceCategoria;

/**
 *
 * @author Lily Pardo
 */
@Repository
public class RepositorioCategoria {
    @Autowired
    private InterfaceCategoria crud;

    public List<Categoria> getAll() {
        return (List<Categoria>) crud.findAll();
    }

    public Optional<Categoria> getCategoria(int id) {
        return crud.findById(id);
    }

    public Categoria save(Categoria Categoria) {
        return crud.save(Categoria);
    }

    public void delete(Categoria Categoria) {
        crud.delete(Categoria);
    }
}
