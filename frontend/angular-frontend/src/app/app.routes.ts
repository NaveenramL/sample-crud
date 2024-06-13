import { Routes } from '@angular/router';
import { ModelsComponent } from './models/models.component';
import { EntitiesComponent } from './entities/entities.component';
import { AttributesComponent } from './attributes/attributes.component';

export const routes: Routes = [
    { path: '', redirectTo: '/models', pathMatch: 'full' },
    { path: 'models', component: ModelsComponent },
    { path: 'entities', component: EntitiesComponent },
    { path: 'attributes', component: AttributesComponent}
];
