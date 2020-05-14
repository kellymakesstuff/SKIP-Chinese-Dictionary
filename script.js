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
let solidImg = document.getElementById("solidimg")
let solidDiv = document.getElementById("solid-div")

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


////
// Add active class to the current control button (highlight it)
let StrokeBtnContainer = document.getElementById("StrokeBtnContainer");
let btns = StrokeBtnContainer.getElementsByClassName("stroke-btn");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
    console.log(btns[i].innerText)
    filterRadStrokes(btns[i].innerText)
    console.log(currentRadicalNum)
  })
}

function filterRadStrokes(btnStroke) {
  console.log(currentRadicalNum)
  for (character in currentRadicalNum.data) {
    console.log("line 83", character, currentRadicalNum.data[character])
    if (currentRadicalNum.data[character].ktotalstrokes === btnStroke) {
      console.log("line 85", currentRadicalNum.data[character].string)
      let singleChar = document.createElement('p')
      singleChar.innerText = currentRadicalNum.data[character].string
      singleChar.classList = currentRadicalNum.data[character].ktotalstrokes
      singleChar.classList += " listed-char"
      document.querySelector('#character-population').innerHTML = " "
      document.querySelector('#character-population').append(singleChar)
      console.log(singleChar.classList)
    }



  }
}


// function filterStrokes(number) {
//   let charClass = document.getElementsByClassName("listed-char")
//   let current = document.getElementsByClassName("active");
//   for (let i = 0; i < charClass.length; i++) {
//     if (charClass[i].classList.contains(number)) {
//       charClass.style.display = "block";
//       // console.log(charClass.style.display)
//     } else {
//       charClass.style.display = "none";
//       // console.log(charClass.style.display)
//     }
//   };
// }




////////




let leftRight = [1, 3, 4, 5, 8, 14, 15, 17, 18, 20, 23, 24, 25, 27, 28, 29, 31, 32, 35, 37, 38, 40, 45, 46, 47, 48, 49]
let topBottom = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 23, 24, 27, 28, 29, 31, 32, 33, 34, 35, 36, 38, 39, 40, 41, 44, 45, 46, 47, 48, 49]
let enclosed = [12, 15, 16, 19, 21, 22, 26, 30, 42, 43]

let leftRightList = [];
let topBottomList = [];
let enclosedList = [];

let leftRightMenu = async () => {
  // let url = "http://ccdb.hemiola.com/characters?&fields=string,ktotalstrokes&filters=simplified&big5a"

  let url = `http://ccdb.hemiola.com/characters/radicals/singles/?&fields=string,ktotalstrokes&filters=simplified`

  let selectRadical = document.querySelector("#left-right-radical")

  try {
    let response = await axios.get(url)
    // console.log(response.data)

    for (i = 0; i < leftRight.length; i++) {
      leftRightList.push(response.data[leftRight[i]].string)
      // console.log(leftRightList)
      let option = document.createElement('option')
      option.value = `${response.data[leftRight[i]].radical}`
      option.text = `${response.data[leftRight[i]].string}`
      selectRadical.append(option)


    }

  } catch (error) {
    console.log(`${error}`)
  } finally {

  }
  let selectForm = document.querySelector("#left-right-radical")
  selectForm.addEventListener("change", optionValue)


  function optionValue(e) {
    e.preventDefault()
    let getValue = selectForm.value
    // console.log(getValue)
    //*****(call new async radical function and pass through getValue)
    radicalPass(getValue)
  }


}


let topBottomMenu = async () => {
  // let url = "http://ccdb.hemiola.com/characters?&fields=string,ktotalstrokes&filters=simplified&big5a"

  let url = `http://ccdb.hemiola.com/characters/radicals/singles/?&fields=string,ktotalstrokes&filters=simplified`

  let selectRadical = document.querySelector("#top-bottom-radical")

  try {
    let response = await axios.get(url)

    // console.log(response.data[101].string)
    for (i = 0; i < topBottom.length; i++) {
      topBottomList.push(response.data[topBottom[i]].string)
      // console.log(topBottomList)
      let option = document.createElement('option')
      option.value = `${response.data[leftRight[i]].radical}`
      option.text = `${response.data[topBottom[i]].string}`
      selectRadical.append(option)

    }

    let selectForm = document.querySelector("#top-bottom-radical")
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
  // let url = "http://ccdb.hemiola.com/characters?&fields=string,ktotalstrokes&filters=simplified&big5a"

  let url = `http://ccdb.hemiola.com/characters/radicals/singles/?&fields=string,ktotalstrokes&filters=simplified`

  let selectRadical = document.querySelector("#enclosed-radical")

  try {
    let response = await axios.get(url)
    // console.log(response.data[101].string)
    for (i = 0; i < enclosed.length; i++) {
      enclosedList.push(response.data[enclosed[i]].string)
      let option = document.createElement('option')
      option.value = `${response.data[leftRight[i]].radical}`
      option.text = `${response.data[enclosed[i]].string}`
      selectRadical.append(option)
      // console.log(enclosedList)

    }

    let selectForm = document.querySelector("#enclosed-radical")
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



// let strokeBtn = document.querySelectorAll(".stroke-btn")
// strokeBtn.addEventListener("click", filterStrokes)

// function filterStrokes(number) {
//   if (document.getElementsByClassName(`${number}`) === `${number}`) {
//     document.querySelectorAll(`${number}`).style.display = block
//   } else {
//     document.getElementById('p').style.display = none

//   }

// }
let currentRadicalNum = { radicalNum: 0, data: [] }


let radicalPass = async (chosenRad) => {

  let url = `http://ccdb.hemiola.com/characters/radicals/${chosenRad}?&fields=string,ktotalstrokes,kmandarin,kdefinition&filters=simplified`


  try {
    let response = await axios.get(url)
    console.log(response.data)
    currentRadicalNum.radicalNum = chosenRad
    currentRadicalNum.data = response.data

    function addChars() {
      for (i = 0; i < response.data.length; i++) {
        // if (btns[i].innerText === response.data[i].ktotalstrokes) {

        // }
        let singleChar = document.createElement('p')
        singleChar.innerText = response.data[i].string
        singleChar.classList = response.data[i].ktotalstrokes
        singleChar.classList += " listed-char"
        document.querySelector('#character-population').append(singleChar)
        console.log(singleChar.classList)

      }
    }


    addChars()




  } catch (error) {
    console.log(`${error}`)
  } finally {

  }
}
console.log(currentRadicalNum)

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

