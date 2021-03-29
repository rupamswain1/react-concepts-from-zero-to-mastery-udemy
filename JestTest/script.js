const googleWebsitesDb=[
    'dog.com',
    'cat.com',
    'goldiedog.com',
    'mydog.com',
    'yourdog.com',
    'mycat.com',
    'yourcat.com'
]

const googleSearch=(input,db)=>{
    const match=db.filter((website)=>{
        return website.includes(input);
    });
    return match.length>3?match.slice(0,3):match;
}

console.log(googleSearch('dog',googleWebsitesDb));

module.exports=googleSearch;