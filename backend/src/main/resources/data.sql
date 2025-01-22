-- Inserir localizações
INSERT INTO locations (address, city, state, latitude, longitude)
VALUES
('Av. Beira Mar, 1000', 'Florianópolis', 'SC', -27.5707, -48.5238),
('Rua das Palmeiras, 500', 'São Paulo', 'SP', -23.5505, -46.6333),
('Av. Atlântica, 2000', 'Rio de Janeiro', 'RJ', -22.9068, -43.1729),
('Rua dos Ipês, 300', 'Curitiba', 'PR', -25.4284, -49.2733),
('Av. Paulista, 1500', 'São Paulo', 'SP', -23.5629, -46.6544);

-- Inserir propriedades
INSERT INTO properties (title, description, type, price, area, bedrooms, bathrooms, location_id, status, created_at, updated_at)
VALUES
('Apartamento Luxuoso com Vista para o Mar', 'Lindo apartamento com acabamento premium e vista panorâmica para o mar', 'APARTMENT', 1200000.00, 150, 3, 2, 1, 'AVAILABLE', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
('Casa Moderna em Condomínio Fechado', 'Casa contemporânea com arquitetura única e área de lazer completa', 'HOUSE', 2500000.00, 300, 4, 3, 2, 'AVAILABLE', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
('Cobertura Duplex com Terraço', 'Cobertura espetacular com terraço gourmet e vista 360°', 'PENTHOUSE', 3500000.00, 250, 4, 4, 3, 'AVAILABLE', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
('Terreno em Localização Privilegiada', 'Terreno plano em área nobre, pronto para construir', 'LAND', 800000.00, 500, NULL, NULL, 4, 'AVAILABLE', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
('Sala Comercial no Centro', 'Sala comercial moderna com infraestrutura completa', 'COMMERCIAL', 600000.00, 80, NULL, NULL, 5, 'AVAILABLE', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());

-- Inserir features
INSERT INTO property_features (property_id, feature)
VALUES
(1, 'POOL'), (1, 'GYM'), (1, 'SECURITY'), (1, 'BALCONY'), (1, 'AIR_CONDITIONING'),
(2, 'POOL'), (2, 'GARDEN'), (2, 'GARAGE'), (2, 'GOURMET_AREA'), (2, 'SECURITY'),
(3, 'POOL'), (3, 'GYM'), (3, 'ELEVATOR'), (3, 'BALCONY'), (3, 'AIR_CONDITIONING'),
(5, 'ELEVATOR'), (5, 'SECURITY'), (5, 'AIR_CONDITIONING');

-- Inserir imagens
INSERT INTO property_images (url, description, property_id)
VALUES
('https://images.unsplash.com/photo-1512917774080-9991f1c4c750', 'Vista frontal do apartamento', 1),
('https://images.unsplash.com/photo-1512917774080-9991f1c4c750', 'Vista da sala', 1),
('https://images.unsplash.com/photo-1512917774080-9991f1c4c750', 'Vista da varanda', 1),

('https://images.unsplash.com/photo-1512917774080-9991f1c4c750', 'Fachada da casa', 2),
('https://images.unsplash.com/photo-1512917774080-9991f1c4c750', 'Área da piscina', 2),
('https://images.unsplash.com/photo-1512917774080-9991f1c4c750', 'Jardim', 2),

('https://images.unsplash.com/photo-1512917774080-9991f1c4c750', 'Vista da cobertura', 3),
('https://images.unsplash.com/photo-1512917774080-9991f1c4c750', 'Terraço', 3),
('https://images.unsplash.com/photo-1512917774080-9991f1c4c750', 'Área gourmet', 3),

('https://images.unsplash.com/photo-1512917774080-9991f1c4c750', 'Vista do terreno', 4),
('https://images.unsplash.com/photo-1512917774080-9991f1c4c750', 'Vista aérea', 4),

('https://images.unsplash.com/photo-1512917774080-9991f1c4c750', 'Fachada do prédio', 5),
('https://images.unsplash.com/photo-1512917774080-9991f1c4c750', 'Interior da sala', 5);
