// ============================================================
// CODE À COLLER DANS LA CONSOLE (F12) DU NAVIGATEUR
// VERSION COMPLÈTE v3 — Toutes sources + nouvelles données
// Nouvelles entrées : Centro Salud 25/04/2024
// Paramètres ajoutés : VitD 15.96, LDL 202, Colesterol 281.7
// ============================================================

const data = [
  {
    "date": "2021-07-19",
    "src": "HGC Urgencias",
    "vals": {
      "hemoglobina": 13.2, "hematocrito": 38.7,
      "fibrinogeno": 375.0, "leucocitos": 9.8, "plaquetas": 230.0
    }
  },
  {
    "date": "2021-09-01",
    "src": "HGC Urgencias",
    "vals": {
      "glucosa": 117.0, "creatinina": 0.66, "filtrado": 81.99,
      "sodio": 138.0, "potasio": 3.98, "urea": 30.0,
      "hemoglobina": 13.8, "hematocrito": 40.3,
      "leucocitos": 9.7, "plaquetas": 211.0,
      "pcr": 6.97, "fibrinogeno": 306.0
    }
  },
  {
    "date": "2021-12-28",
    "src": "HGC / CUN",
    "vals": { "tsh": 0.673, "glucosa": 93.0 }
  },
  {
    "date": "2022-01-06",
    "src": "HGC Urgencias",
    "vals": {
      "hemoglobina": 15.2, "hematocrito": 47.3,
      "leucocitos": 14.3, "plaquetas": 305.0,
      "glucosa": 264.0, "creatinina": 1.01, "filtrado": 51.52,
      "fibrinogeno": 777.0, "troponina": 76.68,
      "sodio": 137.0, "potasio": 4.37, "urea": 51.0,
      "gpt": 47.0, "ferritina": 222.0, "pcr": 66.44,
      "bnp": 11.924, "ggt": 219.0, "fosfatasa": 175.0
    }
  },
  {
    "date": "2022-01-13",
    "src": "HGC Alta TEP",
    "vals": {
      "hemoglobina": 14.5, "hematocrito": 43.5,
      "leucocitos": 8.3, "plaquetas": 347.0,
      "glucosa": 120.0, "creatinina": 0.62, "filtrado": 83.56,
      "fibrinogeno": 807.0, "troponina": 20.4,
      "sodio": 138.0, "potasio": 3.8, "urea": 56.0,
      "gpt": 42.0, "ferritina": 285.0, "pcr": 56.5,
      "bnp": 114.0, "ggt": 301.0, "fosfatasa": 261.0
    }
  },
  {
    "date": "2022-01-16",
    "src": "Vithas Urgencias",
    "vals": {
      "hemoglobina": 14.8, "hematocrito": 44.9,
      "leucocitos": 10.3, "plaquetas": 363.0,
      "glucosa": 91.0, "creatinina": 0.78, "urea": 47.0,
      "sodio": 140.0, "potasio": 4.1, "inr": 0.90
    }
  },
  {
    "date": "2022-09-28",
    "src": "HGC Hematología",
    "vals": {
      "glucosa": 121.0, "creatinina": 0.77, "filtrado": 71.27,
      "colesterol": 230.0, "hdl": 54.0,
      "albumina": 3.6, "proteinas": 6.05,
      "sodio": 142.0, "potasio": 4.22, "urea": 40.0,
      "hemoglobina": 14.1, "hematocrito": 43.0,
      "leucocitos": 6.9, "plaquetas": 239.0,
      "ldl": 151.0, "hba1c": 5.66, "tsh": 0.601,
      "vitamina_b12": 152.0, "ferritina": 66.0,
      "pcr": 0.62, "bnp": 95.0,
      "gpt": 13.0, "ggt": 56.0, "fosfatasa": 83.0,
      "folico": 10.24, "vitamina_d": 27.10
    }
  },
  {
    "date": "2022-10-28",
    "src": "HGC Urgencias",
    "vals": {
      "hemoglobina": 13.9, "hematocrito": 45.0,
      "leucocitos": 6.2, "plaquetas": 214.0,
      "glucosa": 156.0, "creatinina": 0.81, "filtrado": 66.89,
      "pcr": 22.9, "fibrinogeno": 701.0, "bnp": 101.0,
      "sodio": 137.0, "potasio": 4.77, "urea": 48.0, "gpt": 13.0
    }
  },
  {
    "date": "2024-04-25",
    "src": "Centro Salud Atzeneta",
    "vals": {
      "hemoglobina": 13.8, "hematocrito": 41.7,
      "leucocitos": 8.4, "plaquetas": 236.0,
      "glucosa": 102.2, "creatinina": 0.85,
      "colesterol": 281.7, "hdl": 54.93, "ldl": 202.0,
      "trigliceridos": 126.2,
      "hba1c": 6.01, "tsh": 1.16,
      "vitamina_b12": 234.0, "vitamina_d": 15.96,
      "folico": 9.55, "ferritina": 77.0,
      "pcr": 4.16, "fosfatasa": 89.0, "gpt": 11.0,
      "sodio": 139.0, "potasio": 4.26, "urea": 45.3
    }
  },
  {
    "date": "2025-02-12",
    "src": "HGC Hematología",
    "vals": {
      "hemoglobina": 15.1, "hematocrito": 45.1,
      "leucocitos": 8.2, "plaquetas": 246.0,
      "glucosa": 120.0, "creatinina": 0.72, "filtrado": 75.97,
      "colesterol": 271.0, "hdl": 52.0,
      "hba1c": 5.88, "tsh": 0.886,
      "vitamina_b12": 254.0, "ferritina": 117.0,
      "fibrinogeno": 503.0, "albumina": 3.8, "proteinas": 6.28,
      "sodio": 138.0, "potasio": 4.39, "urea": 33.0,
      "gpt": 14.0, "vsg": 25.0, "folico": 10.73
    }
  },
  {
    "date": "2025-03-10",
    "src": "Vithas Laboratorio",
    "vals": {
      "hemoglobina": 14.5, "hematocrito": 46.8,
      "leucocitos": 8.6, "plaquetas": 263.0,
      "creatinina": 0.76, "filtrado": 70.8, "urea": 37.0,
      "vitamina_b12": 269.0, "folico": 7.9,
      "gpt": 12.0, "ggt": 40.0, "fosfatasa": 87.0,
      "tsh": 1.45, "inr": 1.00
    }
  }
];

