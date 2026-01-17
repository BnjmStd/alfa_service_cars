#!/usr/bin/env node

/**
 * Script para generar archivos JSON de galería
 * Uso: node scripts/generate-gallery-json.js <categoria> <inicio> <fin>
 * Ejemplo: node scripts/generate-gallery-json.js pulido 11 18
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración de títulos y descripciones por categoría
const CATEGORY_CONFIG = {
  pulido: {
    titles: [
      "Pulido en 3 Etapas",
      "Eliminación de Rayones",
      "Brillo Espejo Profesional",
      "Corrección de Pintura",
      "Pulido Premium",
      "Restauración de Brillo",
      "Pulido Comparativo Antes/Después",
      "Acabado de Alto Brillo",
      "Pulido y Protección",
      "Tratamiento Completo",
    ],
    description: "Proceso de pulido profesional para eliminar imperfecciones y restaurar el brillo original.",
  },
  interiores: {
    titles: [
      "Detailing Interior Completo",
      "Limpieza de Tapicería Premium",
      "Restauración de Cuero",
      "Limpieza Profunda",
      "Desinfección Interior",
      "Tratamiento de Alfombras",
      "Limpieza de Tablero",
      "Acondicionamiento de Plásticos",
    ],
    description: "Limpieza y restauración profesional del interior del vehículo.",
  },
  exteriores: {
    titles: [
      "Lavado Exterior Premium",
      "Pulido Profesional",
      "Corrección de Pintura",
      "Tratamiento de Carrocería",
      "Limpieza de Llantas",
      "Encerado Premium",
      "Detailing Completo",
    ],
    description: "Tratamiento completo de la carrocería con productos premium.",
  },
  ceramico: {
    titles: [
      "Protección Cerámica 9H",
      "Coating Cerámico Premium",
      "Tratamiento Cerámico Completo",
      "Nanocerámico Profesional",
      "Protección de Larga Duración",
    ],
    description: "Protección de larga duración con tecnología cerámica avanzada.",
  },
  restauracion: {
    titles: [
      "Restauración Completa",
      "Recuperación de Pintura",
      "Renovación Total",
      "Restauración de Cromados",
      "Renovación de Faros",
    ],
    description: "Recuperación completa del aspecto original del vehículo.",
  },
  grabado: {
    titles: [
      "Grabado de Patente",
      "Grabado en Vidrios",
      "Identificación Vehicular",
      "Grabado de Seguridad",
    ],
    description: "Servicio de grabado para mayor seguridad vehicular.",
  },
  polarizado: {
    titles: [
      "Polarizado Premium",
      "Film de Seguridad",
      "Tintado Profesional",
      "Polarizado Anti-UV",
      "Instalación de Film",
    ],
    description: "Instalación de films de alta calidad para protección y privacidad.",
  },
  motorized: {
    titles: [
      "Detailing de Motor",
      "Limpieza de Compartimento",
      "Motor Impecable",
      "Desengrase Profesional",
    ],
    description: "Limpieza detallada del compartimento del motor.",
  },
  motor: {
    titles: [
      "Lavado de Motor",
      "Detailing Mecánico",
      "Limpieza Profunda Motor",
      "Descontaminación",
    ],
    description: "Lavado profundo y detallado del motor del vehículo.",
  },
};

// Obtener argumentos de línea de comandos
const [,, categoria, inicio, fin] = process.argv;

if (!categoria || !inicio || !fin) {
  console.error('❌ Error: Faltan argumentos');
  console.log('\n📖 Uso:');
  console.log('  node scripts/generate-gallery-json.js <categoria> <inicio> <fin>\n');
  console.log('📝 Ejemplo:');
  console.log('  node scripts/generate-gallery-json.js pulido 11 18\n');
  console.log('📂 Categorías disponibles:');
  Object.keys(CATEGORY_CONFIG).forEach(cat => console.log(`  - ${cat}`));
  process.exit(1);
}

// Validar categoría
if (!CATEGORY_CONFIG[categoria]) {
  console.error(`❌ Error: Categoría "${categoria}" no válida`);
  console.log('\n📂 Categorías disponibles:');
  Object.keys(CATEGORY_CONFIG).forEach(cat => console.log(`  - ${cat}`));
  process.exit(1);
}

// Validar números
const startNum = parseInt(inicio);
const endNum = parseInt(fin);

if (isNaN(startNum) || isNaN(endNum) || startNum > endNum) {
  console.error('❌ Error: Los números de inicio y fin deben ser válidos');
  process.exit(1);
}

const config = CATEGORY_CONFIG[categoria];
const galleryDir = path.join(__dirname, '../src/content/gallery');
const assetsDir = path.join(__dirname, '../src/assets/gallery');

console.log(`\n🎨 Generando archivos JSON para: ${categoria}`);
console.log(`📊 Rango: ${startNum} - ${endNum}\n`);

let created = 0;
let skipped = 0;
let missingImages = [];

for (let i = startNum; i <= endNum; i++) {
  const jsonFilename = `${categoria}_${i}.json`;
  const jsonPath = path.join(galleryDir, jsonFilename);
  
  // Verificar si el JSON ya existe
  if (fs.existsSync(jsonPath)) {
    console.log(`⏭️  Saltando: ${jsonFilename} (ya existe)`);
    skipped++;
    continue;
  }
  
  // Buscar la imagen correspondiente
  const possibleImages = [
    `${categoria}_${i}.webp`,
    `${categoria}_${i}.jpg`,
    `${categoria}_${i}.png`,
    `${categoria}_${i}_comparative.webp`,
  ];
  
  let imageFile = null;
  for (const imgName of possibleImages) {
    const imgPath = path.join(assetsDir, imgName);
    if (fs.existsSync(imgPath)) {
      imageFile = imgName;
      break;
    }
  }
  
  if (!imageFile) {
    console.log(`⚠️  Advertencia: No se encontró imagen para ${categoria}_${i}`);
    missingImages.push(i);
    continue;
  }
  
  // Obtener título dinámico
  const titleIndex = (i - 1) % config.titles.length;
  const baseTitle = config.titles[titleIndex];
  const number = Math.floor((i - 1) / config.titles.length) + 1;
  const titulo = number > 1 ? `${baseTitle} ${number}` : baseTitle;
  
  // Crear el objeto JSON
  const jsonContent = {
    titulo: titulo,
    description: config.description,
    foto: `../../assets/gallery/${imageFile}`,
    categoria: categoria,
  };
  
  // Escribir el archivo
  fs.writeFileSync(jsonPath, JSON.stringify(jsonContent, null, 2));
  console.log(`✅ Creado: ${jsonFilename} → ${imageFile}`);
  created++;
}

// Resumen
console.log('\n' + '='.repeat(50));
console.log('📊 RESUMEN');
console.log('='.repeat(50));
console.log(`✅ Archivos creados: ${created}`);
console.log(`⏭️  Archivos saltados: ${skipped}`);
if (missingImages.length > 0) {
  console.log(`⚠️  Imágenes faltantes: ${missingImages.join(', ')}`);
}
console.log('='.repeat(50) + '\n');

if (created > 0) {
  console.log('🎉 ¡Proceso completado exitosamente!\n');
}
