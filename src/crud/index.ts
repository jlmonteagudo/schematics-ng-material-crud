import {
  Rule,
  SchematicContext,
  Tree,
  apply,
  chain,
  mergeWith,
  template,
  url,
} from '@angular-devkit/schematics';

import { strings } from '@angular-devkit/core';


export default function (options: any): Rule {

  const templateSource = apply(url('./files'), [
    template({
      ...strings,
      ...options,
    }),
  ]);

  return chain([
    (_tree: Tree, context: SchematicContext) => {
      context.logger.info('Parameters: name, path, endpoint');
      context.logger.info('Sample usage: schematics .:crud --name=customer --path=customer --endpoint=customers --dry-run=false');
      context.logger.info('CRUD Schematic: ' + JSON.stringify(options));
    },

    mergeWith(templateSource),

  ]);

}
