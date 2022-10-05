const checkBox = document.querySelector('#price__check');
const inputRange = document.querySelector('#price__range');

const isChecked = () => {
   if(checkBox.checked) {
      document.querySelector('#price__value').textContent = '$' + Number.parseFloat(inputRange.value * 0.25 * 12).toFixed(2)
   } else {
      document.querySelector('#price__value').textContent = '$' + Number.parseFloat(inputRange.value).toFixed(2)
   }
}

inputRange.oninput = () => {
   isChecked()
   var value = (inputRange.value-inputRange.min)/(inputRange.max-inputRange.min)*100
   inputRange.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) ${value}%, hsl(224, 65%, 95%) ${inputRange.max - value}%)`;
   document.querySelector('.price__view').textContent = Number.parseFloat(inputRange.value) * 6.250 + 'k' + ' Pageviews';

}

checkBox.onclick = () => {
   isChecked()
}
   


