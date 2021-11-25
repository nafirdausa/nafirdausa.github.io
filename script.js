window.onscroll = function () {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      $('#content').animate({ top: '0' }, 500);
      $this = $('#scroll-me');
      $this.css('text-align', 'left');
      $this.css('margin', '0px 0px');
      $this.css('padding', '15px 15px');
      $this.css('background-color', 'transparent');
      document.getElementById('scroll-me').innerHTML = '<a href="/">ZOEL</a>';
      // ketika di scroll konten main di hidden
      $('#main').css('visibility', 'hidden');
    }
};

// mengubah tema background
const body = document.querySelector('body');
const toggleButton = document.getElementById('toggleSwitch');
toggleButton.onclick = function() {
    toggleButton.classList.toggle('active');
    body.classList.toggle('active')
}