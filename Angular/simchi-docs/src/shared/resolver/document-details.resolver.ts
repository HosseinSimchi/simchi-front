import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { DocumentDetails } from '../services/document-details/document-details';

export const documentDetailsService: ResolveFn<any> = (route) => {
  const documentDetailsService = inject(DocumentDetails);

  const name = route.paramMap.get('name');

  if (!name) {
    throw new Error('Document name is missing');
  }

  return documentDetailsService.getMarkdowndata(name);
};
