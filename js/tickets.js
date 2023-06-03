const datos = {
    nombre: '',
    apellido: '',
    correo:'',
    cantidad: '',
    categoria:''
} 

const precioBase = 200;

const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const correo = document.querySelector('#correo');
const cantidad = document.querySelector('#cantidad');
const categoria = document.querySelector('#categoria');
const formulario = document.querySelector('.formulario');

const paragraph = document.getElementById("totalAPagar");

apellido.disabled = true;
correo.disabled = true;
cantidad.disabled = true;
categoria.disabled = true;



nombre.addEventListener('input', function (event){
    datos.nombre = event.target.value;

    const {nombre} = datos;

    for(i=0 ; i<nombre.length; i++ ){
        if(nombre.charCodeAt(i)>47 && nombre.charCodeAt(i)<58){
            mostrarMensaje("El nombre no puede contener números",true);
            apellido.disabled = true;
            return;
        }
    }

    apellido.disabled = false;
});

apellido.addEventListener('input', function (event){
    datos.apellido = event.target.value;

    
    const {apellido} = datos;

    for(i=0 ; i<apellido.length; i++ ){
        if(apellido.charCodeAt(i)>47 && apellido.charCodeAt(i)<58){
            mostrarMensaje("El nombre no puede contener números",true);
            correo.disabled = true;
            return;
        }
    }

    correo.disabled = false;
});

correo.addEventListener('input', function (event){
    datos.correo = event.target.value;

    cantidad.disabled = false;
});

cantidad.addEventListener('input', function (event){
    datos.cantidad = event.target.value;


    const {cantidad} = datos;


    for(i=0 ; i<cantidad.length; i++ ){
        let num = parseInt(cantidad.charAt(i))
        if (isNaN(num)){
            mostrarMensaje("La cantidad no es válidad",true);
            categoria.disabled = true;
            return;
        }
    }


    if(cantidad < 0){
        mostrarMensaje("La cantidad no es válidad",true);
        categoria.disabled = true;
        return;
    }

    
    

    categoria.disabled = false;
});


categoria.addEventListener('change', function (event){
    datos.categoria = event.target.value;

});






formulario.addEventListener('submit', function(event){
    event.preventDefault();


    const {nombre, apellido, correo, cantidad, categoria} = datos; 
    


    if(nombre === '' || apellido ==='' || correo ==='' || cantidad === '' || categoria === ''){
        mostrarMensaje("Alguno de los campos no se completó.", true);
        return;
    }


    mostrarMensaje("Los datos se ingresaron correctamente.");

    calcularPrecioTotal(cantidad,categoria);
});





function mostrarMensaje(mensaje, error){
    const respuesta = document.createElement('P');
    respuesta.textContent = mensaje;

    if(error){
        respuesta.classList.add('error');
    }else{
        respuesta.classList.add('correcto');
    }

    formulario.appendChild(respuesta);
    setTimeout(() => {
        respuesta.remove();
    }, 3500);
}


function calcularPrecioTotal(cantidad,categoria){
    let num;
    let cant = parseInt(cantidad);
    console.log(categoria);
    switch (categoria){
        case 'Estudiante':
            num = cant * 200 * 0.8;
            break;
        case 'Trainee':
            num = cant * 200 * 0.5;
            break;
        case 'Junior':
            num = cant * 200 * 0.15;
            break
    }
    console.log(num);
    
    paragraph.textContent = `Total a pagar: ${num}$`;
}

function borrarTotal(){
    paragraph.textContent = 'Total a pagar: $';

    apellido.disabled = true;
    correo.disabled = true;
    cantidad.disabled = true;
    categoria.disabled = true;

    
}