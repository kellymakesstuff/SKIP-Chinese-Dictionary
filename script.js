let leftRight = [1, 3, 4, 5, 8, 14, 15, 17, 18, 20, 23, 24, 25, 27, 28, 29, 31, 32, 35, 37, 38, 40, 45, 46, 47, 48, 49]
let topBottom = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 23, 24, 27, 28, 29, 31, 32, 33, 34, 35, 36, 38, 39, 40, 41, 44, 45, 46, 47, 48, 49]
let enclosed = [1, 2, 15, 16, 19, 21, 22, 26, 30, 42, 43]

let leftRightList = [];
let topBottomList = [];
let enclosedList = [];

let leftRightMenu = async () => {
  // let url = "http://ccdb.hemiola.com/characters?&fields=string,ktotalstrokes&filters=simplified&big5a"

  let url = `http://ccdb.hemiola.com/characters/radicals/singles/?&fields=string,ktotalstrokes&filters=simplified`

  try {
    let response = await axios.get(url)
    // console.log(response.data[101].string)
    for (i = 0; i < leftRight.length; i++) {
      leftRightList.push(response.data[leftRight[i]].string)
      console.log(leftRightList)

      let select = document.querySelector("#left-right-radical-select")

      leftRightList.forEach((item) => {
        let option = document.createElement('option')
        option.value = `${item}`
        option.text = `${item}`
        select.append(option)


      })
    }

  } catch (error) {
    console.log(`${error}`)
  } finally {

  }

}

leftRightMenu();

let topBottomMenu = async () => {
  // let url = "http://ccdb.hemiola.com/characters?&fields=string,ktotalstrokes&filters=simplified&big5a"

  let url = `http://ccdb.hemiola.com/characters/radicals/singles/?&fields=string,ktotalstrokes&filters=simplified`

  try {
    let response = await axios.get(url)
    // console.log(response.data[101].string)
    for (i = 0; i < topBottom.length; i++) {
      topBottomList.push(response.data[topBottom[i]].string)
      console.log(topBottomList)

      let select = document.querySelector("#top-bottom-radical-select")

      topBottomList.forEach((item) => {
        let option = document.createElement('option')
        option.value = `${item}`
        option.text = `${item}`
        select.append(option)


      })
    }

  } catch (error) {
    console.log(`${error}`)
  } finally {

  }

}

topBottomMenu();

let enclosedMenu = async () => {
  // let url = "http://ccdb.hemiola.com/characters?&fields=string,ktotalstrokes&filters=simplified&big5a"

  let url = `http://ccdb.hemiola.com/characters/radicals/singles/?&fields=string,ktotalstrokes&filters=simplified`

  try {
    let response = await axios.get(url)
    // console.log(response.data[101].string)
    for (i = 0; i < enclosed.length; i++) {
      enclosedList.push(response.data[enclosed[i]].string)

      console.log(enclosedList)
      let select = document.querySelector("#enclosed-radical-select")

      enclosedList.forEach((item) => {
        let option = document.createElement('option')
        option.value = `${item}`
        option.text = `${item}`
        select.append(option)


      })
    }

  } catch (error) {
    console.log(`${error}`)
  } finally {

  }

}

enclosedMenu();




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

// function optionValue(e) {
//   e.preventDefault()
//   let select = document.querySelector("#select-dog")
//   let getValue = select.value
//   console.log(getValue)
//   getBreed(getValue)
// }

// let form = document.querySelector('form')
// form.addEventListener("submit", optionValue)

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