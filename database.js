const books=[
{
    ISBN: "12345Book",
    title:"get today new one",
    pubDate:"2020-11-29",
    language:"en",
    numPage:250,
    author:[1,2],
    publications:[1],
    category:["tech", "programming","education"]
}];
const author=[
    {
    id:1,
    name:"arya",
    books:["12345Book"]
    },
    {
        id:2,
        name:"suba",
        books:["123345Book"]
        }
    ];
const publication=[
    {
    id:1,
    name:"writex",
    books:["12345Book"]
    
    }
    ];    

    module.exports={books, author,publication};
