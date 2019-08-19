const selector = value => {
  return document.querySelector(value);
};

// const pricing = selector("#pricing")

//FORM FOR FLIGHT
const flightForm = selector("#flightForm");
const origin = selector("#originFrom");
const destination = selector("#destinationTo");
const departingDate = selector("#departing-date-picker");
const returningDate = selector("#returning-date-picker");
const adult = selector("#adultNumber");
const children = selector("#childrenNumber");
const classType = selector("#classType");
const ticket_origin = selector("#ticket_origin");
const ticket_destination = selector("#ticket_destination");
const ticket_departing = selector("#ticket_departing");

const ticket_returning = selector("#ticket_returning");
const ticket_adult = selector("#ticket_adult");
const ticket_children = selector("#ticket_children");
const ticket_classType = selector("#ticket_classType");

const flightFunction = flightForm.addEventListener("submit", e => {
  e.preventDefault();
  const origin1 = origin.value;
  const destination1 = destination.value;
  const departingDate1 = departingDate.value;
  // const returningDate1 = returningDate.value;
  const adult1 = adult.options[adult.selectedIndex].value;
  const children1 = children.options[children.selectedIndex].value;
  const classType1 = classType.options[classType.selectedIndex].value;
  sessionStorage.setItem("origin_input", origin1);
  sessionStorage.setItem("destination1_input", destination1);
  sessionStorage.setItem("departingDate1_input", departingDate1);
  // sessionStorage.setItem('returningDate1_input', returningDate1);
  sessionStorage.setItem("adult1_input", adult1);
  sessionStorage.setItem("children1_input", children1);
  sessionStorage.setItem("classType1_input", classType1);
  const origin_input = sessionStorage.getItem("origin_input");
  const destination1_input = sessionStorage.getItem("destination1_input");
  const departingDate1_input = sessionStorage.getItem("departingDate1_input");
  const returningDate1_input = sessionStorage.getItem("returningDate1_input");
  const adult1_input = sessionStorage.getItem("adult1_input");
  const children1_input = sessionStorage.getItem("children1_input");
  const classType1_input = sessionStorage.getItem("classType1_input");
  ticket_origin.innerHTML = origin_input;
  ticket_destination.innerHTML = destination1_input;
  ticket_departing.innerHTML = departingDate1_input;
  ticket_returning.innerHTML = returningDate1_input;
  ticket_adult.innerHTML = adult1_input;
  ticket_children.innerHTML = children1_input;
  ticket_classType.innerHTML = classType1_input;
  if (ticket_departing.innerHTML === "") {
    ticket_departing.innerHTML = "N/A";
  }
  if (ticket_returning.innerHTML === "") {
    ticket_returning.innerHTML = "N/A";
  }
  if (ticket_adult.innerHTML === "") {
    ticket_adult.innerHTML = "N/A";
  }
  if (ticket_children.innerHTML === "") {
    ticket_children.innerHTML === "N/A";
  }

  console.log(origin_input);
});

// // FORM FOR HOTEL
const hotelForm = selector("#hotelForm");

const hotel_destination = selector("#hotel_destination");
const hotel_preference = selector("#hotel_preference");
const check_in_date = selector("#check_in_date");
const check_out_date = selector("#check_out_date");
const nationality = selector("#nationality");
let checkBox = [...document.querySelectorAll('input[type="radio"]')];
const ticket_city = selector("#ticket_city");
const ticket_hotelPreference = selector("#ticket_hotelPreference");
const ticket_checkIn = selector("#ticket_checkIn");
const ticket_checkOut = selector("#ticket_checkOut");
const ticket_room = selector("#ticket_room");
const ticket_nationality = selector("#ticket_nationality");

const hotelFunction = hotelForm.addEventListener("submit", e => {
  e.preventDefault();

  //display value of checked checkbox
  function checkboxChecked(boxArray) {
    var ArgLength = boxArray.length;
    let checked = [];
    for (var i = 0; i < ArgLength; i++) {
      if (boxArray[i].checked) {
        checked.push(boxArray[i].value);
      }
    }
    return checked;
  }
  const hotel_destination1 = hotel_destination.value;
  const hotel_preference1 =
    hotel_preference.options[hotel_preference.selectedIndex].value;
  const check_in_date1 = check_in_date.value;
  const check_out_date1 = check_out_date.value;
  const nationality1 = nationality.options[nationality.selectedIndex].value;
  const room_number1 = checkboxChecked(checkBox);

  sessionStorage.setItem("hotel_destination1_input", hotel_destination1);
  sessionStorage.setItem("hotel_preference1_input", hotel_preference1);
  sessionStorage.setItem("check_in_date1_input", check_in_date1);
  sessionStorage.setItem("check_out_date1_input", check_out_date1);
  sessionStorage.setItem("room_number1_input", room_number1);
  sessionStorage.setItem("nationality1_input", nationality1);
  const hotel_destination1_input = sessionStorage.getItem(
    "hotel_destination1_input"
  );
  const hotel_preference1_input = sessionStorage.getItem(
    "hotel_preference1_input"
  );
  const check_in_date1_input = sessionStorage.getItem("check_in_date1_input");
  const check_out_date1_input = sessionStorage.getItem("check_out_date1_input");
  const room_number1_input = sessionStorage.getItem("room_number1_input");
  const nationality1_input = sessionStorage.getItem("nationality1_input");
  ticket_city.innerHTML = hotel_destination1_input;
  ticket_hotelPreference.innerHTML = hotel_preference1_input;
  ticket_checkIn.innerHTML = check_in_date1_input;
  ticket_checkOut.innerHTML = check_out_date1_input;
  ticket_room.innerHTML = room_number1_input;
  ticket_nationality.innerHTML = nationality1_input;
  if (ticket_checkIn.innerHTML === "") {
    ticket_checkIn.innerHTML = "N/A";
  }
  if (ticket_checkOut.innerHTML === "") {
    ticket_checkOut.innerHTML = "N/A";
  }
  if (ticket_room.innerHTML === "") {
    ticket_room.innerHTML = "N/A";
  }
});

