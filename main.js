alert("¡Bienvenido a Corps Sain!\nPresione ENTER para ver el menú")
let seleccionarProductos = parseInt(prompt("MENÚ\n1. Kit Detox $820 \n2. Kit Hormonal $1220 \n3. Kit Tiroideo $1080 \n4. Kit Vientre Plano $630 \n5. Kit Nocturno $730 \n6. Presione 0 para ver el total de su compra o para salir del menú, de lo contario siga seleccionando productos"))

let indicarCantidad;
let total = 0;

const cantidad = (cant, precio) => {
    return cant * precio;
}

while (seleccionarProductos != 0) {
    switch (seleccionarProductos) {
        case 1:
                indicarCantidad = parseInt(prompt("Seleccionaste Kit Detox, Indique la cantidad de Kits que desea comprar: "))
                total += cantidad(indicarCantidad, 820)
            break;
        case 2:
                indicarCantidad = parseInt(prompt("Seleccionaste Kit Hormonal, Indique la cantidad de Kits que desea comprar: "))
                total += cantidad(indicarCantidad, 1220)
            break;
        case 3:
                indicarCantidad = parseInt(prompt("Seleccionaste Kit Tiroideo, Indique la cantidad de Kits que desea comprar: "))
                total += cantidad(indicarCantidad, 1080)
            break;
        case 4:
                indicarCantidad = parseInt(prompt("Seleccionaste Kit Vientre Plano, Indique la cantidad de Kits que desea comprar: "))
                total += cantidad(indicarCantidad, 630)
            break;
        case 5:
                indicarCantidad = parseInt(prompt("Seleccionaste Kit Nocturno, Indique la cantidad de Kits que desea comprar: "))
                total += cantidad(indicarCantidad, 730)
            break;
    
        default:
            break;
    }
    seleccionarProductos = parseInt(prompt("MENÚ\n1. Kit Detox $820 \n2. Kit Hormonal $1220 \n3. Kit Tiroideo $1080 \n4. Kit Vientre Plano $630 \n5. Kit Nocturno $730 \n6. Presione 0 para ver el total de su compra o para salir del menú, de lo contario siga seleccionando productos"))
}

alert("El total de su compra es de: "+total)


