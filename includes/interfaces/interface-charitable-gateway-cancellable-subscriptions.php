<?php
/**
 * Charitable interface for gateways that support cancelling subscriptions (recurring donations) automatically.
 *
 * @package   Charitable/Interfaces/Charitable_Gateway_Cancellable_Subscriptions_Interface
 * @author    Eric Daams
 * @copyright Copyright (c) 2018, Studio 164a
 * @license   http://opensource.org/licenses/gpl-2.0.php GNU Public License
 * @since     1.5.9
 * @version   1.5.9
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

if ( ! interface_exists( 'Charitable_Gateway_Cancellable_Subscriptions_Interface' ) ) :

	/**
	 * Charitable_Gateway_Cancellable_Subscriptions_Interface interface.
	 *
	 * @since 1.5.9
	 */
	interface Charitable_Gateway_Cancellable_Subscriptions_Interface {
		/**
		 * Cancel a subscription in the payment gateway.
		 *
		 * @since  1.5.9
		 *
		 * @param  int $subscription_id The ID of the subscription/recurring donation.
		 * @return boolean True if the subscription was successfully cancelled. False otherwise.
		 */
		public function cancel_subscription( $subscription_id );
	}

endif;
