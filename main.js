function hawakMoAngHeat() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const humidity = parseFloat(document.getElementById('humidity').value);

    while (HeatIndex = temperature + (0.33 * humidity) - 4) {
    window.alert(`The heat index is ${HeatIndex.toFixed(2)}`);

    }

}
