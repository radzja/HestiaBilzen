import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UploadService } from '../upload.service';

// TO DO: Finish document upload component
@Component({
  selector: 'app-documenten',
  templateUrl: './documenten.component.html',
  styleUrls: ['./documenten.component.css']
})
export class DocumentenComponent implements OnInit {

  form: FormGroup;
  error: string;

  uploadResponse = { status: '', message: '', filePath: '' };

  constructor(private formBuilder: FormBuilder, private uploadService: UploadService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      file: ['']
    });
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const doc = event.target.files[0];
      this.form.get('file').setValue(doc);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.form.get('file').value);

    this.uploadService.upload(formData).subscribe(
      (res) => this.uploadResponse = res,
      (err) => this.error = err
    );
  }

}
