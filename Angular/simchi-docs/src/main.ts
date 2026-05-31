import { bootstrapApplication } from '@angular/platform-browser';
import { rootConfig } from './root/root.config';
import { Root } from './root/root';
bootstrapApplication(Root, rootConfig).catch((err) => console.error(err));
