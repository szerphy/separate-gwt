import { NgModule } from '@angular/core';

import { SeparategwtSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [SeparategwtSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [SeparategwtSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class SeparategwtSharedCommonModule {}
