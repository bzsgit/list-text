let names = ['Kat', '<strong>Zsu</strong>', 'Gyurka', 'Edit']
console.log(names[1])


names.forEach(name => {
    $('ul').append('<li> ' + name +' </li>');

});
let additionalBlock = {
    title: 'Added with javascript',
    text: 'This block was added using Javascript'
}

$('body').append('<h1> '+ additionalBlock.title +'  </h1> ', '<p> '+ additionalBlock.text +' </p>')


