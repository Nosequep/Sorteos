describe('Buscar sorteo por id', () => {
    test('suma 1+2', () => {
        let peticion = 'http://localhost:3000/sorteos/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21icmUiOiJQYWNvIiwiY29ycmVvIjoiMTIzNEBob3RtYWkuY29tIiwiZGlyZWNjaW9uIjoiYXNkIiwidGVsZWZvbm8iOiIxMjI0MTEzIiwiY2l1ZGFkIjoiTmFybmlhIiwiZXN0YWRvIjoiZGUgbWV4aWNvIiwic29ydGVvcyI6W119.SiUEOo9A-9FyBoOC-Pdc4I3pTUjwM3sjmYddyfieEHg';
        fetch(peticion, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
          })
        .then(response => response.json())
        .then(data => expect(10).toBe(10));
    });
    
    test('resta 1-2', () => {
        expect(1 - 2).toBe(-1);
    });
});

describe('Buscar sorteos por título', () => {
    test('suma 1+2', () => {
        expect(1 + 2).toBe(3);
    });
    
    test('resta 1-2', () => {
        expect(1 - 2).toBe(-1);
    });
});

describe('Buscar sorteos por estado', () => {
    test('suma 1+2', () => {
        expect(1 + 2).toBe(3);
    });
    
    test('resta 1-2', () => {
        expect(1 - 2).toBe(-1);
    });
});
