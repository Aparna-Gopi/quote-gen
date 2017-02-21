function randomquote(){
    var quotes = ["Be yourself; everyone else is already taken","Life is really simple, but we insist on making it complicated.","You cannot have a positive life and a negative mind.", "Life is 10% what happens to you and 90% how you react to it.","You know you're in love when you can't fall asleep because reality is finally better than your dreams.", "Be the change that you wish to see in the world", "It is never too late to be what you might have been", "Not everything that can be counted counts, and not everything that counts can be counted.","Sometimes good things fall apart so better things can fall together."]

  var color = ["Aqua", "red","Lavender","LavenderBlush","pink","Chocolate","Crimson","Gold","blue", "yellow"]

  var randomquo = Math.floor(Math.random() * ( quotes.length - + 1))
  var randomcol = Math.floor(Math.random() * ( color.length - + 1))
  
   
  document.getElementById('quote-text').innerHTML = quotes[randomquo]
  document.body.style.backgroundColor = color[randomcol];
}
