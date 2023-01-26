const ip = document.getElementById('ip');
const modal = document.getElementById('ip-modal');
const modalText = document.getElementById('ip-modal-text');

let slugs = {
  'discord': 'https://discord.gg/QvuTmzUnxG',
  'store': 'https://store.sharpmc.org',
  'forums': '#',
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
