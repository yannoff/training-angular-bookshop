import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DeleteSpacePipe } from './pipes/delete-space.pipe';
import { StarsComponent } from './stars/stars.component';

@NgModule({
    declarations: [
        DeleteSpacePipe,
        StarsComponent,
    ],
    imports: [
        CommonModule,
        NgbModule,
    ],
    exports: [
        StarsComponent,
    ],
})

export class SharedModule { }
