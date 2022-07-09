const rocketsArr = [
  {
    name: "Falcon 1",
    engines: "1",
    launch_date: "2006-03-24",
    emoji: "🦅",
  },
  {
    name: "Falcon 9",
    engines: "27",
    launch_date: "2010-06-04",
    emoji: "🚀",
  },
  {
    name: "Falcon Heavy",
    engines: "27",
    launch_date: "2018-02-06",
    emoji: "👩🏼‍🚀",
  },
  {
    name: "Starship",
    engines: "6",
    launch_date: "2021-12-01",
    emoji: "👾",
  },
];


// Loop through the items
// Create the items
// Append the items

const createRocketElement = (rocket) => {
    const newRocketElement = `
    <article>
      <header>
        <h2>${rocket.emoji} - ${rocket.name}</h2>
      </header>
      <div class='content'>
        <ul>
          <li>
            <span>Engines(s): </span> ${rocket.engines}
          </li>
          <li>
            <span>Launch Date: </span> ${rocket.launch_date}
          </li>
        </ul>
      </div>
      <footer>
        Space X Rocket <em>${rocket.name}</em> was launched on ${rocket.launch_date} and was
        equipped with ${rocket.engines} Engine(s)
      </footer>
    </article>`;
    return newRocketElement;
}

const renderItems = (rockets) => {
 for(const rocket of rockets) {
  const newRocketElement = createRocketElement(rocket);
  const rocketContainer = $("#rockets-container");
  rocketContainer.append(newRocketElement);
}
}



$(document).ready(function(){
  renderItems(rocketsArr);
})
