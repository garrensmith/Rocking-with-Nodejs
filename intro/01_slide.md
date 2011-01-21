!SLIDE center 
# Rocking out with Nodejs
### by Garren Smith
![band](band2.png)

!SLIDE center
# About me
![me](Contact.png)

!SLIDE bullets incremental
# Table of Contents

* Opening Notes
* Rockstar
* Discography
* Demo
* Fade out

!SLIDE bullets incremental
#What is Nodejs

  * Server-side Javascript
  * Built on Google’s V8 js engine
  * Evented, non-blocking I/O. 

!SLIDE center
#How does it work?
![rockstar](guitar.jpg)

!SLIDE center
#How does it work?
![groupie](groupies.jpg)

!SLIDE center
# huh?
![puzzled](puzzled.jpg)  

!SLIDE center
#Traditional blocking code
    @@@javascript
        var result = db.getUser(1);
        
!SLIDE center
#Non-blocking code
    @@@javascript
        db.getUser(1, function (result) {
          // do something with result
        });

!SLIDE center
# Why should I use it?
![gibson](gibson.jpg)



!SLIDE
#Hello World
    @@@javascript
      setTimeout(function () {
        console.log("world");
        }, 2000);

        console.log("hello");

!SLIDE commandline incremental
#Hello World Output

    $node hello.js
    hello
    ... wait 2 seconds ...
    world
  
    


