import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(
    [
      {
        path: '',
        loadChildren: () =>
          import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path:'Channel',
        loadChildren: ()=>
        import('./modules/channel/channel.module').then((m) => m.ChannelModule)
      },
      {
        path:'categories',
        loadChildren: ()=>
        import('./modules/categories/categories.module').then((m)=> m.CategoriesModule),
      },
      {
        path:'smart',
        loadChildren: ()=>
        import('./modules/smart-assistant/smart-assistant.module').then((m)=> m.SmartAssistantModule),
      },
      {
        path:"inventory",
        loadChildren: ()=>
        import('./modules/inventory-visibility/inventory-visibility.module').then((m) => m.InventoryVisibilityModule)
      },
      {
        path:'consis',
        loadChildren: ()=>
        import('./modules/consensus-planner/consensus-planner.module').then((m) => m.ConsensusPlannerModule)
      },
      {
        path:'open',
        loadChildren: ()=>
        import('./modules/open-order-report/open-order-report.module').then((m) => m.OpenOrderReportModule)
      },
      {
        path:'monitor',
        loadChildren: ()=>
        import('./modules/performance-monitor/performance-monitor.module').then((m) => m.PerformanceMonitorModule),
      },
      {
        path:'scenario',
        loadChildren: ()=>
        import('./modules/scenario-manager/scenario-manager.module').then ((m) => m.ScenarioManagerModule)
      },
      {
        path:'product',
        loadChildren: ()=>
        import('./modules/products/products.module').then((m)=> m.ProductsModule)
      },
      {
        path:'group',
        loadChildren: ()=>
        import('./modules/product-group/product-group.module').then((m) => m.ProductGroupModule)
      },
      {
        path:'location-group',
        loadChildren: ()=>
        import('./modules/location-group/location-group.module').then((m) => m.LocationGroupModule)
      },
      {
        path:'location',
        loadChildren: ()=>
        import('./modules/location/location.module').then((m) => m.LocationModule)
      },
      {
        path:'price-calculator',
        loadChildren: ()=>
        import('./modules/price-calculator/price-calculator.module').then((m) => m.PriceCalculatorModule)
      }
    ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
