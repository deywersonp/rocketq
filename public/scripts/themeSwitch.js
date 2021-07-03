const html = document.querySelector('html')
const checkbox = document.querySelector('input[name=theme]')
let isChecked = false

/***CREATE THEMES***/

const getStyle = (element, style) =>
  window
    .getComputedStyle(element)
    .getPropertyValue(style)

const initialColors = {
  background: getStyle(html, "--background"),
  black: getStyle(html, "--black"),
  greyBlue: getStyle(html, "--grey-blue"),
  modalTitleColor: getStyle(html, "--modal-title-color"),
  modalTextColor: getStyle(html, "--modal-text-color"),
  textareaTextColor: getStyle(html, "--textarea-text-color"),
}

const darkMode = {
  background: '#212226',
  black: '#cfcccc',
  greyBlue: '#cfcccc',
  modalTitle: 'black',
  modalText: '#212226',
  textareaText: 'white',
}

const transformKey = (key) =>
  "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();


const changeColors = (colors) => {
  Object.keys(colors).map(key =>
    html.style.setProperty(transformKey(key), colors[key])
  )
}

/*****SWITCH LOGO *****/
const logoPlace = document.querySelector('.content header a')


/**Logo do DarkMode**/
const darkModeLogo = document.createElement('div')
darkModeLogo.id = 'logo'

const darkModeIcon = document.createElement('img')
darkModeIcon.src = "/images/icon-rocketq.svg"
darkModeIcon.alt = "Rocket.q Logo - Icon"
darkModeLogo.appendChild(darkModeIcon)

const darkModeIconText = document.createElement('img')
darkModeIconText.src = "/images/logo-text.png"
darkModeIconText.alt = "Rocket.q Logo - Text"
darkModeLogo.appendChild(darkModeIconText)

/**Logo do initialMode**/
const initialLogo = document.createElement('img')
initialLogo.src = "/images/logo.svg"
initialLogo.alt = "Rocket.q Logo"
initialLogo.classList.add('initialLogo')
logoPlace.appendChild(initialLogo)


/**** CALL SWITCHS *****/
checkbox.addEventListener("change", ({ target }) => {

  if (target.checked) {
    changeColors(darkMode)
    logoPlace.removeChild(initialLogo)
    logoPlace.appendChild(darkModeLogo)
    isChecked = true
  } else {
    changeColors(initialColors)
    logoPlace.removeChild(darkModeLogo)
    logoPlace.appendChild(initialLogo)
    isChecked = false
  }

  localStorage.setItem('isChecked', JSON.stringify(isChecked))
}
)


/**** RECOVER THEME STATE FROM LOCAL STORAGE ****/
function getFromLocalStorage() {

  const reference = localStorage.getItem('isChecked')

  if (reference) {
    isChecked = JSON.parse(reference)
    checkbox.checked = isChecked
  }

  if (checkbox.checked) {
    changeColors(darkMode)
    logoPlace.removeChild(initialLogo)
    logoPlace.appendChild(darkModeLogo)
  } else {
    changeColors(initialColors)
    logoPlace.removeChild(darkModeLogo)
    logoPlace.appendChild(initialLogo)
  }

}

getFromLocalStorage()






