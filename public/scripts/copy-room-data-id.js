const copyButton = document.querySelector('#room .buttons #room-id')

copyButton.addEventListener('click', () => {
  const inputWithRoomId = document.querySelector('#roomIdInput')
  inputWithRoomId.select()
  inputWithRoomId.setSelectionRange(0, 99999); /* For mobile devices */
  document.execCommand('copy')
  alert(`Número da sala "${inputWithRoomId.value}" copiado!`);
})