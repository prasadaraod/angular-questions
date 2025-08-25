import { Component } from '@angular/core';

@Component({
  selector: 'app-synchronous-asynchronous',
  imports: [],
  templateUrl: './synchronous-asynchronous.html',
  styleUrl: './synchronous-asynchronous.css'
})
export class SynchronousAsynchronous {
  async delay(ms: number): Promise<void> {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

  async performAsyncTask(taskName:string) {
    const start = Date.now();
    console.log(`Asynchronous ${taskName}: Starting...${new Date(start).toLocaleTimeString()}`);
    switch(taskName) {
      case 'Task 1':
          await this.delay(8000);
      break;
      case 'Task 2':
          await this.delay(7000);
      break;
      case 'Task 3':
          await this.delay(6000);
      break;
      default:
          await this.delay(5000);
      break;
    }
  //   await delay(5000); // Simulate a 5-second asynchronous operation
    const end = Date.now();
    console.log(`Asynchronous ${taskName}: Completed! ${new Date(end).toLocaleTimeString()}`);
  }

  async runAsynchronousTasks() {
    console.log("Asynchronous Program started.");

    // Call multiple asynchronous tasks without blocking the main thread
    // These will run concurrently
    this.performAsyncTask("Task 1");
    this.performAsyncTask("Task 2");
    this.performAsyncTask("Task 3");

    console.log("Tasks initiated. Program continues without waiting for them to finish immediately.");

    // You can optionally await all tasks if you need to perform an action after all are done
    // For example:
    // await Promise.all([performTask("Task D"), performTask("Task E")]);
    // console.log("All awaited tasks are now completed.");
  }

  performSynchronousTask(taskName:string) {
    const start = Date.now();
    console.log(`synchronous ${taskName} started at: ${new Date(start).toLocaleTimeString()}`);
    // Simulate a 5-second delay using a busy-wait loop
    
    switch(taskName) {
      case 'Task 1':
          while (Date.now() - start < 8000) {
              // This loop blocks the main thread
          }
      break;
      case 'Task 2':
          while (Date.now() - start < 7000) {
              // This loop blocks the main thread
          }
      break;
      case 'Task 3':
          while (Date.now() - start < 6000) {
              // This loop blocks the main thread
          }
      break;
      default:
          while (Date.now() - start < 5000) {
              // This loop blocks the main thread
          }
      break;
    }
    const end = Date.now();
    console.log(`synchronous ${taskName} finished at: ${new Date(end).toLocaleTimeString()}`);
  }

  runSynchronousTaks() {
    this.performSynchronousTask("Task 1");
    this.performSynchronousTask("Task 2");
    this.performSynchronousTask("Task 3");
  }
}
