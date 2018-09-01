import React, { Component } from "react";
import doggo from "./doggo.png";
import "./HomePage.css";

class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <img src={doggo} alt="doggo" />
        <div className="text-container">
          <p className="header">Why Wheelies?</p>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum
            dolor sit amet consectetur adipiscing elit ut aliquam. Metus dictum
            at tempor commodo ullamcorper a lacus. Viverra aliquet eget sit amet
            tellus cras adipiscing. Ultricies mi eget mauris pharetra et
            ultrices. Id diam vel quam elementum pulvinar. Phasellus faucibus
            scelerisque eleifend donec. Volutpat commodo sed egestas egestas
            fringilla phasellus faucibus scelerisque. Consectetur adipiscing
            elit ut aliquam purus sit amet luctus. Faucibus et molestie ac
            feugiat sed lectus vestibulum mattis. Viverra nibh cras pulvinar
            mattis nunc. Nunc mattis enim ut tellus elementum sagittis vitae. Ac
            odio tempor orci dapibus ultrices in. Elementum tempus egestas sed
            sed risus. Dignissim convallis aenean et tortor at. Amet nulla
            facilisi morbi tempus iaculis. Neque gravida in fermentum et
            sollicitudin ac. Dolor sit amet consectetur adipiscing elit. Ut
            tellus elementum sagittis vitae et. Fringilla phasellus faucibus
            scelerisque eleifend donec pretium vulputate sapien nec.
            <br />
            <br />
            Ultrices gravida dictum fusce ut. Diam vel quam elementum pulvinar
            etiam non quam. In dictum non consectetur a. Fusce ut placerat orci
            nulla pellentesque dignissim enim. Curabitur vitae nunc sed velit
            dignissim sodales ut eu sem. Purus sit amet volutpat consequat.
            Semper viverra nam libero justo laoreet sit amet cursus sit. In arcu
            cursus euismod quis viverra. At auctor urna nunc id cursus metus
            aliquam. Facilisis sed odio morbi quis commodo. Ullamcorper sit amet
            risus nullam eget felis. Vulputate odio ut enim blandit volutpat.
            Aliquet nec ullamcorper sit amet risus.
            <br />
            <br />
            Feugiat vivamus at augue eget arcu dictum varius duis at. Neque
            aliquam vestibulum morbi blandit cursus risus. Orci sagittis eu
            volutpat odio facilisis mauris. Ut lectus arcu bibendum at varius
            vel. Maecenas ultricies mi eget mauris pharetra et ultrices. Elit
            pellentesque habitant morbi tristique senectus. Facilisi etiam
            dignissim diam quis enim lobortis scelerisque. Pharetra diam sit
            amet nisl suscipit adipiscing bibendum. Dui id ornare arcu odio ut
            sem nulla pharetra. Natoque penatibus et magnis dis parturient.
            Habitant morbi tristique senectus et netus et malesuada. In eu mi
            bibendum neque egestas congue quisque. Hac habitasse platea dictumst
            vestibulum rhoncus est pellentesque elit. Tortor posuere ac ut
            consequat semper viverra. Eu scelerisque felis imperdiet proin
            fermentum leo vel orci.
          </p>
        </div>
      </div>
    );
  }
}

export default HomePage;
