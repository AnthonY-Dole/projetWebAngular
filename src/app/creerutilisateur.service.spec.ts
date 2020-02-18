import { TestBed } from '@angular/core/testing';

import { CreerutilisateurService } from './creerutilisateur.service';

describe('CreerutilisateurService', () => {
  let service: CreerutilisateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreerutilisateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
