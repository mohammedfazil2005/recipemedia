import { Pipe, PipeTransform } from '@angular/core';
import { RecipeArray } from '../interface/interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  result:RecipeArray[]=[]

  // first argument is the data we want to manuplate
  // second argument is with what you need to manuplate

  transform(recipeArr: RecipeArray[], searchKey: string): RecipeArray[] {

  console.log(this.result)

    if(!recipeArr||searchKey==""){
      return recipeArr;
    }

   this.result=recipeArr.filter((res:RecipeArray)=>res.name.toLowerCase().includes(searchKey.toLowerCase()))
   
    return this.result;
  }

}
