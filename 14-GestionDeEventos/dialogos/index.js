const boton = document.getElementById('btn');

boton.addEventListener('click', () => {
    //console.log('clicked')
    //alert("CLICKED")
    confirm("you clicked this button?")
        ? console.log('yes')
        : console.log('no')
})