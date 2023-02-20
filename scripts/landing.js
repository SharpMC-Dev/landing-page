const ip = document.getElementById('ip');
const modal = document.getElementById('ip-modal');
const modalText = document.getElementById('ip-modal-text');

let slugs = {
  'discord': 'https://sharpmc.org/discord',
  'store': 'https://store.sharpmc.org',
  'forums': 'https://forums.sharpmc.org',
  'vote': 'https://vote.sharpmc.org',
};

ip.onmouseover = event => {
  modal.style.visibility = 'visible';
};

ip.onmouseout = event => {
  modal.style.visibility = 'hidden';
};

ip.onclick = event => {
  if (!navigator.clipboard) return;

  try {
    navigator.clipboard.writeText(event.target.innerText).then(() => {
      modalText.innerText = 'Copied! ✅';
    });
  } catch (er) {
    modalText.innerText = 'Copy Failed ❌';
    console.error(er);
  }
};

function navigate(slug) {
  window.location = slugs[slug];
}
