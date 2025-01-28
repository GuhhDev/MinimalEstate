-- Insert locations
INSERT INTO locations (address, city, state, latitude, longitude)
VALUES 
    ('Av. Beira Mar, 1000', 'Florianópolis', 'SC', -27.5707, -48.5238),
    ('Rua das Palmeiras, 500', 'Florianópolis', 'SC', -27.4467, -48.5028),
    ('Rua Felipe Schmidt, 100', 'Florianópolis', 'SC', -27.5969, -48.5495),
    ('Rodovia João Paulo, 2000', 'Florianópolis', 'SC', -27.5754, -48.5120);

-- Insert properties
INSERT INTO properties (title, description, type, price, area, bedrooms, bathrooms, parking_spaces, location_id, status, created_at, updated_at) 
VALUES 
    ('Luxury Apartment with Sea View', 
     'Beautiful apartment with premium finishes and panoramic sea view', 
     'APARTMENT', 
     1200000.00, 
     150, 
     3, 
     2, 
     2, 
     1,
     'AVAILABLE',
     CURRENT_TIMESTAMP,
     CURRENT_TIMESTAMP),
    
    ('Modern House in Closed Condominium', 
     'Contemporary house with unique architecture and complete leisure area', 
     'HOUSE', 
     2500000.00, 
     300, 
     4, 
     3, 
     4, 
     2,
     'AVAILABLE',
     CURRENT_TIMESTAMP,
     CURRENT_TIMESTAMP),
    
    ('Commercial Room in the Center', 
     'Modern commercial room with complete infrastructure', 
     'COMMERCIAL', 
     600000.00, 
     80, 
     null, 
     2, 
     2, 
     3,
     'AVAILABLE',
     CURRENT_TIMESTAMP,
     CURRENT_TIMESTAMP),
    
    ('Land in Privileged Location', 
     'Flat land in noble area, ready to build', 
     'LAND', 
     800000.00, 
     500, 
     null, 
     null, 
     null, 
     4,
     'AVAILABLE',
     CURRENT_TIMESTAMP,
     CURRENT_TIMESTAMP);

-- Insert property features
INSERT INTO property_features (property_id, feature) 
VALUES 
    (1, 'POOL'),
    (1, 'ELEVATOR'),
    (1, 'BALCONY'),
    (1, 'AIR_CONDITIONING'),
    (2, 'POOL'),
    (2, 'GARDEN'),
    (2, 'GARAGE'),
    (2, 'GOURMET_AREA'),
    (3, 'ELEVATOR'),
    (3, 'AIR_CONDITIONING'),
    (3, 'SECURITY');

-- Insert property images
INSERT INTO property_images (property_id, url)
VALUES 
    (1, 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750'),
    (1, 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750'),
    (1, 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750'),
    (2, 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750'),
    (2, 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750'),
    (2, 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750'),
    (3, 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750'),
    (3, 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750'),
    (4, 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750'),
    (4, 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750');
