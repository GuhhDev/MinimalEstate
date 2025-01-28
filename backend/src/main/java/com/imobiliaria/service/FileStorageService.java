package com.imobiliaria.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

@Service
public class FileStorageService {

    private final Path fileStorageLocation;

    public FileStorageService(@Value("${file.upload-dir:uploads}") String uploadDir) {
        this.fileStorageLocation = Paths.get(uploadDir)
                .toAbsolutePath().normalize();

        try {
            Files.createDirectories(this.fileStorageLocation);
        } catch (Exception ex) {
            throw new RuntimeException("Não foi possível criar o diretório de upload.", ex);
        }
    }

    public String storeFile(MultipartFile file) {
        try {
            if (file.isEmpty()) {
                throw new RuntimeException("Arquivo vazio");
            }

            // Normaliza o nome do arquivo
            String fileName = StringUtils.cleanPath(file.getOriginalFilename());
            
            // Gera um nome único para o arquivo
            String uniqueFileName = UUID.randomUUID().toString() + "_" + fileName;

            // Copia o arquivo para o diretório de destino
            Path targetLocation = this.fileStorageLocation.resolve(uniqueFileName);
            Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);

            return uniqueFileName;
        } catch (IOException ex) {
            throw new RuntimeException("Não foi possível armazenar o arquivo.", ex);
        }
    }

    public Path getFilePath(String fileName) {
        return fileStorageLocation.resolve(fileName).normalize();
    }
}
