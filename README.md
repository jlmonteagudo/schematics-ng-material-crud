# Schematics for Angular Material CRUD

- Create project: ng new project-name --routing

- Install Angular Material

- Include this key to file src/environments/environment.ts:

	apiUrl: 'http://localhost:9000/api'
	
- Include these keys to file tsconfig.json:

	"baseUrl": "./src",
    "paths": {
      "@app/*": ["app/*"]
    }

- Include these classes to src/styles.css:

	body {
		font-family: Roboto, 'Helvetica Neue', sans-serif;
	}

	.actions {
		margin-top: 30px;
	}
	
- Setup Project: schematics .:setup-project --path=features --dry-run=false

- Create Entity: schematics .:crud --name=category --path=category --endpoint=categories --dry-run=false

- Update app.component.html to this directive: <router-outlet></router-outlet>

- Setup routing in app-routing.module:

	const routes: Routes = [
	  { path: '', redirectTo: 'admin', pathMatch: 'full' },
	  { path: 'admin', loadChildren: 'app/features/admin/admin.module#AdminModule' }
	];

- Update admin.component.html sidebar to route to the new created entity

- Include the route of the new created entity in app/features/admin/admin-routing.module.ts:

	{ path: 'category', loadChildren: 'app/features/admin/category/category.module#CategoryModule' }

- Declare the service of the new created entity in the providers section of app/services/services.module.ts

- Imports these modules in app/app.module.ts:

	ServicesModule,
  UiModule
