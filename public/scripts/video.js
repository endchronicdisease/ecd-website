// Click-to-play video embeds. Nothing from YouTube loads until the visitor clicks;
// the player then comes from youtube-nocookie.com. Markup:
//   <div class="ecd-video" data-yt="VIDEO_ID" data-title="…"><img …><button …></button></div>
(function () {
  function play(box) {
    var id = box.getAttribute('data-yt'); if (!id) return;
    var f = document.createElement('iframe');
    f.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '?autoplay=1&rel=0';
    f.title = box.getAttribute('data-title') || 'Video';
    f.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    f.setAttribute('allowfullscreen', '');
    f.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
    f.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;border:0';
    box.innerHTML = ''; box.appendChild(f);
  }
  document.addEventListener('click', function (e) {
    var box = e.target.closest && e.target.closest('.ecd-video[data-yt]');
    if (box && !box.querySelector('iframe')) { e.preventDefault(); play(box); }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    var box = e.target.closest && e.target.closest('.ecd-video[data-yt]');
    if (box && !box.querySelector('iframe')) { e.preventDefault(); play(box); }
  });
})();
