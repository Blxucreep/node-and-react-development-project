import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DatabaseService } from './database.service';

describe('DatabaseService', () => {
  let service: DatabaseService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DatabaseService],
    });

    service = TestBed.inject(DatabaseService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve packages from the API via GET', () => {
    const mockPackages = [{ id: 1, name: 'Learn HTML' }, { id: 2, name: 'Learn CSS' }];

    service.getPackages().subscribe((packages) => {
      expect(packages).toEqual(mockPackages);
    });

    const req = httpTestingController.expectOne('http://localhost:3000/api/package');
    expect(req.request.method).toEqual('GET');

    req.flush(mockPackages);
  });
});