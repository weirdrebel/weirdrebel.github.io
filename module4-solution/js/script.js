(function () {
  var names = [
    'Yaakov',
    'John',
    'Jen',
    'Jason',
    'Paul',
    'Frank',
    'Larry',
    'Paula',
    'Laura',
    'Jim',
    'Rebel',
  ];

  var nameList = document.querySelector('.name-list'); // Get the ul element

  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    var listItem = document.createElement('li'); // Create a new list item element

    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
      listItem.textContent = 'Good Bye ' + names[i];
      listItem.classList.add('goodbye'); // Apply the "goodbye" class
    } else {
      helloSpeaker.speak(names[i]);
      listItem.textContent = 'Hello ' + names[i];
      listItem.classList.add('hello'); // Apply the "hello" class
    }

    nameList.appendChild(listItem); // Add the list item to the ul element
  }
})();
