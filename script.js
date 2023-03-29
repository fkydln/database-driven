function generateHTML() {
  // Get the values from the form fields
  var websiteName = document.getElementById("websiteName").value;
  var date = document.getElementById("date").value;
  var color = document.getElementById("color").value;

  // Create a new HTML file
  var newPage = document.createElement("html");

  // Create the head section
  var head = document.createElement("head");
  var title = document.createElement("title");
  title.appendChild(document.createTextNode(websiteName));
  head.appendChild(title);
  newPage.appendChild(head);

  // Create the body section
  var body = document.createElement("body");
  body.style.backgroundColor = color;
  var heading = document.createElement("h1");
  heading.appendChild(document.createTextNode(websiteName));
  var paragraph1 = document.createElement("p");
  paragraph1.appendChild(document.createTextNode("Created on " + date));
  var paragraph2 = document.createElement("p");
  paragraph2.appendChild(
    document.createTextNode(
      "This is an HTML page fulfilled by a master webpage."
    )
  );
  body.appendChild(heading);
  body.appendChild(paragraph1);
  body.appendChild(paragraph2);
  newPage.appendChild(body);

  // Generate the HTML code
  var htmlCode = "<!DOCTYPE html>\n" + newPage.outerHTML;

  // Open the new HTML page in a new tab
  var newWindow = window.open("", "_blank");
  newWindow.document.write(htmlCode);
}
