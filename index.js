const express = require("express");

//database
const database=require("./database");

const booky = express();

booky.get("/",(req,res)=> {
    return res.json({books:database.books});
});

//get a specific book

booky.get("/is/:isbn", (req,res)=>{
    const getSpecificBook=database.books.filter(
        (book)=>book.ISBN===req.params.isbn
    );
    if(getSpecificBook.length===0){
        return res.json({
            error:`no book xyxz isbn ${req.params.isbn}`
        });
    }
    return res.json({book:getSpecificBook});
});
booky.get
("/c/:category", (req,res)=>
    {
        const getSpecificBook=database.books.filter((book)=>
        book.category.includes(req.params.category));
    
        if(getSpecificBook.length===0){
            return res.json({
                error:`no book xyxz isbn ${req.params.category}`
            });
    }
    });

booky.get("/author",(req,res)=>{
    return res.json({author:database.author});

});
//publications
booky.get("/publications",(req,res)=>{
    return res.json({publications:database.publication})
});

booky.listen(555,()=> console.log("server is up and running!"));
