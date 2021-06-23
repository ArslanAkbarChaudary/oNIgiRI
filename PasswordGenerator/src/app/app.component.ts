import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  generatedPassword = "";
  length = 0;
  includeLatters = false;
  includeSymbols = false;
  includeNumbers = false;

  onChangelength(event:Event){
    const parseValue = parseInt((event.target as HTMLInputElement).value);
    if (!isNaN(parseValue)){
     return this.length = parseValue
    }
    return "Invalid length";
  }

  onSelectUseLatters(){
    return this.includeLatters = !this.includeLatters;
  }
  onSelectUseNumber(){
    return this.includeNumbers = !this.includeNumbers;
  }
  onSelectUseSymbols(){
    return this.includeSymbols = !this.includeSymbols;
  }

  onGeneratePasswordClick(){
    let randomCharsetString = '';
    const numbers = '1234567890';
    const latters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@£$%^&*()_+}{|":>?<';
    if (this.includeLatters){
       randomCharsetString += latters;
    }if(this.includeNumbers){
       randomCharsetString += numbers;
    }if(this.includeSymbols){
      randomCharsetString += symbols;
    }
    for(let i=0; i < this.length; i++){
      let index = (Math.floor(Math.random() * randomCharsetString.length));
      this.generatedPassword += randomCharsetString[index];
    }
  }
}
