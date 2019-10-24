import React from 'react';

class Counter extends React.Component {

    constructor(props) {
        super(props);
        // Get today's date and time
        var countDownDate = new Date("Oct 24, 2019 19:00:00").getTime();
        var timeZoneOffset = new Date().getTimezoneOffset() - (countDownDate);
        var now = new Date().getTime();
        // Find the distance between now and the count down date
        var distance = countDownDate - now - timeZoneOffset;
        if (distance < 0) {
            this.state = {
                date: 'ALBUM *SHOULD* BE OUT!'
            };
        } else{
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            this.state = {
                date: hours + "h "
                + minutes + "m " + seconds + "s"
            };
        }
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        // Get today's date and time
        var countDownDate = new Date("Oct 24, 2019 19:00:00").getTime();

        var timeZoneOffset = new Date().getTimezoneOffset() - (countDownDate);
        var now = new Date().getTime();
        // Find the distance between now and the count down date
        var distance = countDownDate - now - timeZoneOffset;
        if (distance < 0) {
            this.setState({
                date: 'ALBUM *SHOULD* BE OUT!'
            });
        } else{
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            this.setState({
                date: hours + "h "
                + minutes + "m " + seconds + "s"
            });
        }
        
    }
    render() {
        return (
            <div>
                <h4 style={{'font-family':'VCR'}}>KANYE WEST'S</h4>
                <h3 style={{'font-family':'NOVA','font-size':'380%'}}>JESUS IS KING</h3>
                <h1 style={{'font-family':'VCR'}}>{this.state.date}</h1>
            </div>
        );
        }
    }

export default Counter;