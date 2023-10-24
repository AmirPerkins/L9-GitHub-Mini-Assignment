// JavaScript code for form validation
function main()
{ 
  // Prevent form from submitting
  let submit = document.getElementsByTagName("button")[0];
  submit.addEventListener("click", function (evt)
  {
    evt.preventDefault();
  // Retrieve the input field value
  valForm = document.getElementById("myForm");
  inField = valForm.elements["inputField"].value;
  // Regular expression pattern for alphanumeric input
  /* I inversed the regex so that it searches for non alphanumeric
  charaters anywhere in the string */
  const pattern = /[^a-zA-Z\d\s:]/;
  // Check if the input value matches the pattern
    if (pattern.test(inField) || (inField === "")) 
    {
      // Invalid input: display error message
      alert("input must be alphanumeric and not empty");
    }
    else if (!pattern.test(inField))
  // Valid input: display confirmation and submit the form    
    {
      valForm.submit();
      alert("Succees! Input is valid and form is submitted");
    }
  console.log("perfect");
  })
  }
main();

/* I used alert windows because I wasn't sure if you wanted me to 
display the error message in a different way. If there was I'd 
be happy to know what it was. Thank you */

