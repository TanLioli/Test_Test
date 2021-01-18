window.addEventListener('DOMContentLoaded', () => {
  name_input.addEventListener('input', function () {
    const isChanged = this.value != this.getAttribute('value');
    this.classList.toggle('red', isChanged);
  });
});
