
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
    setInterval(setShips( [{
            "orderNo": "gr-591427-08636116-1891628",
            "date": "12/30/2018",
            "customer": "Innovative Solutions and Support, Inc.",
            "trackingNo": "TP-835144-48574026-1888062",
            "status": "'Shipped'",
            "consignee": "Cantel Medical Corp."
        },
        {
            "orderNo": "dc-298997-02857347-8029368",
            "date": "5/12/2019",
            "customer": "DAQO New Energy Corp.",
            "trackingNo": "TP-965289-51539728-7201261",
            "status": "'Shipped'",
            "consignee": "Seadrill Partners LLC"
        },
        {
            "orderNo": "ka-758672-14641658-2105305",
            "date": "8/17/2019",
            "customer": "First Cash, Inc.",
            "trackingNo": "TP-622960-57222552-5469142",
            "status": "'Shipped'",
            "consignee": "Stage Stores, Inc."
        },
        {
            "orderNo": "ie-525051-94693670-4983357",
            "date": "12/14/2018",
            "customer": "Lazard Ltd.",
            "trackingNo": "TP-268707-26374264-8328417",
            "status": "'Delivered'",
            "consignee": "PIMCO Dynamic Income Fund"
        },
        {
            "orderNo": "ua-230733-87850105-9161577",
            "date": "6/11/2019",
            "customer": "Buffalo Wild Wings, Inc.",
            "trackingNo": "TP-938945-04025844-0074605",
            "status": "'Delivered'",
            "consignee": "Sensient Technologies Corporation"
        },
        {
            "orderNo": "uv-997356-54275694-2153512",
            "date": "1/7/2019",
            "customer": "Clearwater Paper Corporation",
            "trackingNo": "TP-975529-30936038-4006130",
            "status": "'In Transit'",
            "consignee": "Waste Management, Inc."
        },
        {
            "orderNo": "hf-162938-72509598-7105201",
            "date": "5/22/2019",
            "customer": "KBS Fashion Group Limited",
            "trackingNo": "TP-406217-31064157-1088437",
            "status": "'Shipped'",
            "consignee": "TCP Capital Corp."
        },
        {
            "orderNo": "wq-925387-66272684-9975620",
            "date": "12/20/2018",
            "customer": "AG Mortgage Investment Trust, Inc.",
            "trackingNo": "TP-844231-32169714-5811641",
            "status": "'In Transit'",
            "consignee": "Aircastle Limited"
        },]
        )
    ,3000)
    
}