import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  showEducation:boolean=true
  showProjects:boolean=true

   
  projects = [
    { name: 'E Commerce Website', description: 'Technologies Used:-  Angular Js, Bootstrap, HTML, CSS, JavaScript,  Developed a Static clone of the E Commerce website with a focus on replacing the homepage layout and styling.' },
    { name: 'ATM Simulation System', description: 'Technologies Used:-  Java, Java Swing, AWT ,SQL Database,  Designed and Developed a ATM Simulation system in java.' },
    { name: 'Portfolio', description: 'Technologies Used:-   Angular Js, Bootstrap, HTML, CSS, JavaScript' },
  ];
}

