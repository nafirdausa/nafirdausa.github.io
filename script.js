window.onscroll = function () {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      $('#content').animate({ top: '0' }, 500);
      $this = $('#scroll-me');
      $this.css('text-align', 'left');
      $this.css('margin', '0px 0px');
      $this.css('padding', '15px 15px');
      $this.css('background-color', 'white');
      document.getElementById('scroll-me').innerHTML = '<a href="/">ZOEL</a>';
      document.getElementById('scroll-me').style.color = 'black';

    }

};