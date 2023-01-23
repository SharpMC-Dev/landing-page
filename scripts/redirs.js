window.onload = () => redirect(window.location);
let slugs = {
  'discord': 'https://discord.gg/wZugzkCPSV',
  'store': 'https://store.sharpmc.org',
  'forums': '#',
};

function navigate(slug) {
  window.location = slugs[slug];
}

function redirect(location) {
  let path = location.pathname.replace(/\//gim, '').toLowerCase();

  console.log(path);

  navigate(path);
}
