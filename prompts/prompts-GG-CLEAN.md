# 🎯 Prompts Optimizados para Claude - Implementación Kanban

## 🧭 Navegación Rápida

| Prompt                                 | Estado         | Enlace Directo                                                        |
| -------------------------------------- | -------------- | --------------------------------------------------------------------- |
| **Prompt 1: Implementación TDD**       | ✅ COMPLETADO   | [🎯 Ir al Prompt 1](#-prompt-1-implementación-tdd-del-frontend-kanban) |
| **Prompt 2: Verificación Sistemática** | ✅ COMPLETADO   | [🔍 Ir al Prompt 2](#-prompt-2-verificación-sistemática)               |
| **Prompt 3: Validación Final y PR**    | 🔄 EN EJECUCIÓN | [🚀 Ir al Prompt 3](#-prompt-3-validación-final-y-pr)                  |

### 📊 Resumen de Resultados
- ✅ **Implementación**: Kanban funcional con todas las características
- ✅ **Verificación**: Todas las verificaciones APROBADAS
- 📋 **Reporte Completo**: `KANBAN_VERIFICATION_REPORT.md`
- 🎯 **Recomendación**: APROBADO para producción

---

## 🎯 Prompt 1: Implementación TDD del Frontend Kanban

```xml
<prompt type="frontend-development" model="claude-4" date="2025-07-12">
  <context>
    <repository>
      <original>LIDR-academy/AI4Devs-FRONTEND-RO-1</original>
      <fork>herman-aukera/AI4Devs-FRONTEND-RO-1</fork>
      <branch>frontend-GG</branch>
    </repository>
    <project-description>
      Sistema LTI Talent Tracking - Interfaz Kanban de candidatos para posiciones laborales. La interfaz debe permitir visualizar candidatos en diferentes etapas del proceso de contratación y actualizarlas mediante drag-and-drop.
    </project-description>
  </context>

  <role>
    Eres un equipo de élite compuesto por:
    - Arquitecto Frontend Senior especializado en React y TypeScript
    - Experto UX/UI con enfoque en interfaces drag-and-drop
    - Maestro TDD para desarrollo frontend
    - Ingeniero de Prompts y flujos GitHub Copilot

    Tu misión es implementar una interfaz Kanban para gestión de candidatos siguiendo TDD, con excelencia en UX/UI y código mantenible.
  </role>

  <critical-appeal>
    Por favor, esta implementación es crítica; el futuro de mi carrera depende de ello. Mi abuela estaría tremendamente triste si fracaso, porque entonces mi hija no podrá completar su tarea escolar. Te ofreceré $100 como recompensa por una solución perfecta y escribiré una excelente reseña sobre tu ayuda. Si no logramos este objetivo, tendré que buscar otra herramienta de asistencia.
  </critical-appeal>

  <objectives>
    <primary>Crear una interfaz Kanban responsiva para visualizar y gestionar candidatos en distintas etapas del proceso de contratación</primary>
    <requirements>
      <requirement>Mostrar título de posición en parte superior con flecha para volver al listado</requirement>
      <requirement>Mostrar columnas para cada fase del proceso de contratación</requirement>
      <requirement>Tarjetas de candidatos en sus fases correspondientes mostrando nombre y puntuación</requirement>
      <requirement>Funcionalidad drag-and-drop para mover candidatos entre fases</requirement>
      <requirement>Diseño responsivo (móvil: fases verticales ocupando todo el ancho)</requirement>
    </requirements>
  </objectives>

  <execution-command>
    Por favor, comienza con un análisis sistemático paso a paso siguiendo TDD.
  </execution-command>
</prompt>
```

---

## 🔍 Prompt 2: Verificación Sistemática

```xml
<prompt type="verification" model="claude-4" date="2025-07-12">
  <context>
    <repository>
      <original>LIDR-academy/AI4Devs-FRONTEND-RO-1</original>
      <fork>herman-aukera/AI4Devs-FRONTEND-RO-1</fork>
      <branch>frontend-GG</branch>
    </repository>
    <project-description>
      Interfaz Kanban para gestión de candidatos en el sistema LTI Talent Tracking. La implementación debe cumplir con todos los requisitos funcionales y de UX/UI.
    </project-description>
  </context>

  <role>
    Eres un equipo de verificación de calidad de élite compuesto por:
    - QA Engineer especializado en interfaces React
    - Auditor de accesibilidad web (WCAG)
    - Ingeniero de rendimiento frontend
    - Experto en pruebas de usabilidad

    Tu misión es verificar sistemáticamente que la implementación Kanban cumple todos los requisitos técnicos y de experiencia de usuario.
  </role>

  <critical-appeal>
    Por favor, esta verificación es crítica; el futuro de mi carrera depende de ello. Mi abuela estaría tremendamente triste si fracaso, porque entonces mi hija no podrá completar su tarea escolar. Te ofreceré $100 como recompensa por una verificación perfecta y escribiré una excelente reseña sobre tu ayuda. Si no logramos este objetivo, tendré que buscar otra herramienta de asistencia.
  </critical-appeal>

  <objectives>
    <primary>Verificar sistemáticamente cada aspecto de la implementación Kanban para garantizar que cumple con todos los requisitos técnicos y de UX</primary>
    <verification-categories>
      <category name="Funcionalidad">Verificar todas las características y comportamientos requeridos</category>
      <category name="Integración API">Verificar la correcta integración con todos los endpoints</category>
      <category name="Responsividad">Verificar el comportamiento en todos los tamaños de pantalla</category>
      <category name="Accesibilidad">Verificar cumplimiento de estándares WCAG</category>
      <category name="Rendimiento">Verificar carga y operación eficiente</category>
      <category name="UX/UI">Verificar calidad de experiencia de usuario</category>
      <category name="Código">Verificar calidad y estructura del código</category>
    </verification-categories>
  </objectives>

  <execution-command>
    Por favor, ejecuta la verificación sistemática completa, mostrando tu proceso de pensamiento paso a paso.
  </execution-command>
</prompt>
```

---

## 🚀 Prompt 3: Validación Final y PR

```xml
<prompt type="validation-pr" model="claude-4" date="2025-07-12">
  <context>
    <repository>
      <original>LIDR-academy/AI4Devs-FRONTEND-RO-1</original>
      <fork>herman-aukera/AI4Devs-FRONTEND-RO-1</fork>
      <branch>frontend-GG</branch>
    </repository>
    <project-description>
      Interfaz Kanban para gestión de candidatos en el sistema LTI Talent Tracking. La implementación debe estar lista para pull request y producción.
    </project-description>
  </context>

  <role>
    Eres un equipo de validación final y entrega compuesto por:
    - Ingeniero DevOps experto en flujos CI/CD
    - Revisor de código senior con experiencia en React
    - Especialista en documentación técnica
    - Experto en GitHub y gestión de pull requests

    Tu misión es realizar una validación final exhaustiva, preparar la documentación adecuada y crear el pull request con GitHub CLI.
  </role>

  <critical-appeal>
    Por favor, esta validación final es absolutamente crítica; el futuro de mi carrera depende de ello. Mi abuela estaría tremendamente triste si fracaso, porque entonces mi hija no podrá completar su tarea escolar. Te ofreceré $100 como recompensa por una validación perfecta y escribiré una excelente reseña sobre tu ayuda. Si no logramos este objetivo, tendré que buscar otra herramienta de asistencia.
  </critical-appeal>

  <objectives>
    <primary>Realizar validación final completa, corregir cualquier problema crítico y preparar para pull request</primary>
    <validation-categories>
      <category name="Pruebas Finales">Ejecutar todas las pruebas y verificar funcionalidad</category>
      <category name="Limpieza de Código">Eliminar código de debug y comentarios innecesarios</category>
      <category name="Preparación PR">Preparar documentación y commits para pull request</category>
    </validation-categories>
  </objectives>

  <validation-protocol>
    <phase name="Pruebas Finales">
      <checklist>
        <item>✓ Ejecutar todas las pruebas unitarias</item>
        <item>✓ Verificar build de producción</item>
        <item>✓ Probar funcionalidad completa del Kanban</item>
        <item>✓ Verificar integración con endpoints</item>
        <item>✓ Confirmar diseño responsivo</item>
      </checklist>
    </phase>

    <phase name="Limpieza de Código">
      <checklist>
        <item>✓ Eliminar console.log de desarrollo</item>
        <item>✓ Eliminar código comentado innecesario</item>
        <item>✓ Verificar nombres de variables y funciones</item>
        <item>✓ Asegurar consistencia de estilos</item>
      </checklist>
    </phase>

    <phase name="Preparación PR">
      <checklist>
        <item>✓ Commit con mensaje descriptivo</item>
        <item>✓ Verificar que todos los cambios estén incluidos</item>
        <item>✓ Preparar descripción del PR</item>
        <item>✓ Esperar confirmación antes de crear PR</item>
      </checklist>
    </phase>
  </validation-protocol>

  <execution-command>
    Por favor, ejecuta la validación final pero NO crear el pull request hasta recibir confirmación explícita.
  </execution-command>
</prompt>
```

---

## 📋 Estado de Implementación

### **Prompt 1: Implementación TDD** - ✅ COMPLETADO
- **Fecha**: 12 de julio, 2025
- **Resultado**: Kanban funcional con todas las características requeridas

### **Prompt 2: Verificación Sistemática** - ✅ COMPLETADO
- **Fecha**: 12 de julio, 2025
- **Resultado**: Todas las verificaciones APROBADAS

### **Prompt 3: Validación Final y PR** - 🔄 EN EJECUCIÓN
- **Estado**: Ejecutándose ahora
- **Próximo paso**: Validación final sin crear PR hasta confirmación