// FORM FOR RIDE
const carForm = selector("#carForm");
// Show Ticket Button
selector("#summary").style.display = "none";
// Show Ticket Button

const travel_type = selector("#travel_type");
const source_city = selector("#source_city");
const destination_city = selector("#destination_city");
const multiCity_trip_date_1 = selector("#multiCity_trip_date_1");
const multiCity_trip_date_2 = selector("#multiCity_trip_date_2");
const one_way_trip_date = selector("#one_way_trip_date");
const round_trip_date = selector("#round_trip_date");
const returnTrip_date = selector("#returnTrip_date");
const pickup_hours = selector("#pickup_hours");
const pickup_minutes = selector("#pickup_minutes");
const pickup_meridiem = selector("#pickup_meridiem");
const ticket_travelType = selector("#ticket_travelType");
const ticket_sourceCity = selector("#ticket_sourceCity");
const ticket_destinationCity = selector("#ticket_destinationCity");
// const ticket_multiCity_trip_date_2 = selector("#ticket_multiCity_trip_date_2");
// const ticket_multiCity_trip_date_1 = selector("#ticket_multiCity_trip_date_1");
// const ticket_one_way_trip_date = selector("#ticket_one_way_trip_date");
const ticket_returnTrip_date = selector("#ticket_returnTrip_date");
const ticket_round_trip_date = selector("#ticket_round_trip_date");
const ticket_pickup_hours = selector("#ticket_pickup_hours");
const ticket_pickup_minutes = selector("#ticket_pickup_minutes");
const ticket_pickup_meridiem = selector("#ticket_pickup_meridiem");

const carFunction = carForm.addEventListener("submit", e => {
  e.preventDefault();
  selector("#summary").style.display = "block";
  // const travel_type1 = travel_type.options[travel_type.selectedIndex].value;
  const source_city1 = source_city.value;
  const destination_city1 = destination_city.value;
  const multiCity_trip_date_one = multiCity_trip_date_1.value;
  const multiCity_trip_date_two = multiCity_trip_date_2.value;
  const one_way_trip_date1 = one_way_trip_date.value;
  const round_trip_date1 = round_trip_date.value;
  const returnTrip_date1 = returnTrip_date.value;
  const pickup_hours1 = pickup_hours.value;
  const pickup_minutes1 = pickup_minutes.value;
  const pickup_meridiem1 = pickup_meridiem.value;
  // sessionStorage.setItem('travel_type1_input', travel_type1);
  sessionStorage.setItem("source_city1_input", source_city1);
  sessionStorage.setItem("destination_city1_input", destination_city1);
  sessionStorage.setItem(
    "multiCity_trip_date_one_input",
    multiCity_trip_date_one
  );
  sessionStorage.setItem(
    "multiCity_trip_date_two_input",
    multiCity_trip_date_two
  );
  sessionStorage.setItem("one_way_trip_date1_input", one_way_trip_date1);
  sessionStorage.setItem("round_trip_date1_input", round_trip_date1);
  sessionStorage.setItem("returnTrip_date1_input", returnTrip_date1);
  sessionStorage.setItem("pickup_hours1_input", pickup_hours1);
  sessionStorage.setItem("pickup_minutes1_input", pickup_minutes1);
  sessionStorage.setItem("pickup_meridiem1_input", pickup_meridiem1);
  const travel_type1_input = sessionStorage.getItem("travel_type1_input");
  const source_city1_input = sessionStorage.getItem("source_city1_input");
  const destination_city1_input = sessionStorage.getItem(
    "destination_city1_input"
  );
  const multiCity_trip_date_one_input = sessionStorage.getItem(
    "multiCity_trip_date_one_input"
  );
  const multiCity_trip_date_two_input = sessionStorage.getItem(
    "multiCity_trip_date_two_input"
  );
  const one_way_trip_date1_input = sessionStorage.getItem(
    "one_way_trip_date1_input"
  );
  const round_trip_date1_input = sessionStorage.getItem(
    "round_trip_date1_input"
  );
  const returnTrip_date1_input = sessionStorage.getItem(
    "returnTrip_date1_input"
  );
  const pickup_hours1_input = sessionStorage.getItem("pickup_hours1_input");
  const pickup_minutes1_input = sessionStorage.getItem("pickup_minutes1_input");
  const pickup_meridiem1_input = sessionStorage.getItem(
    "pickup_meridiem1_input"
  );

  // ticket_travelType.innerHTML = travel_type1_input;
  ticket_sourceCity.innerHTML = source_city1_input;
  ticket_destinationCity.innerHTML = destination_city1_input;
  // ticket_multiCity_trip_date_1.innerHTML = multiCity_trip_date_one_input;
  // ticket_multiCity_trip_date_2.innerHTML = multiCity_trip_date_two_input;
  // ticket_one_way_trip_date.innerHTML = one_way_trip_date1_input;
  ticket_returnTrip_date.innerHTML = returnTrip_date1_input;
  ticket_round_trip_date.innerHTML = round_trip_date1_input;
  ticket_pickup_hours.innerHTML = pickup_hours1_input;
  ticket_pickup_minutes.innerHTML = pickup_minutes1_input;
  ticket_pickup_meridiem.innerHTML = pickup_meridiem1_input;
  if (ticket_pickup_hours.innerHTML === "-1") {
    ticket_pickup_hours.innerHTML = "N/A";
    ticket_pickup_minutes.innerHTML = "";
    ticket_pickup_meridiem.innerHTML = "";
  }
  console.log(ticket_sourceCity);
});

