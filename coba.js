
export async function CheckIG() {
  const myHeaders = new Headers();
  // myHeaders.append("Content-Type", "text/html; charset=UTF-8");
  myHeaders.append("Access-Control-Allow-Origin", "*");
  // 'Access-Control-Allow-Origin': '*'
  // const formdata = new URLSearchParams();
  const formdata = new FormData();
  formdata.append("pagetoken", "EAAVq2DTG8qkBAE8T3QlFjpizxYh6i9x5SQwgC2oB3pb7WL4L0dthShQozZCZBxfHZAmdIdBMPg5mS2foQIpqViRTBLvjPy7qPiDxeiXQ6fwL9qO0lAF7JXcstwiE7CKZBXQiHBTqcKaZCBTW7s2zyvZAvtZCgxCPZAPOmZAPbN8onklmDUuVIe4lFXZC6j319FbZCEZD");
  formdata.append("commentid", "17863849753898464");

    try {
        const url = `https://cs.icephone.id/sosialapi/sosial/instagram/instagram/getcheck_commentreply`; 
        const config = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow',
            mode: 'no-cors',
            credentials: 'same-origin',
            cache: 'no-cache',
        }
      const res = await fetch(url, config);
      const json = await res.text();
      console.log(json);

    } 
    catch (error) {
        console.log(error);    
    }

}

 
 
// export const DashAgentOnline = async () => {
export async function DashAgentOnline() {
  const url = 'https://ice.icephone.id:8013/tlt_GetBalanar2/Service1.svc/Get_Balanar?value={Raw:"",Data1:"DashAgentOnline",Data2:"",Data3:"",Data4:"",Data5:"",Data6:"",Data7:"",Data8:"",Data9:"",Data10:""}';
  await fetch(url)
  .then((res) => res.json())
  .then((res) => {
      // console.log(res.Raw)
      const array = res.Raw;
      array.forEach((arr, index) => {
        console.log(arr,index);
      });
  })
  .catch((err) => console.log(err));
  
}
// DashAgentOnline();


export async function ListCustomer(AgentHandle) {
  // const arr = [];
  const url = 'https://ice.icephone.id:8013/WsSosialMedia/Mendawai_SosialMedia';
	const config = {
		method: 'POST',
		headers: {
			"Content-Type" : "application/json"
		},
		body: JSON.stringify({
			Data1:"ListFeed",
			Data2:AgentHandle,
			Data3:"",
			Data4:"",
			Data5:""
		})
  }

  const res = await fetch(url, config);
  const json = await res.json();
  const obj1 = json.data;
  // console.log(obj1);

  const config2 = {
		method: 'POST',
		headers: {
			"Content-Type" : "application/json"
		},
		body: JSON.stringify({
			Data1:"ListCustomer",
			Data2:AgentHandle,
			Data3:"",
			Data4:"",
			Data5:""
		})
  }

  const res2 = await fetch(url, config2);
  const json2 = await res2.json();
  const obj2 = json2.data;
  // console.log(obj2);
  console.log(obj1.concat(obj2));
  
  
  
}


(async () => {
  // const myModule = await import('./myModule.js');
})();

var heroes = [
	{name: "Batman", franchise: "DC"},
	{name: "Ironman", franchise: "Marvel"},
	{name: "Thor", franchise: "Marvel"},
	{name: "Superman", franchise: "DC"}
];

var marvelHeroes =  heroes.filter((hero) => {
	return hero.franchise == "Marvel";
});


let ga = `<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="asd"></div>
    <script type="module" src="load.js"></script>
</body>
</html>`;









 
