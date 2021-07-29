
const getLoc = document.getElementById('loc');
getLoc.addEventListener('click',()=>{
    navigator.geolocation.getCurrentPosition(getMyLocation,catcherr,options)
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
    
const getMyLocation = (pos)=>{ 
    const table = new Date().toLocaleString();
    let newTable ='';
      for(const key in table){
       if(table[key]!=="/"&&table[key]!==","&&table[key]!==" "){ newTable += table[key]; }}

    const coords = {
        latitude:pos.coords.latitude,
        longitude:pos.coords.longitude
       }
    
     fetch(`https://locky-d3641-default-rtdb.firebaseio.com/${newTable}.json`,{
        method:'POST',
        body:JSON.stringify(coords),
        header:{'Content-Type':'application/json'}  
        }).then(()=>{
            console.log('success')
           }).catch(err=>{alert(err)});
     
}

    
   
