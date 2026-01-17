// Script para generar contenido de prueba en la galería
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const categories = [
  "interiores",
  "exteriores",
  "ceramico",
  "restauracion",
  "grabado",
  "polarizado",
  "motorized",
  "pulido",
  "motor"
];

const titles = {
  interiores: ["Detailing Interior Completo", "Limpieza de Tapicería", "Restauración de Cuero"],
  exteriores: ["Lavado Exterior Premium", "Pulido Profesional", "Corrección de Pintura"],
  ceramico: ["Protección Cerámica 9H", "Tratamiento Cerámico Completo", "Coating Premium"],
  restauracion: ["Restauración Completa", "Recuperación de Pintura", "Renovación Total"],
  grabado: ["Grabado de Patente", "Grabado en Vidrios", "Identificación Vehicular"],
  polarizado: ["Polarizado Premium", "Film de Seguridad", "Tintado Profesional"],
  motorized: ["Detailing de Motor", "Limpieza de Compartimento", "Motor Impecable"],
  pulido: ["Pulido en 3 Etapas", "Eliminación de Rayones", "Brillo Espejo"],
  motor: ["Lavado de Motor", "Detailing Mecánico", "Limpieza Profunda Motor"]
};

const descriptions = {
  interiores: "Limpieza y restauración profesional del interior del vehículo.",
  exteriores: "Tratamiento completo de la carrocería con productos premium.",
  ceramico: "Protección de larga duración con tecnología cerámica avanzada.",
  restauracion: "Recuperación completa del aspecto original del vehículo.",
  grabado: "Servicio de grabado para mayor seguridad vehicular.",
  polarizado: "Instalación de films de alta calidad para protección y privacidad.",
  motorized: "Limpieza detallada del compartimento del motor.",
  pulido: "Proceso de pulido profesional para eliminar imperfecciones.",
  motor: "Lavado profundo y detallado del motor del vehículo."
};

const galleryDir = path.join(__dirname, '../src/content/gallery');

// Generar 30 archivos de ejemplo (para tener suficiente contenido)
let fileCount = 0;
for (let i = 0; i < 30; i++) {
  const category = categories[i % categories.length];
  const titlesList = titles[category];
  const title = titlesList[Math.floor(Math.random() * titlesList.length)];
  const description = descriptions[category];
  
  // Usar las imágenes existentes como referencia
  const imageRef = i % 2 === 0 ? "polarizado_1.webp" : "grabado_patente_1.webp";
  
  const content = {
    titulo: `${title} ${Math.floor(i / 9) + 1}`,
    description: description,
    foto: `../../assets/gallery/${imageRef}`,
    categoria: category
  };
  
  const filename = `${category}_${fileCount + 1}.json`;
  const filepath = path.join(galleryDir, filename);
  
  // No sobrescribir archivos existentes
  if (!fs.existsSync(filepath)) {
    fs.writeFileSync(filepath, JSON.stringify(content, null, 2));
    console.log(`✓ Creado: ${filename}`);
    fileCount++;
  }
}

console.log(`\n✨ Generados ${fileCount} archivos de ejemplo en la galería`);
console.log(`📁 Total de archivos en gallery: ${fs.readdirSync(galleryDir).length}`);
