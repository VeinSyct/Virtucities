<img width="1897" height="1021" alt="image" src="https://github.com/user-attachments/assets/aa97d42a-dc09-430f-a922-55d34cc26f61" />

# 🌍 Virtual Experience Engine  
## **VirtuCities**

A real-time open-world 3D simulation engine built with **Three.js**, featuring dynamic environments, vehicles, and characters. VirtuCities is designed to deliver immersive sandbox-style gameplay inspired by high-end cinematic rendering and AAA open-world systems.

---

## 🌐 Concept Origin

<img width="1536" height="1024" alt="a3a45e77-4b01-46ea-8a6d-6b237fab2cd8" src="https://github.com/user-attachments/assets/aea04966-4e95-4050-a767-314a10d98ec3" />


The name **VirtuCities** is derived from **“Virtual Cities”**, reflecting the core vision of the engine.

The system is designed to support **multiple interconnected cities within a single seamless world**, where players can:

- Enter and exit different cities without loading screens  
- Travel continuously across large-scale environments  
- Experience seamless world streaming and transitions  
- Maintain persistent physics, vehicles, and NPC states across regions  

City boundaries are designed to feel **invisible to the player**, creating a continuous open-world experience rather than isolated levels.

---

## 🌍 Project Overview

<img width="1536" height="1024" alt="e7551500-2439-463f-824d-31b6f2ef3a6b" src="https://github.com/user-attachments/assets/aa431143-05d6-4599-b3f0-53a59d4a59d6" />

**VirtuCities** is a modular virtual world engine that combines real-time rendering, physics simulation, and dynamic world systems to create a scalable open-world experience similar to modern sandbox games.

The core environment is based on the **Pier Island game level**, available in two distinct variants:

### 🏝️ Pier Island Variants

https://sketchfab.com/3d-models/crateria-96e015d3465945e189bf1cc15f30976a

#### 🎮 Realistic Version
High-fidelity environment designed for cinematic visuals, advanced lighting, and physically-based rendering (PBR).  
Inspired by offline rendering workflows such as 3ds Max and V-Ray pipelines.

#### 🧱 Low Poly Version
Optimized version focused on performance, scalability, and gameplay prototyping.  
Ideal for large-scale simulation, AI testing, and low-end hardware support.

🔗 https://www.turbosquid.com/3d-models/pier-island-3d-model-1998778

---

## ✨ Features

- 🌆 Multi-city open-world streaming system  
- 🏝️ Dual-mode Pier Island environment (Realistic + Low Poly)  
- 🚗 Dynamic vehicle system (driveable + AI-controlled)  
- 🧍 Dynamic NPC character system  
- ⚙️ Real-time physics simulation using Cannon.js  
- 🎮 Interactive sandbox gameplay systems  
- 🌐 Seamless world streaming architecture (WIP)  
- 🧑‍🤝‍🧑 Multiplayer support (real-time networked simulation)

---

## 🧱 Tech Stack

- **Rendering Engine:** Three.js  
- **Physics Engine:** Cannon.js  
- **Language:** JavaScript / TypeScript  
- **World System:** Multi-city streaming architecture  
- **Networking:** WebSocket-based multiplayer system  
- **Asset Pipeline:** Real-time optimized 3D models  

---

## 🎨 Rendering & Visual Style

VirtuCities aims to combine real-time performance with cinematic visual fidelity.

Inspired by:

- 3ds Max rendering workflows  
- V-Ray lighting and shading techniques  
- Physically-Based Rendering (PBR) pipelines  

### Supports:
- 🎥 High-fidelity cinematic mode (Realistic)  
- 🎮 Optimized performance mode (Low Poly)  

---

## 🧠 System Architecture

- Scene Manager – world streaming & lifecycle control  
- City Streaming System – dynamic loading/unloading of cities  
- Physics World – Cannon.js integration  
- Entity System – NPCs, vehicles, props  
- Input Controller – player & camera control  
- Rendering Pipeline – Three.js WebGL renderer  
- Network Layer – multiplayer synchronization system  

---

## 🌆 World Streaming System

VirtuCities is built around a **multi-city streaming architecture**, where:

- The world is divided into multiple city zones  
- Only nearby cities are fully loaded  
- Distant cities are streamed or simplified  
- Transitions between cities are seamless  
- Physics and entity states persist across regions  

This creates the illusion of a **single continuous massive world**.

---

## 🚧 Roadmap

- [ ] NPC AI navigation system  
- [ ] Advanced vehicle physics (suspension, drift system)  
- [ ] Weather system & day/night cycle  
- [ ] Multiplayer synchronization improvements  
- [ ] World streaming optimization (LOD + chunking system)  
- [ ] Advanced lighting & post-processing  
- [ ] Traffic and city simulation system  

---

## 🎮 Controls

- **WASD** – Move player / vehicle  
- **Mouse** – Camera control  
- **Space** – Jump / Brake  
- **Shift** – Sprint / Boost  

---

## 🚀 Getting Started

### Prerequisites

VirtuCities must be run through a local web server. Opening `virtucities.html` directly from your file system (`file://`) may prevent models, textures, scripts, and other assets from loading correctly due to browser security restrictions.

### Run with VS Code Live Server

1. Open the project folder in Visual Studio Code.
2. Install the **Live Server** extension if it is not already installed.
3. Locate `virtucities.html` in the project directory.
4. Right-click `virtucities.html`.
5. Select **Open with Live Server**.

The application will automatically launch in your default web browser.

### Alternative Local Server Methods

#### Python

```bash
python -m http.server 8000
```

Open:

```text
http://localhost:8000/virtucities.html
```

#### Node.js

```bash
npx serve .
```

Then open the URL displayed in the terminal.

### Project Entry Point

The main application entry file is:

```text
virtucities.html
```

After starting a local server, navigate to:

```text
http://localhost:<port>/virtucities.html
```

to launch the VirtuCities simulation.

### Troubleshooting

If the application displays a blank screen or assets fail to load:

* Verify that the project is running through a local web server.
* Check the browser developer console for errors.
* Ensure all asset paths and dependencies are present.
* Refresh the page after making changes.
* Confirm that JavaScript modules and external assets are loading successfully.

---

## 🎮 Quick Start

```bash
# Clone the repository
git clone <repository-url>

# Open the project folder
cd VirtuCities

# Launch with Live Server
# or start a local server

python -m http.server 8000
```

Open your browser and navigate to:

```text
http://localhost:8000/virtucities.html
```

You are now ready to explore the VirtuCities open-world simulation.

---

## 📌 Notes

VirtuCities is a real-time simulation engine focused on combining physics-driven gameplay with cinematic-quality open-world visuals. It is actively under development and evolving toward a scalable multi-city sandbox framework.
