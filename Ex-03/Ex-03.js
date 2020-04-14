parseInt(euro);
parseInt(dollar);
euro.addEventListener("click", function() {
    euro.value = dollar.value / 1.24;
})
dollar.addEventListener("click", function() {
    dollar.value = euro.value * 1.24;
})