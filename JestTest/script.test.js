    const googleSearch=require('./script.js');
    const mockDB=[
        'dog.com',
        'cat.com',
        'goldiedog.com',
        'mydog.com',
        'yourdog.com',
        'mycat.com',
    ]

    describe('googleSearch',()=>{
        it('this is demo test',()=>{
            expect('test').toBe('test')
        });
    
        it('is searching my google if value is not found in DB',()=>{
            expect(googleSearch('hello',mockDB)).toEqual([]);
        })
    
        it('is searching for a valid scenario',()=>{
            expect(googleSearch('dog',mockDB)).toEqual(['dog.com','goldiedog.com','mydog.com']);
        })
    
        it('does not return more than 3 match',()=>{
            expect(googleSearch('.com',mockDB).length).toEqual(3);
        })
    })
    