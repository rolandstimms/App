<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false"%>

<html>
<head>

    <meta charset="UTF-8">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Swagger</title>
    <!-- <link href="<c:url value='/resources/swaggerStyle.css'>" rel="stylesheet"> -->
    <link rel="stylesheet" href="/src/swaggerStyle.css">
    <link rel="stylesheet" href="/src/bootstrap.min.css">
    <title>Insert title here</title>

</head>


<body>
<div class="index-title">
    Create (somewhat) Swagger:<br>
</div>
<div class="whole-left-index">
    <div class="box">

        <!-- Start Of User Input -->
        <!-- Contents of this page preferably should go under "box" class(its inside GRID) -->

        <div class="index-options">Request:</div>
        <input type="text" class="index-url-input"><br>
        <div class="empty-row"></div>

        <div class="index-methods">
            <!-- one method START -->
            <div class="index-method" id="0">

                <div class="index-request-box">

                    <!-- option list START -->


                    <div class="index-options">
                        Method: <select class='method_select'>
                        <option>GET</option>
                        <option>POST</option>
                        <option>PUT</option>
                        <option>DELETE</option>
                    </select>
                    </div>

                    <div class="index-options"><input class="body-included" type="checkbox">&nbsp;Body Included</div>
                    <div class="index-options"><input class="example-included" type="checkbox" >&nbsp;Example included</div>
                    <textarea class="index-request-body" placeholder="Copy your request in here"></textarea><br>
                    <!-- option list END -->

                </div>

                <div class="index-responses" id="0"> <!-- mothod id -->

                    <div class="index-options">Responses</div>
                    <!-- one box of response START -->
                    <div class="index-response-box" id="0">

                        <div class="index-options">Status Code - <input type="number" autocomplete="off" class="index-response-code"></div> <!-- status code -->

                        <div class="response_body_box"><textarea class="index-response-body"placeholder="Copy your response in here" ></textarea></div> <!-- text box -->

                        <div class="index-options">
                            <button class="add" id="0" onClick="addResponse(id)">Add Response</button>&nbsp;<!-- method id -->
                            <button class="remove" id="0" onClick="removeResponse(id)">Remove Response</button><!-- response id -->
                        </div> <!-- buttons -->

                    </div>
                    <!-- one box response END -->
                </div>

            </div>


            <!-- one method END -->
        </div>

        <div class="index-options"><button class="add-method" id="0" onClick="addMethod(id)">Add Method</button></div>
        <div class="index-options"><button id="createSwagger" onClick="createSwagger()">Create Swagger</button></div>

        <!-- End Of User Input -->

        <div class="swagger_result">
            Generated swagger:
            <textarea class="swagger-result-body"></textarea>
        </div>
    </div>


</div>
</body>

<script src="/src/swaggerScript.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
</html>