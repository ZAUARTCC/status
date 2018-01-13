import rp from 'request-promise';

export default function checkSite(site, start) {
  rp(site.url).then(() => {
    console.log('%s: %s ms', site.name, Date.now() - start);
  }).catch(() => {
    console.log('%s: Offline', site.name);
  });
}