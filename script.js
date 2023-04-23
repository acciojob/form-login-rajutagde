function getFormvalue() {
  const form = document.getElementById("form1");
  const fname = form.elements["fname"].value;
  const lname = form.elements["lname"].value;
  alert(`${fname} ${lname}`);
}

