/**
 * 🎨 Script para generar contenido de galería - PULIDO
 * 
 * Este script genera automáticamente:
 * - 10 archivos JSON en /src/content/gallery/
 * - 10 imágenes placeholder en /src/assets/gallery/
 * 
 * Uso:
 *   node scripts/generate-pulido-gallery.js
 * 
 * Características:
 * - Genera títulos descriptivos variados
 * - Crea descripciones profesionales
 * - Usa imágenes existentes como placeholder
 * - No sobrescribe archivos existentes
 * - Muestra estadísticas de la galería
 * 
 * Nota: Reemplaza los placeholders con fotos reales de trabajos de pulido
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const galleryDir = path.join(__dirname, '../src/content/gallery');
const assetsDir = path.join(__dirname, '../src/assets/gallery');

// Títulos y descripciones para pulido
const pulidoData = [
  {
    titulo: "Pulido de Corrección en 3 Etapas",
    description: "Proceso completo de pulido profesional eliminando rayones y arañazos profundos con sistema de 3 etapas."
  },
  {
    titulo: "Pulido Espejo Premium",
    description: "Tratamiento de pulido de alto brillo que devuelve el acabado espejo a la pintura del vehículo."
  },
  {
    titulo: "Corrección de Pintura Profesional",
    description: "Eliminación de defectos de pintura mediante pulido con máquina rotativa y productos premium."
  },
  {
    titulo: "Pulido de Restauración",
    description: "Recuperación completa del brillo original mediante pulido profundo y sellado protector."
  },
  {
    titulo: "Pulido de Detalle Fino",
    description: "Acabado final de pulido fino para eliminar hologramas y conseguir brillo perfecto."
  },
  {
    titulo: "Pulido de Faros",
    description: "Restauración de faros opacos mediante pulido especializado que recupera la transparencia original."
  },
  {
    titulo: "Pulido y Abrillantado Completo",
    description: "Servicio completo de pulido de toda la carrocería con productos de última generación."
  },
  {
    titulo: "Pulido de Corrección Media",
    description: "Eliminación de defectos medios como swirl marks y rayones superficiales con sistema de 2 etapas."
  },
  {
    titulo: "Pulido Pre-Cerámico",
    description: "Preparación de pintura mediante pulido profesional previo a aplicación de protección cerámica."
  },
  {
    titulo: "Pulido de Alto Brillo",
    description: "Tratamiento de pulido intensivo que maximiza el brillo y profundidad del color de la pintura."
  }
];

// Verificar y crear directorio de assets si no existe
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
  console.log('✓ Directorio de assets creado');
}

// Crear imágenes placeholder para pulido
const createPlaceholder = (filename, number) => {
  const placeholderPath = path.join(assetsDir, filename);
  
  // Si ya existe la imagen, no la sobrescribimos
  if (fs.existsSync(placeholderPath)) {
    console.log(`  → ${filename} ya existe, se reutiliza`);
    return;
  }
  
  // Buscar una imagen existente para copiar como placeholder
  const existingImages = fs.readdirSync(assetsDir).filter(file => 
    file.endsWith('.webp') || file.endsWith('.jpg') || file.endsWith('.png')
  );
  
  if (existingImages.length > 0) {
    // Copiar una imagen existente como placeholder
    const sourceImage = path.join(assetsDir, existingImages[0]);
    fs.copyFileSync(sourceImage, placeholderPath);
    console.log(`  → ${filename} creado (copia de ${existingImages[0]})`);
  } else {
    console.log(`  ⚠ No hay imágenes existentes para copiar. Deberás agregar ${filename} manualmente.`);
  }
};

console.log('\n🎨 Generando galería de PULIDO...\n');

// Generar los 10 archivos JSON con sus imágenes
pulidoData.forEach((data, index) => {
  const imageFilename = `pulido_${index + 1}.webp`;
  const jsonFilename = `pulido_${index + 1}.json`;
  const jsonPath = path.join(galleryDir, jsonFilename);
  
  // Crear imagen placeholder
  createPlaceholder(imageFilename, index + 1);
  
  // Crear contenido JSON
  const content = {
    titulo: data.titulo,
    description: data.description,
    foto: `../../assets/gallery/${imageFilename}`,
    categoria: "pulido"
  };
  
  // Guardar archivo JSON
  fs.writeFileSync(jsonPath, JSON.stringify(content, null, 2));
  console.log(`✓ Creado: ${jsonFilename}`);
});

console.log('\n✨ Proceso completado!\n');
console.log('📊 Resumen:');
console.log(`   - 10 archivos JSON creados en /src/content/gallery/`);
console.log(`   - 10 imágenes en /src/assets/gallery/`);
console.log('\n💡 Nota: Las imágenes son placeholders. Reemplázalas con fotos reales de pulido.\n');

// Mostrar total de archivos en galería
const totalFiles = fs.readdirSync(galleryDir).length;
console.log(`📁 Total de archivos en galería: ${totalFiles}`);

// Contar por categoría
const files = fs.readdirSync(galleryDir);
const categories = {};
files.forEach(file => {
  if (file.endsWith('.json')) {
    const content = JSON.parse(fs.readFileSync(path.join(galleryDir, file)));
    categories[content.categoria] = (categories[content.categoria] || 0) + 1;
  }
});

console.log('\n📈 Distribución por categoría:');
Object.entries(categories).sort((a, b) => b[1] - a[1]).forEach(([cat, count]) => {
  console.log(`   ${cat.padEnd(15)} → ${count} imágenes`);
});

console.log('\n');
