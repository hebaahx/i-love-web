let doneButton = document.querySelector('.done-btn');

let doSomething = function() {
    alert('Het werkt!');
}

doneButton.addEventListener('click', doSomething);
