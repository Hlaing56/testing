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

// let btnClass = document.querySelector(".btn");
// let aTagClass = document.querySelector(".aTag");

// let bttn = btnClass.map(function () {
//     return this.id;
// }).get();



let bttn = $(".btn").map(function () {
    return this.id; //create array with all timeValue id
}).get();
console.log(bttn);