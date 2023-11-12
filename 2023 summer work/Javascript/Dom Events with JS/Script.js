var logMousePosition = function() {
    console.log( event.clientX + ' x ' + event.clientY );
}

document.addEventListener( 'mousemove', logMousePosition, false );