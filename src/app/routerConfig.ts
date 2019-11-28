import { Routes } from '@angular/router';
import { CreateMixComponent } from './create-mix/create-mix.component';
import { RecalculationComponent } from './recalculation/recalculation.component';
import { DeflectionComponent } from './deflection/deflection.component';

const appMixingProgram: Routes =[
    {path: 'create-mix', component: CreateMixComponent},
    {path: 'deflection', component: DeflectionComponent},
    {path: 'recalculation', component: RecalculationComponent}
    
];
export default appMixingProgram;