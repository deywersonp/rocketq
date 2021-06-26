
const createRoomButton = document.querySelector('.create-room-button');
createRoomButton.addEventListener('click', checkHasPassword);

function checkHasPassword(event) {
  const passwordInput = document.querySelector("#room-pass");
  const formCreatePassRoom = document.querySelector('.form-create-pass-room');

  if (passwordInput.value === '') {
    event.preventDefault();
    formCreatePassRoom.setAttribute('method', "")
    formCreatePassRoom.setAttribute('action', "#")
    alert("O campo senha não pode estar vazio!");
  } else {
    formCreatePassRoom.setAttribute('method', "POST")
    formCreatePassRoom.setAttribute('action', "/create-room")
  }
}