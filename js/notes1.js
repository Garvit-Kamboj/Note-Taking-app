// This function just checks if id is not undefined
function checkId(id) {
    'use strict';
    //Checking if id is not undefined
    if (id != 'undefined') {
        return document.getElementById(id);
    }
}

//This count is a counter so that user can press new notes button only once
let count = 0;
//This function adds elements as New Notes button is clicked
function add_element() {
    'use strict';
    if (count == 0) {
        //Creating text area element
        let textarea = document.createElement('textarea');
        textarea.setAttribute('placeholder', 'Enter Your Tasks');

        //Creating Save Button
        let save = document.createElement('button');
        save.setAttribute('id', 'save');
        let node = document.createTextNode('Save');
        save.appendChild(node);

        //Creating Cancel Button
        let cancel = document.createElement('button');
        cancel.setAttribute('id', 'cancel');
        let node_ = document.createTextNode('Cancel');
        cancel.appendChild(node_);

        //Appending buttons to their containers
        let div1 = checkId('savebutton');
        let div2 = checkId('cancelbutton');
        let section = checkId('note1');
        section.appendChild(textarea);
        div1.appendChild(save);
        div2.appendChild(cancel);
    }
    //Calling add content function to add written part to list
    var a = add_content();
    console.log(a);
    count = 1;
}

//This function adds content whtever user writes
function add_content() {
    'use strict';
    //making a list to save whatever user enters 
    let tasks = [];

    //getting reference for output
    let output = checkId('output');

    //getting reference for textarea element
    let text = document.querySelector('textarea');

    //getting reference for save button
    let save = checkId('save');

    save.onclick = function () {

        if ((text.value).trim() == '') //Trim used to remove spaces i.e if user just presses spacebar, it shouldn't be added to list
            alert('Text Area cannot be Empty')
        else {
            //adding to list whatever user has written
            tasks.push(text.value);

            //clearing the text area element
            text.value = '';

            //declaring a message as shown
            let message = '<h2>To - Do</h2><p></p><ol>';

            for (let i = 0, count = tasks.length; i < count; i++) {
                //whatever inside list is added to message
                message += '<li>' + tasks[i] + ' </li>'

            }
            message += '</ol>';
            //finally, adding message to output
            output.innerHTML = message;
        }
    }
    cancel.onclick = function () {
        if ((text.value).trim() == '')
            alert("There's nothing to cancel"); //If user entered nothing 
        else
            text.value = ''; //if user wants to delete whatever he/she entered
    }

    return tasks
}


function changeColor() {
    document.body.style.backgroundColor = '#001a33';
    document.querySelector('nav').style.backgroundColor = '#000d1a';
    document.querySelector('aside').style.backgroundColor = '#000d1a';
    document.querySelector('div').style.backgroundColor = '#00264d';
    document.querySelector('p').style.color = '#d6eaff';
    document.getElementById('output').style.backgroundColor = '#d6eaff';
    document.getElementById('theme').innerText = 'Light';
    document.getElementById('theme').onclick = defaultColor;
}


function defaultColor() {
    document.body.style.backgroundColor = 'antiquewhite';
    document.querySelector('nav').style.backgroundColor = 'aquamarine';
    document.querySelector('aside').style.backgroundColor = 'aquamarine';
    document.querySelector('div').style.backgroundColor = 'aqua';
    document.querySelector('p').style.color = 'black';
    document.getElementById('output').style.backgroundColor = 'aquamarine';
    document.getElementById('theme').innerText = 'Dark';
    document.getElementById('theme').onclick = changeColor;
}

//This function basically is called as page loads and is reference to start all stuff going all over page
function init() {
    'use strict';

    //getting reference for button element which has id of notes
    let notes = checkId('notes');

    //As notes is clicked just call add_element function to create textarea, save and cancel button
    notes.onclick = add_element;

    let theme = checkId('theme');
    theme.onclick = changeColor;

}

//As Html page loads, calling init function
window.onload = init;