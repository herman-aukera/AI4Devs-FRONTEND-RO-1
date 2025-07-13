import { Request, Response } from 'express';
import { createApplication } from '../../application/services/applicationService';

export const createApplicationController = async (req: Request, res: Response) => {
  try {
    const applicationData = req.body;
    const application = await createApplication(applicationData);
    res.status(201).json({ message: 'Application created successfully', data: application });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({ message: 'Error creating application', error: error.message });
    } else {
      res.status(400).json({ message: 'Error creating application', error: 'Unknown error' });
    }
  }
};
