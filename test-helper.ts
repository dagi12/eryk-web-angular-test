/* tslint:disable:class-name */
/**
 * Created by Eryk Mariankowski on 18.01.2017.
 */
import {Component} from '@angular/core';

export function mockComponent(options: Component): any {
  const metadata: Component = {
    selector: options.selector,
    template: options.template || '',
    inputs: options.inputs,
    outputs: options.outputs
  };
  return Component(metadata)(class _ {
  });
}
