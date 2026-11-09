# Pokémon Viewer

A locally run web app for browsing Pokémon. The React frontend talks to an Express backend. The backend gets data from [PokéAPI](https://pokeapi.co/) and trims it down to only what the UI needs.

<!-- TODO: add a screenshot once the frontend is built -->
<!-- ![Screenshot](docs/screenshot.png) -->

## Features

- [x] Look up a Pokémon by name or id (API)
- [ ] Search page in the frontend
- [ ] Paginated grid of all Pokémon
- [ ] Detail page with types, stats and abilities

## Tech stack

| Part | Tools |
|---|---|
| Frontend | React 19, TypeScript, Vite |
| Backend | Node.js, Express 5, TypeScript, tsx |
| Data | [PokéAPI](https://pokeapi.co/) (free, no API key needed) |

## Project structure

```
pokemon-app/
├── client/                 # React + Vite frontend
│   ├── src/
│   └── vite.config.ts
└── server/                 # Express backend
    └── src/
        ├── index.ts        # App setup and route mounting
        ├── routes/         # HTTP routes (Express routers)
        ├── services/       # PokéAPI calls and data reshaping
        └── types/          # Our API types and PokéAPI raw types
```

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 20 or newer
- npm

### Install

```bash
cd server && npm install
cd ../client && npm install
```

### Run in development

Start each part in its own terminal:

```bash
# Terminal 1: backend on http://localhost:3001
cd server
npm run dev
```

```bash
# Terminal 2: frontend on http://localhost:5173
cd client
npm run dev
```

Then open http://localhost:5173.

## Scripts

### Server (`server/`)

| Command | Description |
|---|---|
| `npm run dev` | Start the server and restart on file changes |
| `npm run build` | Compile TypeScript to `dist/` |
| `npm start` | Run the compiled build |
| `npm run typecheck` | Check types without building |

### Client (`client/`)

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

## API

Base URL: `http://localhost:3001/api`

### `GET /pokemon/:name`

Returns one Pokémon. `:name` can be a name (`pikachu`) or a Pokédex number (`25`) and isn't case-sensitive.

**Example response**

```json
{
  "id": 25,
  "name": "pikachu",
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  "types": ["electric"],
  "height": 4,
  "weight": 60
}
```


**Errors**

| Status | When |
|---|---|
| `404` | No Pokémon matches the name or id: `{ "error": "Pokémon not found" }` |
| `500` | PokéAPI request failed |

<!-- TODO: document GET /pokemon?limit=&offset= once it exists -->

## Configuration

| Variable | Default | Description |
|---|---|---|
| `PORT` | `3001` | Port the Express server listens on |

## Roadmap

<!-- TODO: keep this up to date as you go -->
1. Frontend search page
2. List endpoint and Pokémon grid
3. Routing with `react-router-dom` (grid page and detail page)

## Acknowledgements

- Pokémon data and images come from [PokéAPI](https://pokeapi.co/).


## License

<!-- TODO: choose a license, e.g. MIT -->
