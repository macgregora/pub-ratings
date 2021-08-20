/*	File:			setup.js
	Author:			Alister Macgregor
	Last update:	20 August 2021
	Purpose:		Loads data and sets up the UI and listeners
*/

document.addEventListener('DOMContentLoaded', function() {
/*
	When the document has been loaded:
		sets up teh listeners
*/
	"use strict"
	setUpListeners();
	setUpUI();
})

function setUpListeners() {
	"use strict"
	// adds the event listeners that are required
	getElement("reset").addEventListener('click',function() {setUpUI();});
	getElement("add_button").addEventListener('click',function() {addPurchaseToList(getElement("product_purchased").value);});
	getElement("remove_button").addEventListener('click',function() {removePurchaseFromList(getElement("selectedListItem"));});
	getElement("save_button").addEventListener('click',function() {saveVisit();});
	// Listener for an item being slected in teh list
	getElement("purchase_list").addEventListener('click',function(event) {selectListItem(event.target)});
}

function setUpUI() {
	// Clear teh input values
	// Clear the visit information
	getElement("visit_date").valueAsDate = new Date();	// Sets up teh date to today - note will probably be a day out if run in the morning
	getElement("visit_place").value = "";
	getElement("visit_rating").value = null;
	getElement("visit_spend").value = null;
	
	// Clear teh product purchased list
	getElement("product_purchased").value = "";
	writeToElement("purchase_list","");
}
