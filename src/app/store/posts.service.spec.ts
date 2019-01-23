import { PostsService } from './posts.service';
import { HttpClient } from '@angular/common/http/http';
import { of } from 'rxjs';
import { Post } from './models';

describe('PostsService', () => {
  describe('#getAll()', () => {
    describe('when the server replies with 2 posts', () => {
      it('should return an observable that emit an array of 2 items', () => {
        const response: Post[] = [
          {
            id: 'f63f13e6-b2d6-413e-a7ed-0a6ed3ed37e1',
            title: 'Angular 7',
            content: 'Some new info about the Angular',
          },
          {
            id: '1167941f-5889-4965-96a7-84749a5c6da5',
            title: 'Redux',
            content: 'Your database in the frontend',
          },
        ];
        const fakeHttp = {
          get: () => of(response),
        };

        const service = new PostsService(fakeHttp as any);
        service.getAll().subscribe(posts => {
          expect(posts.length).toEqual(2);
        });
      });
      it('should call the "get" method of the "http" service', () => {
        const fakeHttp = jasmine.createSpyObj('HttpClient', ['get']);
        const service = new PostsService(fakeHttp);
        service.getAll();
        expect(fakeHttp.get).toHaveBeenCalled();
      });
    });
  });
});
