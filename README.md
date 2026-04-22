<img width="1440" height="683" alt="Screenshot 2026-04-16 225825" src="https://github.com/user-attachments/assets/5032c6b5-41cc-4a8c-a7bc-e4f97113d390" />

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

<div class="sketchfab-embed-wrapper"> <iframe title="Serini &amp; Suron Island Cities" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/5218d7e81e39409c99d21bbcf679e3f2/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/serini-suron-island-cities-5218d7e81e39409c99d21bbcf679e3f2?utm_medium=embed&utm_campaign=share-popup&utm_content=5218d7e81e39409c99d21bbcf679e3f2" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Serini &amp; Suron Island Cities </a> by <a href="https://sketchfab.com/VeinSyct?utm_medium=embed&utm_campaign=share-popup&utm_content=5218d7e81e39409c99d21bbcf679e3f2" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> VeinSyct </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=5218d7e81e39409c99d21bbcf679e3f2" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>

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

## 📌 Notes

VirtuCities is a real-time simulation engine focused on combining physics-driven gameplay with cinematic-quality open-world visuals. It is actively under development and evolving toward a scalable multi-city sandbox framework.
