# Míster Manager F7 - Alevín 26/27 ⚽ (PWA App)

Software interactivo estilo **Football Manager** para la gestión de plantilla, pizarra táctica de **Fútbol 7**, control de **convocatoria/bajas** y seguimiento de **minutos de juego en directo**, preparado para publicarse como **PWA descargable** (Progressive Web App) en GitHub Pages.

---

## ⏱️ Duración de los Partidos: 2 x 35 min (70 min total)

El cronómetro y los períodos están configurados para la categoría **Alevín (35 minutos por parte)**:
- **1ª Parte (35 min)**
- **Descanso**
- **2ª Parte (35 min)**
- **Final del Partido (70 min)**

---

## 🔀 Nuevo Sistema de Cambios y Arrastre Visual

Hemos eliminado los botones invasivos para que el campo se vea 100% limpio y la gestión sea completamente natural:

1. **Sustituir a un titular:**
   - Arrastra a un jugador del **banquillo** y suéltalo sobre el **titular** en el campo. Se realiza el cambio inmediatamente y se registra: `🔄 ⬇️ Sale [titular] ➡️ ⬆️ Entra [suplente]`.
2. **Intercambiar posiciones tácticas entre dos titulares:**
   - Arrastra a un jugador del campo y suéltalo sobre **otro jugador del campo**. Intercambiarán sus puestos al instante (`🔀 Intercambio táctico: [J1] ↔️ [J2]`).
3. **Mandar al banquillo a un jugador:**
   - Arrastra al jugador desde el campo y **suéltalo sobre la zona del banquillo**. Quedará retirado y el puesto libre para otro niño.
4. **Ocupar un puesto vacío:**
   - Arrastra a cualquier suplente del banquillo y suéltalo sobre un hueco con `+ Meter`.
5. **En móviles y tablets (Toque táctil):**
   - También puedes simplemente tocar a un suplente en el banquillo y luego tocar el puesto en el campo para cambiarlo sin necesidad de arrastrar.

---

## 📱 Cómo subirlo a GitHub y tenerlo como App en el móvil / PC

1. **Crea un repositorio en GitHub:**
   - Sube todos los archivos de esta carpeta (`index.html`, `app.js`, `style.css`, `manifest.json`, `sw.js`, `icon-192.png`, `icon-512.png`, `icon.svg`).
2. **Activa GitHub Pages:**
   - En tu repositorio de GitHub, ve a **Settings** > **Pages**.
   - En **Build and deployment** > **Branch**, selecciona `main` y carpeta `/(root)`, luego pulsa **Save**.
   - En 1 minuto tendrás una URL pública segura con HTTPS (ej: `https://tu-usuario.github.io/tu-repo/`).
3. **Instalar como App:**
   - **En Android (Chrome):** Entra a la URL y pulsa en el botón **"Instalar App"** que aparecerá en la cabecera.
   - **En iPhone / iPad (Safari):** Pulsa el botón de Compartir > *Añadir a pantalla de inicio*.
   - ¡Funcionará como una app nativa a pantalla completa y **sin necesidad de internet** gracias al Service Worker!

---

## 👥 Plantilla Cargada (15 Jugadores Reales)

| # | Jugador | Posición | Media (GLR) | Cal | Tal | Vel | Pot | Men |
|:---:|---|---|:---:|:---:|:---:|:---:|:---:|:---:|
| 9 | **Adrián Montes Pérez** | Delantero (DC) | **88** | 85 | 93 | 90 | 84 | 87 |
| 2 | **José Luis López Ramírez** | Lateral (DEF) | **83** | 76 | 78 | 85 | 90 | 87 |
| 3 | **Pepe Chavarino Martos** | Lat. / Medio rec. | **83** | 72 | 74 | 83 | 89 | 95 |
| 4 | **Antonio Martínez Nicás** | Central (DEF) | **80** | 70 | 75 | 73 | 89 | 94 |
| 10 | **Rodrigo Enciso Ontiveros** | Mediapunta (MED) | **79** | 79 | 86 | 72 | 85 | 75 |
| 6 | **Enzo Pérez Seva** | Mediocentro (MED) | **78** | 74 | 87 | 80 | 78 | 72 |
| 8 | **Jesús Castro Domingo** | Mediocentro (MED) | **78** | 84 | 84 | 76 | 62 | 83 |
| 5 | **Jaime González Gómez** | Lateral (DEF) | **76** | 84 | 87 | 76 | 74 | 61 |
| 12 | **Fernando Enciso Ontiveros** | Central (DEF) | **72** | 76 | 77 | 72 | 74 | 63 |
| 14 | **Juan Martín Lagos-Díaz** | Delantero (DEL / MED) | **71** | 80 | 72 | 67 | 64 | 72 |
| 15 | **Miguel Ángel Alonso Zafra** | Mediocentro (MED) | **68** | 65 | 61 | 74 | 77 | 62 |
| 16 | **Eduardo Recas Ruiz** | Defensa (DEF) | **67** | 73 | 65 | 63 | 70 | 65 |
| 17 | **Ignacio Lecina Navajas** | Comodín / Parche | **31** | 27 | 12 | 27 | 48 | 42 |
| 18 | **Carlos Sánchez Cuello** | Comodín / Parche | **28** | 37 | 26 | 23 | 39 | 15 |
| 1 | **Adriano Rho López** | *(Pendiente de eval.)* | **70** | 70 | 70 | 70 | 70 | 70 |

---

## 🖥️ Uso en Local (Sin subir a GitHub)
Puedes usarla en tu ordenador sin conexión simplemente haciendo doble clic en **`Abrir Míster Manager.bat`** o en **`index.html`**.
