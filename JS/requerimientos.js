const listaProductos = [
    {
      Nombre: "Agenda",
      CantidadDisponible: 40,
      Precio: 12000,
      codigo: "P001",
      Imagen: "https://www.educaciontrespuntocero.com/wp-content/uploads/2019/09/agendas.jpg",
      categoria: "Organizacion",
      Descripcion: "Agenda para planificar tus actividades."
    },
    {
      Nombre: "Cartulina de colores",
      CantidadDisponible: 80,
      Precio: 5000,
      codigo: "P002",
      Imagen: "https://papelesprimavera.vteximg.com.br/arquivos/ids/170596-1000-1000/papel-silueta.jpg?v=637644072985100000",
      categoria: "Papelería",
      Descripcion: "Cartulina de colores variados, ideal para manualidades."
    },
    {
      Nombre: "Pizarrón blanco",
      CantidadDisponible: 10,
      Precio: 53000,
      codigo: "P003",
      Imagen: "https://dimusa.mx/wp-content/uploads/2021/12/Pizarrones-blancos-en-Hermosillo.jpg",
      categoria: "Oficina",
      Descripcion: "Pizarrón blanco de 1.2 x 1.5 m, ideal para presentaciones."
    },
    {
      Nombre: "Tijeras",
      CantidadDisponible: 60,
      Precio: 2500,
      codigo: "P004",
      Imagen: "https://www.distribuidoranavarrete.com.pe/wp-content/uploads/01359045-TIJERA-SOFT-TOUCH-20-CM-800-X-800.jpg",
      categoria: "Oficina",
      Descripcion: "Tijeras de acero inoxidable, ideales para cortar papel."
    },
    {
      Nombre: "Grapadora",
      CantidadDisponible: 45,
      Precio: 5500,
      codigo: "P005",
      Imagen: "https://productoseterna.vtexassets.com/arquivos/ids/155698/grapadora-eterna-et261_3.jpg?v=638380181233830000",
      categoria: "Oficina",
      Descripcion: "Grapadora de escritorio, capacidad de hasta 20 hojas."
    },
    {
      Nombre: "Carpeta plástica",
      CantidadDisponible: 120,
      Precio: 1200,
      codigo: "P006",
      Imagen: "https://cdn1.totalcommerce.cloud/normaco/product-image/es/carpeta-plastica-legajadora-oficio-azul-1.webp",
      categoria: "Organización",
      Descripcion: "Carpeta plástica con cierre, ideal para organizar documentos."
    },
    {
      Nombre: "Caja de clips",
      CantidadDisponible: 200,
      Precio: 2200,
      codigo: "P007",
      Imagen: "https://http2.mlstatic.com/D_NQ_NP_898238-MLU71559321068_092023-O.webp",
      categoria: "Oficina",
      Descripcion: "Caja con 100 clips metálicos"
    },
    {
      Nombre: "Post-it",
      CantidadDisponible: 90,
      Precio: 1300,
      codigo: "P008",
      Imagen: "https://panamericana.vtexassets.com/arquivos/ids/270359-800-auto?v=636386612932100000&width=800&height=auto&aspect=true",
      categoria: "Papelería",
      Descripcion: "Notas adhesivas de colores, perfectas para recordatorios."
    },
    {
      Nombre: "Regla 30 cm",
      CantidadDisponible: 50,
      Precio: 3200,
      codigo: "P009",
      Imagen: "https://nessan.com.co/wp-content/uploads/2020/05/Regla-Plastica-30-Cm.jpg",
      categoria: "Medición",
      Descripcion: "Regla de plástico transparente de 30 cm."
    },
    {
      Nombre: "Marcador permanente negro",
      CantidadDisponible: 75,
      Precio: 3400,
      codigo: "P010",
      Imagen: "https://www.imexamericas.com.co/wp-content/uploads/2021/08/15001-600x600.jpg",
      categoria: "Escritura",
      Descripcion: "Marcador permanente negro, ideal para escribir en cualquier superficie."
    },
    {
      Nombre: "Bloc de notas",
      CantidadDisponible: 110,
      Precio: 3900,
      codigo: "P011",
      Imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRlz36F2y1MJz2g0LySMeF5h1ZRL-qD-oLag&s",
      categoria: "Papelería",
      Descripcion: "Bloc de notas con 100 hojas, perfecto para tomar apuntes."
    },
    {
      Nombre: "Corrector líquido",
      CantidadDisponible: 65,
      Precio: 2200,
      codigo: "P012",
      Imagen: "https://exitocol.vtexassets.com/arquivos/ids/16172288/lapiz-corrector-liquid-paper-kilometrico-paper-mate-x2.jpg?v=638083926325430000s",
      categoria: "Escritura",
      Descripcion: "Corrector líquido de secado rápido, fácil de aplicar."
    },
    {
      Nombre: "Paquete de resaltadores",
      CantidadDisponible: 100,
      Precio: 11400,
      codigo: "P013",
      Imagen: "https://papelerialacomuna.com/2393-large_default/resaltador-pastel-x-5-pelikan-.jpg",
      categoria: "Escritura",
      Descripcion: "Paquete de resaltadores, ideal para marcar textos importantes."
    },
    {
      Nombre: "Juego de escuadras",
      CantidadDisponible: 30,
      Precio: 6500,
      codigo: "P014",
      Imagen: "https://elchiquitindelospreciosbajos.com/wp-content/uploads/2021/12/Juego-Geometrico-Offi-Esco-x4-Piezas-Azul-Ref-OE-240-Cod.-7709990704570-min-1.jpg",
      categoria: "Medicion",
      Descripcion: "Juego de escuadras, para trazos perfectos."
    },
    {
      Nombre: "Papel bond A4",
      CantidadDisponible: 500,
      Precio: 12000,
      codigo: "P015",
      Imagen: "https://http2.mlstatic.com/D_NQ_NP_618361-MLA75071694926_032024-O.webp",
      categoria: "Papelería",
      Descripcion: "Paquete de 500 hojas de papel bond A4."
    },
    {
      Nombre: "Cinta adhesiva",
      CantidadDisponible: 30,
      Precio: 2500,
      codigo: "P016",
      Imagen: "https://http2.mlstatic.com/D_NQ_NP_993071-MLA76423363210_052024-O.webp",
      categoria: "Oficina",
      subcategoria: "Accesorios",
      Descripcion: "Cinta adhesiva de 1.5 cm de ancho, ideal para manualidades."
    },
    {
      Nombre: "Marcador borrable azul",
      CantidadDisponible: 80,
      Precio: 3600,
      codigo: "P017",
      Imagen: "https://elchiquitindelospreciosbajos.com/wp-content/uploads/2021/12/Marcador-Borrable-Offi-Esco-Azul-Oscuro-OE-510-Cod.-7709990324235-min-1.jpg",
      categoria: "Escritura",
      Descripcion: "Marcador borrable azul, perfecto para pizarras blancas."
    },
    {
      Nombre: "Perforadora de papel",
      CantidadDisponible: 25,
      Precio: 13000,
      codigo: "P018",
      Imagen: "https://www.ofimarket.pe/cdn/shop/products/PR02223.jpg?v=1627665391",
      categoria: "Oficina",
      Descripcion: "Perforadora de papel de alta capacidad."
    },
    {
      Nombre: "Cartulina blanca",
      CantidadDisponible: 70,
      Precio: 1500,
      codigo: "P019",
      Imagen: "https://elchiquitindelospreciosbajos.com/wp-content/uploads/2021/12/Cartulina-Blanca-en-Octavos-Reprograf-Paquete-x10-min-1.jpg",
      categoria: "Papelería",
      Descripcion: "Cartulina blanca de alta calidad para manualidades."
    },
    {
      Nombre: "Carpeta con anillas",
      CantidadDisponible: 60,
      Precio: 2800,
      codigo: "P020",
      Imagen: "https://http2.mlstatic.com/D_NQ_NP_987913-MCO76155917788_052024-O.webp",
      categoria: "Organización",
      Descripcion: "Carpeta con anillas para organizar documentos."
    },
    {
      Nombre: "Sobre manila",
      CantidadDisponible: 100,
      Precio: 600,
      codigo: "P021",
      Imagen: "https://www.papeleriaoriental.com/app_data_archivos/papeleriaoriental.soomi.co/productos/producto_5fb5fa1b44cc54888a8510d2581de0c4d4f8a8481588956087.jpg",
      categoria: "Papelería", 
      Descripcion: "Sobres manila de diferentes tamaños, perfectos para enviar documentos."
    },
    {
      Nombre: "Cinta correctora",
      CantidadDisponible: 40,
      Precio: 3200,
      codigo: "P022",
      Imagen: "https://acdn.mitiendanube.com/stores/399/204/products/cinta-correctora-pelikan31-7c6a823c2e0336b34a15412470614571-640-0.jpg",
      categoria: "Escritura",
      Descripcion: "Cinta correctora para eliminar errores de forma rápida."
    },
    {
      Nombre: "Calculadora Científica Casio FX-350LA-Plus-2",
      CantidadDisponible: 30,
      Precio: 65750,
      codigo: "P023",
      Imagen: "https://static.wixstatic.com/media/45ce85_3df8a54279ec4731ae06f16cb35fe88d~mv2.png/v1/fill/w_480,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/45ce85_3df8a54279ec4731ae06f16cb35fe88d~mv2.png",
      categoria: "Oficina",
      Descripcion: "Calculadora cientifica casio para calculos complejos."
    },
    {
      Nombre: "Archivador",
      CantidadDisponible: 20,
      Precio: 7900,
      codigo: "P024",
      Imagen: "https://www.senfort.com/upfiles/productes_img/carpeta_4_anillas_senfort_maths_surtido_1531248153.jpg",
      Descripcion: "Archivador de dos anillas, ideal para mantener documentos organizados."
    },
    {
      Nombre: "Pegamento en barra",
      CantidadDisponible: 90,
      Precio: 3200,
      codigo: "P025",
      Imagen: "https://papeleriaferro.com/wp-content/uploads/2020/08/841362300252.gif",
      categoria: "Oficina",
      Descripcion: "Pegamento en barra, fácil de usar y sin ácido."
    },
    {
      Nombre: "Rotulador rojo",
      CantidadDisponible: 85,
      Precio: 2300,
      codigo: "P026",
      Imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAIwgUuLN_h7bZ5K8skTBi9TIJozySAx57MA&s",
      categoria: "Escritura",
      Descripcion: "Rotulador rojo para anotaciones destacadas."
    },
    {
      Nombre: "block de papel cuadriculado tamaño carta",
      CantidadDisponible: 50,
      Precio: 4500,
      codigo: "P027",
      Imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSFca6xdJCQ2XJOf9Yce3tq8qA79IXJgJLmg&s",
      categoria: "Papelería",
      Descripcion: "Papel cuadriculado para dibujo técnico y matemáticas."
    },
    {
      Nombre: "Portaminas",
      CantidadDisponible: 45,
      Precio: 3500,
      codigo: "P028",
      Imagen: "https://panamericana.vtexassets.com/arquivos/ids/269942-800-auto?v=636386591108970000&width=800&height=auto&aspect=true",
      categoria: "Escritura",
      Descripcion: "Portaminas con minas de 0.5 mm, ideal para escribir y dibujar."
    },
    {
      Nombre: "Tinta de impresora",
      CantidadDisponible: 25,
      Precio: 15000,
      codigo: "P029",
      Imagen: "https://gruposuministros.co/217/tinta-544-epson-para-impresoras-epson-l1110-l1210-l3110-l3150-l3160-l3210-x4-unidades.jpg",
      categoria: "Oficina",
      Descripcion: "Tinta de impresora compatible con diversas marcas."
    },
    {
      Nombre: "Cuaderno espiral grande",
      CantidadDisponible: 55,
      Precio: 6800,
      codigo: "P030",
      Imagen: "https://moto-office.com/328/cuaderno-espiral-carta-200hjs.jpg",
      Descripcion: "Cuaderno espiral con 100 hojas, ideal para tomar apuntes."
    },
    {
      Nombre: "Bolígrafo azul",
      CantidadDisponible: 150,
      Precio: 1200,
      codigo: "P031",
      Imagen: "https://www.imexamericas.com.co/wp-content/uploads/2020/08/LA3531_PM_InkJoy_100_ST_1mm_OS_x12_Blue.jpg",
      categoria: "Escritura",
      Descripcion: "Bolígrafo azul de tinta líquida, suave al escribir."
    },
    {
      Nombre: "Hoja de lija",
      CantidadDisponible: 75,
      Precio: 1200,
      codigo: "P032",
      Imagen: "https://grupoideasa.com/wp-content/uploads/2020/03/lija-de-agua-Abracol-600x600-1-400x400.jpg",
      categoria: "Oficina",
      Descripcion: "Hoja de lija de grano fino, ideal para manualidades."
    },
    {
      Nombre: "Cuaderno universitario cinco materias",
      CantidadDisponible: 50,
      Precio: 27000,
      codigo: "P033",
      Imagen: "https://acdn.mitiendanube.com/stores/002/692/169/products/d_721003-mla70352505631_072023-o-df57cedac089ba483917089847340983-1024-1024.jpg",
      categoria: "Papelería",
      subcategoria: "Cuadernos",
      Descripcion: "Cuaderno universitario con 200 hojas, ideal para clases."
    },
    {
      Nombre: "Cinta métrica",
      CantidadDisponible: 40,
      Precio: 3900,
      codigo: "P034",
      Imagen: "https://m.media-amazon.com/images/I/71TOG6whQsL._SL1500_.jpg",
      categoria: "Medición",
      subcategoria: "Herramientas",
      Descripcion: "Cinta métrica de 5 metros, resistente y fácil de usar."
    },
    {
      Nombre: "Matriz de perforación",
      CantidadDisponible: 20,
      Precio: 4700,
      codigo: "P035",
      Imagen: "https://renz-spain.es/fileadmin/_processed_/csm_die_inline_4ad17ebc8d.jpg",
      categoria: "Oficina",
      Descripcion: "Matriz de perforación para hacer agujeros en documentos."
    },
    {
      Nombre: "Bloc de dibujo",
      CantidadDisponible: 80,
      Precio: 3500,
      codigo: "P036",
      Imagen: "https://http2.mlstatic.com/D_NQ_NP_752037-MLU71380098023_082023-O.webp",
      categoria: "Papelería",
      Descripcion: "Bloc de dibujo con hojas de alta calidad, ideal para artistas."
    },
    {
      Nombre: "Rollo de papel aluminio",
      CantidadDisponible: 100,
      Precio: 3200,
      codigo: "P037",
      Imagen: "https://http2.mlstatic.com/D_NQ_NP_841292-MCO53567617091_022023-O.webp",
      categoria: "Cocina",
      Descripcion: "Rollo de papel aluminio resistente, ideal para cocinar."
    },
    {
      Nombre: "Sujeta documentos",
      CantidadDisponible: 90,
      Precio: 700,
      codigo: "P038",
      Imagen: "https://http2.mlstatic.com/D_NQ_NP_742446-MLU71094928674_082023-O.webp",
      categoria: "Oficina",
      Descripcion: "Sujeta documentos metálico, útil para mantener papeles organizados."
    },
    {
      Nombre: "Organizador de escritorio de mallas 3 niveles",
      CantidadDisponible: 30,
      Precio: 19500,
      codigo: "P039",
      Imagen: "https://http2.mlstatic.com/D_NQ_NP_941096-MCO72184309487_102023-O.webp",
      categoria: "Organización",
      Descripcion: "Organizador de escritorio de madera, elegante y práctico."
    },
    {
      Nombre: "Pack rotuladores permanentes 21 unidades",
      CantidadDisponible: 45,
      Precio: 16300,
      codigo: "P040",
      Imagen: "https://http2.mlstatic.com/D_NQ_NP_891578-CBT72416309552_102023-O.webp",
      categoria: "Escritura",
      Descripcion: "Pquete de rotuladores permanentes, ideal para marcar y decorar en cualquier superficie."
    },
  ];

