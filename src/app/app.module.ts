import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    DashboardComponent,
    ActivitiesComponent,
    BoundriesComponent,
    IsotopesComponent,
    ClientsComponent,
    DistributorsComponent,
    EquationsComponent,
    FarmsComponent,
    FieldsComponent,
    LabTestsComponent,
    ProvidersComponent,
    QueriesComponent,
    SetsComponent,
    SurveysComponent,
    UploadsComponent,
    VariablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
