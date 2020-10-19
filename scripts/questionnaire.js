
var ridingtypes = ["ALL MOUNTAIN", "PARK / FREESTYLE", "TOURING / BACKCOUNTRY", "POWDER"];
var ridinglevel = ["Beginner", 'Intermediate', 'Expert']

//  ---------------- CREATE RIDING TYPE OPTIONS ----------------

function makeOption(array, id) {
  let items = ``;
  var size = 12 / array.length
  array.map(type => {
    items +=`
    <div class="form-group col-sm-12 col-md-${size} col-lg-${size}">
      <div class="form-control q-field">
        ${type}                
      </div>
    </div>`
  })  
   document.getElementById(id).innerHTML = items;
}

makeOption(ridingtypes, 'riding-type')
makeOption(ridinglevel, 'riding-lvl')
