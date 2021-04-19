const { describe, it } = require('mocha');
const assert = require('assert');
const sampleProvinceData = require('../index');
const Province = require('../Province');

describe('province', function () {
    it('shortfall', function () {
        const asia = new Province(sampleProvinceData());
        assert.strictEqual(asia.shortfall, 5);
    });

    it('profit', function () {
        const asia = new Province(sampleProvinceData());
        assert.strictEqual(asia.profit, 230);
    });
});
