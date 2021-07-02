const html = document.querySelector('html')
const checkbox = document.querySelector('input[name=theme]')

const getStyle = (element, style) =>
  window
    .getComputedStyle(element)
    .getPropertyValue(style)

const initialColors = {
  background: getStyle(html, "--background"),
  black: getStyle(html, "--black"),
}

const darkMode = {
  background: '#212226',
  black: '#434343',
}

const transformKey = (key) =>
  "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();


const changeColors = (colors) => {
  Object.keys(colors).map(key =>
    html.style.setProperty(transformKey(key), colors[key])
  )
}

checkbox.addEventListener("change", ({ target }) => {
  if (target.checked) {
    changeColors(darkMode)
    logoPlace.removeChild(initialLogo)
    logoPlace.appendChild(divDarkModeLogo)
  } else {
    changeColors(initialColors)
    logoPlace.removeChild(divDarkModeLogo)
    logoPlace.appendChild(initialLogo)
  }
}
)



/*****SWITCH LOGO *****/
const logoPlace = document.querySelector('.content header a')


/**LOGO DO DARKMODE**/
const divDarkModeLogo = document.createElement('div')
divDarkModeLogo.id = 'logo'

const darkModeLogo = document.createElement('img')
darkModeLogo.src = "/images/icon-rocketq.svg"
darkModeLogo.alt = "Logo Rocket.q"
divDarkModeLogo.appendChild(darkModeLogo)

const darkModeTextLogo = document.createElement('img')
darkModeTextLogo.src = "/images/logo-text.png"
darkModeTextLogo.alt = "Rocket.q Logo - Text"
divDarkModeLogo.appendChild(darkModeTextLogo)

/**LOGO DO INITIAL MODE**/
const initialLogo = document.createElement('img')
initialLogo.classList.add('initialLogo')
initialLogo.src = "/images/logo.svg"
initialLogo.alt = "Rocket.q Logo"
logoPlace.appendChild(initialLogo)

