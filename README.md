cd ~/alfa_service_cars
git pull
npm install
npm run build

sudo rm -rf /var/www/alfa*service_cars/*
sudo cp -r dist/\_ /var/www/alfa_service_cars/
sudo chown -R www-data:www-data /var/www/alfa_service_cars
sudo chmod -R 755 /var/www/alfa_service_cars
sudo systemctl reload nginx

✅ Mejoras SEO Implementadas en Layout:

1. Meta Tags Dinámicos ✨
   ✅ <title> dinámico por página
   ✅ <meta description> personalizado
   ✅ <link rel="canonical"> para evitar contenido duplicado
   ✅ Props configurables en cada página
2. Open Graph & Social Media 📱
   ✅ Open Graph completo (Facebook)
   ✅ Twitter Cards optimizadas
   ✅ URLs absolutas para imágenes
   ✅ og:site_name agregado
   ✅ Imágenes personalizables por página
3. SEO Técnico 🔧
   ✅ viewport con initial-scale=1.0
   ✅ Keywords específicas de la industria
   ✅ Geo-targeting para Chile (geo.region, geo.placename)
   ✅ theme-color para PWA
   ✅ Apple mobile web app tags
4. Schema.org JSON-LD 📊
   ✅ Tipo AutomotiveBusiness
   ✅ Información de contacto y ubicación
   ✅ Horarios de apertura
   ✅ Redes sociales (sameAs)
   ✅ Logo e imágenes estructuradas
5. Performance ⚡
   ✅ preconnect para recursos externos
   ✅ Preload de fuentes críticas ya estaba
   ✅ compressHTML: true en config
   ✅ inlineStylesheets: "auto" para CSS crítico
6. Sitemap & Robots 🗺️
   ✅ @astrojs/sitemap instalado y configurado
   ✅ robots.txt creado con reglas claras
   ✅ site: "https://alfadetailers.cl" en config
   ✅ Sitemap XML generado automáticamente
7. Páginas Optimizadas 📄
   ✅ Home: Título y descripción principal
   ✅ Galería: Keywords de trabajos visuales
   ✅ Somos: Información de equipo e instalaciones
   ✅ Cotizar: Call-to-action optimizado
