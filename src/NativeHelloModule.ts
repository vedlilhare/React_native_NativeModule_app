import type {TurboModule} from 'react-native';
import {TurboModuleRegistry} from 'react-native';

export interface Spec extends TurboModule {
  getMessage(): string;
  getBatteryLevel(): number;
}

export default TurboModuleRegistry.getEnforcing<Spec>('HelloModule');
