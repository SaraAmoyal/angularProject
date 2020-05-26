import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeInShortComponent } from './recipe-in-short.component';

describe('RecipeInShortComponent', () => {
  let component: RecipeInShortComponent;
  let fixture: ComponentFixture<RecipeInShortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeInShortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeInShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
