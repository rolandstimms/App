

if (window.location.pathname == "/swag") {
    alert("IT WORKS!!");
	currentPage = "";


	function createSwagger() {

		var index_url_input = document.getElementsByClassName('index-url-input')[0].value;
		var index_methods = document.getElementsByClassName('index-method');
		var data = new Object();
		data.url = index_url_input;
		data.methods = [];
		for (var met = 0; met <= index_methods.length - 1; met++) {
			var method = new Object;
			var index_method = index_methods[met];


			var method_select = index_method.getElementsByClassName('method_select')[0].value;
			method.method = method_select;

			var bodyIncluded = index_method.getElementsByClassName('body-included')[0];
			if (bodyIncluded.checked == true) {
				method.body = "true";
			}
			else {
				method.body = "false";
			}

			var exampleIncluded = index_method.getElementsByClassName('example-included')[0];
			if (exampleIncluded.checked == true) {
				method.example = "true";
			}
			else {
				method.example = "false";
			}

			var request_body = index_method.getElementsByClassName('index-request-body')[0].value;
			method.requestBody = JSON.parse(request_body);


			method.responses = [];

			var index_responses = index_method.getElementsByClassName('index-response-box');

			for (var i = 0; i <= index_responses.length - 1; i++) {

				var index_response = index_responses[i];
				var response = new Object();
				response.statusCode = index_response.getElementsByClassName('index-response-code')[0].value;
				var responseBody = JSON.parse(index_response.getElementsByClassName('index-response-body')[0].value);
				response.responseBody = responseBody;
				method.responses.push(response);
			}

			//check if body in request included Start

			//check if body in request included END
			//check if example in request included START

			//check if example in request included END

			data.methods.push(method);
		}

		var jsonBody = JSON.stringify(data);
		var home = "http://" + location.host;
		var address = home + "/swag" + "/parse";
        console.log(jsonBody)
		console.log(address);
		$.ajax(
			{
				type: "POST",
				url: address,
				data: jsonBody,
				contentType: "application/json; charset=utf-8", dataType: 'json',

				success: function(data) {
					// data = JSON.stringify(data);
					var result = document.getElementsByClassName("swagger-result-body")[0];
					result.value = data.result;

					var resultBox = document.getElementsByClassName("swagger_result")[0];
					resultBox.style.display = "block";
					resultBox.scrollIntoView();
				}
			}
		)


	}
	function addResponse(id) { // ---> Button AddResponse

		const index_responses = document.getElementsByClassName('index-responses')[id];
		count = index_responses.getElementsByClassName('index-response-box').length;
		const index_response_box = document.createElement('div');
		index_response_box.setAttribute('class', 'index-response-box');
		index_response_box.setAttribute('id', count);
		index_response_box.innerHTML = document.getElementsByClassName('index-response-box')[0].innerHTML;
		index_response_box.getElementsByClassName('add')[0].id = parseInt(id)
		index_response_box.getElementsByClassName('remove')[0].id = count;
		index_responses.appendChild(index_response_box);


	}
	function addMethod(id) { // ---> Button AddMethod

		var new_id = parseInt(id) + 1;
		const index_methods = document.getElementsByClassName("index-methods")[0];
		const index_method = document.createElement('div');
		index_method.setAttribute('class', 'index-method');
		index_method.setAttribute('id', new_id);
		index_method.innerHTML = document.getElementsByClassName('index-method')[0].innerHTML;
		index_method.getElementsByClassName('add')[0].id = new_id;
		index_methods.appendChild(index_method);
		const index_responses = index_method.getElementsByClassName('index-responses')[0];
		var htmlStr = index_responses.getElementsByClassName('index-response-box')[0].innerHTML;
		const index_response_box = document.createElement('div');
		index_response_box.setAttribute('class', 'index-response-box');
		index_response_box.setAttribute('id', new_id);
		index_response_box.innerHTML = htmlStr;
		index_method.getElementsByClassName('index-response-body')[0].value ;
		index_responses.innerHTML = "";
		index_responses.appendChild(index_response_box);
		index_response_box.getElementsByClassName('index-response-body')[0].value = "";
		document.getElementsByClassName('add-method')[0].id = new_id
	}

}

