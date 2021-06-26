
const enterRoomButton = document.querySelector('#enterRoom');
enterRoomButton.addEventListener('click', checkHasRoomId);

function checkHasRoomId(event) {
  const roomIdInput = document.querySelector('#room-id');
  const formEnterRoomId = document.querySelector('.form-enter-room-id');

  if (roomIdInput.value === '') {
    event.preventDefault();
    formEnterRoomId.setAttribute('method', "")
    formEnterRoomId.setAttribute('action', "#")
    alert("");
  } else {
    formEnterRoomId.setAttribute('method', "POST")
    formEnterRoomId.setAttribute('action', "/enterroom")
  }
}