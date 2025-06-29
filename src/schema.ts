// Database schema and types for StormWater-AI

export interface Document {
  id?: number;
  originalName: string;
  content: string;
  category: string;
  description?: string;
  uploadedAt?: Date;
  fileSize?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Recommendation {
  id?: number;
  title: string;
  content: string;
  category: string;
  subcategory?: string;
  citation: string;
  documentId?: number;
  sourceDocumentId?: number;
  isBookmarked?: boolean;
  createdAt?: Date;
}

export interface AiAnalysis {
  id?: number;
  analysis: string;
  insights: string[];
  query?: string;
  documentId?: number;
  createdAt?: Date;
}

export interface InsertRecommendation {
  title: string;
  content: string;
  category: string;
  subcategory?: string;
  citation: string;
  documentId?: number;
  sourceDocumentId?: number;
  isBookmarked?: boolean;
}

// Schema validation types
export const insertDocumentSchema = {
  originalName: 'string',
  content: 'string',
  category: 'string',
  description: 'string'
};

export const insertAiAnalysisSchema = {
  analysis: 'string',
  insights: 'array',
  documentId: 'number'
};