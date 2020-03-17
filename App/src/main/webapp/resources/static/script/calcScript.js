

if (window.location.pathname == "/calc") {

	function addNumber(id) {




		var output = document.getElementById("output");
		var prev = output.getAttribute("prev");
		var op = findActiveOperator();
		var hist = document.getElementsByClassName("calc-hist")[0];
		var hop = hist.getAttribute("value");
		//if (op == "false" && prev == "") {
			
			// var curr = output.getAttribute("curr");
			// output.setAttribute("prev", curr);
			// output.setAttribute("curr", id);
			// output.innerHTML = id;
		//} else {

			var curr = output.getAttribute("curr");
			var finalNr = "" + curr + id;
			output.setAttribute("curr", finalNr);
			output.innerHTML = finalNr;
		//}
	}

	function addElement(id) {

		if (id == "equal") {
			var op = findActiveOperator();
			doEquation(op);

		} else if (id == "dot") {
			

			var curr = document.getElementById("output").getAttribute("curr");
			if (curr == "") {

				addNumber("0.");
			} else {
				var status = checkNumber(curr);
				if (status == "good") { addNumber("."); 
				} else if (status == "bad") { alert("Impossible"); }
			}

		} else if (id == "add" || id == "sub" || id == "mul" || id == "div") {


			var isPushed = findActiveOperator();
			if (isPushed != "false") { isPushed = "true"}
			addOperation(id);
			doOperation(id, isPushed);

		} else if (id == "clear") {
			
			document.getElementById("output").setAttribute("prev", "");
			document.getElementById("output").setAttribute("curr", "");
			document.getElementById("output").innerHTML = "";
			clearAllOperation();
		}
	}

	function addOperation (id) {
		if (id == "add") {

			document.getElementById("add").setAttribute("value", 1);
			clearOperation(id);
		} else if (id == "sub") {

			document.getElementById("sub").setAttribute("value", 1);
			clearOperation(id);
		} else if (id == "mul") {

			document.getElementById("mul").setAttribute("value", 1);
			clearOperation(id);
		} else if (id == "div") {

			document.getElementById("div").setAttribute("value", 1);
			clearOperation(id);
		}
	}

	function doOperation (id, isPushed)  {

		var output = document.getElementById("output");
		var previousVal = output.getAttribute("prev");
		var currentVal = output.getAttribute("curr");

		if (currentVal != "") {
			if (previousVal == "") {

				output.setAttribute("prev", currentVal);
				output.innerHTML = "";
				output.setAttribute("curr", "");

			} else {

				var data = new Object();
				data.num_one = previousVal;
				data.num_two = currentVal;
				data.operation = id;
				data.history = getHistory();

				var jsonBody = JSON.stringify(data);
				var home = "http://" + location.host;
				var address = home + "/calc" + "/parse";

				//console.log(jsonBody)
				//console.log(address);

				$.ajax(
					{
						type: "POST",
						url: address,
						async: false,
						data: jsonBody,
						contentType: "application/json; charset=utf-8",
						dataType: 'json',
						success: function(data) {

							var result = data.result;
							var op = document.getElementById("output");
							op.setAttribute("prev", "");
							op.setAttribute("curr", result);
							op.innerHTML = result;
							addHistory(data.history);
						}
					}
				)

			}
		} else { alert("No value written!"); clearAllOperation }
	}

	function doEquation(id) {

		var output = document.getElementById("output");
		var previousVal = output.getAttribute("prev");
		var currentVal = output.getAttribute("curr");
	
		if (previousVal == "" || currentVal == "") {

			alert("Equation is not complete!");
		}

		 else {
			
		 	var status = checkNumber(previousVal);
		 	var status = checkNumber(currentVal);

			var data = new Object();
			data.num_one = previousVal;
			data.num_two = currentVal;
			data.operation = id;
			data.history = getHistory();

			var jsonBody = JSON.stringify(data);
			var home = "http://" + location.host;
			var address = home + "/calc" + "/parse";
			console.log(jsonBody)
			console.log(address);
			$.ajax(
				{
					type: "POST",
					url: address,
					data: jsonBody,
					async: false,
					contentType: "application/json; charset=utf-8",
					dataType: 'json',
					success: function(data) {
						// data = JSON.stringify(data);
						console.log(data);
						var result = data.result;
						console.log(result);
						var op = document.getElementById("output");
						op.setAttribute("prev", "");
						op.setAttribute("curr", result);
						op.innerHTML = result;
						addHistory(data.history);
					}
				}
			)
		}
	}

	function checkNumber(numb) {

		var count = 0;
		for (var i = 0; i < numb.length; i++) {
		
			if (numb.charAt(i) == ".") {
				count += 1;
			}
		}
		if (count >= 1) {
			return "bad" 
		} else { return "good"}
		
	}

	function getHistory() {

		var hist = document.getElementsByClassName("calc-hist")[0];
		var histVal = hist.getAttribute("value");
		return histVal;
	}

	function addHistory(value) {

		var hist = document.getElementsByClassName("calc-hist")[0]; 
		hist.setAttribute("value", value);
		hist.innerHTML = value;
	}

	function findActiveOperator() {

		var add = document.getElementById("add").getAttribute("value");
		var sub = document.getElementById("sub").getAttribute("value");
		var mul = document.getElementById("mul").getAttribute("value");
		var div = document.getElementById("div").getAttribute("value");
		if (add == 1)  { return "add";}
		if (sub == 1)  { return "sub";}
		if (mul == 1)  { return "mul";}
		if (div == 1)  { return "div";}
		return "false";
	}

	function clearOperation (id) {

		if (id != "add") { document.getElementById("add").setAttribute("value", 0); }
		if (id != "sub") { document.getElementById("sub").setAttribute("value", 0); }
		if (id != "mul") { document.getElementById("mul").setAttribute("value", 0); }
		if (id != "div") { document.getElementById("div").setAttribute("value", 0); }
	}

	function clearAllOperation () {
		
		document.getElementById("add").setAttribute("value", 0);
		document.getElementById("sub").setAttribute("value", 0);
		document.getElementById("mul").setAttribute("value", 0);
		document.getElementById("div").setAttribute("value", 0);
	}
}

