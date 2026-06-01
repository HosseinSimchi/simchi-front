import { bootstrapApplication } from '@angular/platform-browser';
import { rootConfig } from './root/root.config';
import { Root } from './root/root';

import 'prismjs';

import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-python';

bootstrapApplication(Root, rootConfig).catch((err) => console.error(err));
