import { Component } from '@angular/core';

@Component({
    selector: 'context-bar',
    template: `
        <div class="context-bar">
            <div class="context-bar-breadcrumb">
                <span class="breadcrumb-parent">{{ text }}</span>
            </div>
        </div>
    `
})
export class ContextBar {
    public text: string = 'Welcome to the world!';
}
