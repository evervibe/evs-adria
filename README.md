# Adria GPS GmbH - Website

Moderne, mobile-first Website für Adria GPS GmbH - Kroatische Spezialitäten in Hamburg.

## 🚀 Projekt-Status

**Version:** 0.1.0  
**Status:** MVP One-Pager implementiert

## 📋 Features

- ✅ Mobile-First Design mit Tailwind CSS
- ✅ Next.js 14 App Router
- ✅ Responsive Navigation mit Hamburger-Menü
- ✅ Hero-Sektion mit CTAs (Anrufen, WhatsApp, Route)
- ✅ Sortiment-Kategorien Teaser
- ✅ B2B-Lieferung Informationen
- ✅ Filiale-Informationen mit Kontaktdaten
- ✅ Mobile Sticky Bottom Bar
- ✅ DSGVO-konforme Seiten (Impressum, Datenschutz)
- ✅ TypeScript Support

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS 3
- **Language:** TypeScript
- **Icons:** Lucide React
- **Components:** Headless UI

## 📁 Projektstruktur

```
evs-adria/
├── apps/site/          # Next.js Anwendung
│   ├── app/            # App Router Pages
│   ├── components/     # React Komponenten
│   ├── lib/            # Konfiguration & Utils
│   ├── public/         # Statische Assets
│   └── styles/         # CSS Styles
├── docs/               # Dokumentation
│   ├── MASTER_SPEC.md  # Projektspezifikation
│   ├── CHANGELOG.md    # Versionshistorie
│   └── HANDBUCH.md     # Content-Pflege Anleitung
└── content/            # Content Dateien (zukünftig)
```

## 🚦 Getting Started

### Voraussetzungen

- Node.js 18+ 
- npm oder yarn

### Installation

```bash
cd apps/site
npm install
```

### Entwicklung

```bash
npm run dev
```

Die Website ist dann unter [http://localhost:3000](http://localhost:3000) erreichbar.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## 📝 Konfiguration

Zentrale Konfiguration in `apps/site/lib/config.ts`:
- Firmendaten
- Kontaktinformationen
- Öffnungszeiten
- Kategorien

## 📚 Dokumentation

- **MASTER_SPEC.md** - Vollständige Projektspezifikation
- **CHANGELOG.md** - Versionshistorie und Änderungen
- **HANDBUCH.md** - Anleitung zur Content-Pflege

## 🚀 Deployment

Das Projekt ist für Vercel optimiert. Automatisches Deployment bei Push auf `main`.

## 📄 Lizenz

Copyright © 2024 Adria GPS GmbH. Alle Rechte vorbehalten.