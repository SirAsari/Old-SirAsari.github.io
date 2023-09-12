document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("calculator-form");
    const resultDiv = document.getElementById("result");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const sideLength = parseFloat(document.getElementById("sideLength").value);
        const calculationType = document.getElementById("calculationType").value;

        if (!isNaN(sideLength)) {
            if (calculationType === "luas") {
                const luas = sideLength * sideLength;
                resultDiv.innerHTML = `<p>Luas Persegi: ${luas}</p>`;
            } else if (calculationType === "keliling") {
                const keliling = 4 * sideLength;
                resultDiv.innerHTML = `<p>Keliling Persegi: ${keliling}</p>`;
            } else {
                resultDiv.innerHTML = "Pilih jenis perhitungan terlebih dahulu.";
            }
        } else {
            resultDiv.innerHTML = "Masukkan panjang sisi yang valid.";
        }
    });
});
