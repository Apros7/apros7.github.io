document.getElementById('button_scroll_down').addEventListener('click', function() {
    console.log("hey")
    document.getElementById('blog').scrollIntoView({ behavior: 'smooth' });
  });