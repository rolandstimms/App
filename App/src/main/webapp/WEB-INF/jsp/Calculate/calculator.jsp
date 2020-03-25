<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false"%>

<html>
<head>

	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Calculator</title>
	<link rel="stylesheet" href="/src/calcStyle.css">
	<link rel="stylesheet" href="/src/bootstrap.min.css">
	<title>Index Page</title>

</head>

<body>
<!-- <div class="boxx"> -->
	<div class="calc-box">
		<div class="calc-input-box">
			<div class="calc-hist" value="">

			</div>
			<div class="calc-input">
				<div class="calc-curr" id="output" prev="" curr="">
				
				</div>
			</div>
		</div>
		<!-- ------ -->
		<div class="calc-button-box">
			<div class="calc-button calc-button-one-box">
				<div class="calc-button-inside-box" id="1" onclick="addNumber(id)">
					1
				</div>
			</div>
			<!-- ------ -->
			<div class="calc-button calc-button-two-box">
				<div class="calc-button-inside-box" id="2" onclick="addNumber(id)">
					2
				</div>
			</div>
			<!-- ------ -->
			<div class="calc-button calc-button-three-box">
				<div class="calc-button-inside-box" id="3" onclick="addNumber(id)">
					3
				</div>
			</div>
			<!-- ------ -->
			<div class="calc-button calc-button-four-box">
				<div class="calc-button-inside-box" id="4" onclick="addNumber(id)">
					4
				</div>
			</div>
			<!-- ------ -->
			<div class="calc-button calc-button-five-box">
				<div class="calc-button-inside-box" id="5" onclick="addNumber(id)">
					5
				</div>
			</div>
			<!-- ------ -->
			<div class="calc-button calc-button-six-box">
				<div class="calc-button-inside-box" id="6" onclick="addNumber(id)">
					6
				</div>
			</div>
			<!-- ------ -->
			<div class="calc-button calc-button-seven-box">
				<div class="calc-button-inside-box" id="7" onclick="addNumber(id)">
					7
				</div>
			</div>
			<!-- ------ -->
			<div class="calc-button calc-button-eight-box">
				<div class="calc-button-inside-box" id="8" onclick="addNumber(id)">
					8
				</div>
			</div>
			<!-- ------ -->
			<div class="calc-button calc-button-nine-box">
				<div class="calc-button-inside-box" id="9" onclick="addNumber(id)">
					9
				</div>
			</div>
			<div class="calc-button calc-button-zero-box">
				<div class="calc-button-inside-box" id="0" onclick="addNumber(id)">
					0
				</div>
			</div>
			<div class="calc-button calc-button-dot-box">
				<div class="calc-button-inside-box" id="dot" onclick="addElement(id)">
					.
				</div>
			</div>
			<div class="calc-button calc-button-equal-box">
				<div class="calc-button-inside-box" id="equal" onclick="addElement(id)">
					=
				</div>
			</div>
			<!-- ------ -->
			<div class="calc-button-sidebar">

				<div class="calc-button-hey calc-button-add-box">
					<div class="calc-button-inside-box" id="add" onclick="addElement(id)" value="0">
						+
					</div>
				</div>
				<!-- ------ -->
				<div class="calc-button-hey calc-button-sub-box">
					<div class="calc-button-inside-box" id="sub" onclick="addElement(id)" value="0">
						-
					</div>
				</div>
				<!-- ------ -->
				<div class="calc-button-hey calc-button-mul-box">
					<div class="calc-button-inside-box" id="mul" onclick="addElement(id)" value="0">
						*
					</div>
				</div>
				<!-- ------ -->
				<div class="calc-button-hey calc-button-div-box">
					<div class="calc-button-inside-box" id="div" onclick="addElement(id)" value="0">
						/
					</div>
				</div>
				<!-- ------ -->
				<div class="calc-button-hey calc-button-clear-box">
					<div class="calc-button-inside-box" id="clear" onclick="addElement(id)" value="0">
						C
					</div>
				</div>
				<!-- ------ -->
			</div>
			<!-- ------ -->
		</div>
	</div>
<!-- </div> -->
</body>


<script src="/src/calcScript.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
</html>
