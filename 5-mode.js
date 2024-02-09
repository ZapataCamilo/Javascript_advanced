function changeMode(size, weight, transform, background, color) {
    return function () {
        document.body.style.size = size;
        document.body.style.weight = weight;
        document.body.style.transform = transform;
        document.body.style.background = background;
        document.body.style.color = color;
    };
}

function main() {
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    let createP = document.createElement('p');
    createP.innerText = 'Welcome Holberton!';
    document.body.appendChild(createP);

    let createB = document.createElement('button');
    createB.innerText = 'Spooky';
    createB.onclick = spooky;
    document.body.appendChild(createB);

    let createBlackB = document.createElement('button');
    createBlackB.innerText ='Dark mode';
    createBlackB.onclick = darkMode;
    document.body.appendChild(createBlackB);

    let createS = document.createElement('button');
    createS.innerText = 'Scream mode';
    createS.onclick = screamMode;
    document.body.appendChild(createS);
}

main();