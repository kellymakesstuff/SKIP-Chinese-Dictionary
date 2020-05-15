// Get the modal
let configurationMenu = document.getElementById("configuration-menu");
let radicalMenu = document.getElementById("radical-menu");
let strokeMenu = document.getElementById("stroke-menu");
let aboutMenu = document.getElementById("about-menu");

// Get the button that opens the modal
let configMenuBtn = document.getElementById("configuration-menu-button");
let radicalMenuBtn = document.getElementById("radical-menu-button");
let strokeMenuBtn = document.getElementById("stroke-menu-button");
let aboutMenuBtn = document.getElementById("about-menu-button");

let leftRightImg = document.getElementById("leftrightimg")
let leftRightDiv = document.getElementById("left-right-div")
let topBottomImg = document.getElementById("topbottomimg")
let topBottomDiv = document.getElementById("top-bottom-div")
let enclosedImg = document.getElementById("enclosedimg")
let enclosedDiv = document.getElementById("enclosed-div")
let solidImg = document.getElementById("solidimg")
let solidDiv = document.getElementById("solid-div")

// When the user clicks on the button, open the modal
configMenuBtn.onclick = function () {
  configurationMenu.style.display = "block";
}
radicalMenuBtn.onclick = function () {
  radicalMenu.style.display = "block";
}
strokeMenuBtn.onclick = function () {
  strokeMenu.style.display = "block";
}

aboutMenuBtn.onclick = function () {
  aboutMenu.style.display = "block";
}


leftRightImg.onclick = function () {
  configurationMenu.style.display = "none";
  leftRightMenu();
  leftRightDiv.style.display = "block";
  topBottomDiv.style.display = "none";
  enclosedDiv.style.display = "none";

}

topBottomImg.onclick = function () {
  configurationMenu.style.display = "none";
  topBottomMenu();
  topBottomDiv.style.display = "block";
  leftRightDiv.style.display = "none";
  enclosedDiv.style.display = "none";

}

enclosedImg.onclick = function () {
  configurationMenu.style.display = "none";
  enclosedMenu();
  enclosedDiv.style.display = "block";
  leftRightDiv.style.display = "none";
  topBottomDiv.style.display = "none";

}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == configurationMenu || event.target == radicalMenu || event.target == strokeMenu || event.target == aboutMenu) {
    configurationMenu.style.display = "none";
    radicalMenu.style.display = "none";
    strokeMenu.style.display = "none";
    aboutMenu.style.display = "none";
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

//////

function filterRadStrokes(btnStroke) {
  document.querySelector("#character-population").innerHTML = " "

  console.log(btnStroke, currentRadicalNum)
  let curr = currentRadicalNum.data
  for (character in curr) {
    // console.log(currentRadicalNum.data[character].string)
    if (curr[character].ktotalstrokes === btnStroke) {
      let singleChar = document.createElement("p")
      singleChar.innerText = curr[character].string
      singleChar.classList = curr[character].ktotalstrokes

      singleChar.classList += " listed-char"
      singleChar.value = character
      document.querySelector("#character-population").append(singleChar)
    }
  }
  const listedChars = document.querySelectorAll(".listed-char")
  const charInfo = document.getElementById('character-info')

  listedChars.forEach(char => {
    console.log(char)
    char.addEventListener('click', e => {
      charInfo.innerHTML = " "
      console.log(e.target.innerText, currentRadicalNum.data)
      currentRadicalNum.data.forEach(single => {
        if (single.string === e.target.innerText) {
          console.log(e.target.innerText, single.string)
          console.log(single.string, single.kmandarin)

          let charName = document.createElement("p")
          charName.innerText = single.string
          charInfo.append(charName)
          let charStrokes = document.createElement("p")
          charStrokes.innerText = `Stroke Count: ${single.ktotalstrokes}`
          charInfo.append(charStrokes)
          let charMand = document.createElement("p")
          charMand.innerText = `Mandarin: ${single.kmandarin}`
          charInfo.append(charMand)
          let charEng = document.createElement("p")
          charEng.innerText = `English: ${single.kdefinition}`
          charInfo.append(charEng)
        }
      })

    })
  })
}


///////

let currentRadicalNum = { radicalNum: 0, data: [] }


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
      option.value = `${response.data[topBottom[i]].radical}`
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


// Modal credit: https://www.w3schools.com/howto/howto_css_modals.asp
// /* color pallette: https://colorpalettes.net/color-palette-4204/ */
// filter credit (html and CSS): https://www.w3schools.com/howto/howto_js_filter_elements.asp