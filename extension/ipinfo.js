let t = document.getElementById("input-element");
chrome.storage.sync.get("apikey", function(data) { 
	// this is nested to be async after the get storage
	//console.log(data); 

	let APIkey = data["apikey"];
	console.log("using API key: " + APIkey);

	// variables:
	// {VAR} - the input data from the form
	let APIURL = "https://vpnapi.io/api/{VAR}?key=" + APIkey;

	t.addEventListener("keypress", (e) => {
		if (e.keyCode == 13) {
			e.preventDefault();
			let req = new XMLHttpRequest();
			
			req.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					let res = JSON.parse(this.responseText);
					let o = document.getElementById("output-area");
					// console.log("got response:");
					// console.log(res);

					let out = "<table id='result'>";
					out += "<tr><td colspan='2' class='section'>information on "+res.ip+"</td></tr>";
					out += "<tr class='"+res.security.vpn+"'><td class='name'>VPN</td><td class='value'>"+res.security.vpn+"</td></tr>";
					out += "<tr class='"+res.security.tor+"'><td class='name'>TOR</td><td class='value'>"+res.security.tor+"</td></tr>";
					out += "<tr class='"+res.security.proxy+"'><td class='name'>Proxy</td><td class='value'>"+res.security.proxy+"</td></tr>";
					out += "<tr class='"+res.security.relay+"'><td class='name'>Relay</td><td class='value'>"+res.security.relay+"</td></tr>";
					out += "<tr><td colspan='2' class='section'>Location</td></tr>";
					out += "<tr><td class='name'>Country</td><td class='value'>"+res.location.country+"</td></tr>";
					out += "<tr><td class='name'>City</td><td class='value'>"+res.location.city+"</td></tr>";
					out += "<tr><td colspan='2' class='section'>Network</td></tr>";
					out += "<tr><td class='name'>AS name</td><td class='value'>"+res.network.autonomous_system_organization+"</td></tr>";
					out += "<tr><td class='name'>AS network</td><td class='value'>"+res.network.network+"</td></tr>";
					out += "</table>";

					o.innerHTML = out;		
				}
			}

			let url = APIURL.replace("{VAR}",t.value);
			console.log("calling " + url);
			req.open("GET",url,true);
			req.send();
		}
	});

	t.focus();
});
/*
response example:
{
    "ip": "1.2.3.4", 
    "location": {
        "city": "", 
        "continent": "Oceania", 
        "continent_code": "OC", 
        "country": "Australia", 
        "country_code": "AU", 
        "is_in_european_union": false, 
        "latitude": "-33.4940", 
        "locale_code": "en", 
        "longitude": "143.2104", 
        "metro_code": "", 
        "region": "", 
        "region_code": "", 
        "time_zone": "Australia/Sydney"
    }, 
    "network": {
        "autonomous_system_number": "AS24151", 
        "autonomous_system_organization": "China Internet Network Infomation Center", 
        "network": "1.2.4.0/24"
    }, 
    "security": {
        "proxy": true, 
        "relay": false, 
        "tor": false, 
        "vpn": false
    }
}
*/