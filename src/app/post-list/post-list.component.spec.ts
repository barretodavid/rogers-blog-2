import { PostListComponent } from './post-list.component';
import { GetAllPostsStartAction } from '../store/posts.actions';
import { TestBed } from '@angular/core/testing';
import { PostSummaryComponent } from '../post-summary/post-summary.component';
import { MatCardModule } from '@angular/material';
import { Component, Input } from '@angular/core';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { Post } from '../store/models';

describe('PostListComponent', () => {
  describe('#ngOnInit()', () => {
    it('should dispatch the action "GetAllPostsStartAction"', () => {
      const fakeStore = jasmine.createSpyObj('Store', ['dispatch', 'pipe']);
      const component = new PostListComponent(fakeStore);
      component.ngOnInit();
      expect(fakeStore.dispatch).toHaveBeenCalledWith(
        new GetAllPostsStartAction(),
      );
    });
  });

  describe('when there are 2 posts stored in the state', () => {
    beforeEach(async () => {
      @Component({
        selector: 'app-post-summary',
        template: '<span>fake component</span>',
      })
      class FakePostSummaryComponent {
        @Input() post;
      }

      const posts: Post[] = [
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

      const fakeStore = jasmine.createSpyObj('Store', ['dispatch', 'pipe']);
      fakeStore.pipe.and.returnValue(of(posts));

      TestBed.configureTestingModule({
        declarations: [PostListComponent, FakePostSummaryComponent],
        providers: [{ provide: Store, useValue: fakeStore }],
        imports: [MatCardModule],
      }).compileComponents();
    });

    it('should render 2 "<app-post-summary>" elements', () => {
      const fixture = TestBed.createComponent(PostListComponent);
      fixture.detectChanges();
      const element = <HTMLElement>fixture.nativeElement;
      const query = element.querySelectorAll('app-post-summary');
      expect(query.length).toEqual(2);
    });
  });
});
