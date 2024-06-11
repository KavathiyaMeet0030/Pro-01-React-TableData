export const GetData = (mykey) =>{
 
    let myData = JSON.parse(localStorage.getItem(mykey));

    if(!myData){
        return [];
    }

  return myData;

}