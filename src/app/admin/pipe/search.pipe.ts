import { Pipe, PipeTransform } from '@angular/core';
import { RecipeArray } from '../../interface/interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  result:RecipeArray[]=[]

  transform(allRecipes: RecipeArray[], searchKey: string): RecipeArray[]{
    if(!allRecipes||searchKey==""){
      return allRecipes;
    }
    this.result=allRecipes.filter((eachRec:RecipeArray)=>eachRec.name.toLowerCase().includes(searchKey.toLowerCase()))
    return this.result
  }

}
