package com.imobiliaria.controller;

import com.imobiliaria.model.Imovel;
import com.imobiliaria.repository.ImovelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/imoveis")
public class ImovelController {

    @Autowired
    private ImovelRepository imovelRepository;

    @GetMapping
    public List<Imovel> getAllImoveis() {
        return imovelRepository.findAll();
    }

    @PostMapping
    public Imovel createImovel(@RequestBody Imovel imovel) {
        return imovelRepository.save(imovel);
    }

    @GetMapping("/{id}")
    public Imovel getImovelById(@PathVariable Long id) {
        return imovelRepository.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public Imovel updateImovel(@PathVariable Long id, @RequestBody Imovel imovelDetails) {
        Imovel imovel = imovelRepository.findById(id).orElse(null);
        if (imovel != null) {
            imovel.setEndereco(imovelDetails.getEndereco());
            imovel.setQuartos(imovelDetails.getQuartos());
            imovel.setPreco(imovelDetails.getPreco());
            return imovelRepository.save(imovel);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteImovel(@PathVariable Long id) {
        imovelRepository.deleteById(id);
    }
}