import { wrapTslintRule } from '@fimbul/bifrost';
import { Rule } from '../noStaticThisRule';

const rule = wrapTslintRule(Rule);
export {rule as Rule};
