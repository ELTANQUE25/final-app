# Meal App

## Descrizione

**Meal App** è una web app sviluppata in **React** che permette agli utenti di esplorare piatti dall’API dei pasti, salvare le ricette nei preferiti, creare le proprie ricette personalizzate e gestire il profilo utente.
L’app è completamente **responsive** e ottimizzata per desktop e dispositivi mobili.

Funzionalità principali:

* Visualizzazione dei piatti da un’API pubblica con griglia responsive.
* Barra di ricerca con filtro dei piatti.
* Paginazione dei piatti con frecce.
* Salvataggio delle ricette preferite in **localStorage**.
* Creazione, modifica ed eliminazione delle proprie ricette.
* Navbar responsive con hamburger menu su mobile.
* Footer con link di privacy, contatti, termini e icone social.
* Traduzione dei nomi dei piatti e delle categorie (opzionale).

---

## Tecnologie utilizzate

* **React** (v18+)
* **CSS** e **Flex/Grid** per layout e responsive design
* **React Icons** per le icone social e hamburger menu
* **LocalStorage** per salvataggio dei preferiti e delle ricette create
* **API pubblica per i piatti** ([Free Meal API](https://www.freepublicapis.com/free-meal-api))

---

## Struttura del progetto

```
meal-app/
│
├─ public/
│   └─ index.html
│
├─ src/
│   ├─ assets/
│   │   └─ logo.png
│   │
│   ├─ components/
│   │   ├─ molecules/
│   │   │   └─ MealCard.jsx
│   │   │
│   │   └─ organisms/
│   │       ├─ MealList.jsx
│   │       ├─ MyRecipes.jsx
│   │       ├─ Navbar.jsx
│   │       ├─ Profile.jsx
│   │       └─ Footer.jsx
│   │
│   ├─ services/
│   │   └─ mealService.js
│   │
│   ├─ utils/
│   │   └─ translation.js
│   │
│   ├─ index.css
│   └─ App.jsx
│
├─ package.json
└─ README.md
```
---

## Uso

* **Home**: visualizza i piatti in griglia, usa la barra di ricerca per filtrare.
* **Preferiti**: visualizza i piatti salvati cliccando sul cuore nelle card.
* **Le mie ricette**: crea nuove ricette, aggiungi immagine di copertina, modifica ed elimina le ricette già create.
* **Profilo**: gestione delle informazioni utente.
* **Footer**: contiene link di contatti (mailto), privacy, termini e icone social (Facebook, Instagram, Twitter).

---

