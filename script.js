const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = '/images/logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

const ghibli = fetch('https://ghibliapi.herokuapp.com/films')
  .then(response => {
    
      console.log(response);
   
    return response.json();
  })
  .then(data => {
 
    data.forEach (datas => {
          // Create a div with a card class
  const card = document.createElement('div')
  card.setAttribute('class', 'card')

  // Create an h1 + h2 and set the text content to the film's title
  const h2 = document.createElement('h2')
  const h3 = document.createElement ('h3')
  h2.textContent = datas.title
  h3.textContent = datas.release_date



  // Create a p and set the text content to the film's description
  const p = document.createElement('p')
  datas.description = datas.description.substring(0, 500) // Limit to 300 chars
  p.textContent = datas.description

  // Append the cards to the container element
  container.appendChild(card);

  // Each card will contain an h1, h2 and a p
  card.appendChild(h2)
  card.appendChild(h3)
  card.appendChild(p);
    })

  
})
  .catch(err => {
    console.log('error');
  }) 