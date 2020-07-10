/*************************************************************************
*                          GLOBAL VARIABLES MODULE                       *
**************************************************************************/

/****** GLOBAL VARIABLES & FUNCTIONS ********/

//GLOBAL
exports.game_under_maintenance = `Jeu en maintenance.<br>Veuillez réessayer ultérieurement.`;
exports.insufficient_balance = `Votre solde est insuffisant.`;
exports.max_bet_exceeded = `Mise maximum dépassée.`;
exports.invalid_bet = `Votre mise est invalide.`;
exports.corrupted = 'Données reçues corrompues.';
exports.level_too_low = `Hop hop hop !<br>Votre niveau est trop bas.`;
exports.level_max_bet = (level) => 'Au niveau <gold>'+level+'</gold>,<br>la mise max. est de <img class="silver_ticket_logo" src="images/assets/silver_ticket.svg"> '+(level+1)+'.';
exports.invalid_link = 'Lien invalide ou expiré.';

//SESSION MANAGEMENT
exports.account_deactivated = `Votre compte est désactivé.<br>Veuillez contacter le support.`;
exports.logged_out = `Vous êtes déconnecté(e).`;
exports.wrong_credential_format = "Nom d'utilisateur ou<br>mot de passe invalide.";
exports.wrong_credentials = "Nom d'utilisateur ou<br>mot de passe incorrect.";
exports.account_inactive = 'Veuillez vérifier votre adresse<br>e-mail avant votre première connexion.';
exports.wrong_username_format = "Nom d'utilisateur invalide.<br>(4-11 caractères, alphanumériques)";
exports.wrong_mail_format = 'Adresse email invalide.';
exports.user_already_exists = 'Ce nom d\'utilisateur est déjà réservé.';
exports.mail_already_exists = 'Cette adresse e-mail existe déjà dans notre base.';
exports.multiple_accounts_error = '<logo>LUCKY</logo>NANO ne permet pas la création de comptes multiples.';
exports.signup_mail_subject = 'Verifiez votre adresse e-mail';
exports.signup_mail_sent = 'E-mail envoyé à votre adresse pour confirmation.';
exports.account_activated = 'Merci !<br>Vous pouvez maintenant vous connecter.';
exports.account_update_info_mail_subject = 'Mise à jour des informations de votre compte';
exports.account_update_ok_mail_subject = 'Compte mis à jour avec succès';
exports.welcome_message = (name) => 'Bonjour, <gold>'+name+'</gold> !';
exports.account_update_ok_mail = (name) => `<p>Bonjour <b>`+name+`,</b></p>
<p>Les informations de votre compte ont été mises à jour avec succès.<br>Vous pouvez à present vous connecter avec vos nouveaux identifiants.</p>
<p>Merci de jouer avec nous ! ☺️</p>
<p>Bien cordialement,</p>
<p>L'équipe de LUCKYNANO</p>`;
exports.account_update_info_mail = (name,url_hash) => `<p>Bonjour <b>`+name+`,</b></p>
<p>Veuillez confirmer que vous désirez mettre à jour les informations de votre profil en cliquant sur le lien suivant:</p> 
<p><a href='https://luckynano.com/?r=account_update&u=`+name+`&v=`+url_hash+`'> https://luckynano.com/?r=account_update&u=`+name+`&v=`+url_hash+`</a></p>
<p>Si vous n'êtes pas à l'origine de cette requête, nous vons recommandons de <b>changer votre mot de passe</b> le plus rapidement possible.</p>
<p>Bien cordialement,</p>
<p>L'équipe de LUCKYNANO</p>`;
exports.signup_mail = (name,url_hash) => `<p>Bonjour <b>`+name+`,</b></p>
<p>Merci de rejoindre LUCKYNANO! ☺️<br>Veuillez cliquer sur le lien suivant afin d'activer votre compte:</p> 
<p><a href='https://luckynano.com/?r=account_activate&u=`+name+`&v=`+url_hash+`'> https://luckynano.com/?r=account_activate&u=`+name+`&v=`+url_hash+`</a></p>
<p>Si vous n'êtes pas à l'origine de cette requête, veuillez ignorer ce message.</p>
<p>Bien cordialement,</p>
<p>L'équipe de LUCKYNANO</p>`;

//LOTTERY
exports.lottery_ticket_obtained = `Vous obtenez un ticket de lotterie.`;
exports.lottery_caps = `LOTTERIE`;
exports.round_end = `fin du tour`;
exports.prize_pool = `Pot`;
exports.tickets_distributed = `Tickets distribués`;
exports.tickets_owned = `Tickets obtenus`;
exports.next_ticket_av_in = `Prochain ticket dispo. dans:`;
exports.chat_now = `Chattez régulièrement pour obtenir des tickets!
Chaque ticket est une chance de gagner un prix.`;

