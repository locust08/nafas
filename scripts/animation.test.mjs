import assert from 'node:assert/strict';
import test from 'node:test';
import { animateEntrance, entranceDistance, entranceTransform, entranceEasing } from '../src/lib/nafas/animation.ts';

function captureEntrance(delay) {
  const effects = [];
  const element = { getBoundingClientRect: () => ({width:600,height:400}), animate(frames, timing) { const effect = { frames, timing }; effects.push(effect); return effect; } };
  globalThis.window = {innerWidth:1440,matchMedia:()=>({matches:false})};
  const previous = globalThis.getComputedStyle;
  globalThis.getComputedStyle = () => ({ opacity: '0.16' });
  try { animateEntrance(element, 'layer', delay); } finally { globalThis.getComputedStyle = previous; }
  return effects;
}

test('entrances use the ICL pace without an excessive or negative wait', () => {
  for (const delay of [-100, 600, 100000]) {
    for (const effect of captureEntrance(delay)) {
      assert.ok(effect.timing.duration >= 700 && effect.timing.duration <= 1200);
      assert.equal(effect.timing.easing, entranceEasing);
      assert.ok(effect.timing.delay >= 0 && effect.timing.delay <= 480);
    }
  }
});

test('an entrance preserves translucent image layers and their existing transforms', () => {
  const [movement, fade] = captureEntrance(600);
  assert.ok(movement.frames.every(frame => frame.composite === 'add'));
  assert.equal(fade.frames.at(-1).opacity, 0.16);
  assert.equal(fade.timing.fill, 'backwards');
  assert.equal(movement.frames.at(-1).transform, 'translate3d(0,0,0)');
});

test('every entrance contains directional movement with bounded mobile travel', () => {
  for (const variant of ['left','right','up','diagonal-left','diagonal-right','scale-left','scale-right']) {
    assert.match(entranceTransform(variant,60), /translate3d\(/);
    assert.notEqual(entranceTransform(variant,60), 'translate3d(0,0,0)');
  }
  assert.equal(entranceDistance(10,10,false),40);
  assert.equal(entranceDistance(2000,1000,false),90);
  assert.equal(entranceDistance(2000,1000,true),64);
});

test('reduced motion does not start any entrance effects', () => {
  globalThis.window = {matchMedia:()=>({matches:true})};
  globalThis.getComputedStyle = () => ({opacity:'1'});
  assert.deepEqual(animateEntrance({animate(){throw new Error('motion started');}},'left'),[]);
});
