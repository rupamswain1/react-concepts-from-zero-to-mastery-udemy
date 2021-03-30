const fetch=require('node-fetch');
const swapi=require('./script2');

it('calls swapi to get count of people',(done)=>{
    expect.assertions(1);
    swapi.getPeoplePromise(fetch).then(data=>{
        expect(data.count).toEqual(82)
        done()
    })
});

it('calls swapi to get count of people without promise',()=>{
    expect.assertions(2)
    return swapi.getPeople(fetch).then(data=>{
        expect(data.count).toEqual(82);
        expect(data.results.length).toBeGreaterThan(5);
        
    })
})

it('getPeople returns count and results',()=>{
    const mockFetch=jest.fn().mockReturnValue(Promise.resolve({
        json: ()=>Promise.resolve({
            count:82,
            results:[0,1,2,3,4,5],
        })
    }))

    expect.assertions(4)
    return swapi.getPeoplePromise(mockFetch).then(data=>{
        expect(mockFetch.mock.calls.length).toBe(1)
        expect(mockFetch).toBeCalledWith('https://swapi.dev/api/people/')
        expect(data.count).toEqual(82)
        expect(data.results.length).toBeGreaterThan(2);

    })
})