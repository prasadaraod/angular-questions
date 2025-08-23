import { Routes } from '@angular/router';
import { BindQuestions } from './bind-questions/bind-questions';
import { DirectiveQuestions } from './directive-questions/directive-questions';

export const routes: Routes = [
    {
        path: 'binding', component: BindQuestions
    },
    {
        path: 'directive', component: DirectiveQuestions
    }
];