const events = [
  {
    "date": "2011-11",
    "type": "urgencias",
    "title": "1er TEP bilateral — Viaje Alemania",
    "text": "TVP + TEP bilateral. Ingreso 6 días. Ecocardio: disfunción VD, HTPulmonar PAPs 55-60mmHg. Inicio Xarelto.",
    "pdf": "Neumología_2017-12-04_11136714.pdf"
  },
  {
    "date": "2017-10-04",
    "type": "neurologia",
    "title": "Neumología CUN Navarra — Valoración TEP",
    "text": "Espirometría: patrón restrictivo severo (FVC 64%, FEV1 69%). TA 155/79 · FC 52 (bradicardia) · SpO2 96%. Peso 59kg.",
    "pdf": "Neumología_2017-12-04_11136714.pdf"
  },
  {
    "date": "2021-07-19",
    "type": "urgencias",
    "title": "HGC Urgencias — Analítica",
    "text": "Hemoglobina 13.2 · Fibrinógeno 375 · Leucocitos 9.8",
    "pdf": "Joaquina_Informes.pdf"
  },
  {
    "date": "2021-09-01",
    "type": "urgencias",
    "title": "⚠️ Ictus isquémico vertebrobasilar — Diagnóstico tardío 27h",
    "text": "DIAGNÓSTICO 27 HORAS DESPUÉS. Diagnóstico inicial erróneo: enolismo. Territorio vertebrobasilar. Inicio deterioro cognitivo.",
    "pdf": "Joaquina_Informes.pdf"
  },
  {
    "date": "2021-12-27",
    "type": "neurologia",
    "title": "🧠 PET/CT Cerebral FDG — CUN Navarra",
    "text": "HALLAZGO CLAVE: Hipometabolismo frontal izquierdo dominante → señal precoz oclusión carotídea izquierda. No Alzheimer clásico → DFT/Vascular.",
    "pdf": "CUN_PET_2021-12-27.pdf"
  },
  {
    "date": "2022-01-06",
    "type": "urgencias",
    "title": "2º TEP agudo — Ingreso HGC",
    "text": "TEP bilateral confirmado. Troponina 76.68 ⚠️ · NT-ProBNP 11.924 ⚠️ · PCR 66.44 ⚠️ · Glucosa 264 ⚠️.",
    "pdf": "informe_alta_chu.pdf"
  },
  {
    "date": "2022-01-14",
    "type": "hematologia",
    "title": "Alta hospitalización TEP — HGC",
    "text": "Alta tras mejoría clínica. FE >65%. Inicio Xarelto 20mg/día. GGT 301 ⚠️ · Fosfatasa 261 ⚠️.",
    "pdf": "informe_alta_chu.pdf"
  },
  {
    "date": "2022-01-16",
    "type": "laboratorio",
    "title": "Vithas Urgencias — Analítica post-TEP",
    "text": "Control analítico. Hb 14.8 · INR 0.90 · Glucosa 91 normal.",
    "pdf": "Analisis_2022-01-16.pdf"
  },
  {
    "date": "2022-09-28",
    "type": "hematologia",
    "title": "HGC Hematología — Control completo",
    "text": "Vitamina B12 baja 152 ⚠️ · VitD 27.10 ⚠️ · Colesterol 230 · LDL 151.",
    "pdf": "Joaquina_Informes.pdf"
  },
  {
    "date": "2022-10-28",
    "type": "urgencias",
    "title": "HGC Urgencias — Bronquitis aguda",
    "text": "SaO2 92%. PCR 22.9 ⚠️ · Fibrinógeno 701 ⚠️.",
    "pdf": "Joaquina_Informes.pdf"
  },
  {
    "date": "2024-04-25",
    "type": "laboratorio",
    "title": "Centro Salud Atzeneta — Analítica completa",
    "text": "VitD 15.96 ⚠️ (déficit severo) · LDL 202 ⚠️ · Colesterol 281.7 ⚠️ · HbA1c 6.01 · B12 234.",
    "pdf": "resultados_pruebas_laboratorio_2024-05-06.pdf"
  },
  {
    "date": "2024-03-18",
    "type": "neurologia",
    "title": "🧠 TAC craneal Vithas — Leucoaraiosis",
    "text": "Marcada atrofia corticosubcortical global. Leucoaraiosis periventricular. Sin isquemia aguda.",
    "pdf": "VITHAS_2024-03-18_Informe_de_Resultados_TAC_.pdf"
  },
  {
    "date": "2025-02-12",
    "type": "hematologia",
    "title": "HGC Hematología — Última visita HGC",
    "text": "Sin anticoagulante (decisión familiar). VitD 12.33 ⚠️ · Colesterol 271 ⚠️ · VSG 25.",
    "pdf": "Joaquina_Informes.pdf"
  },
  {
    "date": "2025-03-10",
    "type": "laboratorio",
    "title": "Vithas Laboratorio — Analítica reciente",
    "text": "VCM 98.1 ⚠️ (macrocitosis). FG 70.8 estable. TSH 1.45 normal.",
    "pdf": "Analisis_2025-03-10.pdf"
  },
  {
    "date": "2026-01",
    "type": "urgencias",
    "title": "Hospitalización — Bronquitis aguda",
    "text": "Deterioro cognitivo marcado desde este ingreso.",
    "pdf": "RM_VASCULAR_ENDOCRANEAL___TSA_SIN_Y_CON_CONTRASTE_2026-03-13.pdf"
  },
  {
    "date": "2026-03-10",
    "type": "neurologia",
    "title": "🚨 RM Vascular Ascires — HALLAZGO CRÍTICO",
    "text": "OBSTRUCCIÓN COMPLETA arteria carótida interna izquierda desde su origen. ACM izquierda vicariada. Leucoaraiosis Fazekas II-III. Lesiones ictales múltiples.",
    "pdf": "RM_VASCULAR_ENDOCRANEAL___TSA_SIN_Y_CON_CONTRASTE_2026-03-13.pdf"
  },
  {
    "date": "2026-03",
    "type": "neurologia",
    "title": "✅ Neurólogo privado — Decisiones importantes",
    "text": "Haloperidol SUSPENDIDO definitivamente (riesgo QTc). Donepezilo RE-PRESCRITO. ECG de control prescrito por neurólogo HGC — pendiente de realizar.",
    "pdf": ""
  }
];

localStorage.setItem('mt_mesures', JSON.stringify(data));
localStorage.setItem('mt_events', JSON.stringify(events));
console.log('✓ ' + data.length + ' entrées chargées !');
console.log('✓ ' + events.length + ' événements chargés !');
console.log('Nouvelles données: Centro Salud 25/04/2024 — VitD 15.96 · LDL 202 · Colesterol 281.7');
location.reload();
