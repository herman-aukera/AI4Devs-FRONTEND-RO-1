# 🚀 Aplicación Práctica y Resumen

## ✅ Estado de Verificación Sistemática (Prompt 2) - COMPLETADO

**Fecha**: 12 de julio, 2025
**Resultado**: ✅ TODAS LAS VERIFICACIONES APROBADAS
**Reporte Completo**: Ver `KANBAN_VERIFICATION_REPORT.md`

### Resumen de Verificación:
- ✅ Core Functionality: Kanban board con drag-and-drop funcional
- ✅ API Integration: Todos los endpoints probados y funcionando
- ✅ Responsive Design: Compatible móvil y desktop
- ✅ Accessibility: Cumple estándares WCAG
- ✅ Performance: Build optimizado, carga rápida
- ✅ UX/UI Quality: Interfaz intuitiva y feedback apropiado
- ✅ Code Quality: TypeScript, SOLID principles, 12 tests pasando
- ✅ Production Ready: Sin errores críticos, listo para deployment

---

He diseñado estos tres prompts específicamente optimizados para Claude, aprovechando su capacidad para procesar estructuras XML/HTML complejas. Cada prompt sigue un enfoque sistemático de Chain-of-Thought que:

1. **Desglosa el problema en componentes manejables**
2. **Expone explícitamente el razonamiento**
3. **Verifica cada paso antes de avanzar**
4. **Documenta decisiones y alternativas**

Para usar estos prompts:

1. **Copia el Prompt 1** para iniciar la implementación TDD del Kanban
2. **Usa el Prompt 2** cuando necesites verificar exhaustivamente
3. **Aplica el Prompt 3** para finalización y creación del PR

Estos prompts están diseñados para crear el archivo prompts-GG.md en la carpeta prompts con toda la documentación estructurada con etiquetas XML optimizadas para Claude 4, maximizando así el rendimiento y la precisión de las respuestas.

¿Necesitas alguna adaptación específica para alguno de estos prompts antes de comenzar?

## ✅ Estado de Implementación

### **Prompt 1: Implementación TDD del Frontend Kanban** - ✅ COMPLETADO
Este prompt guiará la construcción completa del Kanban con React, siguiendo TDD y mejores prácticas de UX/UI.
- **Estado**: Implementado exitosamente
- **Fecha**: 12 de julio, 2025
- **Resultado**: Kanban funcional con todas las características requeridas

### **Prompt 2: Verificación Sistemática** - ✅ COMPLETADO
Este prompt validará exhaustivamente todos los aspectos del Kanban construido, asegurando conformidad con requisitos.
- **Estado**: Verificación completa exitosa
- **Fecha**: 12 de julio, 2025
- **Resultado**: Todas las verificaciones APROBADAS (ver KANBAN_VERIFICATION_REPORT.md)

### **Prompt 3: Validación Final y PR** - 🔄 PENDIENTE
Este prompt finalizará el proceso, realizando pruebas finales y automatizando la creación del PR.

## 🧭 Navegación Rápida

