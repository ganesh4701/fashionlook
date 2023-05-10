const logo = document.querySelector('.logo')

const navItem1 = document.getElementById('navItem1')
const navItem2 = document.getElementById('navItem2')
const navItem3 = document.getElementById('navItem3')
const navItem4 = document.getElementById('navItem4')
const banner = document.querySelector('.banner')

const randP = document.getElementById('randSection')

const mobileS = document.getElementById('mobileSection')
const laptopS = document.getElementById('laptopSection')
const accS = document.getElementById('assetSection')
const homeS = document.getElementById('homeSection')

logo.onclick = function () {
  banner.classList.remove('hide')
  randP.classList.remove('hide')
  mobileS.classList.add('hide')
  laptopS.classList.add('hide')
  accS.classList.add('hide')
  homeS.classList.add('hide')

  cartMenu.classList.add('hide')
}
navItem1.onclick = function () {
  banner.classList.remove('hide')
  randP.classList.add('hide')
  mobileS.classList.remove('hide')
  laptopS.classList.add('hide')
  accS.classList.add('hide')
  homeS.classList.add('hide')

  cartMenu.classList.add('hide')
}
navItem2.onclick = function () {
  banner.classList.remove('hide')
  randP.classList.add('hide')
  mobileS.classList.add('hide')
  laptopS.classList.remove('hide')
  accS.classList.add('hide')
  homeS.classList.add('hide')
  cartMenu.classList.add('hide')
}
navItem3.onclick = function () {
  banner.classList.remove('hide')
  randP.classList.add('hide')
  mobileS.classList.add('hide')
  laptopS.classList.add('hide')
  accS.classList.remove('hide')
  homeS.classList.add('hide')
  cartMenu.classList.add('hide')
}
navItem4.onclick = function () {
  homeS.classList.remove('hide')
  randP.classList.add('hide')
  mobileS.classList.add('hide')
  laptopS.classList.add('hide')
  accS.classList.add('hide')
  cartMenu.classList.add('hide')
}
const openCart = document.getElementById('openCart')
const cartMenu = document.getElementById('cart')
const closeCart = document.querySelector('.cart-close-btn')

openCart.onclick = () => {
  homeS.classList.add('hide')
  randP.classList.add('hide')
  mobileS.classList.add('hide')
  laptopS.classList.add('hide')
  accS.classList.add('hide')
  banner.classList.add('hide')
  cartMenu.classList.remove('hide')
  openCart.disable = true
}
closeCart.onclick = () => {
  homeS.classList.add('hide')
  randP.classList.remove('hide')
  mobileS.classList.add('hide')
  laptopS.classList.add('hide')
  accS.classList.add('hide')
  banner.classList.toggle('hide')
  cartMenu.classList.add('hide')
}

const resRand = document.getElementById('rand-products')
const resMob = document.getElementById('mobile-products')
const resLap = document.getElementById('laptop-products')
const resClo = document.getElementById('asset-products')
const resHome = document.getElementById('home-products')

const cartContainer = document.getElementById('cartContainer')
const totalPrice = document.getElementById('totalPrice')
let cart = []
let products = []

function removeBtn() {
  document.querySelectorAll('.remove-item').forEach((btn) => {
    btn.addEventListener('click', (b) => {
      let Id = btn.id
      let idx = cart.findIndex((o) => o.id === Id)

      cart.splice(idx, 1)

      updateCart(cart)
      storeCart(cart)
    })
  })
}

function updateCart(cart) {
  let r = ''
  let total = 0
  cart.forEach((itm) => {
    total += itm.pprice * itm.quantity
    r += `
    <div class="cart-item d-flex flex-row  ">
    <img
            class="cart-img mr-4"
            src="${itm.imgUrl}"
            alt=""
          />

          <div class="cart-data">
           <h6 class="cart-data-title">${itm.pname}</h5>
           <p class="quantity">Quality: ${itm.quantity}</p>
           <p class="cart-price price-tag"><i class="bx bx-rupee rupe-icon"></i>: ${itm.pprice}</p>
            <p class='remove-item' id='${itm.id}'> <i class="fas fa-trash"></i> </p>
            </div>
        </div>`
  })
  cartContainer.innerHTML = r
  totalPrice.innerHTML = `${total}`
  storeCart(cart)
  removeBtn()
}

function cartBtn() {
  document.querySelectorAll('.to-cart-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      let Id = btn.id
      let sItem = cart.find((e) => Id === e.id)
      if (!sItem) {
        let b = products.find((e) => e.id === Id)
        b.quantity = 1
        cart.push(b)
      } else {
        sItem.quantity += 1
      }
      updateCart(cart)
    })
  })
}
function appenditem(name, price, category, imgUrl) {
  // if(category != "laptop"){
  //   return
  // }
  const mainDiv = document.createElement('div')

  const infoDiv = document.createElement('div')
  infoDiv.className = 'product-info-container'
  const img = document.createElement('img')
  const p1 = document.createElement('p')
  const p2 = document.createElement('p')
  img.className = 'img'
  img.src = imgUrl
  mainDiv.appendChild(img)
  p1.textContent = name
  p2.className = 'price-tag'
  p2.innerHTML = `<i class='bx bx-rupee rupe-icon'></i>: ${price}`
  infoDiv.appendChild(p1)
  infoDiv.appendChild(p2)
  mainDiv.appendChild(infoDiv)
  resRand.classList.add('products-grid-view')
  resRand.append(mainDiv)
  //   resMob.append(mainDiv)
}

