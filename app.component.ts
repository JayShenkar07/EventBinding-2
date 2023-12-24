import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { SecondCompComponent } from './second-comp/second-comp.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FirstCompComponent,SecondCompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  title = 'A7-1';
  // public fun():String
  // {
  //   return "Marvellous Inforsystems";
  // }



    // public message:string="Marvellous Infosystems";

    // public ClickFunction()
    // {
    //     if(this.message=="Marvellous Infosystems")
    //     {
    //       this.message="Educating for better future";
    //     }
    //     else
    //     {
    //       this.message="Marvellous Infosystems";
    //     }
    // }


    public message:string="marvellous infosystems";
    public Tolowercase()
    {
      this.message="marvellous infosystems";
    }

    public Touppercase()
    {
      this.message="MARVELLOUS INFOSYSTEMS";
    }

}
