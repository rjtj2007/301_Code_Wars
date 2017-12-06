function abbrevName(name){
  var toUpper = name.toUpperCase();
  var names = toUpper.split(" ");
  var firstName = names[0];
  var lastName = names[1];
  var firstNameInitials = firstName.split("");
  var lastNameInitials = lastName.split("");
  var firstInitial = firstNameInitials[0];
  var lastInitial = lastNameInitials[0];
  return firstInitial + '.' + lastInitial;
}