| Prompt                                 | Estado       | Enlace Directo                                               |
| -------------------------------------- | ------------ | ------------------------------------------------------------ |
| **Prompt 1: Implementación TDD**       | ✅ COMPLETADO | [🎯 Ir al Prompt 1](#-prompt-principal-de-implementación-tdd) |
| **Prompt 2: Verificación Sistemática** | ✅ COMPLETADO | [🔍 Ir al Prompt 2](#-prompt-de-verificación-sistemática)     |
| **Prompt 3: Validación Final y PR**    | 🔄 PENDIENTE  | [🚀 Ir al Prompt 3](#-prompt-final-de-validación-y-pr)        |

### 📊 Resumen de Resultados
- ✅ **Implementación**: Kanban funcional con todas las características
- ✅ **Verificación**: Todas las verificaciones APROBADAS
- 📋 **Reporte Completo**: `KANBAN_VERIFICATION_REPORT.md`
- 🎯 **Recomendación**: APROBADO para producción

---

## 🎯 Prompt Principal de Implementación TDD

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
    <apis>
      <endpoint method="GET" path="/positions/:id/interviewFlow">
        Retorna información sobre el proceso de contratación: nombre de posición y etapas del proceso
      </endpoint>
      <endpoint method="GET" path="/positions/:id/candidates">
        Retorna candidatos para una posición específica con nombre, etapa actual y puntuación media
      </endpoint>
      <endpoint method="PUT" path="/candidates/:id/stage">
        Actualiza la etapa de un candidato específico
      </endpoint>
    </apis>
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

  <chain-of-thought>
    <instruction>
      Utiliza razonamiento sistemático en cada paso. Piensa paso a paso, valida suposiciones y explica tu proceso de toma de decisiones a lo largo de la implementación. Muestra explícitamente cómo:
      1. Analizas los requisitos de diseño y API
      2. Planificas la arquitectura de componentes React
      3. Escribes tests primero, luego implementas
      4. Tomas decisiones de UX/UI con fundamentos
      5. Manejas casos límite y errores
    </instruction>
  </chain-of-thought>

  <workflow>
    <phase name="Análisis y Planificación">
      <task>Examinar las API disponibles y su estructura de datos</task>
      <task>Diseñar arquitectura de componentes React para Kanban</task>
      <task>Planificar estrategia de estado (Context API o Redux)</task>
      <task>Determinar componentes reutilizables y su jerarquía</task>
    </phase>

    <phase name="TDD - Componentes Base">
      <task>Escribir tests para componente KanbanBoard</task>
      <task>Implementar KanbanBoard mínimo para pasar tests</task>
      <task>Escribir tests para componente KanbanColumn</task>
      <task>Implementar KanbanColumn mínimo para pasar tests</task>
      <task>Escribir tests para componente CandidateCard</task>
      <task>Implementar CandidateCard mínimo para pasar tests</task>
    </phase>

    <phase name="TDD - Integración API">
      <task>Escribir tests para hooks de integración API</task>
      <task>Implementar hooks para fetchInterviewFlow</task>
      <task>Implementar hooks para fetchCandidates</task>
      <task>Implementar función updateCandidateStage</task>
    </phase>

    <phase name="TDD - Drag and Drop">
      <task>Escribir tests para funcionalidad drag-and-drop</task>
      <task>Implementar React DnD o biblioteca similar</task>
      <task>Añadir lógica de actualización al soltar tarjeta</task>
      <task>Implementar feedback visual durante arrastre</task>
    </phase>

    <phase name="TDD - Responsive Design">
      <task>Escribir tests para comportamiento responsivo</task>
      <task>Implementar media queries y diseño adaptativo</task>
      <task>Optimizar para móvil (columnas verticales)</task>
    </phase>

    <phase name="Refinamiento y UX">
      <task>Mejorar feedback visual (loaders, indicadores, transiciones)</task>
      <task>Implementar manejo de errores con mensajes amigables</task>
      <task>Añadir accesibilidad (ARIA, manejo de teclado)</task>
      <task>Optimizar rendimiento (memoización, virtualizaciones si necesario)</task>
    </phase>
  </workflow>

  <component-structure>
    <component name="Pages">
      <file path="src/pages/PositionDetail.tsx">Página principal Kanban</file>
    </component>
    <component name="Components">
      <file path="src/components/kanban/KanbanBoard.tsx">Contenedor principal Kanban</file>
      <file path="src/components/kanban/KanbanColumn.tsx">Columna individual para fase</file>
      <file path="src/components/kanban/CandidateCard.tsx">Tarjeta de candidato</file>
      <file path="src/components/common/PageHeader.tsx">Encabezado con título y flecha atrás</file>
      <file path="src/components/common/ScoreBadge.tsx">Insignia de puntuación</file>
    </component>
    <component name="Hooks">
      <file path="src/hooks/usePositionFlow.ts">Hook para obtener flujo de entrevista</file>
      <file path="src/hooks/usePositionCandidates.ts">Hook para obtener candidatos</file>
      <file path="src/hooks/useUpdateCandidateStage.ts">Hook para actualizar etapa</file>
    </component>
    <component name="Context">
      <file path="src/context/KanbanContext.tsx">Contexto para estado global Kanban</file>
    </component>
    <component name="Types">
      <file path="src/types/kanban.ts">Tipos e interfaces para Kanban</file>
    </component>
    <component name="Tests">
      <file path="src/tests/KanbanBoard.test.tsx">Tests para KanbanBoard</file>
      <file path="src/tests/KanbanColumn.test.tsx">Tests para KanbanColumn</file>
      <file path="src/tests/CandidateCard.test.tsx">Tests para CandidateCard</file>
      <file path="src/tests/usePositionFlow.test.ts">Tests para hooks de API</file>
    </component>
  </component-structure>

  <api-integration>
    <sample name="fetchInterviewFlow">
      ```typescript
      const fetchInterviewFlow = async (positionId: number) => {
        try {
          const response = await fetch(`/api/positions/${positionId}/interviewFlow`);
          if (!response.ok) throw new Error('Failed to fetch interview flow');
          return await response.json();
        } catch (error) {
          console.error('Error fetching interview flow:', error);
          throw error;
        }
      };
      ```
    </sample>

    <sample name="fetchCandidates">
      ```typescript
      const fetchCandidates = async (positionId: number) => {
        try {
          const response = await fetch(`/api/positions/${positionId}/candidates`);
          if (!response.ok) throw new Error('Failed to fetch candidates');
          return await response.json();
        } catch (error) {
          console.error('Error fetching candidates:', error);
          throw error;
        }
      };
      ```
    </sample>

    <sample name="updateCandidateStage">
      ```typescript
      const updateCandidateStage = async (candidateId: number, stageId: number) => {
        try {
          const response = await fetch(`/api/candidates/${candidateId}/stage`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ currentInterviewStep: stageId }),
          });

          if (!response.ok) throw new Error('Failed to update candidate stage');
          return await response.json();
        } catch (error) {
          console.error('Error updating candidate stage:', error);
          throw error;
        }
      };
      ```
    </sample>
  </api-integration>

  <testing-strategy>
    <test-type name="Component Tests">
      <tool>React Testing Library</tool>
      <focus>Comportamiento de componentes, no implementación</focus>
      <coverage>Renderizado, interacciones de usuario, estados visuales</coverage>
    </test-type>

    <test-type name="Hook Tests">
      <tool>React Hooks Testing Library</tool>
      <focus>Lógica de hooks personalizada</focus>
      <coverage>Llamadas API, manejo de errores, transformación de datos</coverage>
    </test-type>

    <test-type name="Integration Tests">
      <tool>React Testing Library + MSW (Mock Service Worker)</tool>
      <focus>Flujos completos de usuario</focus>
      <coverage>Drag-and-drop, actualización de estado, renderizado condicional</coverage>
    </test-type>

    <test-sample name="KanbanBoard.test.tsx">
      ```typescript
      import { render, screen, waitFor } from '@testing-library/react';
      import KanbanBoard from '../components/kanban/KanbanBoard';
      import { KanbanProvider } from '../context/KanbanContext';

      // Mock data
      const mockColumns = [
        { id: 1, name: 'Initial Screening' },
        { id: 2, name: 'Technical Interview' },
        { id: 3, name: 'Manager Interview' }
      ];

      const mockCandidates = [
        { id: 1, fullName: 'John Doe', currentInterviewStep: 'Technical Interview', averageScore: 4 },
        { id: 2, fullName: 'Jane Smith', currentInterviewStep: 'Initial Screening', averageScore: 3 }
      ];

      describe('KanbanBoard', () => {
        test('renders all columns correctly', async () => {
          render(
            <KanbanProvider value={{ columns: mockColumns, candidates: mockCandidates }}>
              <KanbanBoard positionId={1} />
            </KanbanProvider>
          );

          // Verify columns render
          for (const column of mockColumns) {
            expect(screen.getByText(column.name)).toBeInTheDocument();
          }
        });

        test('displays candidates in correct columns', async () => {
          render(
            <KanbanProvider value={{ columns: mockColumns, candidates: mockCandidates }}>
              <KanbanBoard positionId={1} />
            </KanbanProvider>
          );

          // Check John is in Technical Interview column
          const techColumn = screen.getByTestId('column-Technical Interview');
          const johnCard = screen.getByText('John Doe');
          expect(techColumn).toContainElement(johnCard);

          // Check Jane is in Initial Screening column
          const initialColumn = screen.getByTestId('column-Initial Screening');
          const janeCard = screen.getByText('Jane Smith');
          expect(initialColumn).toContainElement(janeCard);
        });
      });
      ```
    </test-sample>
  </testing-strategy>

  <ux-considerations>
    <mobile-optimization>
      <strategy>Mobile-first approach with CSS Grid/Flexbox</strategy>
      <breakpoints>
        <breakpoint name="mobile">max-width: 767px</breakpoint>
        <breakpoint name="tablet">768px - 1023px</breakpoint>
        <breakpoint name="desktop">1024px+</breakpoint>
      </breakpoints>
      <implementation>
        ```css
        /* Mobile: Vertical layout */
        .kanban-board {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
        }

        .kanban-column {
          width: 100%;
        }

        /* Desktop: Horizontal layout */
        @media (min-width: 768px) {
          .kanban-board {
            flex-direction: row;
            overflow-x: auto;
          }

          .kanban-column {
            min-width: 280px;
            max-width: 320px;
          }
        }
        ```
      </implementation>
    </mobile-optimization>

    <drag-drop-ux>
      <library>react-beautiful-dnd</library>
      <features>
        <feature>Visual feedback durante arrastre</feature>
        <feature>Animaciones suaves de transición</feature>
        <feature>Indicadores de "drop zone"</feature>
        <feature>Soporte de accesibilidad</feature>
      </features>
    </drag-drop-ux>

    <loading-states>
      <strategy>Skeleton screens instead of spinners</strategy>
      <implementation>
        ```jsx
        {isLoading ? (
          <SkeletonKanban columns={3} cardsPerColumn={2} />
        ) : (
          <KanbanBoard columns={columns} candidates={candidates} />
        )}
        ```
      </implementation>
    </loading-states>

    <error-handling>
      <strategy>Contextual error messages with retry options</strategy>
      <implementation>
        ```jsx
        {error && (
          <ErrorAlert
            message="No pudimos cargar los candidatos"
            details={error.message}
            retry={() => refetch()}
          />
        )}
        ```
      </implementation>
    </error-handling>
  </ux-considerations>

  <deliverables>
    <files>
      <file path="frontend/src/pages/PositionDetail.tsx">Página principal Kanban</file>
      <file path="frontend/src/components/kanban/*">Componentes Kanban</file>
      <file path="frontend/src/hooks/*">Hooks para API integration</file>
      <file path="frontend/src/tests/*">Tests unitarios e integración</file>
    </files>
    <documentation>
      <file path="prompts/prompts-GG.md">Documentación de prompting</file>
    </documentation>
    <branch>frontend-GG</branch>
  </deliverables>

  <execution-command>
    Por favor, comienza con un análisis sistemático paso a paso:

    1. "Primero analizaré los requisitos de la interfaz Kanban..."
    2. "Luego examinaré las API disponibles y su estructura de datos..."
    3. "Después diseñaré la arquitectura de componentes React..."
    4. "Continuaré con los tests iniciales para KanbanBoard..."

    Muestra tu proceso de pensamiento en cada etapa y explica las decisiones de diseño que tomas.
  </execution-command>
</prompt>
```

## 🔍 Prompt de Verificación Sistemática

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
      <category name="Manejo de errores">Verificar respuestas adecuadas a errores</category>
      <category name="UX/UI">Verificar calidad de experiencia de usuario</category>
      <category name="Código">Verificar calidad y estructura del código</category>
    </verification-categories>
  </objectives>

  <chain-of-thought>
    <instruction>
      Utiliza razonamiento sistemático en cada paso de verificación. Piensa paso a paso, valida suposiciones y explica tu proceso de evaluación. Muestra explícitamente cómo:
      1. Analizas cada aspecto de la implementación
      2. Verificas contra requisitos específicos
      3. Identificas discrepancias o problemas
      4. Evalúas severidad de problemas
      5. Propones soluciones concretas
    </instruction>
  </chain-of-thought>

  <verification-protocol>
    <phase name="Funcionalidad Core">
      <checklist>
        <item>✓ El título de la posición se muestra correctamente en la parte superior</item>
        <item>✓ La flecha para volver al listado funciona correctamente</item>
        <item>✓ Se muestran columnas para cada fase del proceso</item>
        <item>✓ Las tarjetas de candidatos muestran nombre completo y puntuación</item>
        <item>✓ Drag-and-drop funciona para mover candidatos entre columnas</item>
        <item>✓ La actualización de etapa persiste al recargar la página</item>
      </checklist>
      <test-method>
        Realizar pruebas manuales siguiendo script de casos de uso:
        1. Cargar página de posición
        2. Verificar visualización correcta
        3. Arrastrar candidato a nueva columna
        4. Verificar actualización visual
        5. Recargar página y verificar persistencia
        6. Hacer clic en flecha de regreso
      </test-method>
    </phase>

    <phase name="Integración API">
      <checklist>
        <item>✓ GET /positions/:id/interviewFlow se llama correctamente al cargar</item>
        <item>✓ GET /positions/:id/candidates se llama correctamente al cargar</item>
        <item>✓ PUT /candidates/:id/stage se llama al mover un candidato</item>
        <item>✓ Datos de API se procesan y muestran correctamente</item>
        <item>✓ Errores de API se manejan adecuadamente</item>
      </checklist>
      <test-method>
        Utilizar herramientas de red del navegador y React DevTools:
        1. Monitorear peticiones de red
        2. Verificar formato correcto de solicitudes
        3. Verificar manejo adecuado de respuestas
        4. Simular errores de red y verificar UI
      </test-method>
    </phase>

    <phase name="Diseño Responsivo">
      <checklist>
        <item>✓ Diseño de escritorio muestra columnas horizontalmente</item>
        <item>✓ Diseño móvil muestra columnas verticalmente</item>
        <item>✓ Elementos se adaptan proporcionalmente a diferentes tamaños</item>
        <item>✓ No hay desbordamiento horizontal en ningún tamaño</item>
        <item>✓ Elementos interactivos tienen tamaño adecuado para táctil</item>
      </checklist>
      <test-method>
        Utilizar modo responsivo de DevTools:
        1. Probar en breakpoints clave: 320px, 768px, 1024px, 1440px
        2. Verificar disposición y legibilidad
        3. Verificar usabilidad de elementos interactivos
        4. Verificar que no hay scroll horizontal
      </test-method>
    </phase>

    <phase name="Accesibilidad">
      <checklist>
        <item>✓ Contraste de color cumple WCAG AA</item>
        <item>✓ Elementos tienen atributos ARIA apropiados</item>
        <item>✓ Navegación por teclado funciona correctamente</item>
        <item>✓ Orden de foco es lógico</item>
        <item>✓ Contenido no textual tiene alternativas</item>
      </checklist>
      <test-method>
        Utilizar extensiones de accesibilidad y navegación por teclado:
        1. Ejecutar Lighthouse o axe DevTools
        2. Navegar con tabulador y verificar orden lógico
        3. Verificar que drag-and-drop tiene alternativa de teclado
        4. Verificar anuncios para lectores de pantalla
      </test-method>
    </phase>

    <phase name="Rendimiento">
      <checklist>
        <item>✓ Tiempo de carga inicial < 2 segundos</item>
        <item>✓ Tiempo de respuesta para arrastrar < 100ms</item>
        <item>✓ No hay bloqueos de renderizado</item>
        <item>✓ Optimización de re-renderizados con memo/useCallback</item>
        <item>✓ Carga perezosa donde apropiado</item>
      </checklist>
      <test-method>
        Utilizar React DevTools y Performance panel:
        1. Medir tiempos de carga inicial
        2. Verificar flamegraph de renderizados
        3. Identificar componentes que causan re-renders
        4. Verificar manejo eficiente de datos y estados
      </test-method>
    </phase>

    <phase name="UX/UI">
      <checklist>
        <item>✓ Feedback visual durante operaciones (carga, arrastre, éxito, error)</item>
        <item>✓ Consistencia visual con resto de aplicación</item>
        <item>✓ Interacciones intuitivas sin instrucciones</item>
        <item>✓ Legibilidad de contenido (tamaño, contraste)</item>
        <item>✓ Espacio vacío adecuado</item>
      </checklist>
      <test-method>
        Evaluación heurística y pruebas con usuarios simulados:
        1. Verificar contra heurísticas de Nielsen
        2. Ejecutar pruebas de tareas comunes
        3. Evaluar tiempo para completar acciones
        4. Identificar fricción o confusión en UX
      </test-method>
    </phase>

    <phase name="Calidad de Código">
      <checklist>
        <item>✓ Estructura de componentes sigue principios SOLID</item>
        <item>✓ Tipado TypeScript completo y correcto</item>
        <item>✓ Tests unitarios cubren lógica crítica</item>
        <item>✓ Convenciones de código consistentes</item>
        <item>✓ Sin código duplicado o muerto</item>
      </checklist>
      <test-method>
        Revisión de código y análisis estático:
        1. Ejecutar linters y herramientas de análisis
        2. Verificar cobertura de tests
        3. Revisar estructura de componentes
        4. Verificar manejo de estado y props
      </test-method>
    </phase>
  </verification-protocol>

  <issue-report-template>
    <issue>
      <severity>[Crítica/Alta/Media/Baja]</severity>
      <category>[Funcionalidad/API/Responsivo/UX/Rendimiento/Accesibilidad]</category>
      <description>Descripción clara del problema</description>
      <repro-steps>Pasos detallados para reproducir</repro-steps>
      <expected>Comportamiento esperado</expected>
      <actual>Comportamiento actual</actual>
      <solution>Propuesta concreta de solución</solution>
    </issue>
  </issue-report-template>

  <deliverables>
    <verification-report>Informe completo de verificación</verification-report>
    <issue-list>Lista priorizada de problemas encontrados</issue-list>
    <recommendation>Recomendación final (aprobar/mejorar/rechazar)</recommendation>
  </deliverables>

  <execution-command>
    Por favor, ejecuta la verificación sistemática completa, mostrando tu proceso de pensamiento:

    1. "Primero verificaré la funcionalidad core de Kanban..."
    2. "Luego analizaré la integración con las API..."
    3. "Después evaluaré el diseño responsivo en diferentes dispositivos..."

    Detalla cada verificación, problema encontrado y tu recomendación de solución.
  </execution-command>
</prompt>
```

## 🚀 Prompt Final de Validación y PR

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
    <primary>Realizar validación final completa, corregir cualquier problema crítico y crear un pull request perfecto</primary>
    <validation-categories>
      <category name="Funcionalidad Final">Última verificación de todas las características</category>
      <category name="Limpieza de Código">Eliminar código de debug, comentarios innecesarios</category>
      <category name="Documentación">Asegurar documentación completa</category>
      <category name="Pruebas">Ejecutar pruebas finales</category>
      <category name="PR Quality">Crear pull request bien estructurado</category>
    </validation-categories>
  </objectives>

  <chain-of-thought>
    <instruction>
      Utiliza razonamiento sistemático en cada paso. Piensa paso a paso, valida suposiciones y explica tu proceso de toma de decisiones durante la validación final. Muestra explícitamente cómo:
      1. Realizas pruebas finales exhaustivas
      2. Validas que todos los problemas estén resueltos
      3. Preparas la documentación necesaria
      4. Organizas y ejecutas el pull request
      5. Verificas el resultado final
    </instruction>
  </chain-of-thought>

  <validation-protocol>
    <phase name="Pruebas Finales">
      <checklist>
        <item>✓ Ejecutar todas las pruebas unitarias</item>
        <item>✓ Ejecutar pruebas de integración</item>
        <item>✓ Probar funcionalidad completa del Kanban</item>
        <item>✓ Verificar integración con todos los endpoints</item>
        <item>✓ Confirmar diseño responsivo en todos los breakpoints</item>
      </checklist>
      <test-method>
        ```bash
        # Ejecutar todas las pruebas
        cd frontend
        npm test

        # Verificar linting y tipado
        npm run lint
        npm run check-types

        # Construir versión de producción para verificar
        npm run build
        ```
      </test-method>
    </phase>

    <phase name="Limpieza Final">
      <checklist>
        <item>✓ Eliminar `console.log` de desarrollo</item>
        <item>✓ Eliminar código comentado innecesario</item>
        <item>✓ Verificar nombres de variables y funciones</item>
        <item>✓ Asegurar consistencia de estilos</item>
        <item>✓ Eliminar archivos temporales o no utilizados</item>
      </checklist>
      <cleanup-command>
        ```bash
        # Buscar console.logs
        grep -r "console.log" --include="*.tsx" --include="*.ts" ./frontend/src

        # Buscar código comentado
        grep -r "//" --include="*.tsx" --include="*.ts" ./frontend/src | grep -v "// eslint" | grep -v "// @ts"

        # Verificar archivos no utilizados
        npx depcheck
        ```
      </cleanup-command>
    </phase>

    <phase name="Documentación">
      <checklist>
        <item>✓ README actualizado con instrucciones de Kanban</item>
        <item>✓ JSDoc completo en componentes principales</item>
        <item>✓ Archivo prompts-GG.md completo y bien estructurado</item>
        <item>✓ Documentación de arquitectura y decisiones</item>
      </checklist>
      <documentation-files>
        <file path="prompts/prompts-GG.md">Documentación de prompting</file>
        <file path="frontend/README.md">Documentación de frontend</file>
        <file path="frontend/src/components/README.md">Documentación de componentes</file>
      </documentation-files>
    </phase>

    <phase name="Preparación Pull Request">
      <checklist>
        <item>✓ Comprobar que branch es correcto (frontend-GG)</item>
        <item>✓ Verificar cambios con `gh status`</item>
        <item>✓ Preparar mensaje de commit descriptivo</item>
        <item>✓ Preparar descripción detallada del PR</item>
      </checklist>
      <pr-preparation>
        ```bash
        # Verificar estado actual
        gh status

        # Ver diferencias
        gh diff

        # Preparar commit
        gh commit -am "feat(kanban): Implementación completa de interfaz Kanban para gestión de candidatos"

        # Preparar PR
        gh pr create --title "feat(kanban): Implementación de interfaz Kanban - GG" --body-file PR_DESCRIPTION.md
        ```
      </pr-preparation>
    </phase>

    <phase name="Creación Pull Request">
      <checklist>
        <item>✓ Título descriptivo con prefijo feat</item>
        <item>✓ Descripción detallada de la implementación</item>
        <item>✓ Screenshots o GIFs de la interfaz</item>
        <item>✓ Lista de cambios principales</item>
        <item>✓ Instrucciones de testing</item>
      </checklist>
      <pr-template>
        ```markdown
        # 🎯 Implementación de Interfaz Kanban para Gestión de Candidatos

        ## 📋 Descripción
        Esta PR implementa una interfaz Kanban completa para la gestión de candidatos en el proceso de contratación. Permite visualizar candidatos en diferentes etapas del proceso y actualizar su estado mediante drag-and-drop.

        ## 📸 Screenshots
        ![Kanban Desktop](/screenshots/kanban-desktop.png)
        ![Kanban Mobile](/screenshots/kanban-mobile.png)

        ## ✅ Cambios Principales
        - Implementación de interfaz Kanban responsiva
        - Integración con endpoints de API para datos de candidatos
        - Funcionalidad drag-and-drop para actualizar etapas
        - Diseño adaptativo para escritorio y móvil
        - Tests unitarios y de integración

        ## 🧪 Instrucciones de Testing
        1. Iniciar aplicación con `npm start`
        2. Navegar a listado de posiciones
        3. Hacer clic en "Ver proceso" de cualquier posición
        4. Verificar visualización correcta del Kanban
        5. Arrastrar candidatos entre columnas
        6. Verificar actualización correcta

        ## 📚 Documentación
        - Documentación completa en `/prompts/prompts-GG.md`
        - Arquitectura de componentes en `README.md`
        ```
      </pr-template>
    </phase>
  </validation-protocol>

  <pr-command-example>
    ```bash
    # Asegurarse de estar en el branch correcto
    git checkout frontend-GG

    # Añadir todos los cambios
    gh add .

    # Commit con mensaje descriptivo
    gh commit -m "feat(kanban): Implementación completa de interfaz Kanban para gestión de candidatos"

    # Crear PR con título y descripción detallada
    gh pr create --title "feat(kanban): Implementación de interfaz Kanban - GG" --body "# 🎯 Implementación de Interfaz Kanban para Gestión de Candidatos

    ## 📋 Descripción
    Esta PR implementa una interfaz Kanban completa para la gestión de candidatos en el proceso de contratación. Permite visualizar candidatos en diferentes etapas del proceso y actualizar su estado mediante drag-and-drop.

    ## ✅ Cambios Principales
    - Implementación de interfaz Kanban responsiva
    - Integración con endpoints de API para datos de candidatos
    - Funcionalidad drag-and-drop para actualizar etapas
    - Diseño adaptativo para escritorio y móvil
    - Tests unitarios y de integración

    ## 🧪 Instrucciones de Testing
    1. Iniciar aplicación con \`npm start\`
    2. Navegar a listado de posiciones
    3. Hacer clic en "Ver proceso" de cualquier posición
    4. Verificar visualización correcta del Kanban
    5. Arrastrar candidatos entre columnas
    6. Verificar actualización correcta

    ## 📚 Documentación
    - Documentación completa en \`/prompts/prompts-GG.md\`"
    ```
  </pr-command-example>

  <deliverables>
    <final-validation-report>Informe de validación final</final-validation-report>
    <documentation-files>
      <file path="prompts/prompts-GG.md">Documentación de prompting</file>
    </documentation-files>
    <pull-request>PR creado en LIDR-academy/AI4Devs-FRONTEND-RO-1</pull-request>
  </deliverables>

  <execution-command>
    Por favor, ejecuta la validación final y creación del PR, mostrando tu proceso de pensamiento:

    1. "Primero ejecutaré todas las pruebas finales..."
    2. "Luego realizaré limpieza del código..."
    3. "Después verificaré que la documentación esté completa..."
    4. "Finalmente crearé el pull request con GitHub CLI..."

    Detalla cada paso, decisión y el resultado final del proceso.
  </execution-command>
</prompt>
```

## ✅ Estado de Implementación

### **Prompt 1: Implementación TDD del Frontend Kanban** - ✅ COMPLETADO
Este prompt guiará la construcción completa del Kanban con React, siguiendo TDD y mejores prácticas de UX/UI.
- **Estado**: Implementado exitosamente
- **Fecha**: 12 de julio, 2025
- **Resultado**: Kanban funcional con todas las características requeridas

### **Prompt 2: Verificación Sistemática** - ✅ COMPLETADO
Este prompt validará exhaustivamente todos los aspectos del Kanban construido, asegurando conformidad con requisitos.
- **Estado**: Verificación completa exitosa
- **Fecha**: 12 de julio, 2025
- **Resultado**: Todas las verificaciones APROBADAS (ver KANBAN_VERIFICATION_REPORT.md)

### **Prompt 3: Validación Final y PR** - 🔄 PENDIENTE
Este prompt finalizará el proceso, realizando pruebas finales y automatizando la creación del PR.

## 🔍 Desglose de los Tres Prompts Optimizados

### **Prompt 1: Implementación TDD del Frontend Kanban**
Este prompt guiará la construcción completa del Kanban con React, siguiendo TDD y mejores prácticas de UX/UI.

### **Prompt 2: Verificación Sistemática**
Este prompt validará exhaustivamente todos los aspectos del Kanban construido, asegurando conformidad con requisitos.

### **Prompt 3: Validación Final y PR**
Este prompt finalizará el proceso, realizando pruebas finales y automatizando la creación del PR.

A continuación, cada prompt está diseñado específicamente para aprovechar las capacidades de Claude con etiquetas XML/HTML:

---

## 📋 Índice de Prompts
1. Prompt Principal de Implementación TDD
2. Prompt de Verificación Sistemática
3. Prompt Final de Validación y PR

---

## 🎯 Prompt Principal de Implementación TDD

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
    <apis>
      <endpoint method="GET" path="/positions/:id/interviewFlow">
        Retorna información sobre el proceso de contratación: nombre de posición y etapas del proceso
      </endpoint>
      <endpoint method="GET" path="/positions/:id/candidates">
        Retorna candidatos para una posición específica con nombre, etapa actual y puntuación media
      </endpoint>
      <endpoint method="PUT" path="/candidates/:id/stage">
        Actualiza la etapa de un candidato específico
      </endpoint>
    </apis>
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

  <chain-of-thought>
    <instruction>
      Utiliza razonamiento sistemático en cada paso. Piensa paso a paso, valida suposiciones y explica tu proceso de toma de decisiones a lo largo de la implementación. Muestra explícitamente cómo:
      1. Analizas los requisitos de diseño y API
      2. Planificas la arquitectura de componentes React
      3. Escribes tests primero, luego implementas
      4. Tomas decisiones de UX/UI con fundamentos
      5. Manejas casos límite y errores
    </instruction>
  </chain-of-thought>

  <workflow>
    <phase name="Análisis y Planificación">
      <task>Examinar las API disponibles y su estructura de datos</task>
      <task>Diseñar arquitectura de componentes React para Kanban</task>
      <task>Planificar estrategia de estado (Context API o Redux)</task>
      <task>Determinar componentes reutilizables y su jerarquía</task>
    </phase>

    <phase name="TDD - Componentes Base">
      <task>Escribir tests para componente KanbanBoard</task>
      <task>Implementar KanbanBoard mínimo para pasar tests</task>
      <task>Escribir tests para componente KanbanColumn</task>
      <task>Implementar KanbanColumn mínimo para pasar tests</task>
      <task>Escribir tests para componente CandidateCard</task>
      <task>Implementar CandidateCard mínimo para pasar tests</task>
    </phase>

    <phase name="TDD - Integración API">
      <task>Escribir tests para hooks de integración API</task>
      <task>Implementar hooks para fetchInterviewFlow</task>
      <task>Implementar hooks para fetchCandidates</task>
      <task>Implementar función updateCandidateStage</task>
    </phase>

    <phase name="TDD - Drag and Drop">
      <task>Escribir tests para funcionalidad drag-and-drop</task>
      <task>Implementar React DnD o biblioteca similar</task>
      <task>Añadir lógica de actualización al soltar tarjeta</task>
      <task>Implementar feedback visual durante arrastre</task>
    </phase>

    <phase name="TDD - Responsive Design">
      <task>Escribir tests para comportamiento responsivo</task>
      <task>Implementar media queries y diseño adaptativo</task>
      <task>Optimizar para móvil (columnas verticales)</task>
    </phase>

    <phase name="Refinamiento y UX">
      <task>Mejorar feedback visual (loaders, indicadores, transiciones)</task>
      <task>Implementar manejo de errores con mensajes amigables</task>
      <task>Añadir accesibilidad (ARIA, manejo de teclado)</task>
      <task>Optimizar rendimiento (memoización, virtualizaciones si necesario)</task>
    </phase>
  </workflow>

  <component-structure>
    <component name="Pages">
      <file path="src/pages/PositionDetail.tsx">Página principal Kanban</file>
    </component>
    <component name="Components">
      <file path="src/components/kanban/KanbanBoard.tsx">Contenedor principal Kanban</file>
      <file path="src/components/kanban/KanbanColumn.tsx">Columna individual para fase</file>
      <file path="src/components/kanban/CandidateCard.tsx">Tarjeta de candidato</file>
      <file path="src/components/common/PageHeader.tsx">Encabezado con título y flecha atrás</file>
      <file path="src/components/common/ScoreBadge.tsx">Insignia de puntuación</file>
    </component>
    <component name="Hooks">
      <file path="src/hooks/usePositionFlow.ts">Hook para obtener flujo de entrevista</file>
      <file path="src/hooks/usePositionCandidates.ts">Hook para obtener candidatos</file>
      <file path="src/hooks/useUpdateCandidateStage.ts">Hook para actualizar etapa</file>
    </component>
    <component name="Context">
      <file path="src/context/KanbanContext.tsx">Contexto para estado global Kanban</file>
    </component>
    <component name="Types">
      <file path="src/types/kanban.ts">Tipos e interfaces para Kanban</file>
    </component>
    <component name="Tests">
      <file path="src/tests/KanbanBoard.test.tsx">Tests para KanbanBoard</file>
      <file path="src/tests/KanbanColumn.test.tsx">Tests para KanbanColumn</file>
      <file path="src/tests/CandidateCard.test.tsx">Tests para CandidateCard</file>
      <file path="src/tests/usePositionFlow.test.ts">Tests para hooks de API</file>
    </component>
  </component-structure>

  <api-integration>
    <sample name="fetchInterviewFlow">
      ```typescript
      const fetchInterviewFlow = async (positionId: number) => {
        try {
          const response = await fetch(`/api/positions/${positionId}/interviewFlow`);
          if (!response.ok) throw new Error('Failed to fetch interview flow');
          return await response.json();
        } catch (error) {
          console.error('Error fetching interview flow:', error);
          throw error;
        }
      };
      ```
    </sample>

    <sample name="fetchCandidates">
      ```typescript
      const fetchCandidates = async (positionId: number) => {
        try {
          const response = await fetch(`/api/positions/${positionId}/candidates`);
          if (!response.ok) throw new Error('Failed to fetch candidates');
          return await response.json();
        } catch (error) {
          console.error('Error fetching candidates:', error);
          throw error;
        }
      };
      ```
    </sample>

    <sample name="updateCandidateStage">
      ```typescript
      const updateCandidateStage = async (candidateId: number, stageId: number) => {
        try {
          const response = await fetch(`/api/candidates/${candidateId}/stage`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ currentInterviewStep: stageId }),
          });

          if (!response.ok) throw new Error('Failed to update candidate stage');
          return await response.json();
        } catch (error) {
          console.error('Error updating candidate stage:', error);
          throw error;
        }
      };
      ```
    </sample>
  </api-integration>

  <testing-strategy>
    <test-type name="Component Tests">
      <tool>React Testing Library</tool>
      <focus>Comportamiento de componentes, no implementación</focus>
      <coverage>Renderizado, interacciones de usuario, estados visuales</coverage>
    </test-type>

    <test-type name="Hook Tests">
      <tool>React Hooks Testing Library</tool>
      <focus>Lógica de hooks personalizada</focus>
      <coverage>Llamadas API, manejo de errores, transformación de datos</coverage>
    </test-type>

    <test-type name="Integration Tests">
      <tool>React Testing Library + MSW (Mock Service Worker)</tool>
      <focus>Flujos completos de usuario</focus>
      <coverage>Drag-and-drop, actualización de estado, renderizado condicional</coverage>
    </test-type>

    <test-sample name="KanbanBoard.test.tsx">
      ```typescript
      import { render, screen, waitFor } from '@testing-library/react';
      import KanbanBoard from '../components/kanban/KanbanBoard';
      import { KanbanProvider } from '../context/KanbanContext';

      // Mock data
      const mockColumns = [
        { id: 1, name: 'Initial Screening' },
        { id: 2, name: 'Technical Interview' },
        { id: 3, name: 'Manager Interview' }
      ];

      const mockCandidates = [
        { id: 1, fullName: 'John Doe', currentInterviewStep: 'Technical Interview', averageScore: 4 },
        { id: 2, fullName: 'Jane Smith', currentInterviewStep: 'Initial Screening', averageScore: 3 }
      ];

      describe('KanbanBoard', () => {
        test('renders all columns correctly', async () => {
          render(
            <KanbanProvider value={{ columns: mockColumns, candidates: mockCandidates }}>
              <KanbanBoard positionId={1} />
            </KanbanProvider>
          );

          // Verify columns render
          for (const column of mockColumns) {
            expect(screen.getByText(column.name)).toBeInTheDocument();
          }
        });

        test('displays candidates in correct columns', async () => {
          render(
            <KanbanProvider value={{ columns: mockColumns, candidates: mockCandidates }}>
              <KanbanBoard positionId={1} />
            </KanbanProvider>
          );

          // Check John is in Technical Interview column
          const techColumn = screen.getByTestId('column-Technical Interview');
          const johnCard = screen.getByText('John Doe');
          expect(techColumn).toContainElement(johnCard);

          // Check Jane is in Initial Screening column
          const initialColumn = screen.getByTestId('column-Initial Screening');
          const janeCard = screen.getByText('Jane Smith');
          expect(initialColumn).toContainElement(janeCard);
        });
      });
      ```
    </test-sample>
  </testing-strategy>

  <ux-considerations>
    <mobile-optimization>
      <strategy>Mobile-first approach with CSS Grid/Flexbox</strategy>
      <breakpoints>
        <breakpoint name="mobile">max-width: 767px</breakpoint>
        <breakpoint name="tablet">768px - 1023px</breakpoint>
        <breakpoint name="desktop">1024px+</breakpoint>
      </breakpoints>
      <implementation>
        ```css
        /* Mobile: Vertical layout */
        .kanban-board {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
        }

        .kanban-column {
          width: 100%;
        }

        /* Desktop: Horizontal layout */
        @media (min-width: 768px) {
          .kanban-board {
            flex-direction: row;
            overflow-x: auto;
          }

          .kanban-column {
            min-width: 280px;
            max-width: 320px;
          }
        }
        ```
      </implementation>
    </mobile-optimization>

    <drag-drop-ux>
      <library>react-beautiful-dnd</library>
      <features>
        <feature>Visual feedback durante arrastre</feature>
        <feature>Animaciones suaves de transición</feature>
        <feature>Indicadores de "drop zone"</feature>
        <feature>Soporte de accesibilidad</feature>
      </features>
    </drag-drop-ux>

    <loading-states>
      <strategy>Skeleton screens instead of spinners</strategy>
      <implementation>
        ```jsx
        {isLoading ? (
          <SkeletonKanban columns={3} cardsPerColumn={2} />
        ) : (
          <KanbanBoard columns={columns} candidates={candidates} />
        )}
        ```
      </implementation>
    </loading-states>

    <error-handling>
      <strategy>Contextual error messages with retry options</strategy>
      <implementation>
        ```jsx
        {error && (
          <ErrorAlert
            message="No pudimos cargar los candidatos"
            details={error.message}
            retry={() => refetch()}
          />
        )}
        ```
      </implementation>
    </error-handling>
  </ux-considerations>

  <deliverables>
    <files>
      <file path="frontend/src/pages/PositionDetail.tsx">Página principal Kanban</file>
      <file path="frontend/src/components/kanban/*">Componentes Kanban</file>
      <file path="frontend/src/hooks/*">Hooks para API integration</file>
      <file path="frontend/src/tests/*">Tests unitarios e integración</file>
    </files>
    <documentation>
      <file path="prompts/prompts-GG.md">Documentación de prompting</file>
    </documentation>
    <branch>frontend-GG</branch>
  </deliverables>

  <execution-command>
    Por favor, comienza con un análisis sistemático paso a paso:

    1. "Primero analizaré los requisitos de la interfaz Kanban..."
    2. "Luego examinaré las API disponibles y su estructura de datos..."
    3. "Después diseñaré la arquitectura de componentes React..."
    4. "Continuaré con los tests iniciales para KanbanBoard..."

    Muestra tu proceso de pensamiento en cada etapa y explica las decisiones de diseño que tomas.
  </execution-command>
</prompt>
```

