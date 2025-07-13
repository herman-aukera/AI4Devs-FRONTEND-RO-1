import { Application } from '../../domain/models/Application';
import { Candidate } from '../../domain/models/Candidate';
import { Education } from '../../domain/models/Education';
import { Resume } from '../../domain/models/Resume';
import { WorkExperience } from '../../domain/models/WorkExperience';
import { validateCandidateData } from '../validator';

export const addCandidate = async (candidateData: any) => {
  try {
    console.log('Starting candidate validation...');
    validateCandidateData(candidateData); // Validar los datos del candidato
    console.log('Candidate validation passed');
  } catch (error: any) {
    console.error('Validation error:', error);
    throw new Error(error);
  }

  console.log('Creating candidate instance...');
  const candidate = new Candidate(candidateData); // Crear una instancia del modelo Candidate
  try {
    console.log('Saving candidate to database...');
    const savedCandidate = await candidate.save(); // Guardar el candidato en la base de datos
    console.log('Candidate saved with ID:', savedCandidate.id);
    const candidateId = savedCandidate.id; // Obtener el ID del candidato guardado

    // Procesar educaciones de forma simplificada
    if (candidateData.educations && Array.isArray(candidateData.educations) && candidateData.educations.length > 0) {
      console.log('Processing educations:', candidateData.educations.length);

      // Crear una copia del array para evitar modificaciones
      const educationsToProcess = [...candidateData.educations];

      // Validar límite
      if (educationsToProcess.length > 10) {
        throw new Error('Too many educations - maximum 10 allowed');
      }

      // Procesar cada educación
      for (const educationData of educationsToProcess) {
        console.log('Processing education:', educationData);

        // Validar campos requeridos
        if (!educationData.institution || !educationData.title) {
          console.log('Skipping education - missing required fields');
          continue;
        }

        // Crear y guardar la educación
        const educationModel = new Education(educationData);
        educationModel.candidateId = candidateId;
        await educationModel.save();
        console.log('Education saved successfully');
      }

      console.log('All educations processed');
    }

    // Procesar experiencias laborales de forma simplificada
    if (candidateData.workExperiences && Array.isArray(candidateData.workExperiences) && candidateData.workExperiences.length > 0) {
      console.log('Processing work experiences:', candidateData.workExperiences.length);

      // Crear una copia del array para evitar modificaciones
      const workExperiencesToProcess = [...candidateData.workExperiences];

      // Validar límite
      if (workExperiencesToProcess.length > 10) {
        throw new Error('Too many work experiences - maximum 10 allowed');
      }

      // Procesar cada experiencia laboral
      for (const workExperienceData of workExperiencesToProcess) {
        console.log('Processing work experience:', workExperienceData);

        // Validar campos requeridos
        if (!workExperienceData.company || !workExperienceData.position) {
          console.log('Skipping work experience - missing required fields');
          continue;
        }

        // Crear y guardar la experiencia laboral
        const workExperienceModel = new WorkExperience(workExperienceData);
        workExperienceModel.candidateId = candidateId;
        await workExperienceModel.save();
        console.log('Work experience saved successfully');
      }

      console.log('All work experiences processed');
    }

    // Guardar los archivos de CV
    if (candidateData.cv && Object.keys(candidateData.cv).length > 0) {
      console.log('Processing CV...');
      const resumeModel = new Resume(candidateData.cv);
      resumeModel.candidateId = candidateId;
      await resumeModel.save();
      console.log('CV saved successfully');
      candidate.resumes.push(resumeModel);
    }

    console.log('Candidate creation completed successfully');
    return savedCandidate;
  } catch (error: any) {
    if (error.code === 'P2002') {
      // Unique constraint failed on the fields: (`email`)
      throw new Error('The email already exists in the database');
    } else {
      throw error;
    }
  }
};

export const findCandidateById = async (id: number): Promise<Candidate | null> => {
  try {
    const candidate = await Candidate.findOne(id); // Cambio aquí: pasar directamente el id
    return candidate;
  } catch (error) {
    console.error('Error al buscar el candidato:', error);
    throw new Error('Error al recuperar el candidato');
  }
};

export const updateCandidateStage = async (id: number, applicationIdNumber: number, currentInterviewStep: number) => {
  try {
    const application = await Application.findOneByPositionCandidateId(applicationIdNumber, id);
    if (!application) {
      throw new Error('Application not found');
    }

    // Actualizar solo la etapa de la entrevista actual de la aplicación específica
    application.currentInterviewStep = currentInterviewStep;

    // Guardar la aplicación actualizada
    await application.save();

    return application;
  } catch (error: any) {
    throw new Error(error);
  }
};
