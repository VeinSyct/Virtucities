<img width="1440" height="683" alt="Screenshot 2026-04-16 225825" src="https://github.com/user-attachments/assets/5032c6b5-41cc-4a8c-a7bc-e4f97113d390" />

# 🌍 Virtual Experience Engine  
## **VirtuCities**

A real-time open-world 3D simulation engine built with **Three.js**, featuring dynamic environments, vehicles, and characters. VirtuCities is designed to deliver immersive sandbox-style gameplay inspired by high-end cinematic rendering and AAA open-world systems.

---

## 🌐 Concept Origin

The name **VirtuCities** is derived from **“Virtual Cities”**, reflecting the core vision of the engine.

The system is designed to support **multiple interconnected cities within a single seamless world**, where players can:

- Enter and exit different cities without loading screens  
- Travel continuously across large-scale environments  
- Experience seamless world streaming and transitions  
- Maintain persistent physics, vehicles, and NPC states across regions  

City boundaries are designed to feel **invisible to the player**, creating a continuous open-world experience rather than isolated levels.

---

## 🌍 Project Overview

**VirtuCities** is a modular virtual world engine that combines real-time rendering, physics simulation, and dynamic world systems to create a scalable open-world experience similar to modern sandbox games.

The core environment is based on the **Pier Island game level**, available in two distinct variants:

### 🏝️ Pier Island Variants

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

---

## 🧱 Tech Stack

- **Rendering Engine:** Three.js  
- **Physics Engine:** Cannon.js  
- **Language:** JavaScript / TypeScript  
- **World System:** Multi-city streaming architecture  
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
- [ ] Multiplayer integration (future phase)  
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
