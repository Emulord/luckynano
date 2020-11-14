/*************************************************************************
*                          GLOBAL VARIABLES MODULE                       *
**************************************************************************/

/****** GLOBAL VARIABLES & FUNCTIONS ********/

//GLOBAL
exports.game_under_maintenance = `Juego en mantenimiento.<br>Por favor inténtalo más tarde.`;
exports.insufficient_balance = `Tu saldo es insuficiente.`;
exports.max_bet_exceeded = `Apuesta máxima excedida.`;
exports.invalid_bet = `Tu apuesta es inválida.`;
exports.corrupted = 'Datos corruptos recibidos.';
exports.level_too_low = `Cómo llegaste allí? ?<br>Tu nivel no es el adecuado.`;
exports.level_max_bet = (level) => 'Los usuarios de nivel <gold>'+level+'</gold> <br>no pueden apostar más de <img class="silver_ticket_logo" src="images/assets/silver_ticket.svg"> '+(level+1)+'.';
exports.invalid_link = 'Link inválido o expirado.';

//SESSION MANAGEMENT
exports.account_deactivated = `Tu cuenta está desactivada.<br>Por favor contacta al soporte para más información.`;
exports.logged_out = `Has cerrado sesión.`;
exports.wrong_credential_format = 'Cuenta o contraseña en formato inválido.';
exports.wrong_credentials = 'Cuenta o contraseña inválidas.';
exports.account_inactive = 'Por favor activa tu cuenta antes de inicia sesión.';
exports.wrong_username_format = 'Nombre de usuario en formato incorrecto.<br>(4-11 caracteres, alfanuméricos)';
exports.wrong_mail_format = 'Formato incorrecto de correo electrónico.';
exports.user_already_exists = 'Ya existe un usuario con ese nombre.';
exports.mail_already_exists = 'Ya existe un usuario con la misma<br>dirección de correo electrónico.';
exports.multiple_accounts_error = 'No se permiten múltiples cuentas en <logo>LUCKY</logo>NANO.';
exports.signup_mail_subject = 'Verifica tu dirección de correo electrónico';
exports.signup_mail_sent = 'E-mail sent to the specified address for confirmation.';
exports.account_activated = 'Gracias!<br>Ahora puedes iniciar sesión con tus datos.';
exports.account_update_info_mail_subject = 'Solicitud de actualización de los datos de la cuenta';
exports.account_update_ok_mail_subject = 'Se ha actualizado la información de la cuenta';
exports.welcome_message = (name) => 'Saludos, <gold>'+name+'</gold> !';
exports.account_update_ok_mail = (name) => `<p>Hello <b>`+name+`,</b></p>
<p>La información de tu cuenta ha sido actualizada correctamente.<br>Puedes ingresar empleando los nuevos datos.</p>
<p>Gracias por jugar con nosotros ! ☺️</p>
<p>Cordialmente,</p>
<p>El equipo de LUCKYNANO</p>`;
exports.account_update_info_mail = (name,url_hash) => `<p>Hello <b>`+name+`,</b></p>
<p>Please confirm that you are willing to update your account information by clicking the following link:</p> 
<p><a href='https://luckynano.com/?r=account_update&u=`+name+`&v=`+url_hash+`'> https://luckynano.com/?r=account_update&u=`+name+`&v=`+url_hash+`</a></p>
<p>If you did not initiate this request, we highly recommend that you change your password as soon as possible.</p>
<p>Cordialmente,</p>
<p>El equipo de LUCKYNANO</p>`;
exports.signup_mail = (name,url_hash) => `<p>Hello <b>`+name+`,</b></p>
<p>Gracias por unirte a LUCKYNANO! ☺️<br>Por favor usa el siguiente link para activar tu cuenta.</p> 
<p><a href='https://luckynano.com/?r=account_activate&u=`+name+`&v=`+url_hash+`'> https://luckynano.com/?r=account_activate&u=`+name+`&v=`+url_hash+`</a></p>
<p>Si tu no hiciste esa solicitud, por favor ignora este e-mail.</p>
<p>Cordialmente,</p>
<p>El equipo de LUCKYNANO</p>`;

//LOTTERY
exports.lottery_ticket_obtained = `Has recibido un ticket de la lotería.`;
exports.lottery_caps = `LOTERIA`;
exports.round_end = `fin de la ronda`;
exports.prize_pool = `Bolsa de premios`;
exports.tickets_distributed = `Tickets distribuidos`;
exports.tickets_owned = `Tickets poseidos`;
exports.next_ticket_av_in = `El próximo ticket estará disponible en:`;
exports.chat_now = `Chatea ahora mismo con otros jugadores para obtener un ticket!
Cada ticket es una oportunidad de obtener un premio.`;

