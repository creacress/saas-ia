# 🧠 SaaS Entraînement IA – Open & Optimisé

> **Problématique résolue :** _"Comment faciliter l'entraînement de modèles IA sans payer (ou presque)"_  
> Un SaaS ultra-rapide, open-source et full Docker, conçu pour charger, nettoyer, analyser et entraîner des modèles IA à partir de gros datasets.

## 🚀 Fonctionnalités clés

- ✅ **Upload de CSV massif**
- 📊 **Prévisualisation automatique** (types, colonnes, nulls, stats)
- 🎯 **Choix de la target pour l'entraînement**
- 🧹 (à venir) **Nettoyage intelligent**
- 🤖 (à venir) **Training automatique** (sklearn, LightGBM, Torch)
- 🧠 (à venir) **Export & API de prédiction**

## ⚙️ Stack technique

| Frontend        | Backend       | Data Engine | Entraînement     |
|-----------------|---------------|-------------|------------------|
| Next.js 15      | FastAPI       | Polars      | (à venir) PyTorch/Sklearn |
| Tailwind CSS    | Uvicorn       | Python 3.10 | MLflow           |
| React client    | Dockerized    | CSV > Parquet | Celery (async)  |


## 🧪 Lancer le projet

> Prérequis : Docker + Docker Compose

```bash
git clone https://github.com/ton-user/saas-ia
cd saas-ia
docker-compose up --build
```

- Frontend → `http://localhost:3000`  
- Backend API → `http://localhost:8000/docs` (Swagger)

## 🗂 Structure

```
saas-ia/
│
├── backend/
│   ├── app/                # FastAPI app (routes, tasks, etc.)
│   ├── ml/                 # Dossiers IA (training, preprocessing...)
│   └── main.py             # Entrée FastAPI
│
├── frontend/
│   ├── src/app/            # Pages Next.js
│   ├── src/components/     # UI & forms
│   └── tailwind.config.ts
│
├── docker-compose.yml
└── README.md
```

## 📦 Routes utiles

- `POST /preview-dataset` → analyse de dataset avec Polars
- `POST /train` → (à venir) lancement auto de l'entraînement

## 🛠 Roadmap

- [x] Upload CSV & analyse rapide
- [x] Choix colonne cible
- [ ] Nettoyage auto (valeurs manquantes, normalisation)
- [ ] Training IA (LightGBM / Torch)
- [ ] Export modèle + API prédiction

## 🧑‍💻 Dev par [Cresson](https://webcresson.com)  
> Projet open-source, pédagogique & utile à tous ceux qui veulent faire de l'IA… sans se ruiner ⚡


