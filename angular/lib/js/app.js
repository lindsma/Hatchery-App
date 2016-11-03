(function($) {
  "use strict";

    function buildTemplate(template, target, context) {
        var source = $('#' + template).html();
        var template = Handlebars.compile(source);
        var context = context || {};
        var html = template(context);

        $(html).prependTo(target).fadeIn();
    }

    function Game() {
        this.playersChosen = false;
        this.players = {
            "player1": {
                selected: false
            },
            "player2": {
                selected: false
            }
        };
        this.init();
    }

    Game.prototype = {
        turns: {
            p1: true,
            p2: false
        },
        stages: {
            select: {
                display: function(gameObj) {
                    var _select = Game.prototype.stages.select;
                    buildTemplate('selection-screen', '.container');
                    $('.container').on('click', '.character', function() {
                        var fighter = $(this).attr('data-id');
                        if (!gameObj.players.player1.selected) {
                            gameObj.players.player1 = new Fighter(fighter)
                            gameObj.players.player1.selected = true;
                            gameObj.players.player1.player = 'one';
                            buildTemplate('character', '.player-one.selection', {name: gameObj.players.player1.info.name});
                        } else if (!gameObj.players.player2.selected) {
                            gameObj.players.player2 = new Fighter(fighter)
                            gameObj.players.player2.selected = true;
                            gameObj.players.player2.player = 'two';
                            gameObj.playersChosen = true;
                            gameObj.storage.set(gameObj);
                            buildTemplate('character', '.player-two.selection', {name: gameObj.players.player2.info.name});

                            $('.fight, .characters-selection, h1').fadeToggle();
                            _select.bindFightBtn(gameObj);
                        }
                    });
                },
                bindFightBtn: function(gameObj) {
                    $('.container').on('click', '.fight', function() {
                        gameObj.stages.fight.display(gameObj);
                    });
                }
            },
            fight: {
                fightTime: null,
                display: function(gameObj) {
                    $('.container').empty();
                    var _fight = Game.prototype.stages.fight;
                    buildTemplate('fight-screen', '.container', gameObj);
                    _fight.setTimer();
                    _fight.bindAttackButtons(gameObj);
                },
                setTimer: function() {
                    var _fight = Game.prototype.stages.fight;
                    _fight.fightTime = setInterval(function() {
                        var theTime = $('.timer').find('p').text();
                        var newTime = Number(theTime) - 1;
                        if (newTime >= 0) {
                            if (newTime < 10) {
                                newTime = '0' + newTime;
                            }
                            $('.timer').find('p').text(newTime);
                        } else {
                            clearInterval(_fight.fightTime);
                            console.log('done');
                        }
                    }, 1000);
                },
                clearInterval: function() {
                  var _fight = Game.prototype.stages.fight;
                  clearInterval(_fight.fightTime);
                },
                bindAttackButtons: function(gameObj) {
                  var _fight = Game.prototype.stages.fight;
                  var _turns = Game.prototype.turns;
                    $('.container').on('click', '.primary, .secondary, .special', function() {
                        var attackType = $(this).attr('class');
                        var fighter;

                        if (_turns.p1) {
                            _turns.p1 = false;
                            _turns.p2 = true;
                            fighter = gameObj.players.player1;
                        } else {
                            _turns.p1 = true;
                            _turns.p2 = false;
                            fighter = gameObj.players.player2;
                        }
                        _fight.toggleAttackButtons();
                        Fighter.prototype.attack(fighter, attackType, gameObj);
                    });
                },
                toggleAttackButtons: function() {
                  $('.buttons-container').toggle();
                }
            }
        },
        storage: {
            set: function(gameObj) {
                localStorage.setItem("game", JSON.stringify(gameObj));
            },
            get: function() {
                return localStorage.game
                    ? JSON.parse(localStorage.game)
                    : false;
            },
            clear: function() {
                localStorage.removeItem("game");
            }
        },

        init: function() {
            var gameObj = Game.prototype.storage.get() || this;
            if (!gameObj.playersChosen) {
                this.stages.select.display(gameObj);
            } else {
                this.stages.fight.display(gameObj);
            }
        }
    }

    function Fighter(name) {
        this.info = {
            name: name,
            health: 100,
            attacks: {
                primary: {
                    min: 9,
                    max: 15
                },
                secondary: {
                    min: 5,
                    max: 20
                },
                special: {
                    min: 3,
                    max: 30
                }
            }
        }

        this.defineInfo();
    }

    Fighter.prototype = {
        defineInfo: function() {
            switch (this.info.name) {
                case 'scorpion':
                    // this.info.attacks.primary.max = 100;

                    break;
                case 'subzero':

                    break;
                case 'raiden':

                    break;
                case 'liukang':

                    break;
                case 'shaokahn':
                    this.info.health = 110;

                    break;
            }
        },
        attack: function(fighter, type, gameObj) {
            var attackRange = fighter.info.attacks[type];
            var damage = Math.floor(Math.random() * (attackRange.max - attackRange.min + 1) + attackRange.min);
            var attacker = fighter.player;

            if (attacker === 'one') {
              if (gameObj.players.player2.info.health - damage > 0) {
                gameObj.players.player2.info.health -= damage;
              } else {
                gameObj.players.player2.info.health = 0;
                alert(gameObj.players.player1.info.name +" Wins!");
                Game.prototype.storage.clear();
                clearInterval(Game.prototype.stages.fight.clearInterval());
              }
            } else {
              if (gameObj.players.player1.info.health - damage > 0) {
                gameObj.players.player1.info.health -= damage;
              } else {
                gameObj.players.player1.info.health = 0;
                alert(gameObj.players.player2.info.name +" Wins!");
                Game.prototype.storage.clear();
                clearInterval(Game.prototype.stages.fight.clearInterval());
              }
            }
        }
    };

    var match = new Game();
})(jQuery);
