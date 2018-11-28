import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SeparategwtSharedModule } from 'app/shared';
import { GWTREST_ROUTE, GwtRestComponent } from './';

@NgModule({
    imports: [SeparategwtSharedModule, RouterModule.forChild([GWTREST_ROUTE])],
    declarations: [GwtRestComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GwtRestModule {}
