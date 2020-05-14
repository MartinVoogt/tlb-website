'use strict'
const timeout = 300;

const trigger = document.getElementById('navigation-trigger'); 
const navElement = document.querySelector('nav');
const navContainer = document.querySelector('.container'); 

const addClass = name => element => element.classList.add(name);
const removeClass = name => element => element.classList.remove(name); 
const hasClass = name => element => element.classList.contains(name); 

const setActive = addClass('active');
const setInactive = removeClass('active');
const isActive = hasClass('active');

const setOut = element => {
	removeClass('in')(element);
	addClass('out')(element);
	setTimeout(function(){
		setInactive(element);
	},timeout);
}

const setIn = element => {
	removeClass('out')(element);
	addClass('in')(element);
	setActive(element);
}

const setNavigation = e => {
	e.preventDefault();

	let state = isActive(navElement)
		? setOut(navElement)
		: setIn(navElement);
}

const triggerClick = e => {
	e.preventDefault()

}

const navigation = () => {
	trigger.addEventListener('click', setNavigation);
	navContainer.addEventListener('click', e => {
		if(e.srcElement == navContainer)
			setNavigation(e);

		if(e.srcElement.tagName == 'A')
		{
			setNavigation(e);
		}

		
	});
}

export default navigation; 