function realizarCalculo() { 
    let inicioN = Number(document.getElementById('inicioN').value);
    let fimN = Number(document.getElementById('fimN').value);
    let passoN = Number(document.getElementById('passoN').value);
    
    let painel = document.getElementById('painel'); // Tag section

    // Validação do passoN
    if (passoN === 0 || passoN === null || passoN === undefined) {
        alert('Passo Invalido! Considerando passo = 1.');
        if (inicioN < fimN) {
            for (let i = inicioN; i <= fimN; i++) {
                let p = document.createElement("strong");
                p.textContent = `${i} `;
                painel.appendChild(p);   
            }
        } else if (inicioN > fimN) {
            for (let i2 = inicioN; i2 >= fimN; i2--) {
                let p = document.createElement("strong");
                p.textContent = `${i2} `;
                painel.appendChild(p);
            }
        }
    } else {
        // Incremento ou decremento (salto do numero em relação ao passoN)
        if (inicioN < fimN) {
            for (let i = inicioN; i <= fimN; i += passoN) {
                let p = document.createElement("strong");
                p.textContent = `${i} `;
                painel.appendChild(p);   
            }
        } else if (inicioN > fimN) {
            for (let i2 = inicioN; i2 >= fimN; i2 -= passoN) {
                let p = document.createElement("strong");
                p.textContent = `${i2} `;
                painel.appendChild(p);
            }
        }
    }
    // Quebra de linha
    let br = document.createElement("br");
    painel.appendChild(br);
}
