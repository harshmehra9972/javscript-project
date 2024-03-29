const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "menu-item.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 10,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    
 
  ];

  let scenter = document.querySelector('.section-center');
  let filterbtn = document.querySelectorAll('.filter-btn');

  window.addEventListener('DOMContentLoaded',function () {
  displaymenuitem(menu)
   
  })


  filterbtn.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      let category = e.currentTarget.dataset.id;
      let menucategory;
  
      if (category === 'all') {
        displaymenuitem(menu);
      } else {
        menucategory = menu.filter(function(menuitem) {
          return menuitem.category === category;
        });
        displaymenuitem(menucategory);
      }
    });
  });
  

  function displaymenuitem(menuitem){
    let displaymenu =menuitem.map( function(item){
      return  ` <article class="menu-item">
      <img src="${item.img}" alt="${item.title}" class="photo" />
      <div class="item-info">
        <header>
          <h4>   ${item.title}</h4>
          <h4 class="price">${item.price} </h4>
        </header>
        <p class="item-text">
        ${item.desc}
        </p>
      </div>
    </article>`;
    })
    displaymenu=displaymenu.join(' ');
   scenter.innerHTML = displaymenu;
  }