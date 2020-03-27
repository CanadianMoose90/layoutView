import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewComponent } from './Component/overview/overview.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { ActivitiesComponent } from './Component/activities/activities.component';
import { BoundriesComponent } from './Component/boundries/boundries.component';
import { IsotopesComponent } from './Component/isotopes/isotopes.component';
import { ClientsComponent } from './Component/clients/clients.component';
import { DistributorsComponent } from './Component/distributors/distributors.component';
import { EquationsComponent } from './Component/equations/equations.component';
import { FarmsComponent } from './Component/farms/farms.component';
import { FieldsComponent } from './Component/fields/fields.component';
import { LabTestsComponent } from './Component/lab-tests/lab-tests.component';
import { ProvidersComponent } from './Component/providers/providers.component';
import { QueriesComponent } from './Component/queries/queries.component';
import { SetsComponent } from './Component/sets/sets.component';
import { SurveysComponent } from './Component/surveys/surveys.component';
import { UploadsComponent } from './Component/uploads/uploads.component';
import { VariablesComponent } from './Component/variables/variables.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch:'full' },
  { path:'activities', component: ActivitiesComponent },
  { path: 'boundries', component: BoundriesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'isotopes', component: IsotopesComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'client', component: ClientsComponent },
  { path: 'distributor', component: DistributorsComponent },
  { path: 'equation', component: EquationsComponent },
  { path: 'farm', component: FarmsComponent },
  { path: 'field', component: FieldsComponent },
  { path: 'lab-test', component: LabTestsComponent },
  { path: 'provider', component: ProvidersComponent },
  { path: 'query', component: QueriesComponent },
  { path: 'set', component: SetsComponent },
  { path: 'survey', component: SurveysComponent },
  { path: 'upload', component: UploadsComponent },
  { path: 'variable', component: VariablesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
