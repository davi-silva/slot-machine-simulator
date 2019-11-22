/**
 * jQuery Slot Machine by Stefan Petre.
 * http://www.eyecon.ro/slotmachine/
 *
 * Modified.
 */

(function ($) {
    const slotMachine = (function () {
      let credits = 15;
      let spinning = 3;
      let spin = [0, 0, 0];
      const slotsTypes = {
        cherry: [2, 5, 10],
        orange: [0, 15, 30],
        prune: [0, 40, 50],
        bell: [0, 50, 80],
        bar1: [0, 0, 100],
        bar2: [0, 0, 150],
        bar3: [0, 0, 250],
        seven: [0, 0, 500],
        anybar: [0, 0, 80],
      };
      const slots = [
        ['orange', 'bell', 'orange', 'bar2', 'prune', 'orange',
          'bar3', 'prune', 'orange', 'bar1', 'bell', 'cherry', 'orange',
          'prune', 'bell', 'bar1', 'cherry', 'seven', 'orange', 'prune',
          'orange', 'bell', 'orange'],
        ['cherry', 'prune', 'orange', 'bell', 'bar1', 'cherry', 'prune',
          'bar3', 'cherry', 'bell', 'orange', 'bar1', 'seven', 'cherry',
          'bar2', 'cherry', 'bell', 'prune', 'cherry', 'orange', 'cherry',
          'prune', 'orange'],
        ['cherry', 'orange', 'bell', 'prune', 'bar2', 'cherry', 'prune',
          'orange', 'bar3', 'cherry', 'bell', 'orange', 'cherry', 'orange',
          'cherry', 'prune', 'bar1', 'seven', 'bell', 'cherry', 'cherry',
          'orange', 'bell'],
      ];
      const startSlot = function () {
        spinning = false;
  
        $('#slot-trigger').removeClass('slot-triggerDisabled');
  
        this.blur();
  
        return false;
      };
      const endSlot = function () {
        $('#slot-block').show();
        $('#slot-credits').text('VERLOREN!!!');
        setInterval(blink($('#slot-credits')), 1000);
      };
      const addCredit = function (incrementCredits) {
        const currentCredits = credits;
        credits += incrementCredits;
  
        blink($('#slot-credits'));
  
        $('#slot-credits')
          .css('credit', 0)
          .animate({
            credit: incrementCredits,
          }, {
            duration: 400 + incrementCredits,
            easing: 'easeOut',
            step(now) {
              $(this).html(parseInt(currentCredits + now, 10));
            },
            complete() {
              $(this).html(credits);
              blink($('#slot-credits'));
            },
          });
      };
      let spin = function () {
        this.blur();
  
        if (spinning == false) {
          $('#slot-machine .arm').animate({ top: '45px', height: '2%' });
          $('#slot-machine .arm .knob').animate({ top: '-20px', height: '20px' });
          $('#slot-machine .arm-shadow').animate({ top: '40px' }, 380);
          $('#slot-machine .ring1 .shadow, #slot-machine .ring2 .shadow').animate({ top: '50%', opacity: 1 });
  
          spinning = 3;
          credits--;
  
          $('#slot-credits').html(credits);
  
          spin[0] = parseInt(Math.random() * 23);
          spin[1] = parseInt(Math.random() * 23);
          spin[2] = parseInt(Math.random() * 23);
  
          $('#slot-trigger').addClass('slot-triggerDisabled');
  
          $('img.slotSpinAnimation').show();
  
          $('#wheel1 img:first').css('top', `${-(spin[0] * 44 + 16)}px`);
          $('#wheel2 img:first').css('top', `${-(spin[1] * 44 + 16)}px`);
          $('#wheel3 img:first').css('top', `${-(spin[2] * 44 + 16)}px`);
  
          setTimeout(() => {
            $('#slot-machine .arm').animate({ top: '-25px', height: '50%', overflow: 'visible' });
            $('#slot-machine .arm .knob').animate({ top: '-15px', height: '16px' });
            $('#slot-machine .arm-shadow').animate({ top: '13px' });
            $('#slot-machine .ring1 .shadow, #slot-machine .ring2 .shadow').animate({ top: '0', opacity: 0 });
          }, 500);
  
          setTimeout(() => {
            stopSpin(1);
          }, 1500 + parseInt(1500 * Math.random()));
  
          setTimeout(() => {
            stopSpin(2);
          }, 1500 + parseInt(1500 * Math.random()));
  
          setTimeout(() => {
            stopSpin(3);
          }, 1500 + parseInt(1500 * Math.random()));
        }
  
        return false;
      };
      let stopSpin = function (slot) {
        $(`#wheel${slot}`)
          .find('img:last')
          .hide()
          .end()
          .find('img:first')
          .animate({
            top: -spin[slot - 1] * 44,
          }, {
            duration: 500,
            easing: 'elasticOut',
            complete() {
              spinning--;
  
              if (spinning <= 0) {
                endSpin();
              }
            },
          });
      };
      let endSpin = function () {
        let slotType = slots[0][spin[0]];
        let matches = 1;
        let barMatch = /bar/.test(slotType) ? 1 : 0;
        let winnedCredits = 0;
        let waitToSpin = 10;
  
        if (slotType == slots[1][spin[1]]) {
          matches++;
  
          if (slotType == slots[2][spin[2]]) {
            matches++;
          } else if (barMatch != 0 && /bar/.test(slots[2][spin[2]])) {
            barMatch++;
          }
        } else if (barMatch != 0 && /bar/.test(slots[1][spin[1]])) {
          barMatch++;
  
          if (/bar/.test(slots[2][spin[2]])) {
            barMatch++;
          }
        }
  
        if (matches != 3 && barMatch == 3) {
          slotType = 'anybar';
          matches = 3;
        }
  
        let winnedCredits = slotsTypes[slotType][matches - 1];
  
        if (winnedCredits > 0) {
          addCredit(winnedCredits);
          waitToSpin = 410 + winnedCredits;
        }
  
        setTimeout(() => {
          if (credits == 0) {
            endSlot();
          } else {
            $('#slot-trigger').removeClass('slot-triggerDisabled');
            spinning = false;
          }
        }, waitToSpin);
      };
      return {
  
        init() {
          startSlot();
  
          $('#slot-trigger')
            .bind('mousedown', function () {
              $(this).addClass('slot-triggerDown');
            })
            .bind('click', spin);
  
          $(document).bind('mouseup', () => {
            $('#slot-trigger').removeClass('slot-triggerDown');
          });
  
          $('#wheel1 img:first').css('top', `${-(parseInt(Math.random() * 23) * 44)}px`);
          $('#wheel2 img:first').css('top', `${-(parseInt(Math.random() * 23) * 44)}px`);
          $('#wheel3 img:first').css('top', `${-(parseInt(Math.random() * 23) * 44)}px`);
        },
  
      };
    }());
  
    $.extend($.easing, {
      bounceOut(x, t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
          return c * (7.5625 * t * t) + b;
        } if (t < (2 / 2.75)) {
          return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b;
        } if (t < (2.5 / 2.75)) {
          return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b;
        }
        return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b;
      },
      easeOut(x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
      },
      elasticOut(x, t, b, c, d) {
        let s = 1.70158; let p = 0; let a = c;
        if (t == 0) return b; if ((t /= d) == 1) return b + c; if (!p) p = d * 0.3;
        if (a < Math.abs(c)) { a = c; let s = p / 4; } else let s = p / (2 * Math.PI) * Math.asin(c / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
      },
    });
  
    $(document).ready(slotMachine.init);
  }(jQuery));
  
  function blink(element) {
    element.animate({ opacity: 0 }, 200, 'linear', function () {
      $(this).animate({ opacity: 1 }, 200);
    });
  }
  