window.onload = () => redirect(window.location);
let slugs = {
  'discord': 'https://sharpmc.org/discord',
  'store': 'https://store.sharpmc.org',
  'forums': 'https://forums.sharpmc.org',
};

function navigate(slug) {
  window.location = slugs[slug];
}

function redirect(location) {
  let path = location.pathname.replace(/\//gim, '').toLowerCase();

  console.log(path);

  navigate(path);
}
