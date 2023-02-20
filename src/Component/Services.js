import localData from "./data";

    const fetchAxios = async () =>{
       let responce = await axios.get('https://my.api.mockaroo.com/shipments.json?key=5e0b62d0')
       setShips(responce.data)
      }

    export default fetchAxios;





//  Fetch Data With Fetch
  const fetchShipment = async () => {
    await fetch("https://my.api.mockaroo.com/shipments.json?key=5e0b62d0", {
      method: 'GET',
    })
      .then((responce) => responce.json())
      .then((mydata) => setShips(mydata));
  };



  const getLocalShipment = () =>{
    setInterval(setShips( 
        localData
        )
    ,3000)
    
}