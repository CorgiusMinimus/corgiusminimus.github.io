/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
  });

lightGallery(document.getElementById('cyberpunk-gallery'), {
    thumbnail: true
})