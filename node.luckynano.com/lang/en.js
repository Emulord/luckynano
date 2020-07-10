/*************************************************************************
*                          GLOBAL VARIABLES MODULE                       *
**************************************************************************/

/****** GLOBAL VARIABLES & FUNCTIONS ********/

//GLOBAL
exports.game_under_maintenance = `Game under maintenance.<br>Please try again later.`;
exports.insufficient_balance = `Your balance is insufficient.`;
exports.max_bet_exceeded = `Maximum bet exceeded.`;
exports.invalid_bet = `Your bet is invalid.`;
exports.corrupted = 'Corrupted data received.';
exports.level_too_low = `How did you get there ?<br>Your level is not adequate.`;
exports.level_max_bet = (level) => 'Level <gold>'+level+'</gold> users<br>cannot bet more than <img class="silver_ticket_logo" src="images/assets/silver_ticket.svg"> '+(level+1)+'.';
exports.invalid_link = 'Invalid or expired link.';

//SESSION MANAGEMENT
exports.account_deactivated = `Your account is deactivated.<br>Please contact our support for more information.`;
exports.logged_out = `You are now logged out.`;
exports.wrong_credential_format = 'Account or password in invalid format.';
exports.wrong_credentials = 'Wrong account or password.';
exports.account_inactive = 'Please activate your account before logging in.';
exports.wrong_username_format = 'Wrong username format.<br>(4-11 characters, alphanumeric)';
exports.wrong_mail_format = 'Wrong email address format.';
exports.user_already_exists = 'A user with the same name already exists.';
exports.mail_already_exists = 'A user with the same<br>e-mail address already exists.';
exports.multiple_accounts_error = 'Multiple accounts are not allowed on <logo>LUCKY</logo>NANO.';
exports.signup_mail_subject = 'Verify your e-mail address';
exports.signup_mail_sent = 'E-mail sent to the specified address for confirmation.';
exports.account_activated = 'Thank you!<br>You may now log in with your credentials.';
exports.account_update_info_mail_subject = 'Account information update request';
exports.account_update_ok_mail_subject = 'Account information updated';
exports.welcome_message = (name) => 'Hello, <gold>'+name+'</gold> !';
exports.account_update_ok_mail = (name) => `<p>Hello <b>`+name+`,</b></p>
<p>Your account information was successfully updated.<br>You may now log in using your new credentials.</p>
<p>Thank you for playing with us ! ☺️</p>
<p>Kind regards,</p>
<p>LUCKYNANO Support</p>`;
exports.account_update_info_mail = (name,url_hash) => `<p>Hello <b>`+name+`,</b></p>
<p>Please confirm that you are willing to update your account information by clicking the following link:</p> 
<p><a href='https://luckynano.com/?r=account_update&u=`+name+`&v=`+url_hash+`'> https://luckynano.com/?r=account_update&u=`+name+`&v=`+url_hash+`</a></p>
<p>If you did not initiate this request, we highly recommend that you change your password as soon as possible.</p>
<p>Kind regards,</p>
<p>LUCKYNANO Support</p>`;
exports.signup_mail = (name,url_hash) => `<p>Hello <b>`+name+`,</b></p>
<p>Thank you for joining LUCKYNANO! ☺️<br>Please follow the link below to activate your account.</p> 
<p><a href='https://luckynano.com/?r=account_activate&u=`+name+`&v=`+url_hash+`'> https://luckynano.com/?r=account_activate&u=`+name+`&v=`+url_hash+`</a></p>
<p>If you did not initiate this request, please ignore this e-mail.</p>
<p>Kind regards,</p>
<p>LUCKYNANO Support</p>`;

//LOTTERY
exports.lottery_ticket_obtained = `You obtained a lottery ticket.`;
exports.lottery_caps = `LOTTERY`;
exports.round_end = `round end`;
exports.prize_pool = `Prize pool`;
exports.tickets_distributed = `Tickets distributed`;
exports.tickets_owned = `Tickets owned`;
exports.next_ticket_av_in = `Next ticket available in:`;
exports.chat_now = `Chat now with other players to get a ticket!
Every ticket is a chance to win a prize.`;

