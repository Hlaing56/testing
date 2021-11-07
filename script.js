var book = [];

// $(".btn").on("click", function (e) {
//     var link = e.target.nextElementSibling.getAttribute("href");
//     var title = e.target.nextElementSibling.text;
//     book.push({
//     link,
//     title,
//     });
//     localStorage.setItem("bookmarked", JSON.stringify(book));
// });

let btnClass = document.getElementsByClassName("btn");

btnClass.addEventListener("click", function (e){
    var link = e.target.nextElementSibling.getAttribute("href");
    var title = e.target.nextElementSibling.text;
    book.push({
    link,
    title,
    });
    localStorage.setItem("bookmarked", JSON.stringify(book));
})