console.log('Hello from main.js');

window.onload = () => {
  const magicBnt = document.getElementById('magic-button');
  magicBnt.addEventListener('click', () => {
    const color = ['red', 'black', 'blue', 'green', 'yellow', 'purple'];
    magicBnt.style.color = color[Math.floor(Math.random() * color.length)];
  });
};
