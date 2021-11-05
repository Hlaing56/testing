var book= [];

$(".mark").on("click", function(event) {
    var element = event.target;
    console.log(element);
    var link = element.getAttribute('href');
    var title = element.text;
    book.push({
        link,
        title
    })
    console.log(book);
    localStorage.setItem("bookmarked", JSON.stringify(book));
});

