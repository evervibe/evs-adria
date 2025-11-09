# Adria GPS Website - Handbuch

## Inhaltsverzeichnis
1. [Einführung](#einführung)
2. [Firmendaten ändern](#firmendaten-ändern)
3. [Seiten bearbeiten](#seiten-bearbeiten)
4. [Bilder hinzufügen](#bilder-hinzufügen)
5. [Deployment](#deployment)

## Einführung

Dieses Handbuch erklärt, wie Sie die wichtigsten Inhalte der Adria GPS Website pflegen können.

## Firmendaten ändern

Alle zentralen Firmendaten befinden sich in der Datei:
```
apps/site/lib/config.ts
```

Hier können Sie ändern:
- Firmenname
- Telefonnummer
- WhatsApp-Nummer
- E-Mail-Adresse
- Adresse
- Öffnungszeiten
- Social Media Links

**Beispiel:**
```typescript
export const SITE = {
  name: "Adria GPS GmbH",
  phone: "+49 40 23688391",
  whatsapp: "+49 151 12345678",
  email: "kontakt@croatia-wein.de",
  // ...
}
```

## Seiten bearbeiten

Jede Seite befindet sich in einem eigenen Ordner unter `apps/site/app/`:

- **Startseite:** `app/page.tsx`
- **Sortiment:** `app/sortiment/page.tsx`
- **Filiale:** `app/filiale/page.tsx`
- **Kontakt:** `app/kontakt/page.tsx`
- **B2B-Lieferung:** `app/b2b-lieferung/page.tsx`
- **Über uns:** `app/ueber-uns/page.tsx`
- **Impressum:** `app/impressum/page.tsx`
- **Datenschutz:** `app/datenschutz/page.tsx`

Um Texte zu ändern, öffnen Sie die entsprechende `.tsx` Datei und bearbeiten Sie den Text zwischen den HTML-Tags.

### Komponenten

Wiederverwendbare Komponenten befinden sich in `apps/site/components/`:
- `Navigation.tsx` - Hauptnavigation
- `Footer.tsx` - Fußzeile
- `Hero.tsx` - Hero-Bereich auf der Startseite
- `MobileBottomBar.tsx` - Mobile Sticky Bar
- etc.

## Bilder hinzufügen

1. Bilder im Ordner `apps/site/public/images/` ablegen
2. Unterordner für Organisation erstellen (z.B. `public/images/products/`)
3. In der Komponente referenzieren:

```tsx
import Image from 'next/image'

<Image
  src="/images/products/mein-produkt.jpg"
  alt="Beschreibung"
  width={800}
  height={600}
/>
```

**Wichtig:** 
- Bilder vor dem Upload komprimieren
- Aussagekräftige Dateinamen verwenden
- Alt-Texte für Barrierefreiheit nicht vergessen

## Deployment

Die Website wird automatisch bei jedem Push auf GitHub deployed (Vercel).

### Lokale Entwicklung

```bash
cd apps/site
npm run dev
```

Die Website ist dann unter `http://localhost:3000` erreichbar.

### Build erstellen

```bash
cd apps/site
npm run build
```

### Produktions-Build starten

```bash
cd apps/site
npm start
```

## Wartung

### Regelmäßige Aufgaben
- Öffnungszeiten aktuell halten
- Produktkategorien pflegen
- Bilder aktualisieren
- Kundenstimmen erneuern

### Support

Bei Fragen oder Problemen wenden Sie sich an Ihren Entwickler oder Administrator.
