import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attributes',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './attributes.component.html',
  styleUrl: './attributes.component.css'
})
export class AttributesComponent {

  attributes: any[] = [];
  attributeName: string = '';
  entities: any[] = [];
  selectedEntityId:number | null = null;
  attributeType : any []=['Int','String'];
  modelId: number;

  constructor(private apiService: ApiServiceService) {
    this.getAllEntities();
    this.modelId = 1;
  }

  addAttributes(){
    if (this.selectedEntityId === null) {
      alert('Please select a entity');
      return;
    }

    const newAttribute = {
      attribute_name: this.attributeName,
      attribute_type:this.attributeType,
      entity_id: this.selectedEntityId
    };

    this.apiService.createAttributes(newAttribute).subscribe(() => {

    });
  }

  // getEntities(): void {
  //   this.apiService.getEntities(this.modelId).subscribe((data: any[]) => {
  //     this.entities = data;
  //   });
  // }

  getAllEntities():void{
    this.apiService.getAllEntities().subscribe((data: any[]) => {
      this.entities = data;
    });
  }
}
