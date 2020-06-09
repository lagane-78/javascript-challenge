// from data.js
var tableData = data;

// YOUR CODE HERE!


// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// selecting table tbody
var tbody = d3.select("tbody");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);



function runEnter(){

  
    // Prevent the page from refreshings
  d3.event.preventDefault();

    var filterdate = d3.select("#datetime");
    var filterdatevalue =filterdate.property("value");

  
    var filteredtableData = tableData.filter(ufo => ufo.datetime === filterdatevalue);

    console.log(filteredtableData);

    tbody.html("");

    // Adding the filtered result to the table data 
    filteredtableData.forEach(function(uforeport)
    {
    console.log(uforeport);
    var myrow = tbody.append('tr');
    Object.entries(uforeport).forEach(function([key,value]){
    console.log([key,value]);
    var cell = myrow.append("td");
    cell.text(value);
    });
    });


};