//BLACKJACK
exports.table = `La table`;
exports.does_not_exist = ` n'existe pas.`;
exports.not_sitting = "Vous n'êtes pas assis(e) à la table.";
exports.cannot_cancel_bet = "Vous ne pouvez plus annuler votre mise.";
exports.player_not_at_table = "Vous n'êtes pas assis(e) à la table.";
exports.already_bet_error = "Veuillez d'abord annuler votre mise.";
exports.bet_in_game_error = "Vous ne pouvez plus miser pendant le jeu.";
exports.forbidden_action_error = "Cette action n'est pas autorisée.";
exports.wait_next_round_error = "Veuillez attendre le porchain tour pour jouer.";
exports.double_2_cards_error = "Doubler n'est possible qu'avec deux cartes en main.";
exports.no_more_actions_error = "Vous ne pouvez plus jouer pour ce tour.";
exports.cannot_leave = "Vous ne pouvez pas quitter la table maintenant.";
exports.busy_seat = "Ce siège est déjà pris.";
exports.already_sat = "Vous êtes déjà assis(e) à une table.";
exports.alpha_nano_error = `La mise de <img class="nano_logo" src="images/assets/nano.png"/> est<br>désactivée en version Alpha.`;

//BONUS CLAIM
exports.max_silver_claim_error = "Vous devez posséder moins de <gold>100</gold> tickets pour en obtenir plus.";

//CHAT
exports.chat_color_error = "Non non non! Cette couleur n'existe pas.";
exports.incorrect_message_length = "La longueur du message est insuffisante.";
exports.incorrect_tip_amount = "Montant à envoyer incorrect.<br>Tapez <gold>/help</gold> pour obtenir de l'aide.";
exports.user_does_not_exist = "L'utilisateur n'existe pas.";
exports.cannot_tip_yourself = "Vous ne pouvez pas vous envoyer de l'argent.";
exports.lottery_help = `LISTE DES COMMANDES
/lottery - Infos sur la Lotterie
/me - Emote personalisée.
/tip &lt;amount&gt; &lt;user&gt; - Envoyer de l'argent
/help or /? - Afficher la liste des commandes.
`;
exports.wait_between_messages = `Veuillez patienter avant d'envoyer un nouveau message.`;
exports.login_to_chat = 'Veuillez vous connecter pour envoyer un message.';

//DICE
exports.profit_is_zero = `Le profit estimé ne peut être égal à <gold>0</gold>.`;
exports.invalid_payout_field = (max_payout) => 'Multiplicateur invalide.<br>Il doit se situer entre <gold>1x</gold> and <gold>'+max_payout+'x</gold>.'

//GOLDEN
exports.golden_lines_error = 'Nombre de lignes incorrect.';
exports.golden_min_bet_error = 'La mise min. par ligne est de <img class="nano_logo" src="images/assets/nano.png"/> 0.001.';

//WITHDRAWALS
exports.withdraw_amount_error = 'Le montant à envoyer invalide.';
exports.withdraw_address_error = "L'adresse renseignée est<br>au mauvais format.";
exports.withdraw_already_pending = 'Une transaction est déjà en attente.';
exports.withdraw_confirm = "Votre transaction sera traitée dans les plus brefs délais.";
exports.withdrawal_wait = (time) => `Veuillez patienter <gold>'+time+'h</gold> ou miser en <img class="nano_logo" src="images/assets/nano.png"/> pour débloquer l'envoi de fonds. <a href="old/faq.php#anti_spam_withdrawal" target="_blank"><i class="mdi mdi-help-circle"></i></a>`;
exports.withdrawal_2FA_mail_subject = (amount) => 'Transaction de '+amount/1000000+' NANO en attente de confirmation';
exports.withdrawal_2FA_mail = (name,amount,address,internal_id,url_hash) => `<p>Bonjour <b>`+name+`,</b></p>
<p>Veuillez confirmer l'envoi de <b>`+amount/1000000+` NANO</b> à l'adresse <b>`+address+`</b> en cliquant sur le lient suivant :</p> 
<p><a href='https://luckynano.com/?r=send_money&i=`+internal_id+`&v=`+url_hash+`'> https://luckynano.com/?r=send_money&i=`+internal_id+`&v=`+url_hash+`</a></p>
<p>Si vous n'êtes pas à l'origine de cette requête, nous vons recommandons de <b>changer votre mot de passe</b> le plus rapidement possible.</p>
<p>La transaction ne sera pas exécutée sans confirmation. Vous pouvez contacter le support pour l'annuler.</p>
<p>Bien cordialement,</p>
<p>L'équipe de LUCKYNANO</p>`;

//PSEUDO-RANDOM
// exports.getRandomInt = function(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }
// }