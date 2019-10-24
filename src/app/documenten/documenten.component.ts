import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from  '@angular/forms';
import { UploadService } from  '../upload.service';

@Component({
  selector: 'app-documenten',
  templateUrl: './documenten.component.html',
  styleUrls: ['./documenten.component.css']
})
export class DocumentenComponent implements OnInit {

  form: FormGroup;
  error: string;
  userId: number = 1; /* gekoppeld aan de userdid in de tabel als die er is,anders aanpassen*/
  
  uploadResponse = { status: '', message: '', filePath: '' };

 

  constructor(private formBuilder: FormBuilder, private uploadService: UploadService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      docs: ['']
    });
  }


  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('docs').setValue(file);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.form.get('docs').value);

    this.uploadService.upload(formData, this.userId).subscribe(
      (res) => this.uploadResponse = res,
      (err) => this.error = err
    );
  }
  
}
