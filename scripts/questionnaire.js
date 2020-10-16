
var ridingtypes = ["All Mountain", "PARK / FREESTYLE", "TOURING / BACKCOUNTRY", "POWDER"];


//  ---------------- CREATE RIDING TYPE OPTIONS ----------------

ridingtypes.forEach(type => {
  makeOption(type);
})

function makeOption() {
  var items = ``;
  ridingtypes.map(type => {
   items +=`
   <div class="card col-sm-12 col-md-3 col-lg-3">
     <div class="card-body">
       ${type}                
     </div>
   </div>`
  })
  document.getElementById("riding-type").innerHTML = items;
}