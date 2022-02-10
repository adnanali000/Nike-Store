const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      description:'Designed by Bruce Kilgore and introduced in 1982, the Air Force 1 was the first ever basketball shoe to feature Nike Air technology, revolutionizing the game and sneaker culture forever.',
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      description:" Air Jordan is an American brand of basketball shoes, athletic, casual, and style clothing produced by Nike.",
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      description:"Nike Blazer Mid '77 Vintage Men's Shoes · Leather and synthetic upper keeps the classic look of the original while adding comfort and support.",
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      description:"Lifted Crater foam midsole adds stability with a unique speckled appearance.",
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      description:"Space Hippie is an exploratory footwear collection inspired by life on Mars—where materials are scarce and there is no resupply mission.",
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];

  let choosenProduct = products[0];
  
  const currentProductImg = document.querySelector(".productImg");
  const currentProductTitle = document.querySelector(".productTitle");
  const currentProductPrice = document.querySelector(".productPrice");
  const currentProductDesc = document.querySelector(".productDesc");
  const currentProductColors = document.querySelectorAll(".color");
  const currentProductSizes = document.querySelectorAll(".size");


  

//slider work and product work
menuItems.forEach((item,index)=>{
    item.addEventListener('click',()=>{
        //change current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`

        //change choosen product
        choosenProduct = products[index]

        //change text of current profuct
        currentProductTitle.textContent = choosenProduct.title
        currentProductPrice.textContent = "$" + choosenProduct.price
        currentProductDesc.textContent = choosenProduct.description
        currentProductImg.src = choosenProduct.colors[0].img;

        //assing new colors
        currentProductColors.forEach((color,index)=>{
            color.style.backgroundColor = choosenProduct.colors[index].code;
        })

    })
})

//change image according to color
currentProductColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentProductImg.src = choosenProduct.colors[index].img
    })
})

//change size color
currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor="white";
            size.style.color="black"
        })
        size.style.backgroundColor="black";
        size.style.color="white"
    })
})

