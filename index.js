let userInput = prompt("choose the weather \n1.Sunny \n2.Windy \n3.Snowy \n4.Cloudy\n5.Rainy  !");

userInput = userInput.toLowerCase();


     if (userInput === "windy") { 
      document.write(`
        <div class="container-fluid windy-bg" style="padding: 20px;">
          <div class="card" style="width: 18rem;">
             <img src="https://i.gifer.com/origin/c1/c1d0ee616534a1b2e4a5ef9e8e55e339_w200.gif" style="width: 180%; height: 20rem;" class="card-img-top " alt="">
            <div class="card-body">
              <h5 class="card-title h1">Windy</h5>
              <p class="card-text"><p>"Windy weather brings a refreshing breeze, but strong gusts can make it feel wild and unpredictable."</p>
            </div>
          </div>
        </div>
      `);
  }

  else if (userInput === "sunny") { 
    document.write(`
      <div class="container-fluid sunny-bg" style="padding: 20px;">
        <div class="card" style="width: 18rem; ;">
          <img src="https://gifdb.com/images/high/animated-sunny-day-beach-chill-snoopy-7xugpbb9m34kukv6.gif" style="width: 100%; height: 20rem;" class="card-img-top " alt="">
          <div class="card-body">
            <h5 class="card-title h1">Sunny</h5>
            <p class="card-text"><p>"A bright and beautiful day! Don’t forget your sunglasses!"</p>
          </div>
        </div>
      </div>
    `);
}
  

else if (userInput === "cloudy") { 
  document.write(`
    <div class="container-fluid cloudy-bg" style="padding: 20px;">
      <div class="card" style="width: 18rem; ;">
        <img src="https://i.pinimg.com/originals/1c/99/06/1c9906c57206c6ae2c81f3e307231ffc.gif" style="width: 100%; height: 20rem;" class="card-img-top " alt="">
        <div class="card-body">
          <h5 class="card-title h1">Cloudy</h5>
          <p class="card-text"><p>""Cloudy days remind us that even without the sun's warmth, there's a unique beauty in the calm and quiet they bring.""</p>
        </div>
      </div>
    </div>
  `);
}


else if (userInput === "rainy") { 
  document.write(`
    <div class="container-fluid rainy-bg" style="padding: 20px;">
      <div class="card" style="width: 18rem; ;">
        <img src="https://i.gifer.com/origin/97/970ce876cff15b1bd959296e1696e54d_w200.gif" style="width: 100%; height: 20rem;" class="card-img-top " alt="">
        <div class="card-body">
          <h5 class="card-title h1">Rainy</h5>
          <p class="card-text"><p>"Rainy days are perfect for cozy moments, warm drinks, and quiet thoughts."</p>
        </div>
      </div>
    </div>
  `);
}


else if (userInput === "snowy") { 
  document.write(`
    <div class="container-fluid snowy-bg" style="padding: 20px;">
      <div class="card" style="width: 18rem; ;">
        <img src="https://i.gifer.com/IqB.gif" style="width: 100%; height: 20rem;" class="card-img-top " alt="">
        <div class="card-body">
          <h5 class="card-title h1">Snowy</h5>
          <p class="card-text"><p>“The world outside transformed into a shimmering wonderland, where each flake fell softly like a whispered secret from the sky.”</p>
        </div>
      </div>
    </div>
  `);
}

else {
  alert("WRONG INPUT ,");
  alert("please enter the right weather name!");
}


