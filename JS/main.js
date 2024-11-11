const listaProductos = [
  {
    Nombre: "Agenda 2024",
    CantidadDisponible: 40,
    Precio: 12000,
    codigo: "P001",
    Imagen: "agenda_2024.jpg",
    categoria: "Papelería",
    subcategoria: "Organización",
    Descripcion: "Agenda 2024 para planificar tus actividades."
  },
  {
    Nombre: "Cartulina de colores",
    CantidadDisponible: 80,
    Precio: 3000,
    codigo: "P002",
    Imagen: "cartulina_colores.jpg",
    categoria: "Papelería",
    subcategoria: "Papel",
    Descripcion: "Cartulina de colores variados, ideal para manualidades."
  },
  {
    Nombre: "Pizarrón blanco",
    CantidadDisponible: 10,
    Precio: 50000,
    codigo: "P003",
    Imagen: "pizarron_blanco.jpg",
    categoria: "Oficina",
    subcategoria: "Accesorios",
    Descripcion: "Pizarrón blanco de 1.2 x 1.5 m, ideal para presentaciones."
  },
  {
    Nombre: "Tijeras",
    CantidadDisponible: 60,
    Precio: 2500,
    codigo: "P004",
    Imagen: "tijeras.jpg",
    categoria: "Oficina",
    subcategoria: "Herramientas",
    Descripcion: "Tijeras de acero inoxidable, ideales para cortar papel."
  },
  {
    Nombre: "Grapadora",
    CantidadDisponible: 45,
    Precio: 5000,
    codigo: "P005",
    Imagen: "grapadora.jpg",
    categoria: "Oficina",
    subcategoria: "Herramientas",
    Descripcion: "Grapadora de escritorio, capacidad de hasta 20 hojas."
  },
  {
    Nombre: "Carpeta plástica",
    CantidadDisponible: 120,
    Precio: 1200,
    codigo: "P006",
    Imagen: "carpeta_plastica.jpg",
    categoria: "Organización",
    subcategoria: "Archivos",
    Descripcion: "Carpeta plástica con cierre, ideal para organizar documentos."
  },
  {
    Nombre: "Caja de clips",
    CantidadDisponible: 200,
    Precio: 800,
    codigo: "P007",
    Imagen: "clips.jpg",
    categoria: "Oficina",
    subcategoria: "Accesorios",
    Descripcion: "Caja con 100 clips metálicos de diferentes tamaños."
  },
  {
    Nombre: "Post-it amarillos",
    CantidadDisponible: 90,
    Precio: 1000,
    codigo: "P008",
    Imagen: "post_it.jpg",
    categoria: "Papelería",
    subcategoria: "Notas",
    Descripcion: "Notas adhesivas amarillas, perfectas para recordatorios."
  },
  {
    Nombre: "Regla 30 cm",
    CantidadDisponible: 50,
    Precio: 1300,
    codigo: "P009",
    Imagen: "regla_30cm.jpg",
    categoria: "Medición",
    subcategoria: "Herramientas",
    Descripcion: "Regla de plástico transparente de 30 cm."
  },
  {
    Nombre: "Marcador permanente negro",
    CantidadDisponible: 75,
    Precio: 1800,
    codigo: "P010",
    Imagen: "marcador_negro.jpg",
    categoria: "Escritura",
    subcategoria: "Marcadores",
    Descripcion: "Marcador permanente negro, ideal para escribir en cualquier superficie."
  },
  {
    Nombre: "Bloc de notas",
    CantidadDisponible: 110,
    Precio: 2200,
    codigo: "P011",
    Imagen: "bloc_notas.jpg",
    categoria: "Papelería",
    subcategoria: "Notas",
    Descripcion: "Bloc de notas con 100 hojas, perfecto para tomar apuntes."
  },
  {
    Nombre: "Corrector líquido",
    CantidadDisponible: 65,
    Precio: 1100,
    codigo: "P012",
    Imagen: "corrector.jpg",
    categoria: "Escritura",
    subcategoria: "Accesorios",
    Descripcion: "Corrector líquido de secado rápido, fácil de aplicar."
  },
  {
    Nombre: "Resaltador amarillo",
    CantidadDisponible: 100,
    Precio: 1400,
    codigo: "P013",
    Imagen: "resaltador_amarillo.jpg",
    categoria: "Escritura",
    subcategoria: "Marcadores",
    Descripcion: "Resaltador amarillo, ideal para marcar textos importantes."
  },
  {
    Nombre: "Engrapadora de mano",
    CantidadDisponible: 30,
    Precio: 6500,
    codigo: "P014",
    Imagen: "engrapadora_mano.jpg",
    categoria: "Oficina",
    subcategoria: "Herramientas",
    Descripcion: "Engrapadora de mano, fácil de usar para encuadernar documentos."
  },
  {
    Nombre: "Papel bond A4",
    CantidadDisponible: 500,
    Precio: 4000,
    codigo: "P015",
    Imagen: "papel_bond_a4.jpg",
    categoria: "Papelería",
    subcategoria: "Papel",
    Descripcion: "Paquete de 500 hojas de papel bond A4."
  },
  {
    Nombre: "Cinta adhesiva",
    CantidadDisponible: 100,
    Precio: 900,
    codigo: "P016",
    Imagen: "cinta_adhesiva.jpg",
    categoria: "Oficina",
    subcategoria: "Accesorios",
    Descripcion: "Cinta adhesiva de 1.5 cm de ancho, ideal para manualidades."
  },
  {
    Nombre: "Marcador borrable azul",
    CantidadDisponible: 80,
    Precio: 2000,
    codigo: "P017",
    Imagen: "marcador_azul.jpg",
    categoria: "Escritura",
    subcategoria: "Marcadores",
    Descripcion: "Marcador borrable azul, perfecto para pizarras blancas."
  },
  {
    Nombre: "Perforadora de papel",
    CantidadDisponible: 25,
    Precio: 8000,
    codigo: "P018",
    Imagen: "perforadora.jpg",
    categoria: "Oficina",
    subcategoria: "Herramientas",
    Descripcion: "Perforadora de papel de alta capacidad."
  },
  {
    Nombre: "Cartulina blanca",
    CantidadDisponible: 70,
    Precio: 1500,
    codigo: "P019",
    Imagen: "cartulina_blanca.jpg",
    categoria: "Papelería",
    subcategoria: "Papel",
    Descripcion: "Cartulina blanca de alta calidad para manualidades."
  },
  {
    Nombre: "Carpeta con anillas",
    CantidadDisponible: 60,
    Precio: 2800,
    codigo: "P020",
    Imagen: "carpeta_anillas.jpg",
    categoria: "Organización",
    subcategoria: "Archivos",
    Descripcion: "Carpeta con anillas para organizar documentos."
  },
  {
    Nombre: "Sobre manila",
    CantidadDisponible: 100,
    Precio: 600,
    codigo: "P021",
    Imagen: "sobre_manila.jpg",
    categoria: "Papelería",
    subcategoria: "Archivos",
    Descripcion: "Sobres manila de diferentes tamaños, perfectos para enviar documentos."
  },
  {
    Nombre: "Cinta correctora",
    CantidadDisponible: 40,
    Precio: 1900,
    codigo: "P022",
    Imagen: "cinta_correctora.jpg",
    categoria: "Escritura",
    subcategoria: "Accesorios",
    Descripcion: "Cinta correctora para eliminar errores de forma rápida."
  },
  {
    Nombre: "Calculadora básica",
    CantidadDisponible: 30,
    Precio: 9500,
    codigo: "P023",
    Imagen: "calculadora.jpg",
    categoria: "Oficina",
    subcategoria: "Herramientas",
    Descripcion: "Calculadora básica de 8 dígitos."
  },
  {
    Nombre: "Archivador",
    CantidadDisponible: 20,
    Precio: 7000,
    codigo: "P024",
    Imagen: "archivador.jpg",
    categoria: "Organización",
    subcategoria: "Archivos",
    Descripcion: "Archivador de dos anillas, ideal para mantener documentos organizados."
  },
  {
    Nombre: "Pegamento en barra",
    CantidadDisponible: 90,
    Precio: 1200,
    codigo: "P025",
    Imagen: "pegamento_barra.jpg",
    categoria: "Oficina",
    subcategoria: "Accesorios",
    Descripcion: "Pegamento en barra, fácil de usar y sin ácido."
  },
  {
    Nombre: "Rotulador rojo",
    CantidadDisponible: 85,
    Precio: 1700,
    codigo: "P026",
    Imagen: "rotulador_rojo.jpg",
    categoria: "Escritura",
    subcategoria: "Marcadores",
    Descripcion: "Rotulador rojo para anotaciones destacadas."
  },
  {
    Nombre: "Papel cuadriculado",
    CantidadDisponible: 50,
    Precio: 2000,
    codigo: "P027",
    Imagen: "papel_cuadriculado.jpg",
    categoria: "Papelería",
    subcategoria: "Papel",
    Descripcion: "Papel cuadriculado para dibujo técnico y matemáticas."
  },
  {
    Nombre: "Portaminas",
    CantidadDisponible: 45,
    Precio: 3500,
    codigo: "P028",
    Imagen: "portaminas.jpg",
    categoria: "Escritura",
    subcategoria: "Lápices",
    Descripcion: "Portaminas con minas de 0.5 mm, ideal para escribir y dibujar."
  },
  {
    Nombre: "Tinta de impresora",
    CantidadDisponible: 25,
    Precio: 15000,
    codigo: "P029",
    Imagen: "tinta_impresora.jpg",
    categoria: "Oficina",
    subcategoria: "Suministros",
    Descripcion: "Tinta de impresora compatible con diversas marcas."
  },
  {
    Nombre: "Cuaderno espiral",
    CantidadDisponible: 55,
    Precio: 2800,
    codigo: "P030",
    Imagen: "cuaderno_espiral.jpg",
    categoria: "Papelería",
    subcategoria: "Cuadernos",
    Descripcion: "Cuaderno espiral con 100 hojas, ideal para tomar apuntes."
  },
  {
    Nombre: "Bolígrafo azul",
    CantidadDisponible: 150,
    Precio: 900,
    codigo: "P031",
    Imagen: "boligrafo_azul.jpg",
    categoria: "Escritura",
    subcategoria: "Bolígrafos",
    Descripcion: "Bolígrafo azul de tinta líquida, suave al escribir."
  },
  {
    Nombre: "Hoja de lija",
    CantidadDisponible: 75,
    Precio: 1200,
    codigo: "P032",
    Imagen: "hoja_lija.jpg",
    categoria: "Oficina",
    subcategoria: "Suministros",
    Descripcion: "Hoja de lija de grano fino, ideal para manualidades."
  },
  {
    Nombre: "Cuaderno universitario",
    CantidadDisponible: 50,
    Precio: 3500,
    codigo: "P033",
    Imagen: "cuaderno_universitario.jpg",
    categoria: "Papelería",
    subcategoria: "Cuadernos",
    Descripcion: "Cuaderno universitario con 200 hojas, ideal para clases."
  },
  {
    Nombre: "Cinta métrica",
    CantidadDisponible: 40,
    Precio: 3000,
    codigo: "P034",
    Imagen: "cinta_metrica.jpg",
    categoria: "Medición",
    subcategoria: "Herramientas",
    Descripcion: "Cinta métrica de 5 metros, resistente y fácil de usar."
  },
  {
    Nombre: "Matriz de perforación",
    CantidadDisponible: 20,
    Precio: 4500,
    codigo: "P035",
    Imagen: "matriz_perforacion.jpg",
    categoria: "Oficina",
    subcategoria: "Herramientas",
    Descripcion: "Matriz de perforación para hacer agujeros en documentos."
  },
  {
    Nombre: "Bloc de dibujo",
    CantidadDisponible: 80,
    Precio: 2500,
    codigo: "P036",
    Imagen: "bloc_dibujo.jpg",
    categoria: "Papelería",
    subcategoria: "Notas",
    Descripcion: "Bloc de dibujo con hojas de alta calidad, ideal para artistas."
  },
  {
    Nombre: "Rollo de papel aluminio",
    CantidadDisponible: 100,
    Precio: 2200,
    codigo: "P037",
    Imagen: "papel_aluminio.jpg",
    categoria: "Cocina",
    subcategoria: "Suministros",
    Descripcion: "Rollo de papel aluminio resistente, ideal para cocinar."
  },
  {
    Nombre: "Sujeta documentos",
    CantidadDisponible: 90,
    Precio: 500,
    codigo: "P038",
    Imagen: "sujeta_documentos.jpg",
    categoria: "Oficina",
    subcategoria: "Accesorios",
    Descripcion: "Sujeta documentos metálico, útil para mantener papeles organizados."
  },
  {
    Nombre: "Organizador de escritorio",
    CantidadDisponible: 30,
    Precio: 12000,
    codigo: "P039",
    Imagen: "organizador_escritorio.jpg",
    categoria: "Organización",
    subcategoria: "Accesorios",
    Descripcion: "Organizador de escritorio de madera, elegante y práctico."
  },
  {
    Nombre: "Pack rotuladores permanentes 21 unidades",
    CantidadDisponible: 45,
    Precio: 2000,
    codigo: "P040",
    Imagen: "Pack_rotuladores.jpg",
    categoria: "Escritura",
    subcategoria: "Marcadores",
    Descripcion: "Pquete de rotuladores permanentes, ideal para marcar y decorar en cualquier superficie."
  },
  
];

console.log(listaProductos);
