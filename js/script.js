var toDoText;

function addToDo() {
    toDoText = $('#to-do-input').val();

    if (toDoText != '' && toDoText.split(' ')[0].length < 21) {
        $('#container').append('\
        <div class="to-do max-w-full flex justify-center items-center">\
            <p class="to-do-text w-64 sm:w-96 m-2 h-fit p-4 bg-inherit border-2 rounded-sm border-solid border-slate-700 text-2xl text-slate-700 focus:outline-none shadow focus:shadow-lg hover:shadow-lg duration-500"></p>\
            <button class="remove-button w-28 sm:w-32 mx-2 sm:mx-4 h-16 p-2 border-2 rounded-sm border-solid border-slate-700 text-2xl text-slate-700 focus:outline-none shadow hover:shadow-lg duration-500">Remove</button>\
        </div>');

        $('.to-do-text').last().append(toDoText);

        $('#to-do-input').val('');
    }
}

function removeToDo() {
    $('.remove-button').click(function(){
        $(this).parent('.to-do').remove();
    });
}

$(document).ready(function() {
    $('#add-button').click(function(){
        addToDo();

        removeToDo();
    });
});
