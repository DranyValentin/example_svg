(function() 
{
	"use strict"

	console.log("It's ok!!!")
	var $body = document.querySelector('body')
	console.log($body)
	$body.addEventListener("click", () =>
	{
		console.log("Body")
	})

})()