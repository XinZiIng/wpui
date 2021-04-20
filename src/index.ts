import "./data"
import "./form"
import "./navigation"

import {Toast, ActionSheet} from "./feedback"

// import {$} from "./utils"

declare const global:any;
global.Toast = Toast
global.ActionSheet = ActionSheet
// global.$ = $

import "./index.sass"

export {
    ActionSheet,
    Toast,
}