const cars = [
    {
        id: 1,
        marca: 'Dodge',
        modelo: 'Challenger GT',
        color: 'Negro', 
        anio: 2016,
        precio: 75647
    },
    {
        id: 2,
        marca: 'Dodge',
        modelo: 'Challenger Redeye',  
        color: 'Rojo',
        anio: 2019,
        precio: 756478
    },
    {
        id: 3,
        marca: 'Dodge',
        modelo: 'Durango', 
        color: 'Azul',
        anio: 2020,
        precio: 1245678
    }
]

let editingCar = false;
const tableBody = document.getElementById('table-body-coches')


function clean(){
    tableBody.innerHTML ='<input type="hidden">'
}

function printCars(){
    clean();
    cars.forEach((car) =>  tableBody.innerHTML +=   `<tr>
                                                        <td>${car.marca}</td>
                                                        <td>${car.modelo}</td>
                                                        <td>${car.color}</td>
                                                        <td>${car.anio}</td>
                                                        <td>$ ${car.precio}</td>
                                                        <td>
                                                            <button class="btn btn-outline-danger" onclick="removeCar(${car.id})">Eliminar
                                                                <img src="https://image.flaticon.com/icons/png/128/1345/1345823.png" alt="icono" class="icon">
                                                            </button>
                                                            <button class="btn btn-outline-warning" onclick="editButton(${car.id})">Editar
                                                                <img src="https://i.pinimg.com/originals/79/c0/c6/79c0c68aa4ecbf670ea66447d9cf2426.png" alt="tuerca" class="icon">
                                                            </button>
                                                        </td>
                                                    </tr>`)
   
}

function submitCar() {
    if(editingCar) {
        editCar();
    } else {
        addCar();
    }
}
function editCar() {
    const marca = document.getElementById('marca').value;  
    const modelo = document.getElementById('modelo').value;
    const color = document.getElementById('color').value;
    const anio = document.getElementById('anio').value;
    const precio = document.getElementById('precio').value;
    
    if(precio>0){
        editingCar.marca = marca
        editingCar.modelo = modelo
        editingCar.color = color
        editingCar.anio = anio
        editingCar.precio = precio
        editingCar = false;

        printCars();
    
        document.getElementById('marca').value = ''
        document.getElementById('modelo').value = ''
        document.getElementById('color').value = ''
        document.getElementById('anio').value = ''
        document.getElementById('precio').value = ''    
    }else{
        alert('Nuevo Precio Negativo\nModifique el valor"')
    }  
}
function editButton(id) {
    const car = cars.find((car) => car.id === id);
    document.getElementById('marca').value = car.marca;
    document.getElementById('modelo').value = car.modelo
    document.getElementById('color').value = car.color
    document.getElementById('anio').value = car.anio
    document.getElementById('precio').value = car.precio
    editingCar = car;
}
function addCar() {
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const color = document.getElementById('color').value;
    const anio = document.getElementById('anio').value;
    const precio = document.getElementById('precio').value;
    const newCar = {
        id: cars.length + 1,
        marca: marca,
        modelo: modelo,
        color: color,
        anio: anio,
        precio: precio
    }
    if(precio>0){
    cars.push(newCar);
    }else{
        alert('Precio Negativo\nModifique el valor')
    }
    printCars();
}
function removeCar(id) {
    const position = cars.findIndex((car) => car.id === id);
    cars.splice(position, 1);
    printCars();
}

printCars()