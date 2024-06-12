import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-entities',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './entities.component.html',
  styleUrl: './entities.component.css'
})
export class EntitiesComponent {

  entities: any[] = [];
  entityName: string = '';
  modelId: number;
  models: any[] = [];
  selectedModelId:number | null = null;

  constructor(private apiService: ApiServiceService) {
    this.modelId = 1;
    this.getModels();
  }

  // addEntity(): void {
  //   const newEntity = { entity_name: this.entityName, model_id: this.modelId };
  //   this.apiService.createEntity(newEntity).subscribe(() => {
  //     this.getEntities();
  //     this.entityName = '';
      
      
  //   });
  // }

  addEntity(): void {

    if (this.selectedModelId === null) {
      alert('Please select a model');
      return;
    }

    const newEntity = {
      entity_name: this.entityName,
      model_id: this.selectedModelId
    };
    console.log(this.entityName);
    console.log(this.selectedModelId);
    this.apiService.createEntity(newEntity).subscribe(() => {
      // this.getEntities();
    //   this.entityName = '';
      
    // this.selectedModelId = null;
    });
  }

  trackByModelId(index: number, model: any): number {
    console.log("before   : "+model.id)
    return model.id;
  }

  getEntities(): void {
    this.apiService.getEntities(this.modelId).subscribe((data: any[]) => {
      this.entities = data;
    });
  }

  getModels(): void {
    this.apiService.getModels().subscribe((data: any[]) => {
      this.models = data;
    });
  }
}
