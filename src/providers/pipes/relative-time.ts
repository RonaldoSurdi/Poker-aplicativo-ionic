import { Pipe, PipeTransform } from '@angular/core';
import * as distanceInWordsToNow from 'date-fns/distance_in_words_to_now'
import * as ptLocale from 'date-fns/locale/pt/index.js'

@Pipe({
  name: 'relativeTime',
})
export class RelativeTime implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: Date | string | number, ...args: any[]): any {
      if (!value) return '';
      return distanceInWordsToNow(value, { addSuffix: args[0], locale: ptLocale });
  }
}