function formatToCOP(number) {  
    return new Intl.NumberFormat('es-CO', {  
        style: 'currency',  
        currency: 'COP',  
        minimumFractionDigits: 0,  
        maximumFractionDigits: 2  
    }).format(number);  
}  

function moneda() {  
    const input = document.getElementById('presupuestoo');  
    const value = input.value.replace(/[^0-9]/g, '');
    if (value) {  
        const formattedValue = formatToCOP(Number(value));  
        input.value = formattedValue;  
    }  
}

localStorage.setItem("listaProductos", JSON.stringify(listaProductos));

function guardarDatos(key, data) {
    const dataString = JSON.stringify(data);
    localStorage.setItem(key, dataString);
}

document.getElementById("formularioCompra").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombreComprador = document.getElementById("nombreComprador").value;
    const presupuesto = document.getElementById("presupuestoo").value;
    const cantidadArticulos = document.getElementById("cantidadArticulos").value;
    const direccion = document.getElementById("direccion").value;
    const tipoEntrega = document.querySelector('input[name="tipoEntrega"]:checked')?.value || "No seleccionado";



    const datosCliente = {
        nombre: nombreComprador,
        presupuesto: presupuesto,
        cantidadArticulos: cantidadArticulos,
        direccion: direccion,
        tipoEntrega: tipoEntrega
    };

    guardarDatos("datosCliente", datosCliente);

    window.location.href = "../HTML/listaProductos.html";
});
