const copyButton = document.querySelector('#room .buttons #room-id')

copyButton.addEventListener('click', () => {
  const inputWithRoomId = document.querySelector('#roomIdInput')
  inputWithRoomId.select()
  document.execCommand('copy')
})