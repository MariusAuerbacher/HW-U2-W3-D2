const options = {
  method: "GET",
  headers: {
      Authorization: "Bearer 563492ad6f9170000100000165f88bdf3d5b4ed28e7f13412672e0d2"
  }
}

const getImages = (query) => {
  fetch(`https://api.pexels.com/v1/search?query=${query}`, options)

.then((response) => response.json())
.then((data) => {console.log(data)})
}

getImages("dogs")


document.querySelectorAll()


// const svg = document.querySelectorAll("bd-placeholder-img");
// const newH2 = document.createElement("h2");

// function deleteImages () {

// if (svg === "bd-placeholder-img")
// {svg.replaceWith(newH2)}

// }

// deleteImages()



// for (let i = 0; i < svg.length; i++) {
//     // console.log(svg[i])
//     let whatever = svg[i];
//     whatever.delete;

// }

// const img = document.createElement("img");
// const cardNode = document.getElementsByClassName("card")[1];
// cardNode.appendChild("img")

// svg.replaceWith(img)

// svg.remove()