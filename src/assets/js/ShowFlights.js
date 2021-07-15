let tableContent = document.getElementById('table-content');
let signedUser = StorageManager.getFromStorage("LoggedInUser");
let searchData = StorageManager.getFromStorage("SEARCHDATA");

displayFlights();

/**
 * Function to display all flights to table.
 */
async function displayFlights() {
    let flights = await FlightManager.getFlightsByFilter(searchData);
    flights.forEach(element => {
        //creating tr for a application.
        let tr = DynamicElements.createTableRow();
        //creating th for flight Id.
        let th = DynamicElements.createTableHeader(element.id);
        th.id = "id";
        tr.appendChild(th);

        //creating td for flight number.
        let tdFlightNo = DynamicElements.createTableData();
        tdFlightNo.innerText = element.flight_no;
        tr.appendChild(tdFlightNo);

        //creating td for flight company name.
        let tdAirline = DynamicElements.createTableData();
        tdAirline.innerText = element.airline;
        tr.appendChild(tdAirline);

        //creating td for date.
        let tdDate = DynamicElements.createTableData();
        tdDate.innerText = element.flight_date.substr(0, 10);
        tr.appendChild(tdDate);

        //creating td for departure place and time.
        let tdDeptPlace = DynamicElements.createTableData();
        tdDeptPlace.innerText = element.origin;
        tr.appendChild(tdDeptPlace);

        //creating td for arrival place and time.
        let tdArrPlace = DynamicElements.createTableData();
        tdArrPlace.innerText = element.destiny;
        tr.appendChild(tdArrPlace);

        let tdDeptTime = DynamicElements.createTableData();
        tdDeptTime.innerText = element.depart_time;
        tr.appendChild(tdDeptTime);

        let tdArrTime = DynamicElements.createTableData();
        tdArrTime.innerText = element.arrival_time;
        tr.appendChild(tdArrTime);

        //creating td for economy seat count.
        let tdEconomy = DynamicElements.createTableData();
        tdEconomy.innerText = element.economy;
        tr.appendChild(tdEconomy);

        //creating td for business seat count.
        let tdBusiness = DynamicElements.createTableData();
        tdBusiness.innerText = element.business;
        tr.appendChild(tdBusiness);

        //creating td for economy seat price.
        let tdEconomyPrice = DynamicElements.createTableData();
        tdEconomyPrice.innerText = element.economy_price;
        tdEconomyPrice.id = "economy";
        tr.appendChild(tdEconomyPrice);

        //creating td for business seat price.
        let tdBusinessPrice = DynamicElements.createTableData();
        tdBusinessPrice.innerText = element.business_price;
        tdBusinessPrice.id = "business";
        tr.appendChild(tdBusinessPrice);

        //creating td for button.
        let tdButton = DynamicElements.createTableData();
        //creating button
        let button = DynamicElements.createBookButton();
        tdButton.appendChild(button);
        tr.appendChild(tdButton);
        //appending tr to tbody tag in html
        tableContent.appendChild(tr);
    });
    addListenerToButtons();
}


/**
 * Function to add event listener to all dynamically generated buttons.
 */
function addListenerToButtons() {
    if (document.querySelector('button')) {
        document.querySelectorAll('.bookBtn').forEach(function (event) {
            event.addEventListener('click', function (e) {
                if (signedUser == null) {
                    alert("please login and continue");
                    window.location.href = "login.html";
                }
                else {
                    let flightId = e.target.parentNode.parentNode.querySelector('th').innerText;
                    let economy = e.target.parentNode.parentNode.querySelector('#economy').innerText;
                    let business = e.target.parentNode.parentNode.querySelector('#business').innerText;
                    localStorage.setItem("USERFLIGHTID", JSON.stringify(flightId));
                    localStorage.setItem("EconomyPrice", JSON.stringify(economy));
                    localStorage.setItem("BusinessPrice", JSON.stringify(business));
                    window.location.href = "bookingpage.html";
                }
            });
        });
    }
}