//BLACKJACK
exports.table = `Table`;
exports.does_not_exist = ` does not exist.`;
exports.not_sitting = 'You are not sitting at the table.';
exports.cannot_cancel_bet = `You cannot cancel your bet now.`;
exports.player_not_at_table = `You are not sitting at the table.`;
exports.already_bet_error = `Cancel your bet before making a new one.`;
exports.bet_in_game_error = `You cannot bet in the middle of a game.`;
exports.forbidden_action_error = `You cannot perform this action now.`;
exports.wait_next_round_error = `Please wait for the next round to play.`;
exports.double_2_cards_error = `You can only double down with two cards.`;
exports.no_more_actions_error = `You cannot play anymore for this round.`;
exports.cannot_leave = `You cannot leave the table now.`;
exports.busy_seat = `This seat is already busy.`;
exports.already_sat = `You are already sitting at a table.`;
exports.alpha_nano_error = `<img class="nano_logo" src="images/assets/nano.png"/> bets not available in Alpha.`;

//BONUS CLAIM
exports.max_silver_claim_error = `You must own less than <gold>100</gold> Silver tickets to claim more.`;

//CHAT
exports.chat_color_error = `Nope, nope, nope. This color is not part of the selection.`;
exports.incorrect_message_length = `Incorrect message length.`;
exports.incorrect_tip_amount = `Please specify a correct tip amount.`;
exports.user_does_not_exist = `This user does not exist.`;
exports.cannot_tip_yourself = 'You cannot tip yourself.';
exports.lottery_help = `COMMANDS HELP
/lottery - Lottery info
/me - Custom emote
/tip &lt;amount&gt; &lt;user&gt; - Tip user
/help or /? - Display help
`;
exports.wait_between_messages = `Please wait a bit before sending another message.`;
exports.login_to_chat = 'Please log in to send messages.';

//DICE
exports.profit_is_zero = `Your estimated profit cannot be <gold>0</gold>.`;
exports.invalid_payout_field = (max_payout) => 'Requested payout is invalid.<br>It must be between <gold>1x</gold> and <gold>'+max_payout+'x</gold>.'

//GOLDEN
exports.golden_lines_error = 'Incorrect number of lines.';
exports.golden_min_bet_error = 'The minimum bet per line is <img class="nano_logo" src="images/assets/nano.png"/> 0.001.';

//WITHDRAWALS
exports.withdraw_amount_error = 'The amount to send is invalid.';
exports.withdraw_address_error = 'The specified address is<br> in a wrong format.';
exports.withdraw_already_pending = 'A transaction is already being processed.';
exports.withdraw_confirm = 'Your transaction is now being processed.';
exports.withdrawal_wait = (time) => 'Please wait <gold>'+time+'h</gold> or bet <img class="nano_logo" src="images/assets/nano.png"/> to send more funds. <a href="old/faq.php#anti_spam_withdrawal" target="_blank"><i class="mdi mdi-help-circle"></i></a>';
exports.withdrawal_2FA_mail_subject = (amount) => 'Pending '+amount/1000000+' NANO transaction';
exports.withdrawal_2FA_mail = (name,amount,address,internal_id,url_hash) => `<p>Hello <b>`+name+`,</b></p>
<p>Please confirm that you are willing to send <b>`+amount/1000000+` NANO</b> to the address <b>`+address+`</b> by clicking the following link:</p> 
<p><a href='https://luckynano.com/?r=send_money&i=`+internal_id+`&v=`+url_hash+`'> https://luckynano.com/?r=send_money&i=`+internal_id+`&v=`+url_hash+`</a></p>
<p>If you did not initiate this request, we highly recommend that you change your password as soon as possible.</p>
<p>The transaction will not be issued before you confirm it. You may contact our support for it to be cancelled.</p>
<p>Kind regards,</p>
<p>LUCKYNANO Support</p>`;

//PSEUDO-RANDOM
// exports.getRandomInt = function(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }
// }