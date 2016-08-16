import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextBar } from './context-bar';
declare const beforeEach, describe, expect, it;

describe('Component: Context Bar', () => {
    let fixture: ComponentFixture<ContextBar>;
    let element;
    let contextBar;

    let initialize = () => {
        fixture.detectChanges();
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ContextBar] // This seems to be the problem
        });
    });

    beforeEach(async(() => {
        TestBed.compileComponents().then(() => {
            fixture = TestBed.createComponent(ContextBar);
            initialize();
            contextBar = fixture.componentInstance;
            element = fixture.debugElement.nativeElement;
        });
    }));

    it('should initialize', () => {
        expect(contextBar).toBeDefined();
        expect(fixture).toBeDefined();
        expect(element).toBeDefined();
        expect(contextBar.text).toBeDefined();
        expect(contextBar.text).toBe('Welcome to the world!');
        console.log('context-bar.spec.ts > This code will be executed in Chrome but not in PhantomJS');
    });

});
