const container = document.getElementById("website_container")

/*<li><a href="https://www.example3.com">Example 3</a></li>*/

function handleDiv(data = {url: "", title: ""}){
  const a = document.createElement('a')
  const li = document.createElement('li')
  a.href = data.url
  a.target = '_blank'
  a.innerText = data.title
  li.appendChild(a)
  container.appendChild(li)
}

fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      if (item[0].toLowerCase() === "apps"){
        const links = item[1]
        links.forEach(link => {
          handleDiv({url: link[0], title: link[1]})
        })
      }
    })
  })