// @render serial-write
edgeserial.redirect( EdgeSerialPin.P0, EdgeSerialPin.P1, EdgeBaudRate.BaudRate115200 )
input.onButtonPressed( Button.A, function () {
    edgeserial.writeLine( "hello" )
    edgeserial.writeValue( "x", 42 )
} )
// @endrender

// @render serial-read
edgeserial.onDataReceived( edgeserial.delimiters( Delimiters.NewLine ), function () {
    basic.showString( edgeserial.readLine() )
} )
// @endrender