## ✅ Estado de Implementación

### **Prompt 1: Implementación TDD del Frontend Kanban** - ✅ COMPLETADO
Este prompt guiará la construcción completa del Kanban con React, siguiendo TDD y mejores prácticas de UX/UI.
- **Estado**: Implementado exitosamente
- **Fecha**: 12 de julio, 2025
- **Resultado**: Kanban funcional con todas las características requeridas

### **Prompt 2: Verificación Sistemática** - ✅ COMPLETADO
Este prompt validará exhaustivamente todos los aspectos del Kanban construido, asegurando conformidad con requisitos.
- **Estado**: Verificación completa exitosa
- **Fecha**: 12 de julio, 2025
- **Resultado**: Todas las verificaciones APROBADAS (ver KANBAN_VERIFICATION_REPORT.md)

### **Prompt 3: Validación Final y PR** - 🔄 PENDIENTE
Este prompt finalizará el proceso, realizando pruebas finales y automatizando la creación del PR.

## 🔍 Desglose de los Tres Prompts Optimizados

### **Prompt 1: Implementación TDD del Frontend Kanban**
Este prompt guiará la construcción completa del Kanban con React, siguiendo TDD y mejores prácticas de UX/UI.

### **Prompt 2: Verificación Sistemática**
Este prompt validará exhaustivamente todos los aspectos del Kanban construido, asegurando conformidad con requisitos.

