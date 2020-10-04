module.exports = {
    cuisines: [ 'Seafood', 'Fast Food', 'Japonesa', 'Vegana', 'Italiana', 'Chinesa', 'Mexicana', 'Saudável', 'Brasileira', 'Vegetariana', 'Árabe' ],
    localSimilarity: [
        // Seafood
        [ 1, 0.4, 0.8, 0.4, 0.2, 0.7, 0.3, 0.8, 0.4, 0.6, 0.2 ],
        // Fast Food
        [ 0.4, 1, 0.3, 0.0, 0.3, 0.4, 0.7, 0.4, 0.0, 0.3, 0.2 ],
        // Japonesa
        [ 0.8, 0.3, 1, 0.8, 0.1, 0.8, 0.3, 0.8, 0.4, 0.6, 0.1 ],
        // Vegana
        [ 0.4, 0.0, 0.8, 1, 0.2, 0.6, 0.3, 0.9, 0.4, 0.8, 0.3 ],
        // Italiano
        [ 0.2, 0.3, 0.1, 0.2, 1, 0.3, 0.4, 0.3, 0.4, 0.4, 0.1 ],
        // Chinesa
        [ 0.7, 0.4, 0.8, 0.6, 0.3, 1, 0.3, 0.6, 0.3, 0.7, 0.2 ],
        // Mexicana
        [ 0.3, 0.7, 0.3, 0.3, 0.4, 0.3, 1, 0.4, 0.4, 0.4, 0.7 ],
        // Saudável
        [ 0.8, 0.4, 0.8, 0.9, 0.3, 0.6, 0.4, 1, 0.4, 0.9, 0.3 ],
        // Brasileira
        [ 0.4, 0.0, 0.4, 0.4, 0.4, 0.3, 0.4, 0.4, 1, 0.4, 0.3 ],
        // Vegetariana
        [ 0.6, 0.3, 0.6, 0.8, 0.4, 0.7, 0.4, 0.9, 0.4, 1, 0.2 ],
        // Árabe
        [ 0.2, 0.2, 0.1, 0.3, 0.1, 0.2, 0.7, 0.3, 0.3, 0.2, 1 ],
    ]
}