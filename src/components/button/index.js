import { pipe, isNil, unless, always } from "ramda"
import { elementAddListener, consoleLog, mutate, appendTo } from '../../common/utility'

export function Button({ onClick, innerText, children }){
	return function renderer(parent){
		pipe(
			elementAddListener('click', onClick),
			mutate('innerText', innerText),
			unless(always(isNil(children)), children),
			appendTo(parent),
		)(document.createElement('button'))

		return parent
	}
}