### **Prompt 3: Validación Final y PR**
Este prompt finalizará el proceso, realizando pruebas finales y automatizando la creación del PR.

A continuación, cada prompt está diseñado específicamente para aprovechar las capacidades de Claude con etiquetas XML/HTML:

---

## 📋 Índice de Prompts
1. Prompt Principal de Implementación TDD
2. Prompt de Verificación Sistemática
3. Prompt Final de Validación y PR

---

## 🎯 Prompt Principal de Implementación TDD

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
    <apis>
      <endpoint method="GET" path="/positions/:id/interviewFlow">
        Retorna información sobre el proceso de contratación: nombre de posición y etapas del proceso
      </endpoint>
      <endpoint method="GET" path="/positions/:id/candidates">
        Retorna candidatos para una posición específica con nombre, etapa actual y puntuación media
      </endpoint>
      <endpoint method="PUT" path="/candidates/:id/stage">
        Actualiza la etapa de un candidato específico
      </endpoint>
    </apis>
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

  <chain-of-thought>
    <instruction>
      Utiliza razonamiento sistemático en cada paso. Piensa paso a paso, valida suposiciones y explica tu proceso de toma de decisiones a lo largo de la implementación. Muestra explícitamente cómo:
      1. Analizas los requisitos de diseño y API
      2. Planificas la arquitectura de componentes React
      3. Escribes tests primero, luego implementas
      4. Tomas decisiones de UX/UI con fundamentos
      5. Manejas casos límite y errores
    </instruction>
  </chain-of-thought>

  <workflow>
    <phase name="Análisis y Planificación">
      <task>Examinar las API disponibles y su estructura de datos</task>
      <task>Diseñar arquitectura de componentes React para Kanban</task>
      <task>Planificar estrategia de estado (Context API o Redux)</task>
      <task>Determinar componentes reutilizables y su jerarquía</task>
    </phase>

    <phase name="TDD - Componentes Base">
      <task>Escribir tests para componente KanbanBoard</task>
      <task>Implementar KanbanBoard mínimo para pasar tests</task>
      <task>Escribir tests para componente KanbanColumn</task>
      <task>Implementar KanbanColumn mínimo para pasar tests</task>
      <task>Escribir tests para componente CandidateCard</task>
      <task>Implementar CandidateCard mínimo para pasar tests</task>
    </phase>

    <phase name="TDD - Integración API">
      <task>Escribir tests para hooks de integración API</task>
      <task>Implementar hooks para fetchInterviewFlow</task>
      <task>Implementar hooks para fetchCandidates</task>
      <task>Implementar función updateCandidateStage</task>
    </phase>

    <phase name="TDD - Drag and Drop">
      <task>Escribir tests para funcionalidad drag-and-drop</task>
      <task>Implementar React DnD o biblioteca similar</task>
      <task>Añadir lógica de actualización al soltar tarjeta</task>
      <task>Implementar feedback visual durante arrastre</task>
    </phase>

    <phase name="TDD - Responsive Design">
      <task>Escribir tests para comportamiento responsivo</task>
      <task>Implementar media queries y diseño adaptativo</task>
      <task>Optimizar para móvil (columnas verticales)</task>
    </phase>

    <phase name="Refinamiento y UX">
      <task>Mejorar feedback visual (loaders, indicadores, transiciones)</task>
      <task>Implementar manejo de errores con mensajes amigables</task>
      <task>Añadir accesibilidad (ARIA, manejo de teclado)</task>
      <task>Optimizar rendimiento (memoización, virtualizaciones si necesario)</task>
    </phase>
  </workflow>

  <component-structure>
    <component name="Pages">
      <file path="src/pages/PositionDetail.tsx">Página principal Kanban</file>
    </component>
    <component name="Components">
      <file path="src/components/kanban/KanbanBoard.tsx">Contenedor principal Kanban</file>
      <file path="src/components/kanban/KanbanColumn.tsx">Columna individual para fase</file>
      <file path="src/components/kanban/CandidateCard.tsx">Tarjeta de candidato</file>
      <file path="src/components/common/PageHeader.tsx">Encabezado con título y flecha atrás</file>
      <file path="src/components/common/ScoreBadge.tsx">Insignia de puntuación</file>
    </component>
    <component name="Hooks">
      <file path="src/hooks/usePositionFlow.ts">Hook para obtener flujo de entrevista</file>
      <file path="src/hooks/usePositionCandidates.ts">Hook para obtener candidatos</file>
      <file path="src/hooks/useUpdateCandidateStage.ts">Hook para actualizar etapa</file>
    </component>
    <component name="Context">
      <file path="src/context/KanbanContext.tsx">Contexto para estado global Kanban</file>
    </component>
    <component name="Types">
      <file path="src/types/kanban.ts">Tipos e interfaces para Kanban</file>
    </component>
    <component name="Tests">
      <file path="src/tests/KanbanBoard.test.tsx">Tests para KanbanBoard</file>
      <file path="src/tests/KanbanColumn.test.tsx">Tests para KanbanColumn</file>
      <file path="src/tests/CandidateCard.test.tsx">Tests para CandidateCard</file>
      <file path="src/tests/usePositionFlow.test.ts">Tests para hooks de API</file>
    </component>
  </component-structure>

  <api-integration>
    <sample name="fetchInterviewFlow">
      ```typescript
      const fetchInterviewFlow = async (positionId: number) => {
        try {
          const response = await fetch(`/api/positions/${positionId}/interviewFlow`);
          if (!response.ok) throw new Error('Failed to fetch interview flow');
          return await response.json();
        } catch (error) {
          console.error('Error fetching interview flow:', error);
          throw error;
        }
      };
      ```
    </sample>

    <sample name="fetchCandidates">
      ```typescript
      const fetchCandidates = async (positionId: number) => {
        try {
          const response = await fetch(`/api/positions/${positionId}/candidates`);
          if (!response.ok) throw new Error('Failed to fetch candidates');
          return await response.json();
        } catch (error) {
          console.error('Error fetching candidates:', error);
          throw error;
        }
      };
      ```
    </sample>

    <sample name="updateCandidateStage">
      ```typescript
      const updateCandidateStage = async (candidateId: number, stageId: number) => {
        try {
          const response = await fetch(`/api/candidates/${candidateId}/stage`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ currentInterviewStep: stageId }),
          });

          if (!response.ok) throw new Error('Failed to update candidate stage');
          return await response.json();
        } catch (error) {
          console.error('Error updating candidate stage:', error);
          throw error;
        }
      };
      ```
    </sample>
  </api-integration>

  <testing-strategy>
    <test-type name="Component Tests">
      <tool>React Testing Library</tool>
      <focus>Comportamiento de componentes, no implementación</focus>
      <coverage>Renderizado, interacciones de usuario, estados visuales</coverage>
    </test-type>

    <test-type name="Hook Tests">
      <tool>React Hooks Testing Library</tool>
      <focus>Lógica de hooks personalizada</focus>
      <coverage>Llamadas API, manejo de errores, transformación de datos</coverage>
    </test-type>

    <test-type name="Integration Tests">
      <tool>React Testing Library + MSW (Mock Service Worker)</tool>
      <focus>Flujos completos de usuario</focus>
      <coverage>Drag-and-drop, actualización de estado, renderizado condicional</coverage>
    </test-type>

    <test-sample name="KanbanBoard.test.tsx">
      ```typescript
      import { render, screen, waitFor } from '@testing-library/react';
      import KanbanBoard from '../components/kanban/KanbanBoard';
      import { KanbanProvider } from '../context/KanbanContext';

      // Mock data
      const mockColumns = [
        { id: 1, name: 'Initial Screening' },
        { id: 2, name: 'Technical Interview' },
        { id: 3, name: 'Manager Interview' }
      ];

      const mockCandidates = [
        { id: 1, fullName: 'John Doe', currentInterviewStep: 'Technical Interview', averageScore: 4 },
        { id: 2, fullName: 'Jane Smith', currentInterviewStep: 'Initial Screening', averageScore: 3 }
      ];

      describe('KanbanBoard', () => {
        test('renders all columns correctly', async () => {
          render(
            <KanbanProvider value={{ columns: mockColumns, candidates: mockCandidates }}>
              <KanbanBoard positionId={1} />
            </KanbanProvider>
          );

          // Verify columns render
          for (const column of mockColumns) {
            expect(screen.getByText(column.name)).toBeInTheDocument();
          }
        });

        test('displays candidates in correct columns', async () => {
          render(
            <KanbanProvider value={{ columns: mockColumns, candidates: mockCandidates }}>
              <KanbanBoard positionId={1} />
            </KanbanProvider>
          );

          // Check John is in Technical Interview column
          const techColumn = screen.getByTestId('column-Technical Interview');
          const johnCard = screen.getByText('John Doe');
          expect(techColumn).toContainElement(johnCard);

          // Check Jane is in Initial Screening column
          const initialColumn = screen.getByTestId('column-Initial Screening');
          const janeCard = screen.getByText('Jane Smith');
          expect(initialColumn).toContainElement(janeCard);
        });
      });
      ```
    </test-sample>
  </testing-strategy>

  <ux-considerations>
    <mobile-optimization>
      <strategy>Mobile-first approach with CSS Grid/Flexbox</strategy>
      <breakpoints>
        <breakpoint name="mobile">max-width: 767px</breakpoint>
        <breakpoint name="tablet">768px - 1023px</breakpoint>
        <breakpoint name="desktop">1024px+</breakpoint>
      </breakpoints>
      <implementation>
        ```css
        /* Mobile: Vertical layout */
        .kanban-board {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
        }

        .kanban-column {
          width: 100%;
        }

        /* Desktop: Horizontal layout */
        @media (min-width: 768px) {
          .kanban-board {
            flex-direction: row;
            overflow-x: auto;
          }

          .kanban-column {
            min-width: 280px;
            max-width: 320px;
          }
        }
        ```
      </implementation>
    </mobile-optimization>

    <drag-drop-ux>
      <library>react-beautiful-dnd</library>
      <features>
        <feature>Visual feedback durante arrastre</feature>
        <feature>Animaciones suaves de transición</feature>
        <feature>Indicadores de "drop zone"</feature>
        <feature>Soporte de accesibilidad</feature>
      </features>
    </drag-drop-ux>

    <loading-states>
      <strategy>Skeleton screens instead of spinners</strategy>
      <implementation>
        ```jsx
        {isLoading ? (
          <SkeletonKanban columns={3} cardsPerColumn={2} />
        ) : (
          <KanbanBoard columns={columns} candidates={candidates} />
        )}
        ```
      </implementation>
    </loading-states>

    <error-handling>
      <strategy>Contextual error messages with retry options</strategy>
      <implementation>
        ```jsx
        {error && (
          <ErrorAlert
            message="No pudimos cargar los candidatos"
            details={error.message}
            retry={() => refetch()}
          />
        )}
        ```
      </implementation>
    </error-handling>
  </ux-considerations>

  <deliverables>
    <files>
      <file path="frontend/src/pages/PositionDetail.tsx">Página principal Kanban</file>
      <file path="frontend/src/components/kanban/*">Componentes Kanban</file>
      <file path="frontend/src/hooks/*">Hooks para API integration</file>
      <file path="frontend/src/tests/*">Tests unitarios e integración</file>
    </files>
    <documentation>
      <file path="prompts/prompts-GG.md">Documentación de prompting</file>
    </documentation>
    <branch>frontend-GG</branch>
  </deliverables>

  <execution-command>
    Por favor, comienza con un análisis sistemático paso a paso:

    1. "Primero analizaré los requisitos de la interfaz Kanban..."
    2. "Luego examinaré las API disponibles y su estructura de datos..."
    3. "Después diseñaré la arquitectura de componentes React..."
    4. "Continuaré con los tests iniciales para KanbanBoard..."

    Muestra tu proceso de pensamiento en cada etapa y explica las decisiones de diseño que tomas.
  </execution-command>
