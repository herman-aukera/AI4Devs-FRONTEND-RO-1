import { Application } from '../../domain/models/Application';

export const createApplication = async (applicationData: any) => {
  try {
    // Create application with positionId, candidateId, and initial interview step
    const application = new Application({
      positionId: applicationData.positionId,
      candidateId: applicationData.candidateId,
      applicationDate: new Date(),
      currentInterviewStep: applicationData.currentInterviewStep || 1, // Default to first step
      rating: applicationData.rating !== undefined ? applicationData.rating : 0
    });

    const savedApplication = await application.save();
    return savedApplication;
  } catch (error: any) {
    if (error.code === 'P2002') {
      throw new Error('Application already exists for this candidate and position');
    } else {
      throw error;
    }
  }
};
