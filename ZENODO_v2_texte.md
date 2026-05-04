# TEXTE POUR ZENODO v2 — MediTrace
# À copier-coller dans le formulaire de nouvelle version

## TITRE
MediTrace v2 — Outil de suivi médical longitudinal pour l'autonomisation du patient et la pharmacovigilance

## AUTEURS
Pierre-Henri Giraud (Ingénieur informaticien, Castellón de la Plana, España)
Développé en collaboration avec Claude (Anthropic)

## DESCRIPTION (à coller dans le champ "Description" de Zenodo)

### 🇫🇷 Français
MediTrace v2 est un outil open source de suivi médical longitudinal conçu pour centraliser, visualiser et analyser l'historique médical d'un patient à partir de documents PDF hétérogènes. L'application fonctionne 100% localement dans le navigateur, sans serveur, garantissant la confidentialité des données.

**Nouveautés v2 par rapport à v1 :**
- Module d'analyse vasculaire documentant la chronologie de l'occlusion carotidienne gauche (PET/CT 2021 → IRM 2026)
- Module d'observance thérapeutique pour 13 médicaments avec sources documentées
- Module de corrélations graphiques (paramètres biologiques vs périodes de prise médicamenteuse)
- Pharmacovigilance enrichie : triple QTc, antagonisme Tiotropio/Donépézil, déficit B12 lié au Pantoprazol, hypomagné sémie
- Glossaire médical trilingue (ES/FR/EN) pour 32 paramètres biologiques
- Panneau Antécédents structuré (6 catégories cliniques)
- Export/import .json pour sauvegarde et restauration sur mobile
- Extraction automatique de PDFs via API Claude (déjà implémentée)
- Icône PWA et barre de navigation responsive

**Découvertes cliniques majeures documentées :**
- Occlusion complète de l'artère carotide interne gauche, signal visible rétrospectivement sur le PET/CT de décembre 2021
- Triple interaction médicamenteuse sur le QTc (Haloperidol + Donépézil + Mélitrax ène) non détectée en routine
- Déficit chronique en vitamine D non traité pendant 3 ans
- Réduction de l'absorption de la vitamine B12 par le Pantoprazol à long terme
- Impact des politiques de remboursement sur l'observance thérapeutique

**Application disponible :** https://caracole.github.io/seguimiento-medico/
**Code source :** https://github.com/caracole/seguimiento-medico
**Licence :** GNU GPL v3

---

### 🇪🇸 Español
MediTrace v2 es una herramienta open source de seguimiento médico longitudinal diseñada para centralizar, visualizar y analizar el historial médico de un paciente a partir de documentos PDF heterogéneos. La aplicación funciona 100% localmente en el navegador, sin servidor, garantizando la privacidad de los datos.

**Novedades v2 respecto a v1:**
- Módulo de análisis vascular documentando la cronología de la oclusión carotídea izquierda (PET/CT 2021 → IRM 2026)
- Módulo de observancia terapéutica para 13 medicamentos con fuentes documentadas
- Módulo de correlaciones gráficas (parámetros biológicos vs períodos de toma de medicamentos)
- Farmacovigilancia enriquecida: triple QTc, antagonismo Tiotropio/Donepezilo, déficit B12 por Pantoprazol, hipomagnesemia
- Glosario médico trilingüe (ES/FR/EN) para 32 parámetros biológicos
- Panel de Antecedentes estructurado (6 categorías clínicas)
- Export/import .json para backup y restauración en móvil
- Extracción automática de PDFs vía API Claude (ya implementada)
- Icono PWA y barra de navegación responsive

**Hallazgos clínicos mayores documentados:**
- Oclusión completa de la arteria carótida interna izquierda, señal visible retrospectivamente en el PET/CT de diciembre 2021
- Triple interacción medicamentosa sobre el QTc (Haloperidol + Donepezilo + Melitraceno) no detectada en rutina clínica
- Déficit crónico de vitamina D no tratado durante 3 años
- Reducción de la absorción de vitamina B12 por Pantoprazol a largo plazo
- Impacto de las políticas de reembolso sobre la observancia terapéutica