function displayItems(items) {
  let lres = ''
  let mres = ''
  let cres = ''
  let hres = ''

  for (let item of items) {
    if (item.category === 'laptops') {
      lres += `<div class="product-cont d-flex flex-row">
            <div class="img-con">
              <img
                class="img"
                src="${item.imgUrl}"
              />
              <span id="${item.id}" class="to-cart-btn">
                <i class="fas fa-cart-arrow-down"></i>
              </span>
            </div>
            <div class="product-info-container">
              <p>${item.pname}</p>
              <p class="price-tag">
                <i class="bx bx-rupee rupe-icon"></i>: ${item.pprice}
              </p>
            </div>
          </div>`
    } else if (item.category === 'mobiles') {
      mres += `<div class="product-cont d-flex flex-row">
            <div class="img-con">
              <img
                class="img"
                src="${item.imgUrl}"
              />
              <span id="${item.id}" class="to-cart-btn">
                <i class="fas fa-cart-arrow-down"></i>
              </span>
            </div>
            <div class="product-info-container">
              <p>${item.pname}</p>
              <p class="price-tag">
                <i class="bx bx-rupee rupe-icon"></i>: ${item.pprice}
              </p>
            </div>
          </div>`
    } else if (item.category === 'clothes') {
      cres += `<div class="product-cont d-flex flex-row">
                  <div class="img-con">
                    <img
                      class="img"
                      src="${item.imgUrl}"
                    />
                    <span id="${item.id}" class="to-cart-btn">
                      <i class="fas fa-cart-arrow-down"></i>
                    </span>
                  </div>
                  <div class="product-info-container">
                    <p>${item.pname}</p>
                    <p class="price-tag">
                      <i class="bx bx-rupee rupe-icon"></i>: ${item.pprice}
                    </p>
                  </div>
                </div>`
    } else {
      hres += `<div class="product-cont d-flex flex-row">
                  <div class="img-con">
                    <img
                      class="img"
                      src="${item.imgUrl}"
                    />
                    <span id="${item.id}" class="to-cart-btn">
                      <i class="fas fa-cart-arrow-down"></i>
                    </span>
                  </div>
                  <div class="product-info-container">
                    <p>${item.pname}</p>
                    <p class="price-tag">
                      <i class="bx bx-rupee rupe-icon"></i>: ${item.pprice}
                    </p>
                  </div>
                </div>`
    }
  }

  resLap.innerHTML = lres
  resMob.innerHTML = mres
  resClo.innerHTML = cres
  resHome.innerHTML = hres
}
function displayItemsr(items) {
  let rres = ''
  let c = 0
  for (let i of items) {
    if (c === 21) break
    c += 1
    rres += `<div class="product-cont d-flex flex-row">
            <div class="img-con">
              <img
                class="img"
                src="${i.imgUrl}"
              />
              <span id="${i.id}" class="to-cart-btn">
                <i class="fas fa-cart-arrow-down"></i>
              </span>
            </div>
            <div class="product-info-container">
              <p>${i.pname}</p>
              <p class="price-tag">
                <i class="bx bx-rupee rupe-icon"></i>: ${i.pprice}
              </p>
            </div>
          </div>`
  }
  resRand.innerHTML = rres
  displayItems(items)
}
function storeCart(items) {
  localStorage.setItem('cart', JSON.stringify(items))
}
function getCart() {
  return JSON.parse(localStorage.getItem('cart'))
}

function storeProduct(products) {
  localStorage.setItem('product', JSON.stringify(products))
}
function getProducts() {
  return JSON.parse(localStorage.getItem('product'))
}

// --------------------------------------------------  Api key data retrieval --------------------------------

const rclient = contentful.createClient({
  space: 'jijnwam098qm',

  accessToken: 'cDdrnqKo1zwHXyTCvC8h70u6XGwgCttUomxeSlNDT-k',
})
rclient
  .getEntries()
  .then((entry) => {
    let items = entry.items

    items = items.map((item) => {
      let { pname, pprice, category, pspecs } = item.fields
      let imgUrl = item.fields.image.fields.file.url
      let id = item.sys.id
      return { id, pname, pprice, category, pspecs, imgUrl }
    })

    products = items
    storeProduct(items)
    if (getCart() !== null) {
      cart = [...getCart()]
    }
    updateCart(cart)
    displayItemsr(items)
    cartBtn()
  })
  .catch((err) => console.log(err))
