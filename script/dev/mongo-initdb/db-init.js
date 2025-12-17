db.createUser({user: 'test', pwd: 'test', roles: [{role: 'readWrite', db: 'testDb'}]});

// Seed restaurant cases
db.getSiblingDB('testDb').cases.insertMany([
  {
    name: 'Frantzén',
    cuisineType: 'Seafood',
    price: { value: 150 },
    glutenFree: false,
    sugarFree: false,
    lactoseFree: false,
    soyFree: false,
    thematic: true,
    rating: { value: 4 }
  },
  {
    name: 'Narisawa',
    cuisineType: 'Fast Food',
    price: { value: 30 },
    glutenFree: false,
    sugarFree: false,
    lactoseFree: false,
    soyFree: false,
    thematic: false,
    rating: { value: 3 }
  },
  {
    name: 'Cosme',
    cuisineType: 'Fast Food',
    price: { value: 75 },
    glutenFree: false,
    sugarFree: false,
    lactoseFree: true,
    soyFree: false,
    thematic: false,
    rating: { value: 5 }
  },
  {
    name: 'Quintonil',
    cuisineType: 'Japonesa',
    price: { value: 90 },
    glutenFree: false,
    sugarFree: false,
    lactoseFree: false,
    soyFree: false,
    thematic: false,
    rating: { value: 3 }
  },
  {
    name: 'Boragó',
    cuisineType: 'Vegana',
    price: { value: 85 },
    glutenFree: false,
    sugarFree: false,
    lactoseFree: false,
    soyFree: true,
    thematic: false,
    rating: { value: 4 }
  },
  {
    name: 'Piazza Duomo',
    cuisineType: 'Fast Food',
    price: { value: 70 },
    glutenFree: false,
    sugarFree: false,
    lactoseFree: false,
    soyFree: false,
    thematic: false,
    rating: { value: 5 }
  },
  {
    name: 'Elkano',
    cuisineType: 'Fast Food',
    price: { value: 30 },
    glutenFree: false,
    sugarFree: true,
    lactoseFree: false,
    soyFree: false,
    thematic: false,
    rating: { value: 2 }
  },
  {
    name: 'Maido',
    cuisineType: 'Italiana',
    price: { value: 100 },
    glutenFree: false,
    sugarFree: false,
    lactoseFree: false,
    soyFree: false,
    thematic: true,
    rating: { value: 4 }
  },
  {
    name: 'Disfrutar',
    cuisineType: 'Japonesa',
    price: { value: 90 },
    glutenFree: true,
    sugarFree: false,
    lactoseFree: true,
    soyFree: false,
    thematic: false,
    rating: { value: 3 }
  },
  {
    name: 'Mugaritz',
    cuisineType: 'Fast Food',
    price: { value: 65 },
    glutenFree: false,
    sugarFree: false,
    lactoseFree: false,
    soyFree: true,
    thematic: false,
    rating: { value: 4 }
  },
  {
    name: 'Central',
    cuisineType: 'Chinesa',
    price: { value: 40 },
    glutenFree: false,
    sugarFree: false,
    lactoseFree: false,
    soyFree: false,
    thematic: false,
    rating: { value: 3 }
  },
  {
    name: 'Nerua',
    cuisineType: 'Seafood',
    price: { value: 170 },
    glutenFree: false,
    sugarFree: false,
    lactoseFree: false,
    soyFree: false,
    thematic: false,
    rating: { value: 4 }
  },
  {
    name: 'Geranium',
    cuisineType: 'Mexicana',
    price: { value: 60 },
    glutenFree: true,
    sugarFree: false,
    lactoseFree: false,
    soyFree: false,
    thematic: false,
    rating: { value: 5 }
  },
  {
    name: 'Gaggan',
    cuisineType: 'Vegana',
    price: { value: 150 },
    glutenFree: false,
    sugarFree: true,
    lactoseFree: false,
    soyFree: false,
    thematic: true,
    rating: { value: 5 }
  },
  {
    name: 'Assador',
    cuisineType: 'Saudável',
    price: { value: 80 },
    glutenFree: false,
    sugarFree: true,
    lactoseFree: false,
    soyFree: false,
    thematic: false,
    rating: { value: 2 }
  },
  {
    name: 'Noma',
    cuisineType: 'Italiana',
    price: { value: 100 },
    glutenFree: false,
    sugarFree: false,
    lactoseFree: false,
    soyFree: true,
    thematic: true,
    rating: { value: 2 }
  },
  {
    name: 'Mirazur',
    cuisineType: 'Fast Food',
    price: { value: 65 },
    glutenFree: true,
    sugarFree: false,
    lactoseFree: false,
    soyFree: false,
    thematic: false,
    rating: { value: 3 }
  },
  {
    name: 'Don Julio',
    cuisineType: 'Brasileira',
    price: { value: 150 },
    glutenFree: false,
    sugarFree: true,
    lactoseFree: false,
    soyFree: false,
    thematic: true,
    rating: { value: 4 }
  },
  {
    name: 'Schloss Schauenstein',
    cuisineType: 'Saudável',
    price: { value: 80 },
    glutenFree: false,
    sugarFree: true,
    lactoseFree: false,
    soyFree: false,
    thematic: false,
    rating: { value: 4 }
  },
  {
    name: 'Atelier Crenn',
    cuisineType: 'Vegetariana',
    price: { value: 80 },
    glutenFree: false,
    sugarFree: false,
    lactoseFree: false,
    soyFree: false,
    thematic: false,
    rating: { value: 5 }
  },
  {
    name: 'Benu',
    cuisineType: 'Árabe',
    price: { value: 80 },
    glutenFree: true,
    sugarFree: false,
    lactoseFree: false,
    soyFree: false,
    thematic: false,
    rating: { value: 4 }
  },
  {
    name: 'Le Bernardin',
    cuisineType: 'Brasileira',
    price: { value: 50 },
    glutenFree: false,
    sugarFree: false,
    lactoseFree: false,
    soyFree: false,
    thematic: false,
    rating: { value: 3 }
  },
  {
    name: 'The Chairman',
    cuisineType: 'Fast Food',
    price: { value: 50 },
    glutenFree: false,
    sugarFree: false,
    lactoseFree: false,
    soyFree: false,
    thematic: false,
    rating: { value: 3 }
  },
  {
    name: 'A casa do porco',
    cuisineType: 'Brasileira',
    price: { value: 150 },
    glutenFree: true,
    sugarFree: false,
    lactoseFree: true,
    soyFree: false,
    thematic: false,
    rating: { value: 4 }
  }
]);