</prompt>
```

## ✅ Estado de Implementación

### **Prompt 1: Implementación TDD del Frontend Kanban** - ✅ COMPLETADO
Este prompt guiará la construcción completa del Kanban con React, siguiendo TDD y mejores prácticas de UX/UI.
- **Estado**: Implementado exitosamente
- **Fecha**: 12 de julio, 2025
- **Resultado**: Kanban funcional con todas las características requeridas

### **Prompt 2: Verificación Sistemática** - ✅ COMPLETADO
Este prompt validará exhaustivamente todos los aspectos del Kanban construido, asegurando conformidad con requisitos.
- **Estado**: Verificación completa exitosa
- **Fecha**: 12 de julio, 2025
- **Resultado**: Todas las verificaciones APROBADAS (ver KANBAN_VERIFICATION_REPORT.md)

### **Prompt 3: Validación Final y PR** - 🔄 PENDIENTE
Este prompt finalizará el proceso, realizando pruebas finales y automatizando la creación del PR.

## 🔍 Desglose de los Tres Prompts Optimizados

### **Prompt 1: Implementación TDD del Frontend Kanban**
Este prompt guiará la construcción completa del Kanban con React, siguiendo TDD y mejores prácticas de UX/UI.

### **Prompt 2: Verificación Sistemática**
Este prompt validará exhaustivamente todos los aspectos del Kanban construido, asegurando conformidad con requisitos.

### **Prompt 3: Validación Final y PR**
Este prompt finalizará el proceso, realizando pruebas finales y automatizando la creación del PR.

A continuación, cada prompt está diseñado específicamente para aprovechar las capacidades de Claude con etiquetas XML/HTML:

---

## 📋 Índice de Prompts
1. Prompt Principal de Implementación TDD
2. Prompt de Verificación Sistemática
3. Prompt Final de Validación y PR

---

## 🎯 Prompt Principal de Implementación TDD

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
    <apis>
      <endpoint method="GET" path="/positions/:id/interviewFlow">
        Retorna información sobre el proceso de contratación: nombre de posición y etapas del proceso
      </endpoint>
      <endpoint method="GET" path="/positions/:id/candidates">
        Retorna candidatos para una posición específica con nombre, etapa actual y puntuación media
      </endpoint>
      <endpoint method="PUT" path="/candidates/:id/stage">
        Actualiza la etapa de un candidato específico
      </endpoint>
    </apis>
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

  <chain-of-thought>
    <instruction>
      Utiliza razonamiento sistemático en cada paso. Piensa paso a paso, valida suposiciones y explica tu proceso de toma de decisiones a lo largo de la implementación. Muestra explícitamente cómo:
      1. Analizas los requisitos de diseño y API
      2. Planificas la arquitectura de componentes React
      3. Escribes tests primero, luego implementas
      4. Tomas decisiones de UX/UI con fundamentos
      5. Manejas casos límite y errores
    </instruction>
  </chain-of-thought>

  <workflow>
    <phase name="Análisis y Planificación">
      <task>Examinar las API disponibles y su estructura de datos</task>
      <task>Diseñar arquitectura de componentes React para Kanban</task>
      <task>Planificar estrategia de estado (Context API o Redux)</task>
      <task>Determinar componentes reutilizables y su jerarquía</task>
    </phase>

    <phase name="TDD - Componentes Base">
      <task>Escribir tests para componente KanbanBoard</task>
      <task>Implementar KanbanBoard mínimo para pasar tests</task>
      <task>Escribir tests para componente KanbanColumn</task>
      <task>Implementar KanbanColumn mínimo para pasar tests</task>
      <task>Escribir tests para componente CandidateCard</task>
      <task>Implementar CandidateCard mínimo para pasar tests</task>
    </phase>

    <phase name="TDD - Integración API">
      <task>Escribir tests para hooks de integración API</task>
      <task>Implementar hooks para fetchInterviewFlow</task>
      <task>Implementar hooks para fetchCandidates</task>
      <task>Implementar función updateCandidateStage</task>
    </phase>

    <phase name="TDD - Drag and Drop">
      <task>Escribir tests para funcionalidad drag-and-drop</task>
      <task>Implementar React DnD o biblioteca similar</task>
      <task>Añadir lógica de actualización al soltar tarjeta</task>
      <task>Implementar feedback visual durante arrastre</task>
    </phase>

    <phase name="TDD - Responsive Design">
      <task>Escribir tests para comportamiento responsivo</task>
      <task>Implementar media queries y diseño adaptativo</task>
      <task>Optimizar para móvil (columnas verticales)</task>
    </phase>

    <phase name="Refinamiento y UX">
      <task>Mejorar feedback visual (loaders, indicadores, transiciones)</task>
      <task>Implementar manejo de errores con mensajes amigables</task>
      <task>Añadir accesibilidad (ARIA, manejo de teclado)</task>
      <task>Optimizar rendimiento (memoización, virtualizaciones si necesario)</task>
    </phase>
  </workflow>

  <component-structure>
    <component name="Pages">
      <file path="src/pages/PositionDetail.tsx">Página principal Kanban</file>
    </component>
    <component name="Components">
      <file path="src/components/kanban/KanbanBoard.tsx">Contenedor principal Kanban</file>
      <file path="src/components/kanban/KanbanColumn.tsx">Columna individual para fase</file>
      <file path="src/components/kanban/CandidateCard.tsx">Tarjeta de candidato</file>
      <file path="src/components/common/PageHeader.tsx">Encabezado con título y flecha atrás</file>
      <file path="src/components/common/ScoreBadge.tsx">Insignia de puntuación</file>
    </component>
    <component name="Hooks">
      <file path="src/hooks/usePositionFlow.ts">Hook para obtener flujo de entrevista</file>
      <file path="src/hooks/usePositionCandidates.ts">Hook para obtener candidatos</file>
      <file path="src/hooks/useUpdateCandidateStage.ts">Hook para actualizar etapa</file>
    </component>
    <component name="Context">
      <file path="src/context/KanbanContext.tsx">Contexto para estado global Kanban</file>
    </component>
    <component name="Types">
      <file path="src/types/kanban.ts">Tipos e interfaces para Kanban</file>
    </component>
    <component name="Tests">
      <file path="src/tests/KanbanBoard.test.tsx">Tests para KanbanBoard</file>
      <file path="src/tests/KanbanColumn.test.tsx">Tests para KanbanColumn</file>
      <file path="src/tests/CandidateCard.test.tsx">Tests para CandidateCard</file>
      <file path="src/tests/usePositionFlow.test.ts">Tests para hooks de API</file>
    </component>
  </component-structure>

  <api-integration>
    <sample name="fetchInterviewFlow">
      ```typescript
      const fetchInterviewFlow = async (positionId: number) => {
        try {
          const response = await fetch(`/api/positions/${positionId}/interviewFlow`);
          if (!response.ok) throw new Error('Failed to fetch interview flow');
          return await response.json();
        } catch (error) {
          console.error('Error fetching interview flow:', error);
          throw error;
        }
      };
      ```
    </sample>

    <sample name="fetchCandidates">
      ```typescript
      const fetchCandidates = async (positionId: number) => {
        try {
          const response = await fetch(`/api/positions/${positionId}/candidates`);
          if (!response.ok) throw new Error('Failed to fetch candidates');
          return await response.json();
        } catch (error) {
          console.error('Error fetching candidates:', error);
          throw error;
        }
      };
      ```
    </sample>

    <sample name="updateCandidateStage">
      ```typescript
      const updateCandidateStage = async (candidateId: number, stageId: number) => {
        try {
          const response = await fetch(`/api/candidates/${candidateId}/stage`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ currentInterviewStep: stageId }),
          });

          if (!response.ok) throw new Error('Failed to update candidate stage');
          return await response.json();
        } catch (error) {
          console.error('Error updating candidate stage:', error);
          throw error;
        }
      };
      ```
    </sample>
  </api-integration>

  <testing-strategy>
    <test-type name="Component Tests">
      <tool>React Testing Library</tool>
      <focus>Comportamiento de componentes, no implementación</focus>
      <coverage>Renderizado, interacciones de usuario, estados visuales</coverage>
    </test-type>

    <test-type name="Hook Tests">
      <tool>React Hooks Testing Library</tool>
      <focus>Lógica de hooks personalizada</focus>
      <coverage>Llamadas API, manejo de errores, transformación de datos</coverage>
    </test-type>

    <test-type name="Integration Tests">
      <tool>React Testing Library + MSW (Mock Service Worker)</tool>
      <focus>Flujos completos de usuario</focus>
      <coverage>Drag-and-drop, actualización de estado, renderizado condicional</coverage>
    </test-type>

    <test-sample name="KanbanBoard.test.tsx">
      ```typescript
      import { render, screen, waitFor } from '@testing-library/react';
      import KanbanBoard from '../components/kanban/KanbanBoard';
      import { KanbanProvider } from '../context/KanbanContext';

      // Mock data
      const mockColumns = [
        { id: 1, name: 'Initial Screening' },
        { id: 2, name: 'Technical Interview' },
        { id: 3, name: 'Manager Interview' }
      ];

      const mockCandidates = [
        { id: 1, fullName: 'John Doe', currentInterviewStep: 'Technical Interview', averageScore: 4 },
        { id: 2, fullName: 'Jane Smith', currentInterviewStep: 'Initial Screening', averageScore: 3 }
      ];

      describe('KanbanBoard', () => {
        test('renders all columns correctly', async () => {
          render(
            <KanbanProvider value={{ columns: mockColumns, candidates: mockCandidates }}>
              <KanbanBoard positionId={1} />
            </KanbanProvider>
          );

          // Verify columns render
          for (const column of mockColumns) {
            expect(screen.getByText(column.name)).toBeInTheDocument();
          }
        });

        test('displays candidates in correct columns', async () => {
          render(
            <KanbanProvider value={{ columns: mockColumns, candidates: mockCandidates }}>
              <KanbanBoard positionId={1} />
            </KanbanProvider>
          );

          // Check John is in Technical Interview column
          const techColumn = screen.getByTestId('column-Technical Interview');
          const johnCard = screen.getByText('John Doe');
          expect(techColumn).toContainElement(johnCard);

          // Check Jane is in Initial Screening column
          const initialColumn = screen.getByTestId('column-Initial Screening');
          const janeCard = screen.getByText('Jane Smith');
          expect(initialColumn).toContainElement(janeCard);
        });
      });
      ```
    </test-sample>
  </testing-strategy>

  <ux-considerations>
    <mobile-optimization>
      <strategy>Mobile-first approach with CSS Grid/Flexbox</strategy>
      <breakpoints>
        <breakpoint name="mobile">max-width: 767px</breakpoint>
        <breakpoint name="tablet">768px - 1023px</breakpoint>
        <breakpoint name="desktop">1024px+</breakpoint>
      </breakpoints>
      <implementation>
        ```css
        /* Mobile: Vertical layout */
        .kanban-board {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
        }

        .kanban-column {
          width: 100%;
        }

        /* Desktop: Horizontal layout */
        @media (min-width: 768px) {
          .kanban-board {
            flex-direction: row;
            overflow-x: auto;
          }

          .kanban-column {
            min-width: 280px;
            max-width: 320px;
          }
        }
        ```
      </implementation>
    </mobile-optimization>

    <drag-drop-ux>
      <library>react-beautiful-dnd</library>
      <features>
        <feature>Visual feedback durante arrastre</feature>
        <feature>Animaciones suaves de transición</feature>
        <feature>Indicadores de "drop zone"</feature>
        <feature>Soporte de accesibilidad</feature>
      </features>
    </drag-drop-ux>

    <loading-states>
      <strategy>Skeleton screens instead of spinners</strategy>
      <implementation>
        ```jsx
        {isLoading ? (
          <SkeletonKanban columns={3} cardsPerColumn={2} />
        ) : (
          <KanbanBoard columns={columns} candidates={candidates} />
        )}
        ```
      </implementation>
    </loading-states>

    <error-handling>
      <strategy>Contextual error messages with retry options</strategy>
      <implementation>
        ```jsx
        {error && (
          <ErrorAlert
            message="No pudimos cargar los candidatos"
            details={error.message}
            retry={() => refetch()}
          />
        )}
        ```
      </implementation>
    </error-handling>
  </ux-considerations>

  <deliverables>
    <files>
      <file path="frontend/src/pages/PositionDetail.tsx">Página principal Kanban</file>
      <file path="frontend/src/components/kanban/*">Componentes Kanban</file>
      <file path="frontend/src/hooks/*">Hooks para API integration</file>
      <file path="frontend/src/tests/*">Tests unitarios e integración</file>
    </files>
    <documentation>
      <file path="prompts/prompts-GG.md">Documentación de prompting</file>
    </documentation>
    <branch>frontend-GG</branch>
  </deliverables>

  <execution-command>
    Por favor, comienza con un análisis sistemático paso a paso:

    1. "Primero analizaré los requisitos de la interfaz Kanban..."
    2. "Luego examinaré las API disponibles y su estructura de datos..."
    3. "Después diseñaré la arquitectura de componentes React..."
    4. "Continuaré con los tests iniciales para KanbanBoard..."

    Muestra tu proceso de pensamiento en cada etapa y explica las decisiones de diseño que tomas.
  </execution-command>
</prompt>
```
