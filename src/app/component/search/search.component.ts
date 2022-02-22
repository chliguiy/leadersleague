import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter();
  constructor(private formBuilder: FormBuilder) { }
  form: FormGroup = new FormGroup({
    searchName: new FormControl(''),
    checkbox: new FormControl('')
  });
  submitted = false;
   ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        searchName: ['', Validators.required],
        checkbox: ['']});
  }
  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    
    this.newItemEvent.emit(this.form.value.searchName);
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }


}
