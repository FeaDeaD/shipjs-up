import checkoutToStagingBranch from '../checkoutToStagingBranch.js';
import { run } from '../../../util/index.js';

describe('checkoutToStagingBranch', () => {
  it('works', () => {
    checkoutToStagingBranch({
      stagingBranch: 'abc',
      dir: '.',
      dryRun: false,
    });
    expect(run).toHaveBeenCalledTimes(1);
    expect(run.mock.calls[0][0]).toMatchInlineSnapshot(`
      Object {
        "command": "git checkout -b abc",
        "dir": ".",
        "dryRun": false,
      }
    `);
  });
});
