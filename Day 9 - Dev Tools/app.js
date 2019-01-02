const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }


    // Regular
    // Interpolated
    // Styled
      console.log("i am %c some texty text", "background-color: yellow; font-size: 33px;")
    // warning!
    console.warn("WARRRRRRRRIIIING!");
    // Error :|
    // Info
    console.info("It takes around 8mins for sunlight to come to earth.");
    // Testing -- Throws error if false
    console.assert(1 === 3, "THAT SHI is false!");
    // clearing
    // Viewing DOM Elements
    let p = document.querySelector("p");
    console.dir(p);
    // Grouping together
    dogs.forEach(dog => {
        console.groupCollapsed(`${dog.name}`);
        console.log(dog.name);
        console.log(dog.age);
        console.groupEnd(`${dog.name}`);
    })
    
    // counting
    // timing
    console.time("fetching data");
    fetch("https://api.github.com/users/Archaeologist03")
        .then(data => data.json())
        .then(data => {
            console.timeEnd("fetching data");
            console.log(data);
        })