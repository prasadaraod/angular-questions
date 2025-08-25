import { Routes } from '@angular/router';
import { BindQuestions } from './bind-questions/bind-questions';
import { DirectiveQuestions } from './directive-questions/directive-questions';
import { Pipes } from './pipes/pipes';
import { Parent } from './parent/parent';
import { OutputDecorator } from './output-decorator/output-decorator';
import { LifeCycleHooks } from './life-cycle-hooks/life-cycle-hooks';
import { SynchronousAsynchronous } from './synchronous-asynchronous/synchronous-asynchronous';

export const routes: Routes = [
    {
        path: 'binding', component: BindQuestions
    },
    {
        path: 'directive', component: DirectiveQuestions
    },
    {
        path: 'pipes', component: Pipes
    },
    {
        path: 'parent-child', component: Parent
    },
    {
        path: 'output-decorator', component: OutputDecorator
    },
    {
        path: 'life-cycle-hooks', component: LifeCycleHooks
    },
    {
        path: 'synchronous-asynchronous', component: SynchronousAsynchronous
    }
];
