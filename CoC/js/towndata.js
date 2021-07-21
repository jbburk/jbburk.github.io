fetch("json/towndata.json")
  .then((response) => response.json())
  .then((data) => {    
    console.log(data);
    for (let i = 0; i < data.length; i++){
      let card = document.createElement('div');
      let name = document.createElement('h2');
      let photo = document.createElement('img');
      let phone = document.createElement('p');
      let url = document.createElement('a');

      name.textContent = data[i].business;
      phone.textContent = data[i].phone;
      url.textContent = `${data[i].business} Website`;
      url.setAttribute('href', data[i].url);
      url.setAttribute('target', '_blank');
      photo.setAttribute('src', `images/${data[i].logo}`);
      photo.setAttribute('alt', `${data[i].business} Logo`);
      photo.setAttribute('width', '250px');
      photo.setAttribute('height', 'auto');

      card.appendChild(name);
      card.appendChild(phone);
      card.appendChild(url);
      card.appendChild(photo);

      document.getElementById("directoryWrapper").appendChild(card);
    }
  });