**Aplicación disponible:** https://caracole.github.io/seguimiento-medico/
**Código fuente:** https://github.com/caracole/seguimiento-medico
**Licencia:** GNU GPL v3

---

### 🇬🇧 English
MediTrace v2 is an open source longitudinal medical tracking tool designed to centralise, visualise and analyse a patient's medical history from heterogeneous PDF documents. The application runs 100% locally in the browser, without a server, guaranteeing data privacy.

**New in v2 vs v1:**
- Vascular analysis module documenting the left carotid occlusion timeline (PET/CT 2021 → MRI 2026)
- Therapeutic compliance module for 13 medications with documented sources
- Graphical correlations module (biological parameters vs medication intake periods)
- Enriched pharmacovigilance: triple QTc, Tiotropium/Donepezil antagonism, B12 deficiency from Pantoprazole, hypomagnesaemia
- Trilingual medical glossary (ES/FR/EN) for 32 biological parameters
- Structured Medical History panel (6 clinical categories)
- .json export/import for backup and mobile restoration
- Automatic PDF extraction via Claude API (already implemented)
- PWA icon and responsive navigation bar

**Major clinical findings documented:**
- Complete occlusion of the left internal carotid artery, signal retrospectively visible on the December 2021 PET/CT scan
- Triple QTc drug interaction (Haloperidol + Donepezil + Melitracene) undetected in routine clinical practice
- Chronic vitamin D deficiency untreated for 3 years
- Reduced vitamin B12 absorption due to long-term Pantoprazole use
- Impact of reimbursement policies on therapeutic compliance

**Application:** https://caracole.github.io/seguimiento-medico/
**Source code:** https://github.com/caracole/seguimiento-medico
**License:** GNU GPL v3

---

## MOTS-CLÉS / KEYWORDS (à saisir un par un dans Zenodo)
medical informatics
longitudinal patient tracking
pharmacovigilance
drug interactions
QTc prolongation
carotid artery occlusion
therapeutic compliance
open source health
progressive web app
CIMA AEMPS
vitamin D deficiency
vascular dementia
patient empowerment
clinical data visualization
Spanish healthcare

## VERSION
2.0.0

## TYPE DE RESSOURCE
Software / Application

## FICHIERS À UPLOADER sur Zenodo v2
1. meditrace.html          ← Application principale
2. accueil.html            ← Page d'accueil (index)
3. icon_ardoise_cyan.svg   ← Icône PWA active
4. icon_bleu_vert.svg      ← Icône variante
5. icon_bordeaux_or.svg    ← Icône variante
6. icon_vert_blanc.svg     ← Icône variante
7. organigramme_meditrace.svg  ← Organigramme architecture
8. organigramme_meditrace.png  ← Organigramme (image)
9. meditrace_v2_academic_fr.pdf  ← Article académique FR
10. meditrace_v2_academic_es.pdf ← Article académique ES
11. meditrace_v2_academic_en.pdf ← Article académique EN
12. meditrace_v2_academic_fr.docx ← Article académique FR (Word)
13. meditrace_v2_academic_es.docx ← Article académique ES (Word)
14. meditrace_v2_academic_en.docx ← Article académique EN (Word)
15. sources.md             ← Index des sources documentaires
16. sources_MediTrace.pdf  ← Index des sources (PDF)
17. LICENSE                ← Licence GNU GPL v3
18. charger_donnees_v3.js  ← Script de chargement des données

## PROCÉDURE SUR ZENODO
1. Connectez-vous sur https://zenodo.org
2. Allez sur votre dépôt MediTrace existant
   (DOI: 10.5281/zenodo.19973451)
3. Cliquez "New version"
4. Uploadez tous les fichiers listés ci-dessus
5. Mettez à jour le titre → "MediTrace v2"
6. Collez la description ci-dessus
7. Ajoutez les mots-clés
8. Version: 2.0.0
9. Cliquez "Publish"
→ Zenodo génère automatiquement un nouveau DOI
→ L'ancien DOI reste accessible et pointe vers v1
