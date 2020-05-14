const url = 'https://www.dayz-tlb.com/php/request.php';

//const modlist = require('./server.json'); 
const modElement = document.getElementById('mods'); 

const getRequest = async (url) => {
	const response = fetch(url, {
		mode: 'same-origin', // no-cors, *cors, same-origin
	});
	
	return await (await response).json();
}

const createItem = item => {
	let container = document.createElement('li'); 
	let title = document.createElement('h4');
	let link = document.createElement('a'); 

	link.textContent = 'more info';
	link.setAttribute('target', '_blank');
	link.setAttribute('href',`https://steamcommunity.com/sharedfiles/filedetails/?id=${item.steamWorkshopId}`);
	
	title.textContent = item.name; 
	
	container.append(title, link);

	return container; 
}

const addToParent = (parent, item) => { parent.append(item); return parent; } 

const status = () => {
	try {
		let request = getRequest(url);
		request.then(data => {
			let parent = modElement.querySelector('div.list ul'); 
			data.map(createItem).reduce(addToParent, parent); 
		})

	} catch {
		console.log('Something is not right'); 
	}

}

export default status;