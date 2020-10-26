
var ridingtypes = ["all-mountain", "park", "backcountry", "powder"];
var ridinglevel = ["beginner", 'intermediate', 'expert']

//  ---------------- CREATE RIDING TYPE OPTIONS ----------------

function makeOption(array, id) {
  let items = ``;
  var size = 12 / array.length
  array.map(type => {
    items +=`
    <div class="form-group col-sm-12 col-md-${size} col-lg-${size}">
      <div id=${type} class="form-control q-field">
        ${type.split('-').join(' ').toUpperCase()}                
      </div>
    </div>`
  })  
   document.getElementById(id).innerHTML = items;
}

makeOption(ridingtypes, 'riding-type')
makeOption(ridinglevel, 'riding-lvl')


//  ---------------- SELECTIONS ----------------
var skiBtn = document.getElementById('ski')

document.querySelectorAll('.q-field').forEach(item => {
  // --- Don't add selected class to height and weight
  if (item.id !== 'height' && item.id !== 'weight') {
    item.addEventListener('click', () => {
      $(`#${item.id}`).toggleClass("selected")
      // --- find selections
      const findRidingType = ridingtypes.find(type => type === item.id)
      const findRidingLevel = ridinglevel.find(type => type === item.id)
      
      // --- remove selected class from other options
      if (item.id === 'ski' || item.id === 'snowboard') {
        let array = ['ski', 'snowboard']
        let selection = array.find(type => type !== item.id)
        $(`div#${selection}`).removeClass('selected')
        
      } else if (findRidingType) {
        ridingtypes.forEach(type => {
          if (type !== item.id) {
            $(`div#${type}`).removeClass('selected')
          }
        })
      } else if (findRidingLevel) {
        ridinglevel.forEach(type => {
          if (type !== item.id) {
            $(`div#${type}`).removeClass('selected')
          }
        })
      }
    })
  }
})


//  ---------------- FORM SUBMIT ----------------

var formValues = []
$("#qform-submit").click(e => {
  formValues = [] // reset form values and re-add
  e.preventDefault()
  document.querySelectorAll('.selected').forEach(item => {
    console.log("items selected", item.id)
    formValues.push(item.id)
  })
  var height = $("#height-input").val()
  var weight = $("#weight-input").val()
  formValues.push({height})
  formValues.push({weight})

  console.log("form values", formValues)
  //  ------ form validation ------
  if (formValues[0] !== "ski" && formValues[0] !== "snowboard") {
    alert("Please choose ski or snowboard")
  } else if (formValues[1] !== "all-mountain" && formValues[1] !== "park" && formValues[1] !== "backcountry" && formValues[1] !== "powder") {
    alert("Please choose your type of riding")
  } else if (!height || !weight ) {
    alert("Please add in your height and weight")
  } else if (formValues[2] !== "beginner" && formValues[2] !== "intermediate" && formValues[2] !== "expert") {
    alert("Please choose your riding level")
  } else {
    location.replace("products.html")
  }
})