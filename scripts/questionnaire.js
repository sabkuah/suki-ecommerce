
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
        ${type}                
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
      $(`div#${item.id}`).toggleClass("selected")
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

document.getElementById("qform-submit").addEventListener('click', () => {
  document.querySelectorAll('.selected').forEach(item => {
    console.log("items selected", item)
  })
})