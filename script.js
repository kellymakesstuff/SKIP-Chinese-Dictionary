// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

let leftRightImg = document.getElementById("leftrightimg")
let leftRightDiv = document.getElementById("left-right-div")
let topBottomImg = document.getElementById("topbottomimg")
let topBottomDiv = document.getElementById("top-bottom-div")
let enclosedImg = document.getElementById("enclosedimg")
let enclosedDiv = document.getElementById("enclosed-div")

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

leftRightImg.onclick = function () {
  modal.style.display = "none";
  leftRightMenu();
  leftRightDiv.style.display = "block";
  topBottomDiv.style.display = "none";
  enclosedDiv.style.display = "none";

}

topBottomImg.onclick = function () {
  modal.style.display = "none";
  topBottomMenu();
  topBottomDiv.style.display = "block";
  leftRightDiv.style.display = "none";
  enclosedDiv.style.display = "none";

}

enclosedImg.onclick = function () {
  modal.style.display = "none";
  enclosedMenu();
  enclosedDiv.style.display = "block";
  leftRightDiv.style.display = "none";
  topBottomDiv.style.display = "none";

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



////////


function removeChars() {
  let oldChar = document.querySelector("#character-population")
  console.log('last child', oldChar.lastChild)
  while (oldChar.lastChild) {
    oldChar.removeChild(oldChar.lastChild)
  }
}

let leftRight = [1, 3, 4, 5, 8, 14, 15, 17, 18, 20, 23, 24, 25, 27, 28, 29, 31, 32, 35, 37, 38, 40, 45, 46, 47, 48, 49]
let topBottom = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 23, 24, 27, 28, 29, 31, 32, 33, 34, 35, 36, 38, 39, 40, 41, 44, 45, 46, 47, 48, 49]
let enclosed = [1, 2, 15, 16, 19, 21, 22, 26, 30, 42, 43]

let leftRightList = [];
let topBottomList = [];
let enclosedList = [];

let leftRightMenu = async () => {
  // let url = "https://ccdb.hemiola.com/characters?&fields=string,ktotalstrokes&filters=simplified&big5a"

  let url = `https://ccdb.hemiola.com/characters/radicals/singles/?&fields=string,ktotalstrokes&filters=simplified`

  let select = document.querySelector(".left-right-radical-select")

  try {
    let response = await axios.get(url)
    // console.log(response.data[101].string)

    for (i = 0; i < leftRight.length; i++) {
      leftRightList.push(response.data[leftRight[i]].string)
      // console.log(leftRightList)
      let option = document.createElement('option')
      option.value = `${leftRight[i + 1]}`
      option.text = `${response.data[leftRight[i]].string}`
      select.append(option)


    }

  } catch (error) {
    console.log(`${error}`)
  } finally {

  }
  let selectForm = document.querySelector(".left-right-radical-select")
  selectForm.addEventListener("change", optionValue)


  function optionValue(e) {
    e.preventDefault()
    let getValue = selectForm.value
    console.log(getValue)
    //*****(call new async radical function and pass through getValue)
    radicalPass(getValue)
  }


}


let topBottomMenu = async () => {
  // let url = "https://ccdb.hemiola.com/characters?&fields=string,ktotalstrokes&filters=simplified&big5a"

  let url = `https://ccdb.hemiola.com/characters/radicals/singles/?&fields=string,ktotalstrokes&filters=simplified`

  let select = document.querySelector(".top-bottom-radical-select")

  try {
    let response = await axios.get(url)

    // console.log(response.data[101].string)
    for (i = 0; i < topBottom.length; i++) {
      topBottomList.push(response.data[topBottom[i]].string)
      // console.log(topBottomList)
      let option = document.createElement('option')
      option.value = `${topBottom[i + 1]}`
      option.text = `${response.data[topBottom[i]].string}`
      select.append(option)

    }

    let selectForm = document.querySelector(".top-bottom-radical-select")
    selectForm.addEventListener("change", optionValue)


    function optionValue(e) {
      e.preventDefault()
      let getValue = selectForm.value
      console.log(getValue)
      //*****(call new async radical function and pass through getValue)
      radicalPass(getValue)
    }
  } catch (error) {
    console.log(`${error}`)
  } finally {

  }

}


