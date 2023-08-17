document.addEventListener("DOMContentLoaded", function () {
    const luasBtn = document.getElementById("luasBtn");
    const kelilingBtn = document.getElementById("kelilingBtn");
    const resetLuasBtn = document.getElementById("resetLuasBtn");
    const resetKelilingBtn = document.getElementById("resetKelilingBtn");
    const luasResultDiv = document.getElementById("luasResult");
    const kelilingResultDiv = document.getElementById("kelilingResult");

    luasBtn.addEventListener("click", function () {
        const alas = parseFloat(document.getElementById("alas").value);
        const tinggi = parseFloat(document.getElementById("tinggi").value);

        if (alas > 0 && tinggi > 0) {
            const area = calculateLuas(alas, tinggi);

            luasResultDiv.innerHTML = `
                <p>L= 1/2 x a x t <br>L= 1/2 x ${alas} x ${tinggi} <br>L= ${area}</p>
            `;
        } else {
            luasResultDiv.innerHTML = "<p>Invalid input.</p>";
        }
    });

    kelilingBtn.addEventListener("click", function () {
        const sideA = parseFloat(document.getElementById("Sisi A").value);
        const sideB = parseFloat(document.getElementById("Sisi B").value);
        const sideC = parseFloat(document.getElementById("Sisi C").value);

        if (validateTriangle(sideA, sideB, sideC)) {
            const perimeter = calculateKeliling(sideA, sideB, sideC);

            kelilingResultDiv.innerHTML = `
            <p>K= S1 + S2 + S3 <br>K= ${sideA} + ${sideB} + ${sideC} <br>K= ${perimeter}</p>
            `;
        } else {
            kelilingResultDiv.innerHTML = "<p>Invalid triangle sides.</p>";
        }
    });

    resetLuasBtn.addEventListener("click", function () {
        document.getElementById("alas").value = "";
        document.getElementById("tinggi").value = "";
        luasResultDiv.innerHTML = "";
    });

    resetKelilingBtn.addEventListener("click", function () {
        document.getElementById("Sisi A").value = "";
        document.getElementById("Sisi B").value = "";
        document.getElementById("Sisi C").value = "";
        kelilingResultDiv.innerHTML = "";
    });

    function validateTriangle(a, b, c) {
        return a + b > c && a + c > b && b + c > a;
    }

    function calculateLuas(alas, tinggi) {
        return (alas * tinggi) / 2;
    }

    function calculateKeliling(a, b, c) {
        return a + b + c;
    }
});
