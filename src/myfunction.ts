import { gs } from '@servicenow/glide'
import { upperCase } from 'lodash'
import * as moment from 'moment'

export const showStatusUpdate = function (newStatus: string, oldStatus: string) {
    gs.addInfoMessage(`Record updated. Old Status: ${oldStatus}`)
    gs.addInfoMessage(`New Status: ${newStatus}`)
    gs.addInfoMessage(upperCase('Typescript!'))
    gs.addInfoMessage(moment().format('dddd'))
}
