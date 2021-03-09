let object = {
    id: 1,
    title: "this is a note",
    content: "This is the note"
  };

object.subTitle = "my note";
console.log(object);
let myJSON = JSON.stringify(object);
console.log(myJSON);

const myObject = JSON.parse(myJSON);
console.log(myObject);