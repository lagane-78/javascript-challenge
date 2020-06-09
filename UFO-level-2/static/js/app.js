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
    
    var filtercity = d3.select("#city");
    var filtercityvalue =filtercity.property("value");
  
    var filterstate = d3.select("#state");
    var filterstatevalue =filterstate.property("value");

    var filtercountry = d3.select("#country");
    var filtercountryvalue =filtercountry.property("value");

    var filtershape = d3.select("#shape");
    var filtershapevalue =filtershape.property("value");

    // No filters shows all the data
    var filteredtableData = data;

    if (filterdatevalue){
      filteredtableData = filteredtableData.filter(ufo => ufo.datetime === filterdatevalue);
    }
    if (filtercityvalue){
      filteredtableData = filteredtableData.filter(ufo => ufo.city === filtercityvalue.toLowerCase());
    }
    if (filterstatevalue){
      filteredtableData = filteredtableData.filter(ufo => ufo.state === filterstatevalue.toLowerCase());
    }
    if (filtercountryvalue){
      filteredtableData = filteredtableData.filter(ufo => ufo.country === filtercountryvalue.toLowerCase());
    }
    if (filtershapevalue){
      filteredtableData = filteredtableData.filter(ufo => ufo.shape === filtershapevalue.toLowerCase());
    }
    

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