//BLACKJACK
exports.table = `Mesa`;
exports.does_not_exist = ` no existe.`;
exports.not_sitting = 'No estás sentado en esa mesa.';
exports.cannot_cancel_bet = `No puedes cancelar tu apuesta en este momento.`;
exports.player_not_at_table = `No estás sentado en una mesa.`;
exports.already_bet_error = `Cancela tu apuesta antes de hacer una nueva.`;
exports.bet_in_game_error = `No puedes apostar en mitad de un juego.`;
exports.forbidden_action_error = `No puedes llevar a cabo esa acción en este momento.`;
exports.wait_next_round_error = `Por favor espera a la próxima ronda para jugar.`;
exports.double_2_cards_error = `Solamente puedes doblar si tienes dos cartas.`;
exports.no_more_actions_error = `No puedes jugar más por esta ronda.`;
exports.cannot_leave = `No puedes dejar la mesa en este momento.`;
exports.busy_seat = `Ese asiento está ocupado.`;
exports.already_sat = `Ya estás sentado en una mesa.`;
exports.alpha_nano_error = `<img class="nano_logo" src="images/assets/nano.png"/> las apuestas no están disponibles en la versión ALFA.`;

//BONUS CLAIM
exports.max_silver_claim_error = `Debes tener menos de  <gold>100</gold> Tickets Plateados para reclamar más.`;

//CHAT
exports.chat_color_error = `No, no no. Este color no forma parte de la selección.`;
exports.incorrect_message_length = `EL mensaje tiene una longitud incorrecta.`;
exports.incorrect_tip_amount = `Por favor especifica una cantidad correcta de propina.`;
exports.user_does_not_exist = `Este usuario no existe.`;
exports.cannot_tip_yourself = 'No puedes darte propina a ti mismo.';
exports.lottery_help = `COMMANDS HELP
/lottery - Lottery info
/me - Custom emote
/tip &lt;amount&gt; &lt;user&gt; - Tip user
/help or /? - Display help
`;
exports.wait_between_messages = `Por favor espera un poco antes de enviar otro mensaje.`;
exports.login_to_chat = 'Por favor inicia sesión para enviar mensajes.';

//DICE
exports.profit_is_zero = `Tu ganancia estimada no puede ser  <gold>0</gold>.`;
exports.invalid_payout_field = (max_payout) => 'La cantidad solicitada es inválida.<br>Debe ser una cantidad entre <gold>1x</gold> y <gold>'+max_payout+'x</gold>.'

//GOLDEN
exports.golden_lines_error = 'Número incorrecto de líneas.';
exports.golden_min_bet_error = 'La apuesta mínima por línea es <img class="nano_logo" src="images/assets/nano.png"/> 0.001.';

//WITHDRAWALS
exports.withdraw_amount_error = 'El monto a enviar es inválido.';
exports.withdraw_address_error = 'La dirección especificada<br> tiene un formato incorrecto.';
exports.withdraw_already_pending = 'Ya hay una transacción siendo procesada.';
exports.withdraw_confirm = 'Su transacción está siendo procesada.';
exports.withdrawal_wait = (time) => 'Por favor espera <gold>'+time+'h</gold> a apuesta <img class="nano_logo" src="images/assets/nano.png"/> para enviar más fondos. <a href="old/faq.php#anti_spam_withdrawal" target="_blank"><i class="mdi mdi-help-circle"></i></a>';
exports.withdrawal_2FA_mail_subject = (amount) => 'Pending '+amount/1000000+' NANO transaction';
exports.withdrawal_2FA_mail = (name,amount,address,internal_id,url_hash) => `<p>Hello <b>`+name+`,</b></p>
<p>por favor confirma que quieres enviar <b>`+amount/1000000+` NANO</b> a la dirección <b>`+address+`</b> haciendo click en el siguiente link:</p> 
<p><a href='https://luckynano.com/?r=send_money&i=`+internal_id+`&v=`+url_hash+`'> https://luckynano.com/?r=send_money&i=`+internal_id+`&v=`+url_hash+`</a></p>
<p>Si no fuiste tu quien hizo esta petición, te recomendamos que cambies tu contraseña de inmediato.</p>
<p>La transacción no se emitirá hasta que no la confirmes. Puedes contactar a nuestro equipo de soporte para que sea cancelada.</p>
<p>Cordialmente,</p>
<p>El equipo de LUCKYNANO</p>`;

//PSEUDO-RANDOM
// exports.getRandomInt = function(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }
// }