// Pricing Logic - Sabur Ahmed (not getting the desired result as at 7:53AM, 18th August, still on it.)
if (
  ticket_returnTrip_date.innerHTML === "" &&
  ticket_checkIn.innerHTML === ""
) {
  pricing.innerHTML =
    "#30,000. Fill the Flight and Hotel forms to get full price quote.";
  console.log("John");
} else if (
  ticket_departing.innerHTML === "" &&
  ticket_returnTrip_date.innerHTML === ""
) {
  pricing.innerHTML =
    "#150,000. Fill the Flight and Ride forms to get full price quote.";
  console.log("Mark");
} else if (
  ticket_returnTrip_date.innerHTML === "" &&
  check_in_date.innerHTML === ""
) {
  pricing.innerHTML =
    "#220,000. Fill the Flight and Ride forms to get full price quote.";
  console.log("Mary");
} else {
  pricing.innerHTML = "#400,000";
  console.log("It's a draw!");
}

// if (flightFunction === false && hotelFunction === false) {
//   pricing.innerHTML =
//     "#30,000. Fill the Flight and Hotel forms to get full price quote.";
//   console.log("John");
// } else if (flightFunction === false && carFunction === false) {
//   pricing.innerHTML =
//     "#150,000. Fill the Flight and Ride forms to get full price quote.";
//   console.log("Mark");
// } else if (hotelFunction === false && carFunction === false) {
//   pricing.innerHTML =
//     "#220,000. Fill the Flight and Ride forms to get full price quote.";
//   console.log("Mary");
// } else {
//   pricing.innerHTML = "#400,000";
//   console.log("It's a draw!");
// };



// OLAJIDE

// ALERT FOR SUCCESFUL SUBMISSION

// Show alert
// document.querySelector('.alert').style.display = 'block';

// // Hide alert after 3 seconds
// setTimeout(function () {
// 	document.querySelector('.alert').style.display = 'none';
// }, 3000);

// // Clear form
// document.getElementById('contactForm').reset();



//ADULT QUANTITY
$(document).ready(function () {
	const adult_minus = $('.adult__minus');
	const adult_plus = $('.adult__plus');
	const adult_input = $('.adult-quantity__input');

	// ADULT
	adult_minus.click(function (e) {
		e.preventDefault();
		var adultValue = adult_input.val();
		if (adultValue > 1) {
			adultValue--;
		}
		adult_input.val(adultValue);
		console.log(adultValue)
	});

	adult_plus.click(function (e) {
		e.preventDefault();
		var adultValue = adult_input.val();
		adultValue++;
		adult_input.val(adultValue);
		console.log(adultValue)
	})


	// CHILDREN
	const children_minus = $('.children-minus');
	const children_plus = $('.children-plus');
	const children_input = $('.children-quantity__input');

	children_minus.click(function (e) {
		e.preventDefault();
		var childrenValue = children_input.val();
		if (childrenValue > 1) {
			childrenValue--;
		}
		children_input.val(childrenValue);
		console.log(childrenValue)
	});

	children_plus.click(function (e) {
		e.preventDefault();
		var childrenValue = children_input.val();
		childrenValue++;
		children_input.val(childrenValue);
		console.log(childrenValue)
	})


	// ROOM
	const room_minus = $('.room-minus');
	const room_plus = $('.room-plus');
	const room_input = $('.room-quantity__input');

	room_minus.click(function (e) {
		e.preventDefault();
		var roomValue = room_input.val();
		if (roomValue > 1) {
			roomValue--;
		}
		room_input.val(roomValue);
		console.log(roomValue)
	});

	room_plus.click(function (e) {
		e.preventDefault();
		var roomValue = room_input.val();
		roomValue++;
		room_input.val(roomValue);
		console.log(roomValue)
	})
});

