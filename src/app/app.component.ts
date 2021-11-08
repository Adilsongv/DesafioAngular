import { style } from '@angular/animations';
import { templateSourceUrl } from '@angular/compiler';
import { Component } from '@angular/core';
import swal from 'sweetalert2'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'DesafioAngular';
  
  constructor(){
    
  }
  simpleAlert(){
    swal.fire('Hello world!');
  }
  
  alertWithSuccess(){
    swal.fire('Thank you...', 'You submitted succesfully!', 'success')
  }
  
  confirmBox(){
    swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
      } else if (result.dismiss === swal.DismissReason.cancel) {
        swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }
}