let enclosedMenu = async () => {
  // let url = "https://ccdb.hemiola.com/characters?&fields=string,ktotalstrokes&filters=simplified&big5a"

  let url = `https://ccdb.hemiola.com/characters/radicals/singles/?&fields=string,ktotalstrokes&filters=simplified`

  let select = document.querySelector(".enclosed-radical-select")

  try {
    let response = await axios.get(url)
    // console.log(response.data[101].string)
    for (i = 0; i < enclosed.length; i++) {
      enclosedList.push(response.data[enclosed[i]].string)
      let option = document.createElement('option')
      option.value = `${enclosed[i + 1]}`
      option.text = `${response.data[enclosed[i]].string}`
      select.append(option)
      // console.log(enclosedList)

    }

    let selectForm = document.querySelector(".enclosed-radical-select")
    selectForm.addEventListener("change", optionValue)


    function optionValue(e) {
      e.preventDefault()
      let getValue = selectForm.value
      console.log(getValue)
      //*****(call new async radical function and pass through getValue)
      radicalPass(getValue)
    }

  } catch (error) {
    console.log(`${error}`)
  } finally {

  }

}


let radicalPass = async (radicalnum) => {

  let url = `https://ccdb.hemiola.com/characters/radicals/${radicalnum}?&fields=string,ktotalstrokes,kmandarin,kdefinition&filters=simplified`

  try {
    let response = await axios.get(url)
    console.log(response.data)
    function addChars() {
      for (i = 0; i < response.data.length; i++) {
        let singleChar = document.createElement('p')
        singleChar.innerText = response.data[i].string
        document.querySelector('#character-population').append(singleChar)

      }
    }


    addChars()




  } catch (error) {
    console.log(`${error}`)
  } finally {

  }
}


// //Put value into the API endpoint and make request 
// async function getBreed(breed) {
//   let url = `https://dog.ceo/api/breed/${breed}/images/random`
//   try {
//     let response = await axios.get(url)
//     console.log(response.data.message)
//     let breedSelected = response.data.message
//     removePic()
//     dogPic(breedSelected)
//   } catch (error) {
//     console.log(`${error}`)
//   }

// }


///////////


// //extra copy for solid characters
// let leftRightMenu = async () => {
//   // let url = "http://ccdb.hemiola.com/characters?&fields=string,ktotalstrokes&filters=simplified&big5a"

//   let url = `http://ccdb.hemiola.com/characters/radicals/singles/?&fields=string,ktotalstrokes&filters=simplified`

//   try {
//     let response = await axios.get(url)
//     // console.log(response.data[101].string)
//     for (i = 0; i < leftRight.length; i++) {
//       leftRightList.push(response.data[leftRight[i]].string)


//       let select = document.querySelector("select")

//       leftRightList.forEach((item) => {
//         let option = document.createElement('option')
//         option.value = `${item}`
//         option.text = `${item}`
//         select.append(option)


//       })
//     }

//   } catch (error) {
//     console.log(`${error}`)
//   } finally {

//   }

// }

// leftRightMenu();






///////////////////////////////







// try {
//       //   let response = await axios.get(url)
      //   // console.log(response.data[101].string)
      //   for (i = 0; i < leftRight.length; i++) {
      //     leftRightList.push(response.data[leftRight[i]].string)

      //     // }
      //     // for (i = 0; i < topBottom.length; i++) {
      //     //   topBottomList.push(response.data[topBottom[i]].string)

      //     // }
      //     // for (i = 0; i < enclosed.length; i++) {
      //     //   enclosedList.push(response.data[leftRight[i]].string)

      //     // }

      //     // console.log(response.data)
      //     console.log(leftRightList)

      //     // put in a for loop that iterates through the top indices?

      //     // console.log(radicalList)



      //     let select = document.querySelector("select")

      //     leftRightList.forEach((item) => {
      //       let option = document.createElement('option')
      //       option.value = `${ item }`
      //       option.text = `${ item }`
      //       select.append(option)
      //     })



// function dogPic(breed) {
//   let img = document.createElement('img')
//   img.src = breed
//   img.style.width = '400px'
//   img.style.height = 'auto'
//   document.querySelector('#append-dog').append(img)
// }

// function removePic() {
//   let oldPic = document.querySelector("#append-dog")
//   console.log('last child', oldPic.lastChild)
//   while (oldPic.lastChild) {
//     oldPic.removeChild(oldPic.lastChild)
//   }
// }

//Create img tag, set the src, append img

//remove old img






// Modal credit: https://www.w3schools.com/howto/howto_css_modals.asp

